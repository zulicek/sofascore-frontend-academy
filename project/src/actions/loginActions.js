export const FETCH_STARTED = 'FETCH_STARTED'
export const FETCH_SUCCESSFUL = 'FETCH_SUCCESSFUL'
export const FETCH_FAILED = 'FETCH_FAILED'

export const fetchStarted = () => ({ type: FETCH_STARTED })
export const fetchSuccessful = user => ({ type: FETCH_SUCCESSFUL, user })
export const fetchFailed = error => ({ type: FETCH_FAILED, error })