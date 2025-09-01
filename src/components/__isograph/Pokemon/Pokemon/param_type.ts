
export type Pokemon__Pokemon__param = {
  readonly data: {
    /**
The name of the Pokemon.
    */
    readonly name: string,
    /**
The image URL of the Pokemon.
    */
    readonly image: string,
    /**
The Pokemon's Pokedex number.
    */
    readonly number: string,
    /**
The classification of the Pokemon.
    */
    readonly classification: string,
    /**
The types of the Pokemon.
    */
    readonly types: ReadonlyArray<string>,
    /**
The maximum HP of the Pokemon.
    */
    readonly maxHP: number,
    /**
The maximum CP of the Pokemon.
    */
    readonly maxCP: number,
    /**
The attacks of the Pokemon.
    */
    readonly attacks: {
      /**
Fast attacks.
      */
      readonly fast: ReadonlyArray<{
        /**
The name of the attack.
        */
        readonly name: string,
        /**
The type of the attack.
        */
        readonly type: string,
        /**
The damage of the attack.
        */
        readonly damage: number,
      }>,
      /**
Special attacks.
      */
      readonly special: ReadonlyArray<{
        /**
The name of the attack.
        */
        readonly name: string,
        /**
The type of the attack.
        */
        readonly type: string,
        /**
The damage of the attack.
        */
        readonly damage: number,
      }>,
    },
  },
  readonly parameters: Record<PropertyKey, never>,
};
