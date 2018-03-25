export class DefaultDict {
  private map: Map<number, any[]>
  constructor() {
    this.map = new Map()
  }
  public add(to, id) {
    let current = this.map.get(to)
    if (!current) {
      current = []
    }
    current.push(id)
    this.map.set(to, current)
  }

  public get(id) {
    return this.map.get(id)
  }

  public toString() {
    for (const key of this.map.keys()) {
      for (const value of this.map.get(key)) {
        console.log(key, value)
      }
    }
  }
}
