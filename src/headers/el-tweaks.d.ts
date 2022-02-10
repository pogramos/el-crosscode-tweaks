declare namespace sc {
    interface Arena {
        cupsInitialized: boolean
        trackedCups: string[]
        itemCache: {[id: number]: number}
        damageToHeal: number
    }

    namespace Arena {
        interface KnownScoreTypes {
            DAMAGE_HEALED: true;
        }
    }
    
    interface MapModel {
        extraChests: Record<string, string[]>;

        getExtraFoundChests(this: this, area: string): number
        getExtraAreaChests(this: this, area: string): number
        getTotalExtraFoundChests(this: this): number
        getTotalExtraChests(this: this): number
        registerChests(this: this, areaName: string, ...chestVar: string[]): void
    }

    var ASSIST_TIMING_WINDOW: {[name: string]: number}

    namespace OPTIONS_DEFINITION {
        interface KnownTypesMap {
            "assist-timing-window": sc.OptionDefinition.OBJECT_SLIDER
            "el-flash-step-fix": sc.OptionDefinition.CHECKBOX
            "el-dash-effect": sc.OptionDefinition.CHECKBOX
            "el-arena-hp-bonus": sc.OptionDefinition.CHECKBOX
            "el-arena-item-restore": sc.OptionDefinition.CHECKBOX
        }
    }

    interface TrophyIcon {
        sheet?: string
        customIndex?: number
    }

    var CUSTOM_TROPHY_SHEETS: {[key: string]: ig.Image}

    interface ELItemSpawner extends sc.ModalButtonInteract {
        transitions: Record<string, ig.GuiHook.Transition>;
        ninepatch: ig.NinePatch;
        init(this: this): void;
        onDialogCallback(this: this): void;
    }
    interface ELItemSpawnerConstructor extends ImpactClass<ELItemSpawner> {
        new (): sc.ELItemSpawner;
    }
    var ELItemSpawner: ELItemSpawnerConstructor;

    interface ItemMenu {
        itemSpawnMenu: sc.ELItemSpawner;
        hotkeySpawnItems: sc.ButtonGui;
    }

    interface ELItemSpawnerRarityFilterButton extends ig.FocusGui {
        img: ig.Image;
        rarity: number;
        init(this: this, rarityIndex: number): void;
    }
    interface ELItemSpawnerRarityFilterButtonConstructor extends ImpactClass<ELItemSpawnerRarityFilterButton> {
        new (rarity: number): void;
    }
    var ELItemSpawnerRarityFilterButton: ELItemSpawnerRarityFilterButtonConstructor
}

declare namespace ig {
    namespace Input {
        interface KnownActions {
            walk: true;
            autoThrow: true;
        }
    }
}