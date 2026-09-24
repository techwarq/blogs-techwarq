export type Post = {
  slug: string;
  tag: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  seoTitle?: string;
  datePublished?: string;
  dateModified?: string;
  updatedLabel?: string;
  about?: string[];
  faq?: { question: string; answer: string }[];
};

export const POSTS: Post[] = [
  {
    slug: "meta-connect-2026-muse-ai-glasses-vr",
    tag: "AI news",
    title: "Meta Connect 2026: Everything Meta Launched — Muse, AI Glasses, VR Glasses",
    date: "24/09/2026",
    excerpt:
      "Recap of Meta Connect 2026 announcements including Muse, Ray-Ban Meta Audio, Muse Charm, and Meta VR Glasses.",
    seoTitle:
      "Meta Connect 2026: Everything Zuckerberg Launched — Muse, Glasses, VR",
    datePublished: "2026-09-24T15:00:00Z",
    dateModified: "2026-09-24T15:00:00Z",
    updatedLabel: "September 24, 2026",
    about: ["Meta Connect 2026", "Muse", "Ray-Ban Meta", "Meta VR Glasses"],
    faq: [
      {
        question: "What did Meta announce at Connect 2026?",
        answer:
          "Meta announced Muse upgrades, Ray-Ban Meta Audio camera-free glasses, Ray-Ban Meta Gen 3, Muse Charm, new connectors, and Meta VR Glasses for Spring 2027 at $1,299.99.",
      },
      {
        question: "What is Muse at Meta Connect 2026?",
        answer:
          "Muse is Meta's personal AI agent. At Connect it gained realtime voice, a live avatar, an email address, Mac computer use, glasses integration, and a keychain device called Muse Charm.",
      },
      {
        question: "How much are Meta VR Glasses?",
        answer:
          "Meta VR Glasses cost $1,299.99 and launch in Spring 2027. They weigh about 100 grams.",
      },
      {
        question: "When do Ray-Ban Meta Audio glasses ship?",
        answer:
          "Ray-Ban Meta Audio camera-free glasses start at $349 and ship October 13, 2026.",
      },
    ],
    content: `
      <p>Meta Connect 2026 (September 23–24, Menlo Park) was Mark Zuckerberg's product keynote for Muse, Ray-Ban Meta glasses, Muse Charm, and Meta VR Glasses. This recap lists every launch, what personal AI can do after Connect, where Meta goes next, and what developers can build on Muse connectors and the Wearables Device Access Toolkit.</p>
      <p>$349 Ray-Ban Meta Audio, October 13 · $449 Gen 3 · $249 Adventurer · $1,299.99 VR Glasses, Spring 2027.</p>
      <p>If you build, the question is no longer "can I wrap an LLM." It is: <strong>what verb does Muse still lack?</strong></p>
      <p class="updated">Updated September 24, 2026.</p>
      <h2>What actually happened to Muse</h2>
      <p>Muse launched weeks before Connect and already behaved like a personal agent: goals, apps, background work. Connect added the missing pieces that turn a chat product into infrastructure.</p>
      <p><strong>It can talk and work at the same time.</strong> Realtime voice is not a dictation feature. You keep talking. Muse keeps executing. That is the difference between an assistant and an employee.</p>
      <p><strong>It got a face.</strong> Muse Realtime Avatar turns the agent into a character you can video-call. Default is Jolly. Custom voices, custom look. Soft, but it is how consumers will bond with an agent they let shop and email.</p>
      <p><strong>It got an inbox.</strong> Muse has its own email address. Other people and services can message the agent, not you. That is how an agent becomes a coworker instead of a search box.</p>
      <p><strong>It got a computer.</strong> On Mac, with permission, Muse drives apps after you walk away. Files, mail, calendar, browser. The agent is no longer trapped in its own UI.</p>
      <p><strong>It got eyes.</strong> Muse is coming to Meta AI glasses. Wake it by name. It can act on what you are looking at — a product on a shelf, a flyer, a school-supply list — without you describing the scene. That is the whole interface shift.</p>
      <p><strong>It got a pocket.</strong> Muse Charm is a keychain holdable: small screen, mics, fingerprint wake, full voice + avatar. Not a phone. Not glasses. Always-on talk surface.</p>
      <p><strong>It got a business model.</strong> Free for now. Later Meta takes a small fee on transactions. Muse is being built as a <strong>commerce and work runtime</strong>, not a $20/month chatbot.</p>
      <p><strong>It got a platform.</strong> Connectors: Walmart, Best Buy, Gap, Sephora, Ulta, Wayfair, Shop Pay, PayPal, Shopify catalog, Expedia and Instacart soon, Notion, GitHub, Box, Spotify. Meta opened developer submissions. Thousands of apps in days.</p>
      <p>That is what happened. Muse stopped being a destination app and became a <strong>layer that other products plug into</strong>.</p>
      <h2>The stack Connect made real</h2>
      <pre><code class="language-text">MUSE SPARK (see, reason, act)
 ↓
MEMORY (you, goals, history)
 ↓
CONTEXT (glasses camera/audio, Charm, Mac screen)
 ↓
AGENT (Muse)
 ↓
ACTION (connectors, payments, computer use)</code></pre>
      <p>The opportunity is not "train a bigger model." The opportunity is every layer Meta will not finish itself: niche actions, trust, vertical memory, and glasses-native workflows.</p>
      <h2>What personal superintelligence opened (this is the market)</h2>
      <h3>1. Agent verbs — the biggest new market</h3>
      <p>Muse can only do what a connector lets it do. If your product is a website, you are invisible. If you are a verb — <code>reorder</code>, <code>file_claim</code>, <code>book_tech</code>, <code>pull_labs</code>, <code>close_ticket</code> — you exist inside someone else's day.</p>
      <div class="dg">
        <div class="dg-title">how a verb becomes a product</div>
        <div class="dg-flow">
          <div class="dg-node"><b>"fix this bill"</b><span>user says</span></div>
          <div class="dg-arrow">→</div>
          <div class="dg-node"><b>Muse</b><span>agent</span></div>
          <div class="dg-arrow">→</div>
          <div class="dg-node hot"><b>file_claim</b><span>your connector</span></div>
          <div class="dg-arrow">→</div>
          <div class="dg-node"><b>done + receipt</b><span>their system</span></div>
        </div>
      </div>
      <p><strong>Build:</strong> Muse connectors for things Meta will never first-party.</p>
      <ul>
        <li>Local services: plumbers, clinics, tutors, landlords</li>
        <li>SMB ops: invoices, inventory, scheduling, payroll</li>
        <li>Vertical data: legal dockets, insurance, property, labs, auto parts</li>
        <li>Post-purchase: warranty, returns, reorder, "fix this bill"</li>
      </ul>
      <p>Submit early. Meta is onboarding in waves. First useful connectors become the default skill for that category.</p>
      <h3>2. Agent commerce</h3>
      <p>Muse can search Shopify and check out with Shop Pay / PayPal. Retail connectors are landing. The session no longer starts on your homepage. It starts with "Muse, get me the one that fits."</p>
      <div class="dg">
        <div class="dg-title">the session that never opens a browser</div>
        <div class="dg-flow">
          <div class="dg-node"><b>"get the one that fits"</b><span>session starts</span></div>
          <div class="dg-arrow">→</div>
          <div class="dg-node"><b>catalog query</b><span>size · stock · subs</span></div>
          <div class="dg-arrow">→</div>
          <div class="dg-node hot"><b>Shop Pay checkout</b><span>agent checkout</span></div>
          <div class="dg-arrow">→</div>
          <div class="dg-node"><b>delivered</b><span>returns API ready</span></div>
        </div>
      </div>
      <p><strong>Build:</strong></p>
      <ul>
        <li>Catalogs agents can query (size, stock, substitutes, constraints)</li>
        <li>Return / exchange APIs</li>
        <li>"Buy the replacement" flows (broken vase demo is the template)</li>
        <li>Merchant-side guardrails: spend caps, approval on big carts</li>
      </ul>
      <p>Whoever owns <strong>agent checkout</strong> owns the cart that never opens a browser tab.</p>
      <h3>3. First-person software (glasses)</h3>
      <p>Old apps wait for a typed prompt. New apps run on <strong>what the user is looking at</strong>.</p>
      <p>Muse on glasses + Device Access Toolkit + Display Web Apps = a new UI class.</p>
      <div class="dg">
        <div class="dg-title">glasses-native loop</div>
        <div class="dg-flow">
          <div class="dg-node"><b>shelf item</b><span>user looks</span></div>
          <div class="dg-arrow">→</div>
          <div class="dg-node"><b>glasses see</b><span>camera · mic</span></div>
          <div class="dg-arrow">→</div>
          <div class="dg-node"><b>identify + price</b><span>no typing</span></div>
          <div class="dg-arrow">→</div>
          <div class="dg-node hot"><b>overlay: log · buy</b><span>glanceable UI</span></div>
        </div>
      </div>
      <p><strong>Build:</strong></p>
      <ul>
        <li>Look-and-act tools: identify, price, log, inspect, annotate</li>
        <li>Field work: warehouses, job sites, clinics, classrooms</li>
        <li>Training overlays: form check, recipe steps, repair guides</li>
        <li>Accessibility beyond Meta's hearing mode</li>
        <li>Voice-only utilities for camera-free Audio glasses ($349, all-day wear)</li>
      </ul>
      <p>If your app still needs the user to narrate the scene, you are one generation behind.</p>
      <h3>4. Background work while the human leaves</h3>
      <p>Mac computer use + email address + connectors means Muse can run a loop you are not watching.</p>
      <div class="dg">
        <div class="dg-title">the loop that runs while you're gone</div>
        <div class="dg-flow">
          <div class="dg-node"><b>messy thread</b><span>refund chase</span></div>
          <div class="dg-arrow">→</div>
          <div class="dg-node"><b>Muse works</b><span>Mac · email · apps</span></div>
          <div class="dg-arrow">→</div>
          <div class="dg-node hot"><b>you approve</b><span>money moves</span></div>
          <div class="dg-arrow">→</div>
          <div class="dg-node"><b>finished + log</b><span>audit trail</span></div>
        </div>
      </div>
      <p><strong>Build:</strong></p>
      <ul>
        <li>"Muse, handle this thread" products (refunds, scheduling, vendor chase)</li>
        <li>Audit trails: what it clicked, what it spent, what it sent</li>
        <li>Human-in-the-loop approvals for money, legal, health</li>
        <li>Small-business operators: inbox, books, restock, follow-ups</li>
      </ul>
      <p>The product is not chat. The product is <strong>a finished task when they look back</strong>.</p>
      <h3>5. Personal memory layers</h3>
      <p>Meta will store some memory. Users will not want <em>all</em> of it in one company.</p>
      <div class="dg">
        <div class="dg-title">memory Muse is allowed to use</div>
        <div class="dg-flow col">
          <div class="dg-node"><b>private vault</b><span>only you</span></div>
          <div class="dg-arrow">↓</div>
          <div class="dg-node"><b>family context</b><span>house · school lists</span></div>
          <div class="dg-arrow">↓</div>
          <div class="dg-node"><b>work memory</b><span>never leaves VPC</span></div>
          <div class="dg-arrow">↓</div>
          <div class="dg-node hot"><b>permission gate</b><span>Muse queries, never owns</span></div>
        </div>
      </div>
      <p><strong>Build:</strong></p>
      <ul>
        <li>Private memory vaults Muse can query with permission</li>
        <li>Team / family shared context ("our house, our kids' school list")</li>
        <li>Work memory that never leaves a VPC</li>
        <li>Preference graphs: fit, diet, budget, brands to avoid</li>
      </ul>
      <p>Personal superintelligence is only as good as the memory it is allowed to use. That layer is underserved.</p>
      <h3>6. Trust is an unbuilt product category</h3>
      <p>Glasses plus an agent that can spend money will scare people. Meta's answers (Audio glasses, Secure VM, some on-device processing) are not a full product.</p>
      <div class="dg">
        <div class="dg-title">trust dashboard — empty market, loud demand</div>
        <div class="dg-list">
          <div class="dg-check"><span>buy things under $50</span><i class="on">auto</i></div>
          <div class="dg-check"><span>drive my Mac</span><i>ask me</i></div>
          <div class="dg-check"><span>camera at work</span><i>off</i></div>
          <div class="dg-check"><span>explain every spend</span><i class="on">receipt</i></div>
        </div>
      </div>
      <p><strong>Build:</strong></p>
      <ul>
        <li>Permission dashboards: see / buy / send / drive-my-Mac</li>
        <li>Per-connector spend limits</li>
        <li>Workplace camera-off policies</li>
        <li>Enterprise connectors with logs</li>
        <li>"Explain why Muse did that" receipts</li>
      </ul>
      <p>Trust software will sell to the same users who download Muse and then get nervous.</p>
      <h3>7. Spark / Muse Code as internal infrastructure</h3>
      <p>Spark is the multimodal acting model. Muse Code is the repo agent. Sessions at Connect treat Spark as <strong>perceive → decide → act</strong>, not caption.</p>
      <div class="dg">
        <div class="dg-title">closed loop with an audit</div>
        <div class="dg-flow">
          <div class="dg-node"><b>perceive</b><span>video · ticket</span></div>
          <div class="dg-arrow">→</div>
          <div class="dg-node"><b>decide</b><span>plan</span></div>
          <div class="dg-arrow">→</div>
          <div class="dg-node"><b>act</b><span>patch</span></div>
          <div class="dg-arrow">→</div>
          <div class="dg-node hot"><b>verify</b><span>test · rollback</span></div>
          <div class="dg-arrow">→</div>
          <div class="dg-node"><b>diff + audit</b><span>shipped</span></div>
        </div>
      </div>
      <p><strong>Build:</strong></p>
      <ul>
        <li>Internal agents with harnesses: plan, patch, test, roll back</li>
        <li>Video-heavy workflows (support, QA, field clips from glasses)</li>
        <li>Voice-transcribe → ticket → fix loops</li>
      </ul>
      <p>Do not sell "a coding chatbot." Sell <strong>closed loops with an audit</strong>.</p>
      <h2>What not to build</h2>
      <ul>
        <li>Another general assistant</li>
        <li>A Muse skin with no unique verb</li>
        <li>A glasses app that is just a phone UI shrunk to 600px</li>
        <li>Shopping search with no checkout</li>
        <li>Memory features that silently ship user life to a third party</li>
      </ul>
      <p>The platform already has a general agent. It needs <strong>specialists it can call</strong>.</p>
      <h2>Builder order for the next 30 days</h2>
      <ol>
        <li>Pick one verb Muse cannot do well in your industry.</li>
        <li>Ship a connector. Make the action reliable, not clever.</li>
        <li>Add a glasses or voice path only if the verb needs eyes or hands-free.</li>
        <li>Wrap money-moving actions in an approval + log.</li>
        <li>Publish "works with Muse" as the product page, not "powered by AI."</li>
      </ol>
      <h2>The opening, in one line</h2>
      <p>Connect did not finish personal superintelligence. It <strong>opened the API around it</strong>.</p>
      <p>Muse is the agent. Spark is the brain. Glasses are the context. Charm is the always-on mic. Connectors are the market.</p>
      <p>The companies that win are the ones that become a sentence Muse can say out loud:</p>
      <p><em>"I already handled it."</em></p>
      <h2>Meta Connect 2026 FAQ</h2>
      <div class="faq">
        <details open>
          <summary>What did Meta announce at Connect 2026?</summary>
          <div class="faq-a">Meta announced Muse upgrades, Ray-Ban Meta Audio camera-free glasses, Ray-Ban Meta Gen 3, Muse Charm, new connectors, and Meta VR Glasses for Spring 2027 at $1,299.99.</div>
        </details>
        <details>
          <summary>What is Muse at Meta Connect 2026?</summary>
          <div class="faq-a">Muse is Meta's personal AI agent. At Connect it gained realtime voice, a live avatar, an email address, Mac computer use, glasses integration, and a keychain device called Muse Charm.</div>
        </details>
        <details>
          <summary>How much are Meta VR Glasses?</summary>
          <div class="faq-a">Meta VR Glasses cost $1,299.99 and launch in Spring 2027. They weigh about 100 grams.</div>
        </details>
        <details>
          <summary>When do Ray-Ban Meta Audio glasses ship?</summary>
          <div class="faq-a">Ray-Ban Meta Audio camera-free glasses start at $349 and ship October 13, 2026.</div>
        </details>
      </div>
      <p>Source: <a href="https://meta.com/blog/meta-connect-2026-everything-we-announced/" target="_blank" rel="noreferrer">Meta's official Connect 2026 recap</a>.</p>
      <p>More from techwarq: <a href="/blog/jev-smart-if-statement">Jev is a smart if-statement</a>.</p>
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
