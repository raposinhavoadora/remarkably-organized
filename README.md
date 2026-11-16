
[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/brianschwabauer)

# Remarkably Organized Planner

A web app for generating customizable planners designed for e-ink tablets like the Remarkable 2.

![Remarkably Organized Planner](./static/remarkably-organized-cover-photo.jpg)

Use the "settings" modal to change the planner's content & design. The preview of the pdf should be generated live.

The current settings are saved in the URL so a particular planner can be shared easily. Just copy the URL and share with others!

## Field Book

This planner has a bullet-journal system woven into it: the Field Book. Its pages sit where they are used, and every cross-reference is a link.

- **Front** (after the cover): rules, key, rituals, an index of every section, threads and a future log.
- **Each quarter** is a season: season compass, race trace and heartbeat (with the quarter's weeks filled in), project board, red line and migration.
- **Each month** has the calendar, then a day-by-day list and a month plan.
- **Each week** has the agenda, then a week plan and an inbox.
- **Each day** has its own page. Sunday's lower half is the Pit Wall, the weekly review.
- **Back** (after the last day): project cards with their decisions, evolution and back-plan pages, walks, ideas and the system lists (asks, promises, energy menu, train list, wins, lessons).

The pages use the planner's font and colors, and mark things by shape instead of color so they read well on e-ink.

In the settings (under "Advanced Settings") you can set the number of project slots and your project tags, or turn the Field Book sections off. The month, week and day pages are regular page templates. A month and a week can each hold three different ones: the page template, a second page template and the template of the note pages.

The page designs live in `src/lib/fieldbook`.

## Exporting to PDF

To get the PDF of the generated planner, use the built in print-to-pdf functionality of Chrome. Make sure "Background Graphics" is enabled.

If the selected settings makes a very large PDF, you might have to use a powerful computer to generate the PDF. It can require a decent amount of memory in Chrome for large PDFs.

![Remarkably Organized Print Instructions](./static/remarkably-organized-print-instructions.jpg)

## Development

The web app is built using the Svelte framework.
Knowledge of web technologies is required to run this app.
If you don't know what pnpm is, you probably won't understand the code.

Install pnpm, and run the following:
```bash
pnpm i
pnpm run dev
```

This will open up locahost:5173 where the actions can be viewed and tested.

It uses Svelte & Vite under the hood for automatic HMR.

To build the code run,

```bash
pnpm run build
```

## Future Ideas

### Auto linking "Today" button

In the future, there could be a script that runs every day that updates the pdf so that all links to /today would be converted to the actual date (like /2024-1-1).

That way you could always click on a "Today" button to take you to the right page.

Here's a sample command. This command just needs to be run every day once a day.

```bash
 sed -i 's/OLD_TEXT/NEW_TEXT/g' PDF_NAME.pdf
 sed -i 's/\/today/\/2024-1-1/g' PDF_NAME.pdf
```

### Insert events from ICS file

Add an input to add a link to a public ICS file that could pull in events into the calendar.
