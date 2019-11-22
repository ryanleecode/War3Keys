import { Ability } from '../src/main/server/entities/Ability';
import { Repository } from 'typeorm';
import { Image } from '../src/main/server/entities/Image';
const createAbilities: (
  imageRepo: Repository<Image>,
) => Promise<Ability[]> = async (imageRepo) => [
  {
    id: 'cmdcancel',
    name: 'Cancel',
    hotkey: '512',
    image: await imageRepo.findOneOrFail({ name: 'BTNCancel-Reforged.png' }),
    ordering: 11,
  },
  {
    id: 'cmdcancelbuild',
    name: 'Cancel Build',
    hotkey: '512',
    image: await imageRepo.findOneOrFail({ name: 'BTNCancel-Reforged.png' }),
    ordering: 11,
  },
  {
    id: 'cmdrally',
    name: 'Set Rally Point',
    hotkey: 'Y',
    image: await imageRepo.findOneOrFail({
      name: 'BTNRallyPoint-Reforged.png',
    }),
    ordering: 7,
  },
  {
    id: 'cmdattack',
    name: 'Attack',
    hotkey: 'A',
    image: await imageRepo.findOneOrFail({ name: 'BTNAttack-Reforged.png' }),
    ordering: 3,
  },
  {
    id: 'cmdmove',
    name: 'Move',
    hotkey: 'M',
    image: await imageRepo.findOneOrFail({ name: 'BTNMove-Reforged.png' }),
    ordering: 0,
  },
  {
    id: 'cmdselectskill',
    name: 'Set Hero Ability',
    hotkey: 'O',
    image: await imageRepo.findOneOrFail({ name: 'BTNSkillz-Reforged.png' }),
    ordering: 7,
  },
  {
    id: 'cmdstop',
    name: 'Stop',
    hotkey: 'S',
    image: await imageRepo.findOneOrFail({ name: 'BTNStop-Reforged.png' }),
    ordering: 1,
  },
  {
    id: 'ahbz',
    name: 'Blizzard',
    hotkey: 'B',
    image: await imageRepo.findOneOrFail({ name: 'BTNBlizzard-Reforged.png' }),
    ordering: 8,
  },
  {
    id: 'ahwe',
    name: 'Summon Water Elemental',
    hotkey: 'W',
    image: await imageRepo.findOneOrFail({
      name: 'BTNSummonWaterElemental-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'ahab',
    name: 'Brilliance Aura',
    hotkey: 'R',
    image: await imageRepo.findOneOrFail({
      name: 'BTNBrilliance-Reforged.png',
    }),
    ordering: 10,
  },
  {
    id: 'ahmt',
    name: 'Mass Teleport',
    hotkey: 'T',
    image: await imageRepo.findOneOrFail({
      name: 'BTNMassTeleport-Reforged.png',
    }),
    ordering: 11,
  },
  {
    id: 'AHtb',
    name: 'Storm Bolt',
    hotkey: 'T',
    image: await imageRepo.findOneOrFail({
      name: 'BTNStormBolt-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'AHtc',
    name: 'Thunder Clap',
    hotkey: 'C',
    image: await imageRepo.findOneOrFail({
      name: 'BTNThunderClap-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'AHbh',
    name: 'Bash',
    hotkey: 'B',
    image: await imageRepo.findOneOrFail({
      name: 'BTNBash-Reforged.png',
    }),
    ordering: 10,
  },
  {
    id: 'AHav',
    name: 'Avatar',
    hotkey: 'V',
    image: await imageRepo.findOneOrFail({
      name: 'BTNAvatar-Reforged.png',
    }),
    ordering: 11,
  },
  {
    id: 'AHhb',
    name: 'Holy Light',
    hotkey: 'T',
    image: await imageRepo.findOneOrFail({
      name: 'BTNHolyBolt-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'AHds',
    name: 'Divine Shield',
    hotkey: 'D',
    image: await imageRepo.findOneOrFail({
      name: 'BTNDivineIntervention-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'AHad',
    name: 'Devotion Aura',
    hotkey: 'V',
    image: await imageRepo.findOneOrFail({
      name: 'BTNDevotion-Reforged.png',
    }),
    ordering: 10,
  },
  {
    id: 'AHre',
    name: 'Resurrection',
    hotkey: 'R',
    image: await imageRepo.findOneOrFail({
      name: 'BTNResurrection-Reforged.png',
    }),
    ordering: 11,
  },
  {
    id: 'AHfs',
    name: 'Flame Strike',
    hotkey: 'F',
    image: await imageRepo.findOneOrFail({
      name: 'BTNWallOfFire-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'AHbn',
    name: 'Banish',
    hotkey: 'B',
    image: await imageRepo.findOneOrFail({
      name: 'BTNBanish-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'AHdr',
    name: 'Siphon Mana',
    hotkey: 'N',
    image: await imageRepo.findOneOrFail({
      name: 'BTNManaDrain-Reforged.png',
    }),
    ordering: 10,
  },
  {
    id: 'AHpx',
    name: 'Summon Phoenix',
    hotkey: 'X',
    image: await imageRepo.findOneOrFail({
      name: 'BTNMarkOfFire-Reforged.png',
    }),
    ordering: 11,
  },
  {
    id: 'ahrp',
    name: 'Repair',
    hotkey: 'R',
    image: await imageRepo.findOneOrFail({
      name: 'BTNRepairOff-Reforged.png',
    }),
    ordering: 5,
  },
  {
    id: 'ahar',
    name: 'Gather',
    hotkey: 'G',
    image: await imageRepo.findOneOrFail({
      name: 'BTNGatherGold-Reforged.png',
    }),
    ordering: 7,
  },
  {
    id: 'amic',
    name: 'Call To Arms',
    hotkey: 'C',
    image: await imageRepo.findOneOrFail({
      name: 'BTNCallToArms-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'ahrl',
    name: 'Return Resources',
    hotkey: 'E',
    image: await imageRepo.findOneOrFail({
      name: 'BTNReturnGoods-Reforged.png',
    }),
    ordering: 7,
  },
  {
    id: 'cmdbuildhuman',
    name: 'Build Structure',
    hotkey: 'B',
    image: await imageRepo.findOneOrFail({
      name: 'BTNHumanBuild-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'adef',
    name: 'Defend',
    hotkey: 'D',
    image: await imageRepo.findOneOrFail({
      name: 'BTNDefend-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'ahea',
    name: 'Heal',
    hotkey: 'E',
    image: await imageRepo.findOneOrFail({
      name: 'BTNHealOff-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'adis',
    name: 'Dispel Magic',
    hotkey: 'D',
    image: await imageRepo.findOneOrFail({
      name: 'BTNDispelMagic-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'ainf',
    name: 'Inner Fire',
    hotkey: 'F',
    image: await imageRepo.findOneOrFail({
      name: 'BTNInnerFireOff-Reforged.png',
    }),
    ordering: 10,
  },
  {
    id: 'aslo',
    name: 'Slow',
    hotkey: 'W',
    image: await imageRepo.findOneOrFail({
      name: 'BTNSlowOff-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'aivs',
    name: 'Invisibility',
    hotkey: 'I',
    image: await imageRepo.findOneOrFail({
      name: 'BTNInvisibility-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'aply',
    name: 'Polymorph',
    hotkey: 'O',
    image: await imageRepo.findOneOrFail({
      name: 'BTNPolymorph-Reforged.png',
    }),
    ordering: 10,
  },
  {
    id: 'asps',
    name: 'Spell Steal',
    hotkey: 'T',
    image: await imageRepo.findOneOrFail({
      name: 'BTNSpellStealOff-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'acmg',
    name: 'Control Magic',
    hotkey: 'C',
    image: await imageRepo.findOneOrFail({
      name: 'BTNControlMagic-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'afla',
    name: 'Flare',
    hotkey: 'F',
    image: await imageRepo.findOneOrFail({
      name: 'BTNFlare-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'aclf',
    name: 'Cloud',
    hotkey: 'C',
    image: await imageRepo.findOneOrFail({
      name: 'BTNCloudOfFog-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'amls',
    name: 'Aerial Shackles',
    hotkey: 'E',
    image: await imageRepo.findOneOrFail({
      name: 'BTNMagicLariet-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'hpea',
    name: 'Train Peasant',
    hotkey: 'P',
    image: await imageRepo.findOneOrFail({
      name: 'BTNPeasant-Reforged.png',
    }),
    ordering: 0,
  },
  {
    id: 'rhpm',
    name: 'Research Backpack',
    hotkey: 'B',
    image: await imageRepo.findOneOrFail({
      name: 'BTNPackBeast-Reforged.png',
    }),
    ordering: 3,
  },
  {
    id: 'hkee',
    name: 'Upgrade to Keep',
    hotkey: 'U',
    image: await imageRepo.findOneOrFail({
      name: 'BTNKeep-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'hcas',
    name: 'Upgrade to Castle',
    hotkey: 'U',
    image: await imageRepo.findOneOrFail({
      name: 'BTNCastle-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'htow',
    name: 'Build Town Hall',
    hotkey: 'T',
    image: await imageRepo.findOneOrFail({
      name: 'BTNTownHall-Reforged.png',
    }),
    ordering: 0,
  },
  {
    id: 'hbar',
    name: 'Build Barracks',
    hotkey: 'B',
    image: await imageRepo.findOneOrFail({
      name: 'BTNHumanBarracks-Reforged.png',
    }),
    ordering: 1,
  },
  {
    id: 'hlum',
    name: 'Build Lumber Mill',
    hotkey: 'L',
    image: await imageRepo.findOneOrFail({
      name: 'BTNHumanLumberMill-Reforged.png',
    }),
    ordering: 2,
  },
  {
    id: 'hbla',
    name: 'Build Blacksmith',
    hotkey: 'S',
    image: await imageRepo.findOneOrFail({
      name: 'BTNBlacksmith-Reforged.png',
    }),
    ordering: 3,
  },
  {
    id: 'hhou',
    name: 'Build Farm',
    hotkey: 'F',
    image: await imageRepo.findOneOrFail({
      name: 'BTNFarm-Reforged.png',
    }),
    ordering: 4,
  },
  {
    id: 'halt',
    name: 'Build Altar of Kings',
    hotkey: 'A',
    image: await imageRepo.findOneOrFail({
      name: 'BTNAltarOfKings-Reforged.png',
    }),
    ordering: 5,
  },
  {
    id: 'hars',
    name: 'Build Arcane Sanctum',
    hotkey: 'R',
    image: await imageRepo.findOneOrFail({
      name: 'BTNArcaneSanctum-Reforged.png',
    }),
    ordering: 6,
  },
  {
    id: 'harm',
    name: 'Build Workshop',
    hotkey: 'W',
    image: await imageRepo.findOneOrFail({
      name: 'BTNWorkshop-Reforged.png',
    }),
    ordering: 7,
  },
  {
    id: 'hwtw',
    name: 'Build Scout Tower',
    hotkey: 'T',
    image: await imageRepo.findOneOrFail({
      name: 'BTNHumanWatchTower-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'hgra',
    name: 'Build Gryphon Aviary',
    hotkey: 'G',
    image: await imageRepo.findOneOrFail({
      name: 'BTNGryphonAviary-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'hvlt',
    name: 'Build Arcane Vault',
    hotkey: 'V',
    image: await imageRepo.findOneOrFail({
      name: 'BTNArcaneVault-Reforged.png',
    }),
    ordering: 10,
  },
  {
    id: 'hfoo',
    name: 'Train Footman',
    hotkey: 'F',
    image: await imageRepo.findOneOrFail({
      name: 'BTNFootman-Reforged.png',
    }),
    ordering: 0,
  },
  {
    id: 'hrif',
    name: 'Train Rifleman',
    hotkey: 'R',
    image: await imageRepo.findOneOrFail({
      name: 'BTNRifleman-Reforged.png',
    }),
    ordering: 1,
  },
  {
    id: 'hkni',
    name: 'Train Knight',
    hotkey: 'K',
    image: await imageRepo.findOneOrFail({
      name: 'BTNKnight-Reforged.png',
    }),
    ordering: 2,
  },
  {
    id: 'rhde',
    name: 'Research Defend',
    hotkey: 'D',
    image: await imageRepo.findOneOrFail({
      name: 'BTNDefend-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'rhri',
    name: 'Upgrade to Long Rifles',
    hotkey: 'L',
    image: await imageRepo.findOneOrFail({
      name: 'BTNDwarvenLongRifle-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'rhan',
    name: 'Research Animal War Training',
    hotkey: 'A',
    image: await imageRepo.findOneOrFail({
      name: 'BTNAnimalWarTraining-Reforged.png',
    }),
    ordering: 10,
  },
  {
    id: 'rhlh',
    name: 'Improved Lumber Harvesting,Advanced Lumber Harvesting',
    hotkey: 'L',
    image: await imageRepo.findOneOrFail({
      name: 'BTNHumanLumberUpgrade2-Reforged.png',
    }),
    ordering: 0,
  },
  {
    id: 'rhac',
    name:
      'Upgrade to Improved Masonry,Upgrade to Advanced Masonry,Upgrade to Imbued Masonry',
    hotkey: 'M',
    image: await imageRepo.findOneOrFail({
      name: 'BTNImbuedMasonry-Reforged.png',
    }),
    ordering: 1,
  },
  {
    id: 'rhme',
    name:
      'Upgrade to Iron Forged Swords,Upgrade to Steel Forged Swords,Upgrade to Mithril Forged Swords',
    hotkey: 'S',
    image: await imageRepo.findOneOrFail({
      name: 'BTNSteelMelee-Reforged.png',
    }),
    ordering: 0,
  },
  {
    id: 'rhra',
    name:
      'Upgrade to Black Gunpowder,Upgrade Refined Gunpowder,Upgrade to Imbued Gunpowder',
    hotkey: 'G',
    image: await imageRepo.findOneOrFail({
      name: 'BTNHumanMissileUpOne-Reforged.png',
    }),
    ordering: 1,
  },
  {
    id: 'rhar',
    name:
      'Upgrade to Iron Plating,Upgrade to Steel Plating,Upgrade to Mithril Plating',
    hotkey: 'P',
    image: await imageRepo.findOneOrFail({
      name: 'BTNHumanArmorUpTwo-Reforged.png',
    }),
    ordering: 4,
  },
  {
    id: 'rhla',
    name:
      'Upgrade to Studded Leather Armor,Upgrade to Reinforced Leather Armor,Upgrade to Dragonhide Armor',
    hotkey: 'A',
    image: await imageRepo.findOneOrFail({
      name: 'BTNLeatherUpgradeOne-Reforged.png',
    }),
    ordering: 5,
  },
  {
    id: 'Hblm',
    name: 'Summon Blood Mage',
    hotkey: 'B',
    image: await imageRepo.findOneOrFail({
      name: 'BTNHeroBloodElfPrince-Reforged.png',
    }),
    ordering: 4,
  },
  {
    id: 'Hamg',
    name: 'Summon Archmage',
    hotkey: 'A',
    image: await imageRepo.findOneOrFail({
      name: 'BTNHeroArchMage-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'Hmkg',
    name: 'Summon Mountain King',
    hotkey: 'M',
    image: await imageRepo.findOneOrFail({
      name: 'BTNHeroMountainKing-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'Hpal',
    name: 'Summon Paladin',
    hotkey: 'L',
    image: await imageRepo.findOneOrFail({
      name: 'BTNHeroPaladin-Reforged.png',
    }),
    ordering: 10,
  },
  {
    id: 'hsor',
    name: 'Train Sorceress',
    hotkey: 'S',
    image: await imageRepo.findOneOrFail({
      name: 'BTNSorceress-Reforged.png',
    }),
    ordering: 0,
  },
  {
    id: 'hmpr',
    name: 'Train Priest',
    hotkey: 'P',
    image: await imageRepo.findOneOrFail({
      name: 'BTNPriest-Reforged.png',
    }),
    ordering: 1,
  },
  {
    id: 'hspt',
    name: 'Train Spell Breaker',
    hotkey: 'B',
    image: await imageRepo.findOneOrFail({
      name: 'BTNSpellBreaker-Reforged.png',
    }),
    ordering: 2,
  },
  {
    id: 'rhss',
    name: 'Research Control Magic',
    hotkey: 'G',
    image: await imageRepo.findOneOrFail({
      name: 'BTNControlMagic-Reforged.png',
    }),
    ordering: 6,
  },
  {
    id: 'rhst',
    name: 'Sorceress Adept Training,Sorceress Master Training',
    hotkey: 'O',
    image: await imageRepo.findOneOrFail({
      name: 'BTNSorceressAdept-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'rhpt',
    name: 'Priest Adept Training,Priest Master Training',
    hotkey: 'T',
    image: await imageRepo.findOneOrFail({
      name: 'BTNPriestAdept-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'rhse',
    name: 'Research Magic Sentry',
    hotkey: 'M',
    image: await imageRepo.findOneOrFail({
      name: 'BTNMagicalSentry-Reforged.png',
    }),
    ordering: 10,
  },
  {
    id: 'hgyr',
    name: 'Train Flying Machine',
    hotkey: 'F',
    image: await imageRepo.findOneOrFail({
      name: 'BTNFlyingMachine-Reforged.png',
    }),
    ordering: 0,
  },
  {
    id: 'hmtm',
    name: 'Train Mortar Team',
    hotkey: 'M',
    image: await imageRepo.findOneOrFail({
      name: 'BTNMortarTeam-Reforged.png',
    }),
    ordering: 1,
  },
  {
    id: 'hmtt',
    name: 'Train Siege Engine,Train Siege Barrage',
    hotkey: 'E',
    image: await imageRepo.findOneOrFail({
      name: 'BTNSeigeEngine-Reforged.png',
    }),
    ordering: 2,
  },
  {
    id: 'aowk',
    name: 'Wind Walk',
    hotkey: 'W',
    image: await imageRepo.findOneOrFail({
      name: 'BTNWindWalkOn-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'aomi',
    name: 'Mirror Image',
    hotkey: 'R',
    image: await imageRepo.findOneOrFail({
      name: 'BTNMirrorImage-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'aocr',
    name: 'Critical Strike',
    hotkey: 'C',
    image: await imageRepo.findOneOrFail({
      name: 'BTNCriticalStrike-Reforged.png',
    }),
    ordering: 10,
  },
  {
    id: 'aoww',
    name: 'Bladestorm',
    hotkey: 'B',
    image: await imageRepo.findOneOrFail({
      name: 'BTNWhirlwind-Reforged.png',
    }),
    ordering: 11,
  },
  {
    id: 'aocl',
    name: 'Chain Lightning',
    hotkey: 'C',
    image: await imageRepo.findOneOrFail({
      name: 'BTNChainLightning-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'aofs',
    name: 'Far Sight',
    hotkey: 'F',
    image: await imageRepo.findOneOrFail({
      name: 'BTNFarSight-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'aosf',
    name: 'Feral Spirit',
    hotkey: 'T',
    image: await imageRepo.findOneOrFail({
      name: 'BTNSpiritWolf-Reforged.png',
    }),
    ordering: 10,
  },
  {
    id: 'aoeq',
    name: 'Earthquake',
    hotkey: 'E',
    image: await imageRepo.findOneOrFail({
      name: 'BTNEarthquake-Reforged.png',
    }),
    ordering: 11,
  },
  {
    id: 'aosh',
    name: 'Shockwave',
    hotkey: 'W',
    image: await imageRepo.findOneOrFail({
      name: 'BTNShockWave-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'aows',
    name: 'War Stomp',
    hotkey: 'T',
    image: await imageRepo.findOneOrFail({
      name: 'BTNWarStomp-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'aoae',
    name: 'Endurance Aura',
    hotkey: 'E',
    image: await imageRepo.findOneOrFail({
      name: 'BTNCommand-Reforged.png',
    }),
    ordering: 11,
  },
  {
    id: 'aore',
    name: 'Reincarnation',
    hotkey: 'R',
    image: await imageRepo.findOneOrFail({
      name: 'BTNReincarnation-Reforged.png',
    }),
    ordering: 12,
  },
  {
    id: 'arep',
    name: 'Repair',
    hotkey: 'R',
    image: await imageRepo.findOneOrFail({
      name: 'BTNRepairOff-Reforged.png',
    }),
    ordering: 5,
  },
  {
    id: 'aaha',
    name: 'Gather',
    hotkey: 'G',
    image: await imageRepo.findOneOrFail({
      name: 'BTNGatherGold-Reforged.png',
    }),
    ordering: 7,
  },
  {
    id: 'aohw',
    name: 'Healing Wave',
    hotkey: 'E',
    image: await imageRepo.findOneOrFail({
      name: 'BTNHealingWave-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'aohx',
    name: 'Hex',
    hotkey: 'X',
    image: await imageRepo.findOneOrFail({
      name: 'BTNHex-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'aosw',
    name: 'Serpent Ward',
    hotkey: 'W',
    image: await imageRepo.findOneOrFail({
      name: 'BTNSerpentWardLv4.png',
    }),
    ordering: 10,
  },
  {
    id: 'aovd',
    name: 'Big Bad Voodoo',
    hotkey: 'V',
    image: await imageRepo.findOneOrFail({
      name: 'BTNBigBadVoodooSpell-Reforged.png',
    }),
    ordering: 11,
  },
  {
    id: 'absk',
    name: 'Berserk',
    hotkey: 'B',
    image: await imageRepo.findOneOrFail({
      name: 'BTNBerserkForTrolls-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'apg2',
    name: 'Purge',
    hotkey: 'G',
    image: await imageRepo.findOneOrFail({
      name: 'BTNPurge-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'alsh',
    name: 'Lightning Shield',
    hotkey: 'L',
    image: await imageRepo.findOneOrFail({
      name: 'BTNLightningShield-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'ablo',
    name: 'Bloodlust',
    hotkey: 'B',
    image: await imageRepo.findOneOrFail({
      name: 'BTNBloodLustOff-Reforged.png',
    }),
    ordering: 10,
  },
  {
    id: 'aeye',
    name: 'Sentry Ward',
    hotkey: 'W',
    image: await imageRepo.findOneOrFail({
      name: 'BTNSentryWard-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'asta',
    name: 'Stasis Trap',
    hotkey: 'T',
    image: await imageRepo.findOneOrFail({
      name: 'BTNSentryWard-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'ahwd',
    name: 'Healing Ward',
    hotkey: 'E',
    image: await imageRepo.findOneOrFail({
      name: 'BTNHealingWard-Reforged.png',
    }),
    ordering: 10,
  },
  {
    id: 'aspl',
    name: 'Spirit Link',
    hotkey: 'R',
    image: await imageRepo.findOneOrFail({
      name: 'BTNSpiritLink-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'adcn',
    name: 'Disenchant',
    hotkey: 'D',
    image: await imageRepo.findOneOrFail({
      name: 'BTNDisenchant-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'aast',
    name: 'Ancestral Spirit',
    hotkey: 'C',
    image: await imageRepo.findOneOrFail({
      name: 'BTNAncestralSpirit-Reforged.png',
    }),
    ordering: 10,
  },
  {
    id: 'acpf',
    name: 'Ethereal Form',
    hotkey: 'F',
    image: await imageRepo.findOneOrFail({
      name: 'BTNEtherealFormOn-Reforged.png',
    }),
    ordering: 11,
  },
  {
    id: 'aens',
    name: 'Ensnare',
    hotkey: 'E',
    image: await imageRepo.findOneOrFail({
      name: 'BTNEnsnare-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'adev',
    name: 'Devour',
    hotkey: 'D',
    image: await imageRepo.findOneOrFail({
      name: 'BTNDevour-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'auco',
    name: 'Unstable Concoction',
    hotkey: 'C',
    image: await imageRepo.findOneOrFail({
      name: 'BTNUnstableConcoction-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'audc',
    name: 'Death Coil',
    hotkey: 'C',
    image: await imageRepo.findOneOrFail({
      name: 'BTNDeathCoil-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'audp',
    name: 'Death Pact',
    hotkey: 'E',
    image: await imageRepo.findOneOrFail({
      name: 'BTNDeathPact-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'auau',
    name: 'Unholy Aura',
    hotkey: 'U',
    image: await imageRepo.findOneOrFail({
      name: 'BTNUnholyAura-Reforged.png',
    }),
    ordering: 10,
  },
  {
    id: 'auan',
    name: 'Animate Dead',
    hotkey: 'D',
    image: await imageRepo.findOneOrFail({
      name: 'BTNAnimateDead-Reforged.png',
    }),
    ordering: 11,
  },
  {
    id: 'aucs',
    name: 'Carrion Swarm',
    hotkey: 'C',
    image: await imageRepo.findOneOrFail({
      name: 'BTNCarrionSwarm-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'ausl',
    name: 'Sleep',
    hotkey: 'E',
    image: await imageRepo.findOneOrFail({
      name: 'BTNSleep-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'auav',
    name: 'Vampiric Aura',
    hotkey: 'V',
    image: await imageRepo.findOneOrFail({
      name: 'BTNVampiricAura-Reforged.png',
    }),
    ordering: 10,
  },
  {
    id: 'auin',
    name: 'Inferno',
    hotkey: 'N',
    image: await imageRepo.findOneOrFail({
      name: 'BTNInfernal-Reforged.png',
    }),
    ordering: 11,
  },
  {
    id: 'aufn',
    name: 'Frost Nova',
    hotkey: 'N',
    image: await imageRepo.findOneOrFail({
      name: 'BTNGlacier-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'aufu',
    name: 'Frost Armor',
    hotkey: 'F',
    image: await imageRepo.findOneOrFail({
      name: 'BTNFrostArmorOff-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'audr',
    name: 'Dark Ritual',
    hotkey: 'R',
    image: await imageRepo.findOneOrFail({
      name: 'BTNDarkRitual-Reforged.png',
    }),
    ordering: 10,
  },
  {
    id: 'audd',
    name: 'Death And Decay',
    hotkey: 'D',
    image: await imageRepo.findOneOrFail({
      name: 'BTNDeathAndDecay-Reforged.png',
    }),
    ordering: 11,
  },
  {
    id: 'auim',
    name: 'Impale',
    hotkey: 'E',
    image: await imageRepo.findOneOrFail({
      name: 'BTNImpale-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'auts',
    name: 'Spiked Carapace',
    hotkey: 'S',
    image: await imageRepo.findOneOrFail({
      name: 'BTNThornShield-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'aucb',
    name: 'Carrion Beetles',
    hotkey: 'C',
    image: await imageRepo.findOneOrFail({
      name: 'BTNCarrionScarabsOff-Reforged.png',
    }),
    ordering: 10,
  },
  {
    id: 'auls',
    name: 'Locust Swarm',
    hotkey: 'L',
    image: await imageRepo.findOneOrFail({
      name: 'BTNCarrionSwarm-Reforged.png',
    }),
    ordering: 11,
  },
  {
    id: 'arst',
    name: 'Restore',
    hotkey: 'R',
    image: await imageRepo.findOneOrFail({
      name: 'BTNRepairOff-Reforged.png',
    }),
    ordering: 5,
  },
  {
    id: 'aaha',
    name: 'Gather',
    hotkey: 'G',
    image: await imageRepo.findOneOrFail({
      name: 'BTNGatherGold-Reforged.png',
    }),
    ordering: 6,
  },
  {
    id: 'alam',
    name: 'Sacrifice',
    hotkey: 'C',
    image: await imageRepo.findOneOrFail({
      name: 'BTNSacrifice-Reforged.png',
    }),
    ordering: 10,
  },
  {
    id: 'acan',
    name: 'Cannibalize',
    hotkey: 'C',
    image: await imageRepo.findOneOrFail({
      name: 'BTNCannibalize-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'aweb',
    name: 'Web',
    hotkey: 'W',
    image: await imageRepo.findOneOrFail({
      name: 'BTNWebOff-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'abur',
    name: 'Burrow',
    hotkey: 'B',
    image: await imageRepo.findOneOrFail({
      name: 'BTNCryptFiendBurrow-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'astn',
    name: 'Stone Form',
    hotkey: 'F',
    image: await imageRepo.findOneOrFail({
      name: 'BTNStoneForm-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'amel',
    name: 'Get Corpse',
    hotkey: 'C',
    image: await imageRepo.findOneOrFail({
      name: 'BTNUndeadLoadOff-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'amed',
    name: 'Drop All Corpses',
    hotkey: 'D',
    image: await imageRepo.findOneOrFail({
      name: 'BTNUndeadUnLoad-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'arai',
    name: 'Raise Dead',
    hotkey: 'R',
    image: await imageRepo.findOneOrFail({
      name: 'BTNRaiseDeadOff-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'auhf',
    name: 'Unholy Frenzy',
    hotkey: 'U',
    image: await imageRepo.findOneOrFail({
      name: 'BTNUnholyFrenzy-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'acri',
    name: 'Cripple',
    hotkey: 'C',
    image: await imageRepo.findOneOrFail({
      name: 'BTNCripple-Reforged.png',
    }),
    ordering: 10,
  },
  {
    id: 'acrs',
    name: 'Curse',
    hotkey: 'C',
    image: await imageRepo.findOneOrFail({
      name: 'BTNCurseOff-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'aam2',
    name: 'Anti-Magic Shell',
    hotkey: 'N',
    image: await imageRepo.findOneOrFail({
      name: 'BTNAntiMagicShell-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'aps2',
    name: 'Possession',
    hotkey: 'C',
    image: await imageRepo.findOneOrFail({
      name: 'BTNPossession-Reforged.png',
    }),
    ordering: 10,
  },
  {
    id: 'arpl',
    name: 'Essence of Blight',
    hotkey: 'B',
    image: await imageRepo.findOneOrFail({
      name: 'BTNReplenishHealthOff-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'arpm',
    name: 'Spirit Touch',
    hotkey: 'C',
    image: await imageRepo.findOneOrFail({
      name: 'BTNReplenishManaOff-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'ubsp',
    name: 'Morph Into Destroyer',
    hotkey: 'T',
    image: await imageRepo.findOneOrFail({
      name: 'BTNDestroyer-Reforged.png',
    }),
    ordering: 10,
  },
  {
    id: 'aabs',
    name: 'Absorb Mana',
    hotkey: 'B',
    image: await imageRepo.findOneOrFail({
      name: 'BTNAbsorbMagic-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'advm',
    name: 'Devour Magic',
    hotkey: 'D',
    image: await imageRepo.findOneOrFail({
      name: 'BTNDevourMagic-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'afak',
    name: 'Orb Of Annihilation',
    hotkey: 'O',
    image: await imageRepo.findOneOrFail({
      name: 'BTNOrbOfDeathOff-Reforged.png',
    }),
    ordering: 10,
  },
  {
    id: 'aemb',
    name: 'Mana Burn',
    hotkey: 'B',
    image: await imageRepo.findOneOrFail({
      name: 'BTNManaBurn-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'aeim',
    name: 'Immolation',
    hotkey: 'L',
    image: await imageRepo.findOneOrFail({
      name: 'BTNImmolationOn-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'aeev',
    name: 'Evasion',
    hotkey: 'E',
    image: await imageRepo.findOneOrFail({
      name: 'BTNEvasion-Reforged.png',
    }),
    ordering: 10,
  },
  {
    id: 'aeme',
    name: 'Metamorphosis',
    hotkey: 'T',
    image: await imageRepo.findOneOrFail({
      name: 'BTNMetamorphosis-Reforged.png',
    }),
    ordering: 11,
  },
  {
    id: 'aeer',
    name: 'Entangling Roots',
    hotkey: 'E',
    image: await imageRepo.findOneOrFail({
      name: 'BTNEntanglingRoots-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'aefn',
    name: 'Force of Nature',
    hotkey: 'F',
    image: await imageRepo.findOneOrFail({
      name: 'BTNForceOfNature-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'aeah',
    name: 'Thorns Aura',
    hotkey: 'R',
    image: await imageRepo.findOneOrFail({
      name: 'BTNThorns-Reforged.png',
    }),
    ordering: 10,
  },
  {
    id: 'aetq',
    name: 'Tranquility',
    hotkey: 'T',
    image: await imageRepo.findOneOrFail({
      name: 'BTNTranquility-Reforged.png',
    }),
    ordering: 11,
  },
  {
    id: 'aest',
    name: 'Scout',
    hotkey: 'C',
    image: await imageRepo.findOneOrFail({
      name: 'BTNScout-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'ahfa',
    name: 'Searing Arrows',
    hotkey: 'R',
    image: await imageRepo.findOneOrFail({
      name: 'BTNSearingArrowsOff-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'aear',
    name: 'Trueshot Aura',
    hotkey: 'T',
    image: await imageRepo.findOneOrFail({
      name: 'BTNTrueShot-Reforged.png',
    }),
    ordering: 10,
  },
  {
    id: 'aesf',
    name: 'Starfall',
    hotkey: 'F',
    image: await imageRepo.findOneOrFail({
      name: 'BTNStarFall-Reforged.png',
    }),
    ordering: 11,
  },
  {
    id: 'ashm',
    name: 'Hide',
    hotkey: 'I',
    image: await imageRepo.findOneOrFail({
      name: 'BTNShadowMeld-Reforged.png',
    }),
    ordering: 5,
  },
  {
    id: 'aefk',
    name: 'Fan of Knives',
    hotkey: 'F',
    image: await imageRepo.findOneOrFail({
      name: 'BTNFanOfKnives-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'aebl',
    name: 'Blink',
    hotkey: 'B',
    image: await imageRepo.findOneOrFail({
      name: 'BTNBlink-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'aesh',
    name: 'Shadow Strike',
    hotkey: 'D',
    image: await imageRepo.findOneOrFail({
      name: 'BTNShadowStrike-Reforged.png',
    }),
    ordering: 10,
  },
  {
    id: 'aesv',
    name: 'Vengeance',
    hotkey: 'V',
    image: await imageRepo.findOneOrFail({
      name: 'BTNSpiritOfVengeance-Reforged.png',
    }),
    ordering: 11,
  },
  {
    id: 'aren',
    name: 'Renew',
    hotkey: 'R',
    image: await imageRepo.findOneOrFail({
      name: 'BTNWispHealOff-Reforged.png',
    }),
    ordering: 5,
  },
  {
    id: 'awha',
    name: 'Gather',
    hotkey: 'G',
    image: await imageRepo.findOneOrFail({
      name: 'BTNGatherGold-Reforged.png',
    }),
    ordering: 6,
  },
  {
    id: 'adtn',
    name: 'Detonate',
    hotkey: 'D',
    image: await imageRepo.findOneOrFail({
      name: 'BTNWispSplode-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'aco2',
    name: 'Mount Hippogryph',
    hotkey: 'U',
    image: await imageRepo.findOneOrFail({
      name: 'BTNHippogriffRider-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'aesn',
    name: 'Sentinel',
    hotkey: 'E',
    image: await imageRepo.findOneOrFail({
      name: 'BTNSentinel-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'aadm',
    name: 'Abolish Magic',
    hotkey: 'B',
    image: await imageRepo.findOneOrFail({
      name: 'BTNDryadDispelMagicOff-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'acro',
    name: 'Roar',
    hotkey: 'R',
    image: await imageRepo.findOneOrFail({
      name: 'BTNBattleRoar-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'acr2',
    name: 'Rejuvenation',
    hotkey: 'E',
    image: await imageRepo.findOneOrFail({
      name: 'BTNRejuvenation-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'abrf',
    name: 'Bear Form',
    hotkey: 'F',
    image: await imageRepo.findOneOrFail({
      name: 'BTNBearForm-Reforged.png',
    }),
    ordering: 10,
  },
  {
    id: 'atau',
    name: 'Taunt',
    hotkey: 'T',
    image: await imageRepo.findOneOrFail({
      name: 'BTNTaunt-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'agra',
    name: 'War Club',
    hotkey: 'W',
    image: await imageRepo.findOneOrFail({
      name: 'BTNGrabTree-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'aco3',
    name: 'Pick up Archer',
    hotkey: 'U',
    image: await imageRepo.findOneOrFail({
      name: 'BTNHippogriffRider-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'adec',
    name: 'Dismount',
    hotkey: 'U',
    image: await imageRepo.findOneOrFail({
      name: 'BTNArcher-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'afae',
    name: 'Faerie Fire',
    hotkey: 'R',
    image: await imageRepo.findOneOrFail({
      name: 'BTNFaerieFireOff-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'acyc',
    name: 'Cyclone',
    hotkey: 'C',
    image: await imageRepo.findOneOrFail({
      name: 'BTNCyclone-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'arav',
    name: 'Crow Form',
    hotkey: 'F',
    image: await imageRepo.findOneOrFail({
      name: 'BTNRavenForm-Reforged.png',
    }),
    ordering: 10,
  },
  {
    id: 'apsh',
    name: 'Faerie Dragon',
    hotkey: 'E',
    image: await imageRepo.findOneOrFail({
      name: 'BTNPhaseShiftOff-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'amfl',
    name: 'Mana Flare',
    hotkey: 'F',
    image: await imageRepo.findOneOrFail({
      name: 'BTNManaFlare-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'etol',
    name: 'Create Tree of Life',
    hotkey: 'T',
    image: await imageRepo.findOneOrFail({
      name: 'BTNTreeOfLife-Reforged.png',
    }),
    ordering: 0,
  },
  {
    id: 'emow',
    name: 'Create Moon Well',
    hotkey: 'M',
    image: await imageRepo.findOneOrFail({
      name: 'BTNMoonWell-Reforged.png',
    }),
    ordering: 4,
  },
  {
    id: 'eate',
    name: 'Create Altar of Elders',
    hotkey: 'A',
    image: await imageRepo.findOneOrFail({
      name: 'BTNAltarOfElders-Reforged.png',
    }),
    ordering: 5,
  },
  {
    id: 'eden',
    name: 'Create Ancient of Wonders',
    hotkey: 'D',
    image: await imageRepo.findOneOrFail({
      name: 'BTNAncientOfWonders-Reforged.png',
    }),
    ordering: 10,
  },
  {
    id: 'edob',
    name: "Create Hunter's Hall",
    hotkey: 'H',
    image: await imageRepo.findOneOrFail({
      name: 'BTNHuntersHall-Reforged.png',
    }),
    ordering: 2,
  },
  {
    id: 'etrp',
    name: 'Create Ancient Protector',
    hotkey: 'P',
    image: await imageRepo.findOneOrFail({
      name: 'BTNTreant-Reforged.png',
    }),
    ordering: 3,
  },
  {
    id: 'eaom',
    name: 'Create Ancient of War',
    hotkey: 'R',
    image: await imageRepo.findOneOrFail({
      name: 'BTNAncientOfTheEarth-Reforged.png',
    }),
    ordering: 1,
  },
  {
    id: 'eaow',
    name: 'Create Ancient of Wind',
    hotkey: 'W',
    image: await imageRepo.findOneOrFail({
      name: 'BTNAncientOfTheMoon-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'eaoe',
    name: 'Create Ancient of Lore',
    hotkey: 'L',
    image: await imageRepo.findOneOrFail({
      name: 'BTNAncientOfLore-Reforged.png',
    }),
    ordering: 6,
  },
  {
    id: 'edos',
    name: 'Create Chimera Roost',
    hotkey: 'C',
    image: await imageRepo.findOneOrFail({
      name: 'BTNChimaeraRoost-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'anfl',
    name: 'Forked Lightning',
    hotkey: 'F',
    image: await imageRepo.findOneOrFail({
      name: 'BTNMonsoon-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'anfa',
    name: 'Frost Arrows',
    hotkey: 'R',
    image: await imageRepo.findOneOrFail({
      name: 'BTNColdArrowsOff-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'anms',
    name: 'Mana Shield',
    hotkey: 'R',
    image: await imageRepo.findOneOrFail({
      name: 'BTNManaShield-Reforged.png',
    }),
    ordering: 10,
  },
  {
    id: 'anto',
    name: 'Tornado',
    hotkey: 'T',
    image: await imageRepo.findOneOrFail({
      name: 'BTNTornado-Reforged.png',
    }),
    ordering: 11,
  },
  {
    id: 'ansi',
    name: 'Silence',
    hotkey: 'E',
    image: await imageRepo.findOneOrFail({
      name: 'BTNSilence-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'anba',
    name: 'Black Arrow',
    hotkey: 'B',
    image: await imageRepo.findOneOrFail({
      name: 'BTNTheBlackArrowOnOff-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'andr',
    name: 'Life Drain',
    hotkey: 'D',
    image: await imageRepo.findOneOrFail({
      name: 'BTNLifeDrain-Reforged.png',
    }),
    ordering: 10,
  },
  {
    id: 'anch',
    name: 'Charm',
    hotkey: 'T',
    image: await imageRepo.findOneOrFail({
      name: 'BTNCharm-Reforged.png',
    }),
    ordering: 11,
  },
  {
    id: 'anbf',
    name: 'Breath Of Fire',
    hotkey: 'F',
    image: await imageRepo.findOneOrFail({
      name: 'BTNBreathOfFire-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'andh',
    name: 'Drunken Haze',
    hotkey: 'D',
    image: await imageRepo.findOneOrFail({
      name: 'BTNStrongDrink-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'andb',
    name: 'Drunken Brawler',
    hotkey: 'B',
    image: await imageRepo.findOneOrFail({
      name: 'BTNDrunkenDodge-Reforged.png',
    }),
    ordering: 10,
  },
  {
    id: 'anef',
    name: 'Storm Earth And Fire',
    hotkey: 'E',
    image: await imageRepo.findOneOrFail({
      name: 'BTNStormEarth&amp;Fire-Reforged.png',
    }),
    ordering: 11,
  },
  {
    id: 'ANsg',
    name: 'Summon Bear',
    hotkey: 'B',
    image: await imageRepo.findOneOrFail({
      name: 'BTNGrizzlyBear-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'ANsq',
    name: 'Summon Quilbeast',
    hotkey: 'Q',
    image: await imageRepo.findOneOrFail({
      name: 'BTNQuillBeast-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'ANsw',
    name: 'Summon Hawk',
    hotkey: 'W',
    image: await imageRepo.findOneOrFail({
      name: 'BTNWarEagle-Reforged.png',
    }),
    ordering: 10,
  },
  {
    id: 'ANst',
    name: 'Stampede',
    hotkey: 'T',
    image: await imageRepo.findOneOrFail({
      name: 'BTNStampede-Reforged.png',
    }),
    ordering: 11,
  },
  {
    id: 'anrf',
    name: 'Rain of Fire',
    hotkey: 'F',
    image: await imageRepo.findOneOrFail({
      name: 'BTNFire-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'anht',
    name: 'Howl of Terror',
    hotkey: 'T',
    image: await imageRepo.findOneOrFail({
      name: 'BTNHowlOfTerror-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'anca',
    name: 'Cleaving Attack',
    hotkey: 'C',
    image: await imageRepo.findOneOrFail({
      name: 'BTNCleavingAttack-Reforged.png',
    }),
    ordering: 10,
  },
  {
    id: 'ando',
    name: 'Doom',
    hotkey: 'D',
    image: await imageRepo.findOneOrFail({
      name: 'BTNDoom-Reforged.png',
    }),
    ordering: 11,
  },
  {
    id: 'ans3',
    name: 'Pocket Factory',
    hotkey: 'F',
    image: await imageRepo.findOneOrFail({
      name: 'BTNPocketFactory-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'anc3',
    name: 'Cluster Rockets',
    hotkey: 'R',
    image: await imageRepo.findOneOrFail({
      name: 'BTNClusterRockets-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'aneg',
    name: 'Engineering Upgrade',
    hotkey: 'E',
    image: await imageRepo.findOneOrFail({
      name: 'BTNEngineeringUpgrade-Reforged.png',
    }),
    ordering: 10,
  },
  {
    id: 'anrg',
    name: 'Robo-Goblin',
    hotkey: 'B',
    image: await imageRepo.findOneOrFail({
      name: 'BTNROBOGOBLIN-Reforged.png',
    }),
    ordering: 11,
  },
  {
    id: 'anso',
    name: 'Soul Burn',
    hotkey: 'B',
    image: await imageRepo.findOneOrFail({
      name: 'BTNSoulBurn-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'anlm',
    name: 'Summon Lava Spawn',
    hotkey: 'W',
    image: await imageRepo.findOneOrFail({
      name: 'BTNLavaSpawn-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'ania',
    name: 'Incinerate',
    hotkey: 'C',
    image: await imageRepo.findOneOrFail({
      name: 'BTNIncinerate-Reforged.png',
    }),
    ordering: 10,
  },
  {
    id: 'anvc',
    name: 'Volcano',
    hotkey: 'V',
    image: await imageRepo.findOneOrFail({
      name: 'BTNVolcano-Reforged.png',
    }),
    ordering: 11,
  },
  {
    id: 'anhs',
    name: 'Healing Spray',
    hotkey: 'E',
    image: await imageRepo.findOneOrFail({
      name: 'BTNHealingSpray-Reforged.png',
    }),
    ordering: 8,
  },
  {
    id: 'ancr',
    name: 'Chemical Rage',
    hotkey: 'R',
    image: await imageRepo.findOneOrFail({
      name: 'BTNChemicalRage-Reforged.png',
    }),
    ordering: 9,
  },
  {
    id: 'anab',
    name: 'Acid Bomb',
    hotkey: 'B',
    image: await imageRepo.findOneOrFail({
      name: 'BTNAcidBomb-Reforged.png',
    }),
    ordering: 10,
  },
  {
    id: 'antm',
    name: 'Transmute',
    hotkey: 'T',
    image: await imageRepo.findOneOrFail({
      name: 'BTNTransmute-Reforged.png',
    }),
    ordering: 11,
  },
];
export default createAbilities;
