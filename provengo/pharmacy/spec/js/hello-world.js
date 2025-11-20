// @provengo summon ctrl
// @provengo summon constraints

/**
 * Base flow: choose a greeting, choose a planet, greet.
 */
bthread("Greeting activity",function() {
    let greeting = select("Greeting").from(GREETINGS);
    let planet = choose("Jupiter", "Mars", "Venus", "World");
    request(bp.Event(`${greeting}, ${planet}`));

});


/**
 * When producing the classic "Hello World" greeting, note that the classic path was chosen.
 */
bthread("Programmer", function(){
    waitFor(bp.Event("Hello, World"));
    Ctrl.doMark("Classic!");
});

/**
 * If we chose Howdy as a greeting, don't choose Mars as a planet.
 */
bthread("Don't Howdy Mars", function(){
    waitFor(any(/Howdy/)); // wait for any event whose name contains "Howdy"
    block(choiceEvent("Mars")); // block "choose" calls from selecting "Mars"
});

/**
 * (advanced) 
 * Uncomment to create the following general requirement: 
 *  It should not be possible to say "Hi, Venus". If a scenario allows this, complain informatively.
 */
//bthread("Hi Venus is a spec error", function(){
//    waitFor(bp.Event("Hi, Venus"));
//    bp.ASSERT(false, "Spec Error: Saying 'Hi' to Venus should not be possible");
//});

/**
 * Block saying "Hi" to Venus.
 * Un-comment to ensure no scenario violates the above requirement.
 */
// Constraints.after(choiceEvent("Hi"))
//     .block(choiceEvent("Venus"))
//     .forever();
