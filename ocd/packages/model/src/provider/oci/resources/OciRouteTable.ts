/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import { OcdResources } from "../../../OcdDesign"
import * as AutoGenerated from "./generated/OciRouteTable"

export interface OciRouteTable extends AutoGenerated.OciRouteTable {}

export namespace OciRouteTable {
    export namespace RouteRules {
        export interface RouteRules extends AutoGenerated.OciRouteTable.RouteRules.RouteRules {}
        export function newRouteRules(): RouteRules {return AutoGenerated.OciRouteTable.RouteRules.newRouteRules()}
        
    }
    export function newResource(type?: string): OciRouteTable {
        const resource = {
            ...AutoGenerated.OciRouteTable.newResource('route_table'),
        }
        return resource
    }
    export function cloneResource(resource: OciRouteTable, type?: string): OciRouteTable {
        return AutoGenerated.OciRouteTable.cloneResource(resource, 'route_table') as OciRouteTable
    }
    export function allowedParentTypes(): string[] {
        return ['Vcn']
    }
    export function getParentId(resource: OciRouteTable): string {
        const parentId = resource.vcnId !== '' ? resource.vcnId as string  : resource.compartmentId
        return parentId
    }
    export function setParentId(resource: OciRouteTable, parentId: string): OciRouteTable {
        resource.vcnId = parentId
        return resource
    }
    export function getConnectionIds(resource: OciRouteTable, allResources: OcdResources): string[] {
        // This List of Ids does not include the Parent Id or Compartment Id
        let associationIds: string[] = []
        if (resource.routeRules) associationIds = [...associationIds, ...resource.routeRules.map((r) => r.networkEntityId)]
        return associationIds
    }
}

export class OciRouteTableClient extends AutoGenerated.OciRouteTableClient {
    static new(): OciRouteTable {
        return OciRouteTable.newResource()
    }
    static clone(resource: OciRouteTable): OciRouteTable {
        return OciRouteTable.cloneResource(resource)
    }
}

export default OciRouteTableClient