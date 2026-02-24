export async function GET() {
  try {
    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
          query getUserProfile($username: String!) {
            matchedUser(username: $username) {
              submitStats {
                acSubmissionNum {
                  difficulty
                  count
                }
              }
            }
          }
        `,
        variables: { username: "amit_gupta_512" }
      })
    });

    const data = await response.json();

    const stats = data.data.matchedUser.submitStats.acSubmissionNum;

    const formatted = {
      totalSolved: stats.find(s => s.difficulty === "All")?.count || 0,
      mediumSolved: stats.find(s => s.difficulty === "Medium")?.count || 0,
      hardSolved: stats.find(s => s.difficulty === "Hard")?.count || 0
    };

    return Response.json(formatted);
  } catch (error) {
    return Response.json({ error: "Failed to fetch" }, { status: 500 });
  }
}