import * as React from 'react'
import { DialogContent } from '../dialog'
import { CallToAction } from '../lib/call-to-action'

interface INoRemoteProps {
  /** The function to call when the users chooses to publish. */
  readonly onPublish: () => void
}

/** The component for when a repository has no remote. */
export class NoRemote extends React.Component<INoRemoteProps, {}> {
  public render() {
    return (
      <DialogContent>
        <CallToAction actionTitle="Publish" onAction={this.props.onPublish}>
          <div>
            Publish your repository to Wevolver.
          </div>
        </CallToAction>
      </DialogContent>
    )
  }
}
