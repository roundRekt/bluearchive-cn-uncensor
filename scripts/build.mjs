import { promises as fs } from "node:fs";
import MarkdownIt from "markdown-it";
import GitHubAlerts from "markdown-it-github-alerts";

const markdownit = new MarkdownIt({ html: true, typographer: true }).use(GitHubAlerts);
const template = await fs.readFile("template/index.html", "utf-8");
const readme = await fs.readFile("README.md", "utf-8");
const html = template.replace("<!-- README.md -->", markdownit.render(readme));

await fs.rm("dist", { recursive: true, force: true });
await fs.cp("public", "dist", { recursive: true });
await fs.writeFile("dist/index.html", html);
