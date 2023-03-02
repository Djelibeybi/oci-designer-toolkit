/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/
/*
** ======================================================================
** === Auto Generated Code All Edits Will Be Lost During Regeneration ===
** ======================================================================
**
** Generated : 01/03/2023 17:21:08
**
*/

import { OciResource } from "../OciResource"

export interface OciDrgRouteDistribution extends OciResource {
    distributionType: string
    drgId: string
}



export namespace OciDrgRouteDistribution {
    export function newResource(): OciDrgRouteDistribution {
        return {
            ...OciResource.newResource('drg_route_distribution'),
            distributionType: '',
            drgId: ''
        }
    }
    
}

export class OciDrgRouteDistributionClient {
    static new(): OciDrgRouteDistribution {
        return OciDrgRouteDistribution.newResource()
    }
}

export default OciDrgRouteDistributionClient
