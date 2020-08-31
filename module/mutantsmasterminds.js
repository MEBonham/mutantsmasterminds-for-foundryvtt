// Import Modules
import { mutantsmastermindsActor } from "./actor/actor.js";
import { mutantsmastermindsActorSheet } from "./actor/actor-sheet.js";
import { mutantsmastermindsItem } from "./item/item.js";
import { mutantsmastermindsItemSheet } from "./item/item-sheet.js";

Hooks.once('init', async function() {

  game.mutantsmasterminds = {
    mutantsmastermindsActor,
    mutantsmastermindsItem
  };

  /**
   * Set an initiative formula for the system
   * @type {String}
   */
  CONFIG.Combat.initiative = {
    formula: "1d20",
    decimals: 2
  };

  // Define custom Entity classes
  CONFIG.Actor.entityClass = mutantsmastermindsActor;
  CONFIG.Item.entityClass = mutantsmastermindsItem;

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("mutantsmasterminds", mutantsmastermindsActorSheet, { makeDefault: true });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("mutantsmasterminds", mutantsmastermindsItemSheet, { makeDefault: true });

  // If you need to add Handlebars helpers, here are a few useful examples:
  Handlebars.registerHelper('concat', function() {
    var outStr = '';
    for (var arg in arguments) {
      if (typeof arguments[arg] != 'object') {
        outStr += arguments[arg];
      }
    }
    return outStr;
  });

  Handlebars.registerHelper('toLowerCase', function(str) {
    return str.toLowerCase();
  });
});