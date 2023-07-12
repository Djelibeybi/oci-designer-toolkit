/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import * as AutoGenerated from "./generated/OciDrgRouteDistribution"

export interface OciDrgRouteDistribution extends AutoGenerated.OciDrgRouteDistribution {}

export namespace OciDrgRouteDistribution {
    export function newResource(type?: string): OciDrgRouteDistribution {
        return {
            ...AutoGenerated.OciDrgRouteDistribution.newResource('drg_route_distribution'),
        }
    }
    export function cloneResource(resource: OciDrgRouteDistribution, type?: string): OciDrgRouteDistribution {
        return AutoGenerated.OciDrgRouteDistribution.cloneResource(resource, 'drg_route_distribution') as OciDrgRouteDistribution
    }
    export function getParentId(resource: OciDrgRouteDistribution): string {
        console.debug('OciDrgRouteDistribution: Getting Parent Id to for', resource.displayName, resource.id)
        return resource.compartmentId
    }
    export function setParentId(resource: OciDrgRouteDistribution, parentId: string): OciDrgRouteDistribution {
        console.debug('OciDrgRouteDistribution: Setting Parent Id to', parentId, 'for', resource.displayName, resource.id)
        return resource
    }
    
}

export class OciDrgRouteDistributionClient {
    static new(): OciDrgRouteDistribution {
        return OciDrgRouteDistribution.newResource()
    }
    static clone(resource: OciDrgRouteDistribution): OciDrgRouteDistribution {
        return OciDrgRouteDistribution.cloneResource(resource)
    }
}

export default OciDrgRouteDistributionClient
