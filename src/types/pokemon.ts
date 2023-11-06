type Pokemon = {
  name: string,
  url: string,
}

type ListPokemon = {
  count: number,
  next: string,
  previous: string,
  results: Pokemon[],
}

type Type = {
  name: string,
  url: string,
}

type Types = {
  slot: number,
  type: Type,
}

type Stat = {
  name: string,
  url: string,
}

type Stats = {
  base_stat: number,
  effort: number,
  stat: Stat,
}

type Icons = {
  front_default: string,
  front_female: string,
}

type Generationviii = {
  icons: Icons,
}

type Ultrasunultramoon = {
  front_default: string,
  front_female: string,
  front_shiny: string,
  front_shiny_female: string,
}

type Generationvii = {
  ultrasunultramoon: Ultrasunultramoon,
  icons: Icons,
}

type Xy = {
  front_default: string,
  front_female: string,
  front_shiny: string,
  front_shiny_female: string,
}

type Omegarubyalphasapphire = {
  front_default: string,
  front_female: string,
  front_shiny: string,
  front_shiny_female: string,
}

type Generationvi = {
  xy: Xy,
  omegarubyalphasapphire: Omegarubyalphasapphire,
}

type Animated = {
  back_default: string,
  back_female: string,
  back_shiny: string,
  back_shiny_female: string,
  front_default: string,
  front_female: string,
  front_shiny: string,
  front_shiny_female: string,
}

type Blackwhite = {
  back_default: string,
  back_female: string,
  back_shiny: string,
  back_shiny_female: string,
  front_default: string,
  front_female: string,
  front_shiny: string,
  front_shiny_female: string,
  animated: Animated,
}

type Generationv = {
  blackwhite: Blackwhite,
}

type Platinum = {
  back_default: string,
  back_female: string,
  back_shiny: string,
  back_shiny_female: string,
  front_default: string,
  front_female: string,
  front_shiny: string,
  front_shiny_female: string,
}

type Heartgoldsoulsilver = {
  back_default: string,
  back_female: string,
  back_shiny: string,
  back_shiny_female: string,
  front_default: string,
  front_female: string,
  front_shiny: string,
  front_shiny_female: string,
}

type Diamondpearl = {
  back_default: string,
  back_female: string,
  back_shiny: string,
  back_shiny_female: string,
  front_default: string,
  front_female: string,
  front_shiny: string,
  front_shiny_female: string,
}

type Generationiv = {
  platinum: Platinum,
  heartgoldsoulsilver: Heartgoldsoulsilver,
  diamondpearl: Diamondpearl,
}

type Rubysapphire = {
  back_default: string,
  back_shiny: string,
  front_default: string,
  front_shiny: string,
}

type Fireredleafgreen = {
  back_default: string,
  back_shiny: string,
  front_default: string,
  front_shiny: string,
}

type Emerald = {
  front_default: string,
  front_shiny: string,
}

type Generationiii = {
  rubysapphire: Rubysapphire,
  fireredleafgreen: Fireredleafgreen,
  emerald: Emerald,
}

type Silver = {
  back_default: string,
  back_shiny: string,
  front_default: string,
  front_shiny: string,
  front_transparent: string,
}

type Gold = {
  back_default: string,
  back_shiny: string,
  front_default: string,
  front_shiny: string,
  front_transparent: string,
}

type Crystal = {
  back_default: string,
  back_shiny: string,
  back_shiny_transparent: string,
  back_transparent: string,
  front_default: string,
  front_shiny: string,
  front_shiny_transparent: string,
  front_transparent: string,
}

type Generationii = {
  silver: Silver,
  gold: Gold,
  crystal: Crystal,
}

type Yellow = {
  back_default: string,
  back_gray: string,
  back_transparent: string,
  front_default: string,
  front_gray: string,
  front_transparent: string,
}

type Redblue = {
  back_default: string,
  back_gray: string,
  back_transparent: string,
  front_default: string,
  front_gray: string,
  front_transparent: string,
}

type Generationi = {
  yellow: Yellow,
  redblue: Redblue,
}

type Versions = {
  generationviii: Generationviii,
  generationvii: Generationvii,
  generationvi: Generationvi,
  generationv: Generationv,
  generationiv: Generationiv,
  generationiii: Generationiii,
  generationii: Generationii,
  generationi: Generationi,
}

type Officialartwork = {
  front_default: string,
  front_shiny: string,
}

type Home = {
  front_default: string,
  front_female: string,
  front_shiny: string,
  front_shiny_female: string,
}

type DreamWorld = {
  front_default: string,
  front_female: string,
}

type Other = {
  officialartwork: Officialartwork,
  home: Home,
  dream_world: DreamWorld,
}

type Sprites = {
  back_default: string,
  back_female: string,
  back_shiny: string,
  back_shiny_female: string,
  front_default: string,
  front_female: string,
  front_shiny: string,
  front_shiny_female: string,
  versions: Versions,
  other: Other,
}

type Species = {
  name: string,
  url: string,
}

type VersionGroup = {
  name: string,
  url: string,
}

type MoveLearnMethod = {
  name: string,
  url: string,
}

type VersionGroupDetails = {
  level_learned_at: number,
  version_group: VersionGroup,
  move_learn_method: MoveLearnMethod,
}

type Move = {
  name: string,
  url: string,
}

type Moves = {
  version_group_details: VersionGroupDetails[],
  move: Move,
}

type Version = {
  name: string,
  url: string,
}

type VersionDetails = {
  rarity: number,
  version: Version,
}

type Item = {
  name: string,
  url: string,
}

type HeldItems = {
  version_details: VersionDetails[],
  item: Item,
}

type GameIndices = {
  game_index: number,
  version: Version,
}

type Forms = {
  name: string,
  url: string,
}

type Ability = {
  name: string,
  url: string,
}

type Abilities = {
  is_hidden: boolean,
  slot: number,
  ability: Ability,
}

type MainPokemon = {
  base_experience: number,
  height: number,
  id: number,
  is_default: boolean,
  location_area_encounters: string,
  name: string,
  order: number,
  weight: number,
  types: Types[],
  stats: Stats[],
  sprites: Sprites,
  species: Species,
  past_types: string[],
  past_abilities: string[],
  moves: Moves[],
  held_items: HeldItems[],
  game_indices: GameIndices[],
  forms: Forms[],
  abilities: Abilities[],
}