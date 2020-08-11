import { ItemConfig } from "./interfaces";

export default function getConfig (depth: number): ItemConfig {
    switch (depth) {
        case 0: return {replyable: true, whistleBlow: true, foldable: true};
        case 1: return {replyable: true, whistleBlow: true, foldable: true};
        case 2: return {replyable: false, whistleBlow: true, foldable: false}
    }
}