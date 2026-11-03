# farfolio design direction

## Decision (2026-11-04)

Keep the existing design system and make it better. Three alternative directions were built as live
prototypes (a Cebu jeepney route board, a Teenage Engineering spec sheet, a Swiss poster) and shown to
Jiv; the answer was: "the portfolio already has a design pattern of its own, i just want it to be
better". The prototypes and their reference captures were discarded, not merged.

So the look is unchanged: near-black page (`#010103`), General Sans, the `black-*` / `white-*` greys in
`tailwind.config.js`, bordered `grid-container` cards, the 3D hero (monitor, Labubu, sword, laser,
React logo), the 3D project monitor, and the macOS-window contact form. Anything new reuses those
tokens and classes.

Correction (2026-11-04, later): the first pass added an on-page Experience section and replaced the
monitor's screen recordings with generated number cards. Jiv did not ask for either ("put the projects on
my resume into the existing My Selected Projects section"). Both were removed; the section is the
original again, with the resume projects added in front of the student projects.

## What changed, and why

| Area | Change | Why |
| --- | --- | --- |
| Content | One source, `src/data/profile.js`, built from the 2026-10-05 resume; the page and the CV modal both read it | The site was missing the last six months of work and showed old student projects |
| Projects | AutoApply, weewoo, Ayahay SDK and GAssure added in front of the five student projects, same 3D monitor, each with a real screen recording in `public/textures/project/` (see Media below); the link is hidden for private projects | They are on the resume |
| CV modal | Real dialog: Escape and backdrop close, focus in and back, scroll lock released on unmount; Experience entries are flat (no card, no pills) | Accessibility, and the "cleaner Experience" request |
| Navbar | Fixed `setIsNavbarOpen is not a function` thrown on every mobile menu tap; solid background; links close the drawer | Real runtime bug |
| About | `memo(Globe)` moved out of render (copying the email re-created the WebGL globe); cards no longer widen the page 100px on phones; reduced-motion honoured | Real bugs |
| Motion | `transition-all` replaced on pressables, 500ms hover shortened to 200ms, `hoverOnlyWhenSupported`, reduced-motion rules | Craft pass |

## Interaction contract for this page

- The project pager is the original one (arrows at the bottom of the card). It was not changed.

## Content rules

- Project copy in `myProjects` (`src/constants/index.js`) comes from the resume bullets in `src/data/profile.js`.
  The GCash hackathon is "top prize", as the resume says, never "1st".
- One line is Jiv's wording, not the resume's: the one-line summary (`person.summary`).
- `alsoShipped` is public work that is not on the resume; keep it to one line each.
- No phone number on the page beyond what the CV modal already showed.

## Media (monitor screen recordings)

Each is a 1920x1080, 30fps, H.264, silent loop under 1.4 MB, in `public/textures/project/`. All are real
screens, none show personal data:

| File | What it shows | How it was made |
| --- | --- | --- |
| `autoapply.mp4` | The public landing page (autonomousapply.com) scrolling down and back | `playwright-cli video-start` on the live site |
| `weewoo.mp4` | The Map, Chat, Circle and You tabs on two phones, offset in time | weewoo's `tool/preview/app_preview.dart` (a fabricated session, no real accounts or locations), built for web and recorded at 430x932 |
| `ayahay-sdk.mp4` | The public `knowledge-base-sdk` repo page and README | `playwright-cli` on github.com, sped up 1.3x |
| `gassure.mp4` | The buyer and seller escrow flow, request to "Transfer Completed" | The CAT5 prototype run locally with its simulated wallets, sped up 1.6x |

To redo one: record with `playwright-cli -s=<name> video-start <file>.webm --size 1920x1080` (open the
browser at the final viewport size first, or the recorder crops it), then
`ffmpeg -i x.webm -an -c:v libx264 -crf 27 -pix_fmt yuv420p -r 30 -movflags +faststart out.mp4`.

## Screenshots

`before/` is the site on 2026-11-04 before any change. `after/` holds states from the first pass (some of
them show the removed Experience section and number-card screens).
