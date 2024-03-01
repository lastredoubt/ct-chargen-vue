# Classic Traveller Character Generator - 

Vue project to inline a Classic Traveller character generator into an existing webpage.

DIST folder has the condensed scripts resulting from `npm run build` , and the Plugin-prep folder contains a stub WP plugin utilizing the resulting script files.



## Status

The app now cycles through the entire career cycle up through discharge, but not including muster-out benefits. Aging, existing skills, and cascade skills are accounted for. 

## Why

Traveller has always been the oddball out in character generation that the process itself was something of a minigame. The process is both fast, and yet more complex than it looks on the surface. You could aim for a career trajectory, fail, and get drafted... possibly right into the service that rejected you. You had to roll for survival every term, and if you wanted to stay in, to re-enlist. Heck, you might be forced to stay in due to the "needs of the service" even if you desperately wanted out. 

It was, in short, a "lifepath" but without quite as much preplanned "path". And fairly uniquely - you can die before ever being ready to play.

Where the online character generators I've seen - and there are a few quite useful for making NPCs - fall down is that they are not interactive. They don't offer you a choice as to what service to enter, whether or not to re-enlist, or whether you want to focus on self-improvement, career-specific skills, or advanced training. In short, they lack any interaction beyond asking for characters. I wanted a generator that let you work through the rules as any other player with dice, paper, and a pen would. 

## Ruleset

This generator strictly uses the Traveller Book / LBB1-3 rules, and not Mercenary, High Guard, Scout, or other supplements. The expansion of the number of skills, the changes in how many skills are acquired, and the added logic of the career path further complicate an already somewhat convoluted process. I also am not a fan of the skills bloat that comes along for the ride. 

## Major todo goals

Now that I've gotten the ship builder - separate project - tonnage complete, we will finish addressing muster out benefits. 

After that, I hope to print the "TAS Form" on the right as a self-contained sheet. That is a lower priority, and my wait until I get costs/etc. done for the ship builder project complete. 