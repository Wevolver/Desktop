import * as React from 'react'
import { WelcomeStep } from './welcome'
import { Account } from '../../models/account'
import { ConfigureGitUser } from '../lib/configure-git-user'
// import { Button } from '../lib/button'

interface IConfigureGitProps {
  readonly accounts: ReadonlyArray<Account>
  readonly advance: (step: WelcomeStep) => void
  readonly done: () => void
}

/** The Welcome flow step to configure git. */
export class ConfigureGit extends React.Component<IConfigureGitProps, {}> {
  public render() {
    return (
      <div id="configure-git">
        <h1 className="welcome-title">Hello, who are you?</h1>
        <p className="welcome-text">
        This information is used to identify the revisions (commits) you create.
        <br></br>
        <br></br>
        If you publish revisions to a public project, anyone will be able to see this information. In the case of private projects only your team members will see these details.
        Note: these identity details do not need to be your Wevolver account login credentials. You will enter those in the next step.
        </p>

        <ConfigureGitUser
          accounts={this.props.accounts}
          onSave={this.continue}
          saveLabel="Continue"
        >
        </ConfigureGitUser>
      </div>
    )
  }

  // private cancel = () => {
  //   this.props.advance(WelcomeStep.Start)
  // }

  private continue = () => {
    // this.props.advance(WelcomeStep.UsageOptOut)
    this.props.done()
  }
}
