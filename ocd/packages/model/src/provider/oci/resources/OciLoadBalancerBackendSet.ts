/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import { OcdResources } from "../../../OcdDesign"
import { OciLoadBalancerBackend } from "./OciLoadBalancerBackend"
import * as AutoGenerated from "./generated/OciLoadBalancerBackendSet"

export interface OciLoadBalancerBackendSet extends AutoGenerated.OciLoadBalancerBackendSet {}

export interface OciHealthChecker extends AutoGenerated.OciHealthChecker {}

export namespace OciLoadBalancerBackendSet {
    
    export interface OciHealthChecker extends AutoGenerated.OciLoadBalancerBackendSet.OciHealthChecker {}

    export function newResource(type?: string): OciLoadBalancerBackendSet {
        return {
            ...AutoGenerated.OciLoadBalancerBackendSet.newResource('load_balancer_backend_set'),
        }
    }
    export function cloneResource(resource: OciLoadBalancerBackendSet, type?: string): OciLoadBalancerBackendSet {
        return AutoGenerated.OciLoadBalancerBackendSet.cloneResource(resource, 'load_balancer_backend_set') as OciLoadBalancerBackendSet
    }
    export function allowedParentTypes(): string[] {
        console.debug('OciLoadBalancerBackendSet: Allowed Parent Types')
        return ['LoadBalancer']
    }
    export function getParentId(resource: OciLoadBalancerBackendSet): string {
        console.debug('OciLoadBalancerBackendSet: Getting Parent Id to for', resource.displayName, resource.id)
        let parentId = resource.loadBalancerId !== '' ? resource.loadBalancerId : resource.compartmentId
        return parentId
    }
    export function setParentId(resource: OciLoadBalancerBackendSet, parentId: string): OciLoadBalancerBackendSet {
        console.debug('OciLoadBalancerBackendSet: Setting Parent Id to', parentId, 'for', resource.displayName, resource.id)
        resource.loadBalancerId = parentId
        return resource
    }
    export function getConnectionIds(resource: OciLoadBalancerBackendSet, allResources: OcdResources): string[] {
        // This List of Ids does not include the Parent Id or Compartment Id
        console.debug('OciLoadBalancerBackendSet: Getting Connection Ids to for', resource.displayName, resource.id)
        // let associationIds = allResources.load_balancer_backend.filter((r) => r.loadBalancerId === resource.loadBalancerId && r.backendsetName === resource.displayName).map((r) => r.instanceId)
        let associationIds = getBackends(resource, allResources).map((r) => r.instanceId)
        return associationIds
    }

    export function getBackends(resource: OciLoadBalancerBackendSet, allResources: OcdResources): OciLoadBalancerBackend[] {
        return allResources.load_balancer_backend ? allResources.load_balancer_backend.filter((r) => r.loadBalancerId === resource.loadBalancerId && r.backendsetName === resource.displayName) : []
    }
    
    export function newOciHealthChecker(): OciHealthChecker {
        return {
            ...AutoGenerated.OciLoadBalancerBackendSet.newOciHealthChecker(),
        }
    }

}

export class OciLoadBalancerBackendSetClient {
    static new(): OciLoadBalancerBackendSet {
        return OciLoadBalancerBackendSet.newResource()
    }
    static clone(resource: OciLoadBalancerBackendSet): OciLoadBalancerBackendSet {
        return OciLoadBalancerBackendSet.cloneResource(resource)
    }
}

export default OciLoadBalancerBackendSetClient
