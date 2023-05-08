import * as authActions from './auth/actions'
import * as userActions from './user/actions'
import * as modalActions from './modal/actions'

export const allActions = {
    ...authActions,
    ...userActions,
    ...modalActions
}
