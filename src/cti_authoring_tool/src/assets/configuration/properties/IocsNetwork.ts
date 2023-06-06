import { Artifact } from "./Artifact";
import { Attribution } from "./Attribution";
import { LastObserved } from "./LastObserved";
import { PropertyType } from "@/assets/scripts/PageEditor";
import { FirstObserved } from "./FirstObserved";
import { ImportCSVPlugin } from "../plugins/ImportCSVPlugin";
import { NetworkIntrusionPhase } from "./NetworkIntrusionPhase";

export const IocsNetwork = {
    id: "ioc_network",
    name: "Network Indicators",
    path: "*.iocs.network",
    type: PropertyType.ComplexTable,
    layout: {
        summary: "{{ attribution }}\n**{{ artifact }}**",
        cols: 2,
        rows: 3
    },
    plugins: [
        { module: ImportCSVPlugin }
    ],
    properties: [
        {
            ...Attribution,
            row: 1,
            col: 1,
        },
        {
            ...NetworkIntrusionPhase,
            row: 1,
            col: 2
        },
        {
            ...Artifact,
            row: 2,
            col: [1,2]
        },
        
        {
            ...FirstObserved,
            row: 3,
            col: 1
        },
        {
            ...LastObserved,
            row: 3,
            col: 2
        }
    ]
}
