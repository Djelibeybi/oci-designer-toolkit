/*
** Copyright (c) 2020, 2023, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import OcdDocument from '../../../../OcdDocument'
import { GeneratedResourceProperties, ResourceAdditionElements, ResourceElementConfig, ResourceProperties } from '../../../OcdPropertyTypes'
import * as AutoGenerated from './generated/OciInstance'
import { OciInstanceConfigs } from './configs/OciInstance'
import { CacheContext } from '../../../../../pages/OcdConsole'
import { useContext } from 'react'
import { OciModelResources as Model } from '@ocd/model'
import { OciVolumeAttachment } from './OciVolumeAttachment'

export const OciInstance = ({ ocdDocument, setOcdDocument, resource }: ResourceProperties): JSX.Element => {
    const configs: ResourceElementConfig[] = OciInstanceConfigs.configs()
    // @ts-ignore
    const {ocdCache, setOcdCache} = useContext(CacheContext)
    const shape = ocdCache.getOciReferenceDataList('shapes').find((r: Record<string, any>) => r.id === resource.shape)
    // For flexible shapes add min / max values based on Cache information for Memory and OCPU
    if (shape !== undefined && shape.isFlexible) {
        const memoryInGbsProps: ResourceElementConfig = {
            id: 'shape_config.memory_in_gbs',
            properties: {
                min: shape.memoryOptions.minInGBs,
                max: shape.memoryOptions.maxInGBs
            },
            configs: []
        }
        const ocpusProps: ResourceElementConfig = {
            id: 'shape_config.ocpus',
            properties: {
                min: shape.ocpuOptions.min,
                max: shape.ocpuOptions.max
            },
            configs: []
        }
        configs.push(memoryInGbsProps)
        configs.push(ocpusProps)
    }
    const additionalElements: ResourceAdditionElements[] = [{jsxElement: OciVolumeAttachmentsObjectList, afterElement: 'source_details'}]
    return (
        <AutoGenerated.OciInstance ocdDocument={ocdDocument} setOcdDocument={(ocdDocument:OcdDocument) => setOcdDocument(ocdDocument)} resource={resource} configs={configs} additionalElements={additionalElements} />
    )
}

export const OciVolumeAttachmentsObjectList = ({ ocdDocument, setOcdDocument, resource, configs, rootResource, additionalElements = [] }: GeneratedResourceProperties): JSX.Element => {
    const onClick = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation()
        e.preventDefault()
        const volumeAttachment = Model.OciVolumeAttachment.newResource()
        Model.OciVolumeAttachment.setParentId(volumeAttachment, rootResource.id)
        ocdDocument.addOciReasourceToList('volume_attachment', volumeAttachment)
        setOcdDocument(OcdDocument.clone(ocdDocument))
    }
    const onDelete = (child: Model.OciVolumeAttachment) => {
        ocdDocument.removeResource(child.id)
        setOcdDocument(OcdDocument.clone(ocdDocument))
    }
    // @ts-ignore 
    return (
        <div className='ocd-property-row'>
            <details open={true}>
                <summary className='summary-background ocd-summary-row'><div>Volume Attachements</div><div className='add-property action-button-background action-button-column action-button' onClick={onClick}></div></summary>
                <div className='ocd-resource-properties'>
                    {ocdDocument.getOciResourceList('volume_attachment').filter((r: Model.OciVolumeAttachment) => r.instanceId === resource.id).map((r: Model.OciVolumeAttachment) => {return <OciVolumeAttachmentsObject ocdDocument={ocdDocument} setOcdDocument={(ocdDocument:OcdDocument) => setOcdDocument(ocdDocument)} resource={r} configs={configs} rootResource={rootResource} onDelete={onDelete} key={r.id}/>})}
                </div>
            </details>
        </div>
    )
}

export const OciVolumeAttachmentsObject = ({ ocdDocument, setOcdDocument, resource, configs, rootResource, onDelete, additionalElements = [] }: GeneratedResourceProperties): JSX.Element => {
    return (
        <div className='ocd-property-row'>
            <OciVolumeAttachment ocdDocument={ocdDocument} setOcdDocument={(ocdDocument: OcdDocument) => setOcdDocument(ocdDocument)} resource={resource} rootResource={rootResource} summaryTitle='Volume' onDelete={onDelete} />
        </div>
    )
}