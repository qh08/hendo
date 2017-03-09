import Mock from 'mockjs'
import mockStorage from '../configs/mockStorage'

export default {
  'GET /api/user' (req, res) {
    let response = {
      result: 0,
      message: 'success',
      data: Mock.mock({
        'userList|10-20': [{
          'user_id|+1': 10001
        }]
      })
    }

    res.json(response)
  },
  'GET /api/report' (req, res) {
    const reportListKey = mockStorage('reportList', Mock.mock({
      'reportList|10-20': [{
        'user_id|+1': 10001
      }]
    }).reportList)

    let response = {
      result: 0,
      message: 'success',
      data: {
        reportList: global[reportListKey]
      }
    }

    res.json(response)
  }
}
