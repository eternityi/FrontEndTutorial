// 'use strict';
// 全局启用严格模式

// 函数启用严格模式
/**
 */
function foo() {
  'use strict';
  console.log('function use strict');
}

foo();

// 1.严格模式变量必须被声明
/**
 */
function sloppyFunc1() {
  sloppyVar = 123;
}
sloppyFunc1(); // 严格模式下，未声明的变量赋值会抛出异常
console.log(sloppyVar); // ReferenceError: sloppyVar is not defined

// 2.严格模式下函数
// 2.1 必须在作用域的顶部声明
/**
 */
function strictFunc1() {
  'use strict';
  {
    // 语法错误
    /**
     */
    function nested() {
      console.log('块内声明的函数');
    }
    nested();
  }
}

strictFunc1();

// 消除这个限制
/**
 */
function strictFunc2() {
  'use strict';
  {
    var nested2 = function() {
      console.log('块内声明的函数，赋值给变量');
    }
    nested2();
  }
}

strictFunc2();

// 2.2
