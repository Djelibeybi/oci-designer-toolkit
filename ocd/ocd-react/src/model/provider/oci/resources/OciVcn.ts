/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

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
    export function getParentId(resource: OciVcn): string {
        console.debug('OciVcn: Getting Parent Id to for', resource.displayName, resource.id)
        return resource.compartmentId
    }
    export function setParentId(resource: OciVcn, parentId: string): OciVcn {
        console.debug('OciVcn: Setting Parent Id to', parentId, 'for', resource.displayName, resource.id)
        return resource
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
