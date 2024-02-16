/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import { OcdResources } from "../../../OcdDesign"
import * as AutoGenerated from "./generated/OciRemotePeeringConnection"

export interface OciRemotePeeringConnection extends AutoGenerated.OciRemotePeeringConnection {}

export namespace OciRemotePeeringConnection {
    
    export function newResource(type?: string): OciRemotePeeringConnection {
        return {
            ...AutoGenerated.OciRemotePeeringConnection.newResource('remote_peering_connection'),
        }
    }
    export function cloneResource(resource: OciRemotePeeringConnection, type?: string): OciRemotePeeringConnection {
        return AutoGenerated.OciRemotePeeringConnection.cloneResource(resource, 'remote_peering_connection') as OciRemotePeeringConnection
    }
    export function allowedParentTypes(): string[] {
        console.debug('OciRemotePeeringConnection: Allowed Parent Types')
        return []
    }
    export function getParentId(resource: OciRemotePeeringConnection): string {
        console.debug('OciRemotePeeringConnection: Getting Parent Id to for', resource.displayName, resource.id)
        return resource.compartmentId
    }
    export function setParentId(resource: OciRemotePeeringConnection, parentId: string): OciRemotePeeringConnection {
        console.debug('OciRemotePeeringConnection: Setting Parent Id to', parentId, 'for', resource.displayName, resource.id)
        return resource
    }
    export function getConnectionIds(resource: OciRemotePeeringConnection, allResources: OcdResources): string[] {
        // This List of Ids does not include the Parent Id or Compartment Id
        console.debug('OciRemotePeeringConnection: Getting Connection Ids to for', resource.displayName, resource.id)
        return []
    }
    
}

export class OciRemotePeeringConnectionClient {
    static new(): OciRemotePeeringConnection {
        return OciRemotePeeringConnection.newResource()
    }
    static clone(resource: OciRemotePeeringConnection): OciRemotePeeringConnection {
        return OciRemotePeeringConnection.cloneResource(resource)
    }
}

export default OciRemotePeeringConnectionClient
