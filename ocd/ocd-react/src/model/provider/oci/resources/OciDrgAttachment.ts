/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import * as AutoGenerated from "./generated/OciDrgAttachment"

export interface OciDrgAttachment extends AutoGenerated.OciDrgAttachment {}

export interface OciNetworkDetails extends AutoGenerated.OciNetworkDetails {}

export namespace OciDrgAttachment {
    export function newResource(type?: string): OciDrgAttachment {
        return {
            ...AutoGenerated.OciDrgAttachment.newResource('drg_attachment'),
        }
    }
    export function cloneResource(resource: OciDrgAttachment, type?: string): OciDrgAttachment {
        return AutoGenerated.OciDrgAttachment.cloneResource(resource, 'drg_attachment') as OciDrgAttachment
    }
    export function getParentId(resource: OciDrgAttachment): string {
        console.debug('OciDrgAttachment: Getting Parent Id to for', resource.displayName, resource.id)
        return resource.compartmentId
    }
    export function setParentId(resource: OciDrgAttachment, parentId: string): OciDrgAttachment {
        console.debug('OciDrgAttachment: Setting Parent Id to', parentId, 'for', resource.displayName, resource.id)
        return resource
    }
    
    export function newOciNetworkDetails(): OciNetworkDetails {
        return {
            ...AutoGenerated.OciDrgAttachment.newOciNetworkDetails(),
        }
    }

}

export class OciDrgAttachmentClient {
    static new(): OciDrgAttachment {
        return OciDrgAttachment.newResource()
    }
    static clone(resource: OciDrgAttachment): OciDrgAttachment {
        return OciDrgAttachment.cloneResource(resource)
    }
}

export default OciDrgAttachmentClient