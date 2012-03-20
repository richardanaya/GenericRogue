var myRogue = new Rougelike( "Super Roguelike 1.0" )
					.withDescription( "A super fantastic rogue!" );

// create player, these values will be used to create a character creation screen, as well as influence gameplay mechanics
// the min is the minimum allowable value for this stat, the start max is how large it can be 
with( myRogue.character ) {
	hasStat( 'health' ).withMin( 0 ).withMax( 9999 );
	hasStat( 'mana' ).withMin( 0 ).withMax( 9999 );
	hasStat( 'strength' ).withMin( 0 ).withMax( 99 );
	hasStat( 'perception' ).withMin( 0 ).withMax( 99 );
	hasStat( 'endurance' ).withMin( 0 ).withMax( 99 );
	hasStat( 'charisma' ).withMin( 0 ).withMax( 99 );
	hasStat( 'intelligence' ).withMin( 0 ).withMax( 99 );
	hasStat( 'alacrity' ).withMin( 0 ).withMax( 99 );
	hasStat( 'luck' ).withMin( 0 ).withMax( 99 );

	//with stat modifier allows you to make this stat have a multipler based on another stat.
	//in this example, damage has a 15% bonus from strength.
	hasStat( 'damage' ).withMin( 0 ).withMax( 9999 ).withStatModifier( 'strength', 1.15 )
	hasStat( 'defense' ).withMin( 0 ).withMax( 9999 ).withStatModifier( 'endurance', 1.15 )

	canEquip( 'helmet' ).numTimes( 1 );
	canEquip( 'armor' ).numTimes( 1 );
	canEquip( 'gloves' ).numTimes( 1 );
	canEquip( 'ring' ).numTimes( 2 );
	canEquip( 'pants' ).numTimes( 1 );
	canEquip( 'hand' ).numTimes( 2 );
}		
		
myRogue
	.addItem( 'Rusty Sword' )
	.withValue( 10 )
	.canEquipInSlot( 'hand' )
	.whenEquippedModStat( 'strength', '5' )
	.whenEquippedModStat( 'damage', '12' )

myRogue
	.addItem( 'Health Potion' )
	.withValue( 50 )
	.whenUsed( healSelfCommand );

myRouge
	.addItem( 'Flame Sigil Staff' )
	.withValue( 500 )
	.canEquipInSlot( 'hand' )
	.whenEquippedModStat( 'damage', '5' )
	.whenEquippedModStat( 'intelligence', '10' )
	.whenUsed( castFireballCommand );