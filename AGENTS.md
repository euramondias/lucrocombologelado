<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->
- Sales-page editable settings (checkout URL, price, contact, legal links, guarantee flag, testimonials) live in src/config/site.ts — single place to change them.
- Keep page SEO metadata and canonical links in leaf route head() declarations, with the static sitemap in public/; this avoids duplicate metadata and keeps public pages discoverable.
