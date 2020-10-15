import {createSelector} from 'reselect'

//todo сделаем виртуальный select.
// НАПРИМЕР:
/**
    const state = {
        user: {
            profile: {
                name: 'John',
                age: 30
            }
        }
    };
*/

const selectUser = (state) => {
    return state.user
}

export const selectUserProfile = createSelector(
    selectUser,
    (user) => user?.profile
)

export const selectUserName = createSelector(
    selectUserProfile,
    (profile) => profile ? profile.name : 'Unknown'
)

export const selectUserAge = createSelector(
    selectUserProfile,
    (profile) => profile ? profile.age : 'Unknown'
)

export const selectUserNameAndAge = createSelector(
    selectUserName,
    selectUserAge,
    (name, age) => name + age
)



