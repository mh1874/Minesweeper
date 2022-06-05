/*
 * @Author: mh1874
 * @Date: 2022-06-03 15:44:53
 * @LastEditTime: 2022-06-03 18:15:24
 * @LastEditors: mh1874
 * @Description:
 */
import NProgress from 'nprogress'
import { type UserModule } from '~/types'

export const install: UserModule = ({ isClient, router }) => {
  if (isClient) {
    router.beforeEach((to, from) => {
      if (to.path !== from.path)
        NProgress.start()
    })
    router.afterEach(() => { NProgress.done() })
  }
}
