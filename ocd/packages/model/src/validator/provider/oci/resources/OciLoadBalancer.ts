/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import * as AutoGenerated from './generated/OciLoadBalancer'
import * as Model from '../../../../provider/oci/resources'
import { OciResources } from '../../../../OcdDesign'
import { OcdResourceValidator, OcdValidationResult, OcdValidatorResource } from '../../../OcdResourceValidator'

export namespace OciLoadBalancer {
    export function validateResource(resource: Model.OciLoadBalancer, resources: OciResources): OcdValidationResult[] {
        return [...AutoGenerated.OciLoadBalancer.validateResource(resource, resources), ...customValidation(resource, resources)]
    }
    export function isResourceValid(resource: Model.OciLoadBalancer, resources: OciResources): boolean {
        return (validateResource(resource, resources).filter((v: OcdValidationResult) => !v.valid).length > 0)
    }
    export function hasErrors(resource: Model.OciLoadBalancer, resources: OciResources): boolean {
        return (validateResource(resource, resources).filter((v: OcdValidationResult) => v.type === 'error').length > 0)
    }
    export function hasWarnings(resource: Model.OciLoadBalancer, resources: OciResources): boolean {
        return (validateResource(resource, resources).filter((v: OcdValidationResult) => v.type === 'warning').length > 0)
    }
    export function hasInformation(resource: Model.OciLoadBalancer, resources: OciResources): boolean {
        return (validateResource(resource, resources).filter((v: OcdValidationResult) => v.type === 'information').length > 0)
    }
    function customValidation(resource: Model.OciLoadBalancer, resources: OciResources): OcdValidationResult[] {
        const results: OcdValidationResult[] = []
        return results
    }
}
