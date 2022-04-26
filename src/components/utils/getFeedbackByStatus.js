/* eslint-disable import/no-anonymous-default-export */
import _ from 'lodash'

export default (items, status) => {
 return _.filter(items,{status})
}