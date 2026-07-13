# BpTestTell roadmap

## Goal

Develop a tool that uses an OpenAPI 3.x file to construct an effective Provengo project with guaranteed structural coverage. Demonstrate superior bug finding capabilities relative to state of the art. 

## Working principles

- The Library system in `Context/test_ctx` will be the golden end-to-end example. 

- Layer 1: A provengo model that 
    (1) Add "free" entities with parametrs.
    (2) For "compound" entities: wait for dependencies to be created, then create the entity with random parameters.
    (3) Stories that verify both successful and expected-failure paths for every supported CRUD operation. 
        - Define contexts representing when each operation is valid or invalid. 
        - Use the entities provided by each context to execute the operation
        - Confirming success in valid contexts and the expected failure in invalid ones. 

- Layer 2: Structural coverage of the OpenAPI contract. Use Provengo's built-in tools to verify that "all" combinations of objects are covered.

- Layer 3: Autogenerate the two layers above  from the OpenAPI contract.

    
