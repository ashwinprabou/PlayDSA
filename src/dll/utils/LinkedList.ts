// Constructors -------------------------------------------------------------

export class Node {
  data: number;
  next: Node | null;
  prev: Node | null;

  constructor(data: number) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

export class DoublyLinkedList {
  private front: Node | null;
  private back: Node | null;
  private cursor: Node | null;
  private size: number;
  private index: number;

  constructor(initialData?: number[]) {
    this.front = null;
    this.back = null;
    this.cursor = null;

    this.size = 0;
    this.index = -1;

    if (initialData) {
      initialData.forEach((data) => this.append(data));
    }
  }

  // Misc -----------------------------------------------------------------------------

  toArray(): number[] {
    const result: number[] = [];
    let current = this.front;
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  }

  // Movement ----------------------------------------------------------------------------

  moveFront(): void {
    if (this.size > 0) {
      this.cursor = this.front;
      this.index = 0;
    }
  }

  moveBack(): void {
    this.cursor = this.back;
    this.index = this.size - 1;
  }

  movePrev(): void {
    if (this.cursor != this.front) {
      this.cursor = this.cursor!.prev;
      this.index--;
    } else if (this.cursor != null && this.cursor === this.front) {
      this.cursor = null;
      this.index = -1;
    }
  }

  moveNext(): void {
    if (this.cursor === null) {
      return;
    } else if (this.cursor != this.back) {
      this.cursor = this.cursor!.next;
      this.index++;
    } else {
      this.cursor = null;
      this.index = -1;
    }
  }

  //// Insertion -----------------------------------------------------------------------

  append(data: number): void {
    const newNode: Node = { data, next: null, prev: this.back };
    if (this.back) {
      this.back.next = newNode;
    } else {
      this.front = newNode; // List was empty
    }
    this.back = newNode;

    this.size++;
  }

  prepend(data: number): void {
    const newNode: Node = { data, next: this.front, prev: null };
    if (this.front) {
      this.front.prev = newNode;
    } else {
      this.back = newNode;
    }
    this.front = newNode;

    if (this.cursor !== null) {
      this.index++;
    }
    this.size++;
  }

  set(data: number): void {
    if (this.cursor !== null) this.cursor.data = data;
  }

  insertBefore(data: number): void {
    if (this.size > 0 && this.index >= 0) {
      const newNode = new Node(data);
      if (this.cursor == this.front) {
        newNode.next = this.front;
        this.front!.prev = newNode;
        this.front = newNode;
      } else {
        newNode.next = this.cursor;
        newNode.prev = this.cursor!.prev;
        this.cursor!.prev!.next = newNode;
        this.cursor!.prev = newNode;
      }
      this.size++;
      this.index++;
    }
  }

  insertAfter(data: number): void {
    if (this.size > 0 && this.index >= 0) {
      const newNode = new Node(data);
      if (this.cursor == this.back) {
        newNode.prev = this.back;
        this.back!.next = newNode;
        this.back = newNode;
      } else {
        newNode.prev = this.cursor;
        newNode.next = this.cursor!.next;
        this.cursor!.next!.prev = newNode;
        this.cursor!.next = newNode;
      }
      this.size++;
      //this.index++;
    }
  }

  // Deletion --------------------------------------------------------------------------------

  deleteBack(): void | null {
    if (!this.back) return null;
    const newNode = this.back;
    this.back = this.back.prev;
    if (this.back) {
      this.back.next = null;
    } else {
      this.front = null;
    }
    if (this.cursor === newNode) {
      this.cursor = null;
      this.index = -1;
    }
    this.size--;
  }

  deleteFront(): void | null {
    if (!this.front) return null;
    const newNode = this.front;
    this.front = this.front.next;
    if (this.front) {
      this.front.prev = null;
    } else {
      this.back = null;
    }
    if (this.cursor === newNode) {
      this.cursor = null;
      this.index = -1;
    }
    if (this.cursor !== null) {
      this.index--;
    }
    this.size--;
  }

  deleteCursor(): void | null {
    if (this.size <= 0 || this.index < 0 || this.cursor === null) {
      return;
    }
    if (this.cursor === this.front) {
      this.deleteFront();
    } else if (this.cursor === this.back) {
      this.deleteBack();
    } else {
      this.cursor!.prev!.next = this.cursor.next;
      this.cursor!.next!.prev = this.cursor.prev;

      this.cursor = null;
      this.index = -1;
      this.size--;
    }
  }

  clear(): void | null {
    while (this.front != null) {
      this.deleteFront();
    }
  }

  // Access --------------------------------------------------------------------------

  getSize(): number {
    return this.size;
  }

  getIndex(): number {
    return this.cursor ? this.index : -1;
  }

  getFront(): string {
    if (this.front === null || this.size <= 0) {
      return "undefined";
    } else {
      return this.front.data.toString();
    }
  }

  getBack(): string {
    if (this.back === null || this.size <= 0) {
      return "undefined";
    } else {
      return this.back.data.toString();
    }
  }

  get(): string {
    if (this.index < 0 || this.size <= 0) {
      return "undefined";
    } else {
      return this.cursor!.data.toString();
    }
  }
}
