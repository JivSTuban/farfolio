# farfolio design direction

## Decision (2026-11-04)

Keep the existing design system and make it better. Three alternative directions were built as live
prototypes (a Cebu jeepney route board, a Teenage Engineering spec sheet, a Swiss poster) and shown to
Jiv; the answer was: "the portfolio already has a design pattern of its own, i just want it to be
better". The prototypes and their reference captures were discarded, not merged.

So the look is unchanged: near-black page (`#010103`), General Sans, the `black-*` / `white-*` greys in
`tailwind.config.js`, bordered `grid-container` cards, the 3D hero (monitor, Labubu, sword, laser,
React logo), the 3D project monitor, and the macOS-window contact form. Anything new reuses those
tokens and classes (the Experience section uses the template's own `.work-*` classes).

## What changed, and why

| Area | Change | Why |
| --- | --- | --- |
| Content | One source, `src/data/profile.js`, built from the 2026-10-05 resume; the page and the CV modal both read it | The site was missing the last six months of work and showed old student projects |
| Experience | New on-page section (proof numbers left, jobs right, only the first bullet visible until "Show N more") | Experience used to exist only inside the CV modal |
| Projects | Resume projects plus the hackathon win in the same 3D monitor layout; the screen is a canvas drawn from each project's headline number (`projectScreen.js`); "Also shipped" list below | The old `.mp4` screens were of student projects; the new ones have no public footage |
| CV modal | Real dialog: Escape and backdrop close, focus in and back, scroll lock released on unmount; Experience entries are flat (no card, no pills) | Accessibility, and the "cleaner Experience" request |
| Navbar | Fixed `setIsNavbarOpen is not a function` thrown on every mobile menu tap; solid background; links close the drawer | Real runtime bug |
| About | `memo(Globe)` moved out of render (copying the email re-created the WebGL globe); cards no longer widen the page 100px on phones; reduced-motion honoured | Real bugs |
| Motion | `transition-all` replaced on pressables, 500ms hover shortened to 200ms, `hoverOnlyWhenSupported`, reduced-motion rules | Craft pass |

## Interaction contract for this page

- The control you press stays under the pointer. "Show N more" opens its bullets below itself, so a second
  press on the same spot closes them. The project pager sits in the card's fixed top row, so Next stays put
  while the card below changes height.
- Verified with `document.elementFromPoint` at the recorded coordinates (see the verify notes in the PR).

## Content rules

- Every number comes from the resume. Two lines are Jiv's wording, not the resume's: the one-line summary
  (`person.summary`) and the `1st` proof tile (the resume says "top prize").
- `alsoShipped` is public work that is not on the resume; keep it to one line each.
- No phone number on the page beyond what the CV modal already showed.

## Screenshots

`before/` is the site on 2026-11-04 before any change. `after/` holds the states that were read during
verification (project screens, expanded Experience, CV at 1000px, phone CV and drawer).
