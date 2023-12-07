/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import { PaletteResource } from "../../../OcdPalette"
import * as AutoGenerated from "./generated/OciVcn"

export interface OciVcn extends AutoGenerated.OciVcn {}

export namespace OciVcn {
    
    export function newResource(type?: string): OciVcn {
        return {
            ...AutoGenerated.OciVcn.newResource('vcn'),
        }
    }
    export function cloneResource(resource: OciVcn, type?: string): OciVcn {
        return AutoGenerated.OciVcn.cloneResource(resource, 'vcn') as OciVcn
    }
    export function allowedParentTypes(): string[] {
        console.debug('OciVcn: Allowed Parent Types')
        return []
    }
    export function getParentId(resource: OciVcn): string {
        console.debug('OciVcn: Getting Parent Id to for', resource.displayName, resource.id)
        return resource.compartmentId
    }
    export function setParentId(resource: OciVcn, parentId: string): OciVcn {
        console.debug('OciVcn: Setting Parent Id to', parentId, 'for', resource.displayName, resource.id)
        return resource
    }
    export function getConnectionIds(resource: OciVcn): string[] {
        // This List of Ids does not include the Parent Id or Compartment Id
        console.debug('OciVcn: Getting Connection Ids to for', resource.displayName, resource.id)
        return []
    }
    export function getAdditionalResources(): PaletteResource[] {
        const resources: PaletteResource[] = [
            {
                "container": false,
                "title": "Route Table",
                "class": "oci-route-table",
                "provider": "oci"
            },
            {
                "container": false,
                "title": "Security List",
                "class": "oci-security-list",
                "provider": "oci"
            },
            {
                "container": false,
                "title": "DHCP Options",
                "class": "oci-dhcp-options",
                "provider": "oci"
            }
        ]
        return resources
    }
    
}

export class OciVcnClient {
    static new(): OciVcn {
        return OciVcn.newResource()
    }
    static clone(resource: OciVcn): OciVcn {
        return OciVcn.cloneResource(resource)
    }
}

export default OciVcnClient
