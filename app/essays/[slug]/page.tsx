import Link from "next/link"

const essayPosts: Record<string, any> = {
  "Maturity": {
    title: "Maturity",
    date: "Oct 17, 2025",
    readTime: "5 min read",
    content: `
      Given that I turned 18 yesterday, I think an entry about my thoughts on maturity would be an interesting topic to look back on.

      When you search up the definition of maturity, it’s described as “recognizing that you don't have all the answers and that there's always room for improvement”. This makes no sense. Wikipedia defines it as “the level of psychological functioning one can attain.” I like this definition. On a societal level, I think many people would define being mature as being responsible and respectful. However, I would define maturity as “the level or quality of understanding and wisdom regarding the world and yourself”.

      Many teens notice their voices deepen, their bodies grow, and their interests shift—and they often see these changes as signs of maturity. Some begin to act differently thinking they deserve to get treated differently, confident in these changes. This is an example of someone who has matured by biologically be definition, but not so much in the mind. True maturity comes within. It’s a conviction to live your life backed by the wisdom and understanding you have gathered. Talking back or acting differently to your parents just because you’re bigger than them now doesn’t show much. Inversely, showing even greater appreciation to them is maturity. So is not allowing your parents (or anyone) to tell you what’s best for you, because you understand that nobody can help you achieve what you want.

      Getting older itself doesn’t improve your maturity. There are countless full-grown adults who are too afraid to make decisions that would go against their parents. It doesn’t even have to be parental, think setting boundaries with people, choosing yourself first, sacrificing for others, keeping promises to yourself, taking care of your body, etc. These come not with age, but action. You have to be intentional and have the conviction to stick to it. Have the conviction to fire people who take advantage of your kindness, cut off anybody even family/friends who ruin your peace of mind, and have those excruciatingly awkward conversations you need to have.

      Part of maturity is having the conviction to fight for what you understand you deserve .

      Looking back, I’m still, in many ways, the person I was at 13: chasing the same goal with a similar mindset, just with more knowledge and understanding. I hate looking at my past and comparing how much better I’ve become; because I never really changed as I grew older, I just became more of who I already was.
    `,
  },
  "Eliminating-Luck": {
    title: "Eliminating Luck",
    date: "Oct 14, 2025",
    readTime: "5 min read",
    content: `
    There's a lingering thought I used to have: Is success inevitable or based on luck? People who got lucky will say it's luck—and it certainly is past a threshold—however, there comes a point where you see things differently. Days become progress bars, and you start getting a top-down view of everything coming together. That lingering feeling disappears the moment you internalize input → output. If you don't make things happen, they won't happen unless you're lucky (which depends on you to a certain degree as well).

    In order to deliberately get "lucky", where, why, what, and how you do things is especially crucial. I've identified 3 attributes that cover these.

    ##1. Inherent Advantage
    The first and least attainable of the 3 is being talented or born with opportunity. For example, being born into a rich family, being born with exceptional genes to place high in the Olympics, or having autism-level math skills, etc.

    ##2. Maximizing Output
    The second is to maximize your output. Essentially, work hard and smart simultaneously. Imagine a salesman with mediocre sales skills focusing on expediting his lead generation to talk to more clients, or a dev working on frameworks and modules so that his next projects don't waste time creating repetitive systems. Overall, work hard with high efficiency consistently.

    Social media plays an important role in this as well. It essentially multiplies your opportunities and gets you in rooms you would have never imagined. Building a personal brand not only helps people who use the information you provide, it makes you exist.

    ##3. Identifying Gaps
    The final attribute is identifying a gap in the market. This is finding Bitcoin in 2007, but it's also building a tool or product people love, or even identifying whatever rich people (because they have 🤑🫰) need like custom AI smart home configuration or luxury car detailing. The ideas are infinite.

    Any of these require a skill. Physical labor like sales, home service, or corporate work is good, but they are usually restrictive. Online income is often more complex to start but comes with location freedom.

    [^]TL;DR: Maximize your output focused on a gap in a market and build a personal brand.[^]
      
    `,
  },
  "Crazy-Decisions": {
    title: "Crazy Decisions",
    date: "Sep 8, 2025",
    readTime: "5 min read",
    content: `
      "How do you know you're on your path? Because it disappears ... You can't see where you're going. That's how you know."[^]1[^]

      As logical creatures, we all want a path that somewhat garuntees our work will bear fruit. The moment you decide to deviate off that path, people's estimate of your potential drops like a brick. I know for sure when I say "Yeah so I've been coding roblox games for the past year" I see a flicker of pity. People see the platform as some juvenile lego online roleplay thing rather than It's current state as the biggest metaverse platfrom ever.

      But people can't see the value in things beyond the surface.

      It's hard convincing yourself that everyone can't see the potential besides yourself. It's crazy for sure since there's no guarantees that anything You build will be fruitful. But who has done anything extraordinary without a bit of risk anyway?

      You can't see the results of what you create, that's the biggest difference between entrepreneurship and the normal path. It's like Schrödinger's cat: a cat in a box exists dead and alive until observed. Similarly, the result of your work exists in a superposition between "retire your bloodline" and "get kicked out by your parents" and is only realized until the project is shipped. That's why its so "crazy" and "dangerous".

      Either way, nobody I look up to has played it safe. I mean the CEO of FedEx saved his company on a hand of blackjack, and I'm supposed to get rich through index funds at 49.[^]2[^]

      No thanks. 🙅‍♂️🙅‍♂️🙅‍♂️

      Sometimes it isn't for everyone to understand. If the path you're taking makes you feel insane and invisible, take comfort knowing it's your own.
      [^]1. Quote by David Whyte[^]
      [^]2. Gambling is bad, just an example for the point. Given the potential consequences, It was necessary scenario.[^]
    `,
  },
}

