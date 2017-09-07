describe("Included matchers:", function() {
    
      it("The 'toBe' matcher compares with ===", function() {
        var a = 12;
        var b = a;
    
        expect(a).toBe(b);
        expect(a).not.toBe(null);
      });
    
      describe("The 'toEqual' matcher", function() {
    
        it("works for simple literals and variables", function() {
          var a = 12;
          expect(a).toEqual(12);
        });
    
        it("should work for objects", function() {
          var foo = {
            a: 12,
            b: 34
          };
          var bar = {
            a: 12,
            b: 34
          };
          expect(foo).toEqual(bar);
        });
      });
    
      it("The 'toMatch' matcher is for regular expressions", function() {
        var message = "foo bar baz";
    
        expect(message).toMatch(/bar/);
        expect(message).toMatch("bar");
        expect(message).not.toMatch(/quux/);
      });
    
      it("The 'toBeDefined' matcher compares against `undefined`", function() {
        var a = {
          foo: "foo"
        };
    
        expect(a.foo).toBeDefined();
        expect(a.bar).not.toBeDefined();
      });
    
      it("The `toBeUndefined` matcher compares against `undefined`", function() {
        var a = {
          foo: "foo"
        };
    
        expect(a.foo).not.toBeUndefined();
        expect(a.bar).toBeUndefined();
      });
    
      it("The 'toBeNull' matcher compares against null", function() {
        var a = null;
        var foo = "foo";
    
        expect(null).toBeNull();
        expect(a).toBeNull();
        expect(foo).not.toBeNull();
      });
    
      it("The 'toBeTruthy' matcher is for boolean casting testing", function() {
        var a = 0, foo = "foo";
    
        expect(foo).toBeTruthy();
        expect(a).not.toBeTruthy();
      });
    
      it("The 'toBeFalsy' matcher is for boolean casting testing", function() {
        var a, foo = "foo";
    
        expect(a).toBeFalsy();
        expect(foo).not.toBeFalsy();
      });
    
      describe("The 'toContain' matcher", function() {
        it("works for finding an item in an Array", function() {
          var a = ["foo", "bar", "baz"];
    
          expect(a).toContain("bar");
          expect(a).not.toContain("quux");
        });
    
        it("also works for finding a substring", function() {
          var a = "foo bar baz";
    
          expect(a).toContain("bar");
          expect(a).not.toContain("quux");
        });
      });
    
      it("The 'toBeLessThan' matcher is for mathematical comparisons", function() {
        var pi = 3.1415926,
          e = 2.78;
    
        expect(e).toBeLessThan(pi);
        expect(pi).not.toBeLessThan(e);
      });
    
      it("The 'toBeGreaterThan' matcher is for mathematical comparisons", function() {
        var pi = 3.1415926,
          e = 2.78;
    
        expect(pi).toBeGreaterThan(e);
        expect(e).not.toBeGreaterThan(pi);
      });
    
      it("The 'toBeCloseTo' matcher is for precision math comparison", function() {
        var pi = 2.8,//3.1415926,
          e = 2.25;
    
        expect(pi).not.toBeCloseTo(e, 2);
        expect(pi).toBeCloseTo(e, 0);
      });
    
      it("The 'toThrow' matcher is for testing if a function throws an exception", function() {
        var foo = function() {
          return 1 + 2;
        };
        var bar = function() {
          return a + 1;
        };
        var baz = function() {
          throw 'what';
        };
    
        expect(foo).not.toThrow();
        expect(bar).toThrow();
        expect(baz).toThrow('what');
      });
    
      it("The 'toThrowError' matcher is for testing a specific thrown exception", function() {
        var foo = function() {
          throw new TypeError("foo bar baz");
        };
    
        expect(foo).toThrowError("foo bar baz");
        expect(foo).toThrowError(/bar/);
        expect(foo).toThrowError(TypeError);
        expect(foo).toThrowError(TypeError, "foo bar baz");
      });
    });

    describe("A spy", function() {
      var foo, bar = null;
    
      beforeEach(function() {
        foo = {
          setBar: function(value) {
            bar = value;
          },
          // set: function(){
          //   bar = 123;
          // }
        };
    
        spyOn(foo, 'setBar');
        foo.setBar(123);
        //foo.set()
        foo.setBar(456, 'another param');
      });
    
      it("tracks that the spy was called", function() {
        expect(foo.setBar).toHaveBeenCalled();
      });
    
      it("tracks all the arguments of its calls", function() {
        //expect(bar).toEqual(123);
        expect(foo.setBar).toHaveBeenCalledWith(123);
        expect(foo.setBar).toHaveBeenCalledWith(456, 'another param');
      });
    
      it("stops all execution on a function", function() {
        expect(bar).toBeNull();
      });
    });
    describe("A spy, when configured to call through", function() {
      var foo, bar, fetchedBar;
    
      beforeEach(function() {
        foo = {
          setBar: function(value) {
            bar = value;
          },
          getBar: function() {
            return bar;
          }
        };
    
        spyOn(foo, 'getBar').and.callThrough();
    
        foo.setBar(123);
        fetchedBar = foo.getBar();
      });
    
      it("tracks that the spy was called", function() {
        expect(foo.getBar).toHaveBeenCalled();
      });
    
      it("should not affect other functions", function() {
        expect(bar).toEqual(123);
      });
    
      it("when called returns the requested value", function() {
        expect(fetchedBar).toEqual(123);
      });
    });

    describe("A spy, when configured with an alternate implementation", function() {
      var foo, bar, fetchedBar;
    
      beforeEach(function() {
        foo = {
          setBar: function(value) {
            bar = value;
          },
          getBar: function() {
            return bar;
          }
        };

        spyOn(foo, "getBar").and.callFake(function(arguments, can, be, received) {
          return 1001;
        });
    
        foo.setBar(123);
        fetchedBar = foo.getBar(0,1);
      });
    
      it("tracks that the spy was called", function() {
        expect(foo.getBar).toHaveBeenCalled();
      });
    
      it("should not affect other functions", function() {
        expect(bar).toEqual(123);
      });
    
      it("when called returns the requested value", function() {
        expect(fetchedBar).toEqual(1001);
      });
    });

    describe("A spy", function() {
      var foo, bar = null;
    
      beforeEach(function() {
        foo = {
          setBar: function(value) {
            bar = value;
          }
        };
    
        spyOn(foo, 'setBar');
      });
    
      it("tracks if it was called at all", function() {
        expect(foo.setBar.calls.any()).toEqual(false);
    
        foo.setBar();
    
        expect(foo.setBar.calls.any()).toEqual(true);
      });
    
      it("tracks the number of times it was called", function() {
        expect(foo.setBar.calls.count()).toEqual(0);
    
        foo.setBar();
        foo.setBar();
    
        expect(foo.setBar.calls.count()).toEqual(2);
      });
    
      it("tracks the arguments of each call", function() {
        foo.setBar(123);
        foo.setBar(456, "baz");
    
        expect(foo.setBar.calls.argsFor(0)).toEqual([123]);
        expect(foo.setBar.calls.argsFor(1)).toEqual([456, "baz"]);
      });
    
      it("tracks the arguments of all calls", function() {
        foo.setBar(123);
        foo.setBar(456, "baz");
    
        expect(foo.setBar.calls.allArgs()).toEqual([[123],[456, "baz"]]);
      });
    
      it("can provide the context and arguments to all calls", function() {
        foo.setBar(123);
    
        expect(foo.setBar.calls.all()).toEqual([{object: foo, args: [123]}]);
      });
    
      it("has a shortcut to the most recent call", function() {
        foo.setBar(123);
        foo.setBar(456, "baz");
    
        expect(foo.setBar.calls.mostRecent()).toEqual({object: foo, args: [456, "baz"]});
      });
    
      it("has a shortcut to the first call", function() {
        foo.setBar(123);
        foo.setBar(456, "baz");
    
        expect(foo.setBar.calls.first()).toEqual({object: foo, args: [123]});
        expect(this.args).toEqual([123]);
      });
  
      it("tracks the context", function() {
        var spy = jasmine.createSpy('spy');
        var baz = {
          fn: spy
        };
        var quux = {
          fn: spy
        };
        baz.fn(123);
        quux.fn(456);
    
        expect(spy.calls.first().object).toBe(baz);
        expect(spy.calls.mostRecent().object).toBe(quux);
        
      });
    
      it("can be reset", function() {
        foo.setBar(123);
        foo.setBar(456, "baz");
    
        expect(foo.setBar.calls.any()).toBe(true);
    
        foo.setBar.calls.reset();
    
        expect(foo.setBar.calls.any()).toBe(false);
      });
    });