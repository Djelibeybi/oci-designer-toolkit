/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import { OcdResources } from "../../../OcdDesign"
import * as AutoGenerated from "./generated/OciNosqlTable"

export interface OciNosqlTable extends AutoGenerated.OciNosqlTable {}

export namespace OciNosqlTable {
    export namespace TableLimits {
        export interface TableLimits extends AutoGenerated.OciNosqlTable.TableLimits.TableLimits {}
        export function newTableLimits(): TableLimits {return AutoGenerated.OciNosqlTable.TableLimits.newTableLimits()}
        
    }
    export function newResource(type?: string): OciNosqlTable {
        const resource = {
            ...AutoGenerated.OciNosqlTable.newResource('nosql_table'),
        }
        return resource
    }
    export function cloneResource(resource: OciNosqlTable, type?: string): OciNosqlTable {
        return AutoGenerated.OciNosqlTable.cloneResource(resource, 'nosql_table') as OciNosqlTable
    }
    export function allowedParentTypes(): string[] {
        return []
    }
    export function getParentId(resource: OciNosqlTable): string {
        const parentId = resource.compartmentId
        return parentId
    }
    export function setParentId(resource: OciNosqlTable, parentId: string): OciNosqlTable {
        return resource
    }
    export function getConnectionIds(resource: OciNosqlTable, allResources: OcdResources): string[] {
        // This List of Ids does not include the Parent Id or Compartment Id
        let associationIds: string[] = []
        return associationIds
    }
}

export class OciNosqlTableClient extends AutoGenerated.OciNosqlTableClient {
    static new(): OciNosqlTable {
        return OciNosqlTable.newResource()
    }
    static clone(resource: OciNosqlTable): OciNosqlTable {
        return OciNosqlTable.cloneResource(resource)
    }
}

export default OciNosqlTableClient