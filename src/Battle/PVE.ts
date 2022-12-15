import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _monster: SimpleFighter[];

  constructor(player: Fighter, monster: SimpleFighter[]) {
    super(player);

    this._monster = monster;
  }

  get monsters(): SimpleFighter[] {
    return this._monster;
  }

  fight(): number {
    this.monsters.forEach((monster) => {
      while (this.player.lifePoints !== -1 && monster.lifePoints !== -1) {
        this.player.attack(monster);
        monster.attack(this.player);
      }
    });

    return super.fight();
  }
}