export default function EssayPost({ params }: { params: { slug: string } }) {
  const post = essayPosts[params.slug]

  if (!post) {
    return (
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Post Not Found</h1>
            <p className="text-muted-foreground">The essay you're looking for doesn't exist.</p>
            <Link href="/essays" className="text-primary hover:underline">
              Back to Essays
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link href="/essays" className="text-primary hover:underline mb-8 inline-block">
          ← Back to Essays
        </Link>

        <article className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-foreground">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="prose prose-invert max-w-none space-y-6 text-foreground">
            {post.content.split("\n\n").map((paragraph: string, index: number) => {
              if (paragraph.trim().startsWith("##")) {
                return (
                  <h2 key={index} className="text-2xl font-semibold text-foreground pt-4">
                    {paragraph.replace("##", "").trim()}
                  </h2>
                )
              }
              if (paragraph.trim().startsWith("```")) {
                return (
                  <pre key={index} className="bg-card p-4 rounded-lg overflow-x-auto border border-border">
                    <code className="text-sm text-foreground font-mono">{paragraph.replace(/```/g, "").trim()}</code>
                  </pre>
                )
              }
              if (paragraph.trim().startsWith("-")) {
                return (
                  <ul key={index} className="list-disc list-inside space-y-2 text-foreground">
                    {paragraph.split("\n").map((item: string, i: number) => (
                      <li key={i} className="text-foreground">
                        {item.replace("-", "").trim()}
                      </li>
                    ))}
                  </ul>
                )
              }
              if (paragraph.trim().startsWith("1.")) {
                return (
                  <ol key={index} className="list-decimal list-inside space-y-2 text-foreground">
                    {paragraph.split("\n").map((item: string, i: number) => (
                      <li key={i} className="text-foreground">
                        {item.replace(/^\d+\.\s/, "").trim()}
                      </li>
                    ))}
                  </ol>
                )
              }
              if (paragraph.trim().includes("[^]")) {
                const inner = paragraph.trim().replace(/\[\^\](.*?)\[\^\]/g, (_m, p1) => {
                  return `<span class="text-xs text-muted-foreground">${p1.trim()}</span>`;
                });

                return (
                  <p
                    key={index}
                    className="text-foreground leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: inner }}
                  />
                );
              }
              return (
                <p key={index} className="text-foreground leading-relaxed">
                  {paragraph.trim()}
                </p>
              )
            })}
          </div>
        </article>
      </div>
    </main>
  )
}
