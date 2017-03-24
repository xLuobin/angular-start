/**
 * Created by X.Jason on 2017/3/23.
 */

import 'core-js'
import 'zone.js'

if ('production' === process.env.ENV) {
  // Production

} else {

  // Development
  Error.stackTraceLimit = Infinity

  /* tslint:disable no-var-requires */
  require('zone.js/dist/long-stack-trace-zone')

}
