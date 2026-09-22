export type Post = {
  slug: string;
  tag: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
};

export const POSTS: Post[] = [
  {
    slug: "jev-smart-if-statement",
    tag: "Building with AI",
    title: "Jev is a smart if-statement",
    date: "22/09/2026",
    excerpt:
      "Jev does not chat. You give it facts and a few typed questions. It gives your program numbers it can branch on.",
    content: `
      <p>Jev is a smart if-statement.</p>
      <p>Jev does not chat. It does not write the reply, the plan, or the code. You give it facts and a few typed questions. It gives your program numbers it can branch on.</p>
      <p>That is the whole idea.</p>
      <pre><code class="language-text">state + questions → answers
facts    Choice / Score / Noul     keys and probabilities</code></pre>
      <p>TypeSafe calls this a System One model. One endpoint, three question types, no prose to parse.</p>
      <h2>The three questions</h2>
      <p>Use the type that matches the decision.</p>
      <p><strong>Choice</strong> — pick one option from a list you define.<br />Team is billing, technical, or other.</p>
      <p><strong>Score</strong> — place something on an ordered scale.<br />Frustration is Calm / Annoyed / Angry. A result of 1.4 means between Annoyed and Angry.</p>
      <p><strong>Noul</strong> — probability that a statement is true, from 0 to 1.<br />"Does this ask for a refund?" → 0.98.<br />0.5 means "cannot tell," not "medium."</p>
      <p>Wrong type is the usual first mistake. "How urgent?" is a Score. "Is it urgent?" is a Noul.</p>
      <h2>One call</h2>
      <pre><code class="language-bash">curl -s https://api.typesafe.ai/v1/systemone \\
  -H "Authorization: Bearer $TYPESAFE_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "jev-latest",
    "state": "Charged twice for order A-104. Please refund the extra payment today.",
    "questions": {
      "refund": {
        "type": "noul",
        "instructions": "Does the customer ask for money back?"
      }
    }
  }'</code></pre>
      <p>You get something like:</p>
      <pre><code class="language-json">{
  "answers": {
    "refund": { "type": "noul", "noul": 0.98 }
  }
}</code></pre>
      <p>Then your code owns the side effect:</p>
      <pre><code class="language-python">if answers["refund"] &gt; 0.9:
    start_refund(order)
else:
    queue_for_human(order)</code></pre>
      <h2>The first useful app</h2>
      <p>Ask every independent question in the same request. Extra questions are cheap.</p>
      <pre><code class="language-python">from typesafe_sdk import Choice, Noul, Score, TypeSafeClient

ticket = "Stripe payouts have failed for 3 days. We cannot pay contractors."

with TypeSafeClient() as client:
    res = client.system_one(
        state={"ticket": ticket},
        questions={
            "team": Choice(
                "Which team should handle ticket?",
                criteria={
                    "billing": "Payments, invoices, refunds, payouts",
                    "technical": "Bugs, outages, integrations",
                    "other": "Not enough information, or neither",
                },
            ),
            "urgent": Noul("Does this need a same-day reply?"),
            "frustration": Score(
                "How frustrated is the customer?",
                criteria=["Calm", "Annoyed", "Angry"],
            ),
        },
    )

a = res.answers
if a["team"].confidence &gt; 0.85:
    page_oncall(ticket)
else:
    assign(ticket, a["team"].choice)</code></pre>
      <p>Jev did not page anyone. It returned technical, a confidence, and a probability. Policy stays in code.</p>
      <h2>How to write the input</h2>
      <p>State is a record, not a prompt. Do not write "you are an expert router." Send the ticket, the plan, the policy excerpt.</p>
      <p>Choice options must not overlap. Always keep other.</p>
      <p>Noul asks one fact. "Does the message ask us to return a payment?" is good. "Is this important?" is not.</p>
      <p>Point at fields with backticks: <code>ticket</code>.</p>
      <h2>What to build</h2>
      <p>Start with a decision you already make.</p>
      <p><strong>Router</strong> — tickets, issues, leads. Choice for the queue, Noul for "needs a human," Score for severity.<br /><strong>Gate</strong> — run Jev before an expensive LLM. If there is not enough evidence, skip the generation.<br /><strong>Filter</strong> — you retrieved 20 chunks; ask one Noul per chunk and keep the useful ones.<br /><strong>Computer use, later</strong> — snapshot one window into e1, e2, e3. Jev picks click/scroll/done. Your code clicks that id. Do not send screenshots. Do not target "whatever is frontmost."</p>
      <p>Ship the first three in shadow mode. Keep the old router authoritative, log Jev's proposal beside it, flip the switch when the whole workflow is better.</p>
      <h2>What it will not do</h2>
      <p>Write text. Invent options you did not list. Count or do date math. See pixels. Remember the last call. Stay useful if the state is a wall of noise.</p>
      <p>If the option set is open-ended, extract candidates in code first, then let Jev pick.</p>
      <h2>Thirty minutes</h2>
      <p>Label 20 real tickets by hand. Write one Choice with an other bucket. Call Jev next to your current router. Add a Noul for missing evidence. Keep a human path when confidence is low.</p>
      <p>Jev is the judgment that does not need another long model response. Everything else stays in your stack.</p>
      <p>Docs: <a href="https://docs.typesafe.ai">docs.typesafe.ai</a> · longer read: <a href="https://flaviocopes.com/jev">flaviocopes.com/jev</a></p>
    `,
  },
];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
