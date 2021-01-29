import { people } from '../../../mocks/data'

export default function handler(req, res) {
  res.status(200).json(people)
}