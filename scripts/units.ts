import { Repository } from 'typeorm';
import { Image } from '../src/main/server/entities/Image';
import { Unit } from '../src/main/server/entities/Unit';
import { Ability } from '../src/main/server/entities/Ability';
import { FactionDetail } from '../src/main/server/entities/FactionDetail';
import { Faction } from '../src/main/server/graphql/generated';
import { Unability } from '../src/main/server/entities/Unability';

const createUnits: (
  imageRepo: Repository<Image>,
  abilityRepo: Repository<Ability>,
  unabilityRepo: Repository<Unability>,
  factionRepo: Repository<FactionDetail>,
) => Promise<Unit[]> = async (
  imageRepo,
  abilityRepo,
  unabilityRepo,
  factionRepo,
) => [
  {
    name: 'Archmage',
    faction: await factionRepo.findOneOrFail({ name: Faction.Human }),
    isHero: true,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNHeroArchMage-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'ahbz' }),
      await abilityRepo.findOneOrFail({ id: 'ahwe' }),
      await abilityRepo.findOneOrFail({ id: 'ahab' }),
      await abilityRepo.findOneOrFail({ id: 'ahmt' }),
    ],
    unabilities: [],
    ordering: 0,
  },
  {
    name: 'Mountain King',
    faction: await factionRepo.findOneOrFail({ name: Faction.Human }),
    isHero: true,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNHeroMountainKing-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'AHtb' }),
      await abilityRepo.findOneOrFail({ id: 'AHtc' }),
      await abilityRepo.findOneOrFail({ id: 'AHbh' }),
      await abilityRepo.findOneOrFail({ id: 'AHav' }),
    ],
    unabilities: [],
    ordering: 1,
  },
  {
    name: 'Paladin',
    faction: await factionRepo.findOneOrFail({ name: Faction.Human }),
    isHero: true,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNHeroPaladin-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'AHhb' }),
      await abilityRepo.findOneOrFail({ id: 'AHds' }),
      await abilityRepo.findOneOrFail({ id: 'AHad' }),
      await abilityRepo.findOneOrFail({ id: 'AHre' }),
    ],
    unabilities: [],
    ordering: 2,
  },
  {
    name: 'Blood Mage',
    faction: await factionRepo.findOneOrFail({ name: Faction.Human }),
    isHero: true,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNHeroBloodElfPrince-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'AHfs' }),
      await abilityRepo.findOneOrFail({ id: 'AHbn' }),
      await abilityRepo.findOneOrFail({ id: 'AHdr' }),
      await abilityRepo.findOneOrFail({ id: 'AHpx' }),
    ],
    unabilities: [],
    ordering: 3,
  },
  {
    name: 'Peasant',
    faction: await factionRepo.findOneOrFail({ name: Faction.Human }),
    isHero: false,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNPeasant-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'ahrp' }),
      await abilityRepo.findOneOrFail({ id: 'ahar' }),
      await abilityRepo.findOneOrFail({ id: 'amic' }),
      await abilityRepo.findOneOrFail({ id: 'ahrl' }),
      await abilityRepo.findOneOrFail({ id: 'cmdbuildhuman' }),
    ],
    unabilities: [],
    ordering: 4,
  },
  {
    name: 'Militia',
    faction: await factionRepo.findOneOrFail({ name: Faction.Human }),
    isHero: false,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNMilitia-Reforged.png',
    }),
    abilities: [],
    unabilities: [await unabilityRepo.findOneOrFail({ id: 'amic' })],
    ordering: 5,
  },
  {
    name: 'Footman',
    faction: await factionRepo.findOneOrFail({ name: Faction.Human }),
    isHero: false,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNFootman-Reforged.png',
    }),
    abilities: [await abilityRepo.findOneOrFail({ id: 'adef' })],
    unabilities: [],
    ordering: 6,
  },
  {
    name: 'Priest',
    faction: await factionRepo.findOneOrFail({ name: Faction.Human }),
    isHero: false,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNPriest-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'ahea' }),
      await abilityRepo.findOneOrFail({ id: 'adis' }),
      await abilityRepo.findOneOrFail({ id: 'ainf' }),
    ],
    unabilities: [],
    ordering: 7,
  },
  {
    name: 'Sorceress',
    faction: await factionRepo.findOneOrFail({ name: Faction.Human }),
    isHero: false,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNSorceress-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'aslo' }),
      await abilityRepo.findOneOrFail({ id: 'aivs' }),
      await abilityRepo.findOneOrFail({ id: 'aply' }),
    ],
    unabilities: [],
    ordering: 8,
  },
  {
    name: 'Spell Breaker',
    faction: await factionRepo.findOneOrFail({ name: Faction.Human }),
    isHero: false,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNSpellBreaker-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'asps' }),
      await abilityRepo.findOneOrFail({ id: 'acmg' }),
    ],
    unabilities: [],
    ordering: 9,
  },
  {
    name: 'Mortar Team',
    faction: await factionRepo.findOneOrFail({ name: Faction.Human }),
    isHero: false,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNMortarTeam-Reforged.png',
    }),
    abilities: [await abilityRepo.findOneOrFail({ id: 'afla' })],
    unabilities: [],
    ordering: 10,
  },
  {
    name: 'Dragonhawk Rider',
    faction: await factionRepo.findOneOrFail({ name: Faction.Human }),
    isHero: false,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNDragonHawkRider.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'aclf' }),
      await abilityRepo.findOneOrFail({ id: 'amls' }),
    ],
    unabilities: [],
    ordering: 11,
  },
  {
    name: 'Build Structure',
    faction: await factionRepo.findOneOrFail({ name: Faction.Human }),
    isHero: false,
    isBuilding: true,
    image: await imageRepo.findOneOrFail({
      name: 'BTNHumanBuild-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'htow' }),
      await abilityRepo.findOneOrFail({ id: 'hbar' }),
      await abilityRepo.findOneOrFail({ id: 'hlum' }),
      await abilityRepo.findOneOrFail({ id: 'hbla' }),
      await abilityRepo.findOneOrFail({ id: 'hhou' }),
      await abilityRepo.findOneOrFail({ id: 'halt' }),
      await abilityRepo.findOneOrFail({ id: 'hars' }),
      await abilityRepo.findOneOrFail({ id: 'harm' }),
      await abilityRepo.findOneOrFail({ id: 'hwtw' }),
      await abilityRepo.findOneOrFail({ id: 'hgra' }),
      await abilityRepo.findOneOrFail({ id: 'hvlt' }),
    ],
    unabilities: [],
    ordering: 12,
  },
  {
    name: 'Town Hall',
    faction: await factionRepo.findOneOrFail({ name: Faction.Human }),
    isHero: false,
    isBuilding: true,
    image: await imageRepo.findOneOrFail({
      name: 'BTNTownHall-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'hpea' }),
      await abilityRepo.findOneOrFail({ id: 'rhpm' }),
      await abilityRepo.findOneOrFail({ id: 'hkee' }),
      await abilityRepo.findOneOrFail({ id: 'amic' }),
    ],
    unabilities: [await unabilityRepo.findOneOrFail({ id: 'amic' })],
    ordering: 13,
  },
  {
    name: 'Keep',
    faction: await factionRepo.findOneOrFail({ name: Faction.Human }),
    isHero: false,
    isBuilding: true,
    image: await imageRepo.findOneOrFail({
      name: 'BTNKeep-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'hpea' }),
      await abilityRepo.findOneOrFail({ id: 'rhpm' }),
      await abilityRepo.findOneOrFail({ id: 'hcas' }),
      await abilityRepo.findOneOrFail({ id: 'amic' }),
    ],
    unabilities: [await unabilityRepo.findOneOrFail({ id: 'amic' })],
    ordering: 14,
  },
  {
    name: 'Castle',
    faction: await factionRepo.findOneOrFail({ name: Faction.Human }),
    isHero: false,
    isBuilding: true,
    image: await imageRepo.findOneOrFail({
      name: 'BTNCastle-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'hpea' }),
      await abilityRepo.findOneOrFail({ id: 'rhpm' }),
      await abilityRepo.findOneOrFail({ id: 'amic' }),
    ],
    unabilities: [await unabilityRepo.findOneOrFail({ id: 'amic' })],
    ordering: 15,
  },
  {
    name: 'Barracks',
    faction: await factionRepo.findOneOrFail({ name: Faction.Human }),
    isHero: false,
    isBuilding: true,
    image: await imageRepo.findOneOrFail({
      name: 'BTNHumanBarracks-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'hfoo' }),
      await abilityRepo.findOneOrFail({ id: 'hrif' }),
      await abilityRepo.findOneOrFail({ id: 'hkni' }),
      await abilityRepo.findOneOrFail({ id: 'rhde' }),
      await abilityRepo.findOneOrFail({ id: 'rhri' }),
      await abilityRepo.findOneOrFail({ id: 'rhan' }),
    ],
    unabilities: [],
    ordering: 16,
  },
  {
    name: 'Lumber Mill',
    faction: await factionRepo.findOneOrFail({ name: Faction.Human }),
    isHero: false,
    isBuilding: true,
    image: await imageRepo.findOneOrFail({
      name: 'BTNHumanLumberMill-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'rhlh' }),
      await abilityRepo.findOneOrFail({ id: 'rhac' }),
    ],
    unabilities: [],
    ordering: 17,
  },
  {
    name: 'Blacksmith',
    faction: await factionRepo.findOneOrFail({ name: Faction.Human }),
    isHero: false,
    isBuilding: true,
    image: await imageRepo.findOneOrFail({
      name: 'BTNBlacksmith-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'rhme' }),
      await abilityRepo.findOneOrFail({ id: 'rhra' }),
      await abilityRepo.findOneOrFail({ id: 'rhar' }),
      await abilityRepo.findOneOrFail({ id: 'rhla' }),
    ],
    unabilities: [],
    ordering: 18,
  },
  {
    name: 'Altar Of Kings',
    faction: await factionRepo.findOneOrFail({ name: Faction.Human }),
    isHero: false,
    isBuilding: true,
    image: await imageRepo.findOneOrFail({
      name: 'BTNAltarOfKings-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'Hblm' }),
      await abilityRepo.findOneOrFail({ id: 'Hamg' }),
      await abilityRepo.findOneOrFail({ id: 'Hmkg' }),
      await abilityRepo.findOneOrFail({ id: 'Hpal' }),
    ],
    unabilities: [],
    ordering: 19,
  },
  {
    name: 'Arcane Sanctum',
    faction: await factionRepo.findOneOrFail({ name: Faction.Human }),
    isHero: false,
    isBuilding: true,
    image: await imageRepo.findOneOrFail({
      name: 'BTNArcaneSanctum-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'hsor' }),
      await abilityRepo.findOneOrFail({ id: 'hmpr' }),
      await abilityRepo.findOneOrFail({ id: 'hspt' }),
      await abilityRepo.findOneOrFail({ id: 'rhss' }),
      await abilityRepo.findOneOrFail({ id: 'rhst' }),
      await abilityRepo.findOneOrFail({ id: 'rhpt' }),
      await abilityRepo.findOneOrFail({ id: 'rhse' }),
    ],
    unabilities: [],
    ordering: 20,
  },
  {
    name: 'Workshop',
    faction: await factionRepo.findOneOrFail({ name: Faction.Human }),
    isHero: false,
    isBuilding: true,
    image: await imageRepo.findOneOrFail({
      name: 'BTNWorkshop-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'hgyr' }),
      await abilityRepo.findOneOrFail({ id: 'hmtm' }),
      await abilityRepo.findOneOrFail({ id: 'hmtt' }),
    ],
    unabilities: [],
    ordering: 21,
  },
  {
    name: 'Blademaster',
    faction: await factionRepo.findOneOrFail({ name: Faction.Orc }),
    isHero: true,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNHeroBlademaster-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'aowk' }),
      await abilityRepo.findOneOrFail({ id: 'aomi' }),
      await abilityRepo.findOneOrFail({ id: 'aocr' }),
      await abilityRepo.findOneOrFail({ id: 'aoww' }),
    ],
    unabilities: [],
    ordering: 0,
  },
  {
    name: 'Far Seer',
    faction: await factionRepo.findOneOrFail({ name: Faction.Orc }),
    isHero: true,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNHeroFarseer-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'aocl' }),
      await abilityRepo.findOneOrFail({ id: 'aofs' }),
      await abilityRepo.findOneOrFail({ id: 'aosf' }),
      await abilityRepo.findOneOrFail({ id: 'aoeq' }),
    ],
    unabilities: [],
    ordering: 1,
  },
  {
    name: 'Tauren Chieftain',
    faction: await factionRepo.findOneOrFail({ name: Faction.Orc }),
    isHero: true,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNHeroTaurenChieftain-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'aosh' }),
      await abilityRepo.findOneOrFail({ id: 'aows' }),
      await abilityRepo.findOneOrFail({ id: 'aoae' }),
      await abilityRepo.findOneOrFail({ id: 'aore' }),
    ],
    unabilities: [],
    ordering: 2,
  },
  {
    name: 'Shadow Hunter',
    faction: await factionRepo.findOneOrFail({ name: Faction.Orc }),
    isHero: true,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNShadowHunter-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'aohw' }),
      await abilityRepo.findOneOrFail({ id: 'aohx' }),
      await abilityRepo.findOneOrFail({ id: 'aosw' }),
      await abilityRepo.findOneOrFail({ id: 'aovd' }),
    ],
    unabilities: [],
    ordering: 3,
  },
  {
    name: 'Peon',
    faction: await factionRepo.findOneOrFail({ name: Faction.Orc }),
    isHero: false,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNPeon-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'arep' }),
      await abilityRepo.findOneOrFail({ id: 'aaha' }),
    ],
    unabilities: [],
    ordering: 4,
  },
  {
    name: 'Troll Berserker',
    faction: await factionRepo.findOneOrFail({ name: Faction.Orc }),
    isHero: false,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNHeadHunterBerserker-Reforged.png',
    }),
    abilities: [await abilityRepo.findOneOrFail({ id: 'absk' })],
    unabilities: [],
    ordering: 5,
  },
  {
    name: 'Shaman',
    faction: await factionRepo.findOneOrFail({ name: Faction.Orc }),
    isHero: false,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNShaman-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'apg2' }),
      await abilityRepo.findOneOrFail({ id: 'alsh' }),
      await abilityRepo.findOneOrFail({ id: 'ablo' }),
    ],
    unabilities: [],
    ordering: 6,
  },
  {
    name: 'Witch Doctor',
    faction: await factionRepo.findOneOrFail({ name: Faction.Orc }),
    isHero: false,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNWitchDoctor-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'aeye' }),
      await abilityRepo.findOneOrFail({ id: 'asta' }),
      await abilityRepo.findOneOrFail({ id: 'ahwd' }),
    ],
    unabilities: [],
    ordering: 7,
  },
  {
    name: 'Spirit Walker',
    faction: await factionRepo.findOneOrFail({ name: Faction.Orc }),
    isHero: false,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNSpiritWalker-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'aspl' }),
      await abilityRepo.findOneOrFail({ id: 'adcn' }),
      await abilityRepo.findOneOrFail({ id: 'aast' }),
      await abilityRepo.findOneOrFail({ id: 'acpf' }),
    ],
    unabilities: [],
    ordering: 8,
  },
  {
    name: 'Raider',
    faction: await factionRepo.findOneOrFail({ name: Faction.Orc }),
    isHero: false,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNRaider-Reforged.png',
    }),
    abilities: [await abilityRepo.findOneOrFail({ id: 'aens' })],
    unabilities: [],
    ordering: 9,
  },
  {
    name: 'Kodo Beast',
    faction: await factionRepo.findOneOrFail({ name: Faction.Orc }),
    isHero: false,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNKodoBeast-Reforged.png',
    }),
    abilities: [await abilityRepo.findOneOrFail({ id: 'adev' })],
    unabilities: [],
    ordering: 10,
  },
  {
    name: 'Batrider',
    faction: await factionRepo.findOneOrFail({ name: Faction.Orc }),
    isHero: false,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNTrollBatRider-Reforged.png',
    }),
    abilities: [await abilityRepo.findOneOrFail({ id: 'auco' })],
    unabilities: [],
    ordering: 11,
  },
  {
    name: 'Death Knight',
    faction: await factionRepo.findOneOrFail({ name: Faction.Undead }),
    isHero: true,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNHeroDeathKnight-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'audc' }),
      await abilityRepo.findOneOrFail({ id: 'audp' }),
      await abilityRepo.findOneOrFail({ id: 'auau' }),
      await abilityRepo.findOneOrFail({ id: 'auan' }),
    ],
    unabilities: [],
    ordering: 0,
  },
  {
    name: 'Dreadlord',
    faction: await factionRepo.findOneOrFail({ name: Faction.Undead }),
    isHero: true,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNHeroDreadLord-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'aucs' }),
      await abilityRepo.findOneOrFail({ id: 'ausl' }),
      await abilityRepo.findOneOrFail({ id: 'auav' }),
      await abilityRepo.findOneOrFail({ id: 'auin' }),
    ],
    unabilities: [],
    ordering: 1,
  },
  {
    name: 'Lich',
    faction: await factionRepo.findOneOrFail({ name: Faction.Undead }),
    isHero: true,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNHeroLich-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'aufn' }),
      await abilityRepo.findOneOrFail({ id: 'aufu' }),
      await abilityRepo.findOneOrFail({ id: 'audr' }),
      await abilityRepo.findOneOrFail({ id: 'audd' }),
    ],
    unabilities: [],
    ordering: 2,
  },
  {
    name: 'Crypt Lord',
    faction: await factionRepo.findOneOrFail({ name: Faction.Undead }),
    isHero: true,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNHeroCryptLord-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'auim' }),
      await abilityRepo.findOneOrFail({ id: 'auts' }),
      await abilityRepo.findOneOrFail({ id: 'aucb' }),
      await abilityRepo.findOneOrFail({ id: 'auls' }),
    ],
    unabilities: [],
    ordering: 3,
  },
  {
    name: 'Acolyte',
    faction: await factionRepo.findOneOrFail({ name: Faction.Undead }),
    isHero: false,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNAcolyte-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'arst' }),
      await abilityRepo.findOneOrFail({ id: 'aaha' }),
      await abilityRepo.findOneOrFail({ id: 'alam' }),
    ],
    unabilities: [],
    ordering: 4,
  },
  {
    name: 'Ghoul',
    faction: await factionRepo.findOneOrFail({ name: Faction.Undead }),
    isHero: false,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNGhoul-Reforged.png',
    }),
    abilities: [await abilityRepo.findOneOrFail({ id: 'acan' })],
    unabilities: [],
    ordering: 5,
  },
  {
    name: 'Crypt Fiend',
    faction: await factionRepo.findOneOrFail({ name: Faction.Undead }),
    isHero: false,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNCryptFiend-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'aweb' }),
      await abilityRepo.findOneOrFail({ id: 'abur' }),
    ],
    unabilities: [],
    ordering: 6,
  },
  {
    name: 'Gargoyle',
    faction: await factionRepo.findOneOrFail({ name: Faction.Undead }),
    isHero: false,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNGargoyle-Reforged.png',
    }),
    abilities: [await abilityRepo.findOneOrFail({ id: 'astn' })],
    unabilities: [],
    ordering: 7,
  },
  {
    name: 'Abomination',
    faction: await factionRepo.findOneOrFail({ name: Faction.Undead }),
    isHero: false,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNAbomination-Reforged.png',
    }),
    abilities: [await abilityRepo.findOneOrFail({ id: 'acan' })],
    unabilities: [],
    ordering: 8,
  },
  {
    name: 'Meat Wagon',
    faction: await factionRepo.findOneOrFail({ name: Faction.Undead }),
    isHero: false,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNMeatWagon-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'amel' }),
      await abilityRepo.findOneOrFail({ id: 'amed' }),
    ],
    unabilities: [],
    ordering: 9,
  },
  {
    name: 'Necromancer',
    faction: await factionRepo.findOneOrFail({ name: Faction.Undead }),
    isHero: false,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNNecromancer-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'arai' }),
      await abilityRepo.findOneOrFail({ id: 'auhf' }),
      await abilityRepo.findOneOrFail({ id: 'acri' }),
    ],
    unabilities: [],
    ordering: 10,
  },
  {
    name: 'Banshee',
    faction: await factionRepo.findOneOrFail({ name: Faction.Undead }),
    isHero: false,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNBanshee-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'acrs' }),
      await abilityRepo.findOneOrFail({ id: 'aam2' }),
      await abilityRepo.findOneOrFail({ id: 'aps2' }),
    ],
    unabilities: [],
    ordering: 11,
  },
  {
    name: 'Carrion Beetle',
    faction: await factionRepo.findOneOrFail({ name: Faction.Undead }),
    isHero: false,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNCarrionScarabsLv3.png',
    }),
    abilities: [await abilityRepo.findOneOrFail({ id: 'abur' })],
    unabilities: [],
    ordering: 12,
  },
  {
    name: 'Obsidian Statue',
    faction: await factionRepo.findOneOrFail({ name: Faction.Undead }),
    isHero: false,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNObsidianStatue-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'arpl' }),
      await abilityRepo.findOneOrFail({ id: 'arpm' }),
      await abilityRepo.findOneOrFail({ id: 'ubsp' }),
    ],
    unabilities: [],
    ordering: 13,
  },
  {
    name: 'Destroyer',
    faction: await factionRepo.findOneOrFail({ name: Faction.Undead }),
    isHero: false,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNDestroyer-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'aabs' }),
      await abilityRepo.findOneOrFail({ id: 'advm' }),
      await abilityRepo.findOneOrFail({ id: 'afak' }),
    ],
    unabilities: [],
    ordering: 14,
  },
  {
    name: 'Demon Hunter',
    faction: await factionRepo.findOneOrFail({ name: Faction.NightElf }),
    isHero: true,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNHeroDemonHunter-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'aemb' }),
      await abilityRepo.findOneOrFail({ id: 'aeim' }),
      await abilityRepo.findOneOrFail({ id: 'aeev' }),
      await abilityRepo.findOneOrFail({ id: 'aeme' }),
    ],
    unabilities: [],
    ordering: 0,
  },
  {
    name: 'Keeper of the Grove',
    faction: await factionRepo.findOneOrFail({ name: Faction.NightElf }),
    isHero: true,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNKeeperOfTheGrove-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'aeer' }),
      await abilityRepo.findOneOrFail({ id: 'aefn' }),
      await abilityRepo.findOneOrFail({ id: 'aeah' }),
      await abilityRepo.findOneOrFail({ id: 'aetq' }),
    ],
    unabilities: [],
    ordering: 1,
  },
  {
    name: 'Priestess of the Moon',
    faction: await factionRepo.findOneOrFail({ name: Faction.NightElf }),
    isHero: true,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNPriestessOfTheMoon-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'aest' }),
      await abilityRepo.findOneOrFail({ id: 'ahfa' }),
      await abilityRepo.findOneOrFail({ id: 'aear' }),
      await abilityRepo.findOneOrFail({ id: 'aesf' }),
      await abilityRepo.findOneOrFail({ id: 'ashm' }),
    ],
    unabilities: [],
    ordering: 2,
  },
  {
    name: 'Warden',
    faction: await factionRepo.findOneOrFail({ name: Faction.NightElf }),
    isHero: true,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNWarden2-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'aefk' }),
      await abilityRepo.findOneOrFail({ id: 'aebl' }),
      await abilityRepo.findOneOrFail({ id: 'aesh' }),
      await abilityRepo.findOneOrFail({ id: 'aesv' }),
      await abilityRepo.findOneOrFail({ id: 'ashm' }),
    ],
    unabilities: [],
    ordering: 3,
  },
  {
    name: 'Wisp',
    faction: await factionRepo.findOneOrFail({ name: Faction.NightElf }),
    isHero: false,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNWisp-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'aren' }),
      await abilityRepo.findOneOrFail({ id: 'awha' }),
      await abilityRepo.findOneOrFail({ id: 'adtn' }),
    ],
    unabilities: [],
    ordering: 4,
  },
  {
    name: 'Archer',
    faction: await factionRepo.findOneOrFail({ name: Faction.NightElf }),
    isHero: false,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNArcher-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'aco2' }),
      await abilityRepo.findOneOrFail({ id: 'ashm' }),
    ],
    unabilities: [],
    ordering: 5,
  },
  {
    name: 'Huntress',
    faction: await factionRepo.findOneOrFail({ name: Faction.NightElf }),
    isHero: false,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNHuntress-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'aesn' }),
      await abilityRepo.findOneOrFail({ id: 'ashm' }),
    ],
    unabilities: [],
    ordering: 6,
  },
  {
    name: 'Dryad',
    faction: await factionRepo.findOneOrFail({ name: Faction.NightElf }),
    isHero: false,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNDryad-Reforged.png',
    }),
    abilities: [await abilityRepo.findOneOrFail({ id: 'aadm' })],
    unabilities: [],
    ordering: 7,
  },
  {
    name: 'Druid of the Claw',
    faction: await factionRepo.findOneOrFail({ name: Faction.NightElf }),
    isHero: false,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNDruidOfTheClaw-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'acro' }),
      await abilityRepo.findOneOrFail({ id: 'acr2' }),
      await abilityRepo.findOneOrFail({ id: 'abrf' }),
    ],
    unabilities: [await unabilityRepo.findOneOrFail({ id: 'abrf' })],
    ordering: 8,
  },
  {
    name: 'Mountain Giant',
    faction: await factionRepo.findOneOrFail({ name: Faction.NightElf }),
    isHero: false,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNMountainGiant-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'atau' }),
      await abilityRepo.findOneOrFail({ id: 'agra' }),
    ],
    unabilities: [],
    ordering: 9,
  },
  {
    name: 'Hippogryph',
    faction: await factionRepo.findOneOrFail({ name: Faction.NightElf }),
    isHero: false,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNHippogriff-Reforged.png',
    }),
    abilities: [await abilityRepo.findOneOrFail({ id: 'aco3' })],
    unabilities: [],
    ordering: 10,
  },
  {
    name: 'Hippogryph Rider',
    faction: await factionRepo.findOneOrFail({ name: Faction.NightElf }),
    isHero: false,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNHippogriffRider-Reforged.png',
    }),
    abilities: [await abilityRepo.findOneOrFail({ id: 'adec' })],
    unabilities: [],
    ordering: 11,
  },
  {
    name: 'Druid of the Talon',
    faction: await factionRepo.findOneOrFail({ name: Faction.NightElf }),
    isHero: false,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNDruidOfTheTalon-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'afae' }),
      await abilityRepo.findOneOrFail({ id: 'acyc' }),
      await abilityRepo.findOneOrFail({ id: 'arav' }),
    ],
    unabilities: [await unabilityRepo.findOneOrFail({ id: 'arav' })],
    ordering: 12,
  },
  {
    name: 'Faerie Dragon',
    faction: await factionRepo.findOneOrFail({ name: Faction.NightElf }),
    isHero: false,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNFaerieDragon-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'apsh' }),
      await abilityRepo.findOneOrFail({ id: 'amfl' }),
    ],
    unabilities: [],
    ordering: 13,
  },
  {
    name: 'Create Building',
    faction: await factionRepo.findOneOrFail({ name: Faction.NightElf }),
    isHero: false,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNNightElfBuild-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'etol' }),
      await abilityRepo.findOneOrFail({ id: 'emow' }),
      await abilityRepo.findOneOrFail({ id: 'eate' }),
      await abilityRepo.findOneOrFail({ id: 'eden' }),
      await abilityRepo.findOneOrFail({ id: 'edob' }),
      await abilityRepo.findOneOrFail({ id: 'etrp' }),
      await abilityRepo.findOneOrFail({ id: 'eaom' }),
      await abilityRepo.findOneOrFail({ id: 'eaow' }),
      await abilityRepo.findOneOrFail({ id: 'eaoe' }),
      await abilityRepo.findOneOrFail({ id: 'edos' }),
    ],
    unabilities: [],
    ordering: 14,
  },
  {
    name: 'Naga Sea Witch',
    faction: await factionRepo.findOneOrFail({ name: Faction.Neutral }),
    isHero: true,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNNagaSeaWitch-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'anfl' }),
      await abilityRepo.findOneOrFail({ id: 'anfa' }),
      await abilityRepo.findOneOrFail({ id: 'anms' }),
      await abilityRepo.findOneOrFail({ id: 'anto' }),
    ],
    unabilities: [],
    ordering: 0,
  },
  {
    name: 'Dark Ranger',
    faction: await factionRepo.findOneOrFail({ name: Faction.Neutral }),
    isHero: true,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNBansheeRanger-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'ansi' }),
      await abilityRepo.findOneOrFail({ id: 'anba' }),
      await abilityRepo.findOneOrFail({ id: 'andr' }),
      await abilityRepo.findOneOrFail({ id: 'anch' }),
    ],
    unabilities: [],
    ordering: 1,
  },
  {
    name: 'Pandaren Brewmaster',
    faction: await factionRepo.findOneOrFail({ name: Faction.Neutral }),
    isHero: true,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNPandarenBrewmaster-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'anbf' }),
      await abilityRepo.findOneOrFail({ id: 'andh' }),
      await abilityRepo.findOneOrFail({ id: 'andb' }),
      await abilityRepo.findOneOrFail({ id: 'anef' }),
    ],
    unabilities: [],
    ordering: 2,
  },
  {
    name: 'Beastmaster',
    faction: await factionRepo.findOneOrFail({ name: Faction.Neutral }),
    isHero: true,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNBeastMaster-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'ANsg' }),
      await abilityRepo.findOneOrFail({ id: 'ANsq' }),
      await abilityRepo.findOneOrFail({ id: 'ANsw' }),
      await abilityRepo.findOneOrFail({ id: 'ANst' }),
    ],
    unabilities: [],
    ordering: 3,
  },
  {
    name: 'Pit Lord',
    faction: await factionRepo.findOneOrFail({ name: Faction.Neutral }),
    isHero: true,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNPitLord-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'anrf' }),
      await abilityRepo.findOneOrFail({ id: 'anht' }),
      await abilityRepo.findOneOrFail({ id: 'anca' }),
      await abilityRepo.findOneOrFail({ id: 'ando' }),
    ],
    unabilities: [],
    ordering: 4,
  },
  {
    name: 'Tinker',
    faction: await factionRepo.findOneOrFail({ name: Faction.Neutral }),
    isHero: true,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNHeroTinker-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'ans3' }),
      await abilityRepo.findOneOrFail({ id: 'anc3' }),
      await abilityRepo.findOneOrFail({ id: 'aneg' }),
      await abilityRepo.findOneOrFail({ id: 'anrg' }),
    ],
    unabilities: [await unabilityRepo.findOneOrFail({ id: 'anrg' })],
    ordering: 5,
  },
  {
    name: 'Firelord',
    faction: await factionRepo.findOneOrFail({ name: Faction.Neutral }),
    isHero: true,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNHeroAvatarOfFlame-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'anso' }),
      await abilityRepo.findOneOrFail({ id: 'anlm' }),
      await abilityRepo.findOneOrFail({ id: 'ania' }),
      await abilityRepo.findOneOrFail({ id: 'anvc' }),
    ],
    unabilities: [],
    ordering: 6,
  },
  {
    name: 'Alchemist',
    faction: await factionRepo.findOneOrFail({ name: Faction.Neutral }),
    isHero: true,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNHeroAlchemist-Reforged.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'anhs' }),
      await abilityRepo.findOneOrFail({ id: 'ancr' }),
      await abilityRepo.findOneOrFail({ id: 'anab' }),
      await abilityRepo.findOneOrFail({ id: 'antm' }),
    ],
    unabilities: [],
    ordering: 7,
  },
  {
    name: 'Misc',
    faction: await factionRepo.findOneOrFail({ name: Faction.Misc }),
    isHero: false,
    isBuilding: false,
    image: await imageRepo.findOneOrFail({
      name: 'BTNArthasEvil.png',
    }),
    abilities: [
      await abilityRepo.findOneOrFail({ id: 'cmdrally' }),
      await abilityRepo.findOneOrFail({ id: 'cmdattack' }),
      await abilityRepo.findOneOrFail({ id: 'cmdstop' }),
      await abilityRepo.findOneOrFail({ id: 'cmdmove' }),
      await abilityRepo.findOneOrFail({ id: 'cmdselectskill' }),
    ],
    unabilities: [],
    ordering: 0,
  },
];

export default createUnits;