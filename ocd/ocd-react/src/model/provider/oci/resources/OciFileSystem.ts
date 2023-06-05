/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import * as AutoGenerated from "./generated/OciFileSystem"

export interface OciFileSystem extends AutoGenerated.OciFileSystem {}

export namespace OciFileSystem {
    export function newResource(type?: string): OciFileSystem {
        return {
            ...AutoGenerated.OciFileSystem.newResource('file_system'),
        }
    }
    
}

export class OciFileSystemClient {
    static new(): OciFileSystem {
        return OciFileSystem.newResource()
    }
}

export default OciFileSystemClient
