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
    slug: "meta-connect-2026-muse",
    tag: "AI news",
    title: "Meta Connect 2026: Muse leaves the chat box",
    date: "24/09/2026",
    excerpt:
      "Meta has talked about personal superintelligence for a year. At Connect 2026 the pitch got hardware.",
    content: `
      <p>Meta has talked about personal superintelligence for a year. At Connect 2026 the pitch got hardware.</p>
      <p>The system they are assembling is simple:</p>
      <pre><code class="language-text">model → memory → context → agent → action</code></pre>
      <p>Muse Spark is the model. Muse is the agent. Glasses, Charm, Mac, and VR Glasses feed it context. Connectors are how it buys, books, and ships work.</p>
      <p>This is not ASI. It is the jump from AI that answers to AI that acts with the room in frame.</p>
      <h2>What Zuck put on stage</h2>
      <p><strong>Muse got a body and a job.</strong> Realtime voice while it works in the background. A live avatar (default: Jolly). Its own email address. Computer use on Mac — with permission it drives apps after you walk away. In the coming months it lands on AI glasses: say its name, point your face at a shelf or a flyer, it acts. Muse is free for now. Later Meta wants a small cut of transactions.</p>
      <p><strong>Muse Charm</strong> is the "one more thing": a keychain holdable with a small screen, mics, fingerprint wake, and the full voice + avatar stack. Details later this year. Target talk is holidays.</p>
      <p><strong>Connectors</strong> are the real platform. Walmart, Best Buy, Gap, Sephora, Ulta, Wayfair, Shop Pay, PayPal, the Shopify catalog, Expedia and Instacart soon, plus Notion, GitHub, Box, Spotify. Meta opened submissions. Thousands of apps in the first days.</p>
      <p><strong>Ray-Ban Meta Audio</strong> — first camera-free pair. $349, ships Oct 13, 43g, ~12 hours. Calls, translation, Muse, all-day wear without a lens pointed at strangers.</p>
      <p><strong>Ray-Ban Meta Gen 3</strong> — $449. Slimmer. Action button. Better mics. Aviator and Zena frames. Still has a camera and a recording LED.</p>
      <p><strong>Volume play.</strong> Adventurer from $249. Capri, Nova, Kylie Jenner Ivory, LISA collab. Mix & Match in the US. 100+ styles by year end. Display glasses expand to Canada, UK, then France, Italy, Germany.</p>
      <p><strong>Software that makes people keep them on.</strong> FDA-cleared hearing enhancement ($149 or Meta One). Guided workouts. Meal logging. Visual shopping. Dolby Atmos capture. Landmark navigation.</p>
      <p><strong>Meta VR Glasses</strong> — 100g, five times lighter than Quest 3. Compute lives in a puck on your belt. 5K micro-OLED. Eyes and hands. Quest library plus new hand-only games. $1,299.99, Spring 2027.</p>
      <h2>Where personal intelligence actually is</h2>
      <p><strong>Real now:</strong> an agent with memory, tools, shopping, work connectors, and Mac control. Fast consumer installs. A multimodal model built to act, not caption.</p>
      <p><strong>Still a promise:</strong> Muse on glasses, Charm shipping, VR Glasses, and the word superintelligence. Privacy is the open fight. Camera-free Audio glasses and a Secure VM (Meta says it cannot read the box) are the patch. Trust has not caught up.</p>
      <p>The interface shift is the story. Old AI: you describe the world. New AI: the glasses <em>are</em> the description.</p>
      <h2>Meta's bet from here</h2>
      <p>Three products, one company.</p>
      <p>The agent becomes the product — apps turn into skills, commerce turns into "Muse, buy the one that fits," Meta takes a fee. Glasses eat ambient phone time: audio for skeptics, cameras for power users, display for glanceable UI, VR for cinema and spatial work. The metaverse did not die. It got a socially acceptable front door.</p>
      <p>If it works, Meta is the personal OS: identity, memory, payments, vision, voice. If it fails, it is another expensive hardware cycle on an ads company. The next 12 months decide.</p>
      <h2>What builders should ship</h2>
      <p><strong>Connectors first.</strong> Highest leverage this week. If Muse cannot call you, you do not exist in the session. Book, buy, write back, pull records. Niche verticals Meta will never first-party.</p>
      <p><strong>Agent commerce.</strong> Structured catalogs, inventory, returns, size logic, checkout rails. A website is invisible. A verb is not.</p>
      <p><strong>Glasses apps.</strong> Wearables Device Access Toolkit on iOS/Android (camera, mic, display). Web Apps on Ray-Ban Display for HTML glanceable tools. Build for what the user is looking at: field work, training, picking, accessibility, landmark nav. Audio-only glasses are a real surface — voice utilities people will wear 12 hours.</p>
      <p><strong>Spark / Muse Code.</strong> Internal tools that plan, act, and leave a diff. That is the production path.</p>
      <p><strong>VR Glasses, Spring 2027.</strong> Hand-first games and multi-display workspaces. Prototype on Quest now.</p>
      <p><strong>Trust.</strong> Spend limits, audit logs, camera-off modes, enterprise connectors. Empty market. Loud demand.</p>
      <p>Don't wrap another chatbot. Ship actions, context, and rails. The model is table stakes. The open API is <em>do this while I'm looking at that</em>.</p>
    `,
  },
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
