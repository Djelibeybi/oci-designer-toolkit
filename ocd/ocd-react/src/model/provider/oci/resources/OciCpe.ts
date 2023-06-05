/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import * as AutoGenerated from "./generated/OciCpe"

export interface OciCpe extends AutoGenerated.OciCpe {}

export namespace OciCpe {
    export function newResource(type?: string): OciCpe {
        return {
            ...AutoGenerated.OciCpe.newResource('cpe'),
        }
    }
    
}

export class OciCpeClient {
    static new(): OciCpe {
        return OciCpe.newResource()
    }
}

export default OciCpeClient
