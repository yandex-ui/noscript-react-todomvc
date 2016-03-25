var yr = yr || require('yate/lib/runtime.js');

(function() {

    var cmpNN = yr.cmpNN;
    var cmpSN = yr.cmpSN;
    var nodeset2xml = yr.nodeset2xml;
    var nodeset2boolean = yr.nodeset2boolean;
    var nodeset2attrvalue = yr.nodeset2attrvalue;
    var nodeset2scalar = yr.nodeset2scalar;
    var scalar2attrvalue = yr.scalar2attrvalue;
    var xml2attrvalue = yr.xml2attrvalue;
    var scalar2xml = yr.scalar2xml;
    var xml2scalar = yr.xml2scalar;
    var simpleScalar = yr.simpleScalar;
    var simpleBoolean = yr.simpleBoolean;
    var selectNametest = yr.selectNametest;
    var closeAttrs = yr.closeAttrs;

    var M = new yr.Module();

    var j0 = [ 0, 'status' ];

    function p0(m, c0, i0, l0) {
        return cmpSN("ok", selectNametest('status', c0, []));
    }

    var j1 = [ 0, 'models', 0, '*', 2, p0 ];

    M.k0 = {};
    M.k0.n = function k0n(m, c0, i0, l0) {
        return m.s(j1, c0.doc.root);
    };
    //  scalar
    M.k0.u = function k0u(m, c0, i0, l0) {
        return c0.name;
    };
    //  nodeset
    M.k0.b = function k0b(m, c0, i0, l0, a0) {
        var r0 = [];

        function p1(m, c0, i0, l0) {
            return c0.name != "status";
        }

        var j2 = [ 0, '*', 2, p1 ];

        r0 = m.s(j2, c0);

        return r0;
    };
    M.k0.ut = 'scalar';
    M.k0.bt = 'nodeset';

    function p2(m, c0, i0, l0) {
        return cmpSN("error", selectNametest('status', c0, []));
    }

    var j3 = [ 0, 'models', 0, '*', 2, p2 ];

    M.k1 = {};
    M.k1.n = function k1n(m, c0, i0, l0) {
        return m.s(j3, c0.doc.root);
    };
    //  scalar
    M.k1.u = function k1u(m, c0, i0, l0) {
        return c0.name;
    };
    //  nodeset
    M.k1.b = function k1b(m, c0, i0, l0, a0) {
        var r0 = [];

        function p3(m, c0, i0, l0) {
            return c0.name != "status";
        }

        var j4 = [ 0, '*', 2, p3 ];

        r0 = m.s(j4, c0);

        return r0;
    };
    M.k1.ut = 'scalar';
    M.k1.bt = 'nodeset';

    var j5 = [ ];

    var j6 = [ 0, 'views', 0, '*' ];

    var j7 = [ 0, '*' ];

    var j8 = [ 1, 0 ];

    var j9 = [ 0, 'tree', 0, '*' ];

    var j10 = [ 0, 'state' ];

    var j11 = [ 0, 'id' ];

    var j12 = [ 0, 'uniqueId' ];

    var j13 = [ 0, 'key' ];

    var j14 = [ 0, 'collection' ];

    var j15 = [ 0, 'views', 0, '*' ];

    var j16 = [ 0, 'views', 0, 'ns-view-collection-container', 0, '*' ];

    var j17 = [ 0, 'isReactView' ];

    function p4(m, c0, i0, l0) {
        return !!simpleBoolean('isReactView', c0.doc.root);
    }

    var j18 = [ 0, '*', 4, p4 ];

    // match /
    M.t0 = function t0(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("ns-root")
        };
        a0.s = 'div';
        r0 += m.a(m, 0, m.s(j6, c0), 'ns-view', a0)
        r0 += closeAttrs(a0);
        r0 += "</div>";

        return r0;
    };
    M.t0.j = 1;
    M.t0.a = 1;

    // match .* : ns-view
    M.t1 = function t1(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += m.a(m, 0, m.n(j9, yr.document(m.s(j8, c0))), 'ns-build-view', a0)

        return r0;
    };
    M.t1.j = j7;
    M.t1.a = 0;

    // match .* : ns-build-view
    M.t2 = function t2(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
        };
        a0.s = 'div';
        r0 += m.a(m, 0, m.s(j8, c0), 'ns-build-view-content', a0)
        r0 += closeAttrs(a0);
        r0 += "</div>";

        return r0;
    };
    M.t2.j = j7;
    M.t2.a = 0;

    // match .* : ns-build-view-content
    M.t3 = function t3(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        //  var state : scalar
        var v0 = simpleScalar('state', c0.doc.root);

        a0.a[ "class" ] = new yr.scalarAttr("ns-view-" + nodeset2scalar( ( selectNametest('id', c0.doc.root, []) ) ) + " " + nodeset2scalar( ( selectNametest('uniqueId', c0.doc.root, []) ) ));
        a0.a[ "data-key" ] = new yr.scalarAttr(nodeset2scalar( ( selectNametest('key', c0.doc.root, []) ) ));
        if (v0 == "placeholder") {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" ns-view-placeholder");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" ns-view-placeholder");
            }
            if (nodeset2boolean( (selectNametest('collection', c0.doc.root, [])) )) {
                r0 += m.a(m, 0, m.s(j8, c0), 'ns-view-collection', a0)
            } else {
                r0 += m.a(m, 0, m.s(j8, c0), 'ns-view-desc', a0)
            }
        } else {
            var r1 = '';
            var a1 = { a: {} };
            r1 += m.a(m, 0, m.s(j8, c0), 'ns-view-add-class', a1)
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addxml(r1);
            } else {
                a0.a[ "class" ] = new yr.xmlAttr(r1);
            }
            r0 += m.a(m, 0, m.s(j8, c0), 'ns-view-add-attrs', a0)
            if (v0 == "loading") {
                r0 += m.a(m, 0, m.s(j8, c0), 'ns-view-async-content', a0)
            } else if (v0 == "error") {
                r0 += m.a(m, 0, m.s(j8, c0), 'ns-view-error-content', a0)
            } else {
                r0 += m.a(m, 0, m.s(j8, c0), 'ns-view-content', a0)
            }
        }

        return r0;
    };
    M.t3.j = j7;
    M.t3.a = 0;

    // match .* : ns-view-add-class
    M.t4 = function t4(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        return r0;
    };
    M.t4.j = j7;
    M.t4.a = 0;

    // match .* : ns-view-add-attrs
    M.t5 = function t5(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        return r0;
    };
    M.t5.j = j7;
    M.t5.a = 0;

    // match .* : ns-view-content
    M.t6 = function t6(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        if (nodeset2boolean( (selectNametest('collection', c0.doc.root, [])) )) {
            r0 += closeAttrs(a0);
            r0 += "<div";
            a0.a = {
                'class': new yr.scalarAttr("ns-view-container-desc")
            };
            a0.s = 'div';
            r0 += m.a(m, 0, m.s(j8, c0), 'ns-view-collection', a0)
            r0 += closeAttrs(a0);
            r0 += "</div>";
        } else {
            r0 += m.a(m, 0, m.s(j8, c0), 'ns-view-desc', a0)
        }

        return r0;
    };
    M.t6.j = j7;
    M.t6.a = 0;

    // match .* : ns-view-desc
    M.t7 = function t7(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += m.a(m, 0, m.s(j15, c0.doc.root), 'ns-view', a0)

        return r0;
    };
    M.t7.j = j7;
    M.t7.a = 0;

    // match .* : ns-view-collection
    M.t8 = function t8(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += m.a(m, 0, m.s(j16, c0.doc.root), 'ns-view', a0)

        return r0;
    };
    M.t8.j = j7;
    M.t8.a = 0;

    // match .* : ns-view-async-content
    M.t9 = function t9(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        return r0;
    };
    M.t9.j = j7;
    M.t9.a = 0;

    // match .* : ns-view-error-content
    M.t10 = function t10(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        return r0;
    };
    M.t10.j = j7;
    M.t10.a = 0;

    // match .*[ !!/.isReactView ] : ns-view-content
    M.t11 = function t11(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        return r0;
    };
    M.t11.j = j18;
    M.t11.a = 0;

    // match .*[ !!/.isReactView ] : ns-view-async-content
    M.t12 = function t12(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        return r0;
    };
    M.t12.j = j18;
    M.t12.a = 0;

    M.matcher = {
        "": {
            "": [
                "t0"
            ]
        },
        "ns-view": {
            "*": [
                "t1"
            ]
        },
        "ns-build-view": {
            "*": [
                "t2"
            ]
        },
        "ns-build-view-content": {
            "*": [
                "t3"
            ]
        },
        "ns-view-add-class": {
            "*": [
                "t4"
            ]
        },
        "ns-view-add-attrs": {
            "*": [
                "t5"
            ]
        },
        "ns-view-content": {
            "*": [
                "t11",
                "t6"
            ]
        },
        "ns-view-desc": {
            "*": [
                "t7"
            ]
        },
        "ns-view-collection": {
            "*": [
                "t8"
            ]
        },
        "ns-view-async-content": {
            "*": [
                "t12",
                "t9"
            ]
        },
        "ns-view-error-content": {
            "*": [
                "t10"
            ]
        }
    };
    M.imports = [];

    yr.register('main', M);

})();