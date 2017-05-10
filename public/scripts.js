/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// import React from 'react';
	// import { render } from 'react-dom';
	// import TripMap from './components/TripMap';
	
	var Elm = __webpack_require__(1);
	
	var tripNode = document.querySelector('.js-trips');
	
	if (tripNode) {
	  var app = Elm.Trips.Main.embed(tripNode);
	
	  app.ports.addTrip.subscribe(function () {});
	
	  app.ports.openTrip.subscribe(function () {
	    /* setTimeout(() => {
	      const mapNode = document.querySelector('.js-map');
	      render(<TripMap
	        places={[]}
	        onAddPlace={app.ports.addPlace.subscribe}
	      />, mapNode);
	    }, 500); */
	  });
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	
	(function() {
	'use strict';
	
	function F2(fun)
	{
	  function wrapper(a) { return function(b) { return fun(a,b); }; }
	  wrapper.arity = 2;
	  wrapper.func = fun;
	  return wrapper;
	}
	
	function F3(fun)
	{
	  function wrapper(a) {
	    return function(b) { return function(c) { return fun(a, b, c); }; };
	  }
	  wrapper.arity = 3;
	  wrapper.func = fun;
	  return wrapper;
	}
	
	function F4(fun)
	{
	  function wrapper(a) { return function(b) { return function(c) {
	    return function(d) { return fun(a, b, c, d); }; }; };
	  }
	  wrapper.arity = 4;
	  wrapper.func = fun;
	  return wrapper;
	}
	
	function F5(fun)
	{
	  function wrapper(a) { return function(b) { return function(c) {
	    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
	  }
	  wrapper.arity = 5;
	  wrapper.func = fun;
	  return wrapper;
	}
	
	function F6(fun)
	{
	  function wrapper(a) { return function(b) { return function(c) {
	    return function(d) { return function(e) { return function(f) {
	    return fun(a, b, c, d, e, f); }; }; }; }; };
	  }
	  wrapper.arity = 6;
	  wrapper.func = fun;
	  return wrapper;
	}
	
	function F7(fun)
	{
	  function wrapper(a) { return function(b) { return function(c) {
	    return function(d) { return function(e) { return function(f) {
	    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
	  }
	  wrapper.arity = 7;
	  wrapper.func = fun;
	  return wrapper;
	}
	
	function F8(fun)
	{
	  function wrapper(a) { return function(b) { return function(c) {
	    return function(d) { return function(e) { return function(f) {
	    return function(g) { return function(h) {
	    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
	  }
	  wrapper.arity = 8;
	  wrapper.func = fun;
	  return wrapper;
	}
	
	function F9(fun)
	{
	  function wrapper(a) { return function(b) { return function(c) {
	    return function(d) { return function(e) { return function(f) {
	    return function(g) { return function(h) { return function(i) {
	    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
	  }
	  wrapper.arity = 9;
	  wrapper.func = fun;
	  return wrapper;
	}
	
	function A2(fun, a, b)
	{
	  return fun.arity === 2
	    ? fun.func(a, b)
	    : fun(a)(b);
	}
	function A3(fun, a, b, c)
	{
	  return fun.arity === 3
	    ? fun.func(a, b, c)
	    : fun(a)(b)(c);
	}
	function A4(fun, a, b, c, d)
	{
	  return fun.arity === 4
	    ? fun.func(a, b, c, d)
	    : fun(a)(b)(c)(d);
	}
	function A5(fun, a, b, c, d, e)
	{
	  return fun.arity === 5
	    ? fun.func(a, b, c, d, e)
	    : fun(a)(b)(c)(d)(e);
	}
	function A6(fun, a, b, c, d, e, f)
	{
	  return fun.arity === 6
	    ? fun.func(a, b, c, d, e, f)
	    : fun(a)(b)(c)(d)(e)(f);
	}
	function A7(fun, a, b, c, d, e, f, g)
	{
	  return fun.arity === 7
	    ? fun.func(a, b, c, d, e, f, g)
	    : fun(a)(b)(c)(d)(e)(f)(g);
	}
	function A8(fun, a, b, c, d, e, f, g, h)
	{
	  return fun.arity === 8
	    ? fun.func(a, b, c, d, e, f, g, h)
	    : fun(a)(b)(c)(d)(e)(f)(g)(h);
	}
	function A9(fun, a, b, c, d, e, f, g, h, i)
	{
	  return fun.arity === 9
	    ? fun.func(a, b, c, d, e, f, g, h, i)
	    : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
	}
	
	//import Native.List //
	
	var _elm_lang$core$Native_Array = function() {
	
	// A RRB-Tree has two distinct data types.
	// Leaf -> "height"  is always 0
	//         "table"   is an array of elements
	// Node -> "height"  is always greater than 0
	//         "table"   is an array of child nodes
	//         "lengths" is an array of accumulated lengths of the child nodes
	
	// M is the maximal table size. 32 seems fast. E is the allowed increase
	// of search steps when concatting to find an index. Lower values will
	// decrease balancing, but will increase search steps.
	var M = 32;
	var E = 2;
	
	// An empty array.
	var empty = {
		ctor: '_Array',
		height: 0,
		table: []
	};
	
	
	function get(i, array)
	{
		if (i < 0 || i >= length(array))
		{
			throw new Error(
				'Index ' + i + ' is out of range. Check the length of ' +
				'your array first or use getMaybe or getWithDefault.');
		}
		return unsafeGet(i, array);
	}
	
	
	function unsafeGet(i, array)
	{
		for (var x = array.height; x > 0; x--)
		{
			var slot = i >> (x * 5);
			while (array.lengths[slot] <= i)
			{
				slot++;
			}
			if (slot > 0)
			{
				i -= array.lengths[slot - 1];
			}
			array = array.table[slot];
		}
		return array.table[i];
	}
	
	
	// Sets the value at the index i. Only the nodes leading to i will get
	// copied and updated.
	function set(i, item, array)
	{
		if (i < 0 || length(array) <= i)
		{
			return array;
		}
		return unsafeSet(i, item, array);
	}
	
	
	function unsafeSet(i, item, array)
	{
		array = nodeCopy(array);
	
		if (array.height === 0)
		{
			array.table[i] = item;
		}
		else
		{
			var slot = getSlot(i, array);
			if (slot > 0)
			{
				i -= array.lengths[slot - 1];
			}
			array.table[slot] = unsafeSet(i, item, array.table[slot]);
		}
		return array;
	}
	
	
	function initialize(len, f)
	{
		if (len <= 0)
		{
			return empty;
		}
		var h = Math.floor( Math.log(len) / Math.log(M) );
		return initialize_(f, h, 0, len);
	}
	
	function initialize_(f, h, from, to)
	{
		if (h === 0)
		{
			var table = new Array((to - from) % (M + 1));
			for (var i = 0; i < table.length; i++)
			{
			  table[i] = f(from + i);
			}
			return {
				ctor: '_Array',
				height: 0,
				table: table
			};
		}
	
		var step = Math.pow(M, h);
		var table = new Array(Math.ceil((to - from) / step));
		var lengths = new Array(table.length);
		for (var i = 0; i < table.length; i++)
		{
			table[i] = initialize_(f, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
			lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
		}
		return {
			ctor: '_Array',
			height: h,
			table: table,
			lengths: lengths
		};
	}
	
	function fromList(list)
	{
		if (list.ctor === '[]')
		{
			return empty;
		}
	
		// Allocate M sized blocks (table) and write list elements to it.
		var table = new Array(M);
		var nodes = [];
		var i = 0;
	
		while (list.ctor !== '[]')
		{
			table[i] = list._0;
			list = list._1;
			i++;
	
			// table is full, so we can push a leaf containing it into the
			// next node.
			if (i === M)
			{
				var leaf = {
					ctor: '_Array',
					height: 0,
					table: table
				};
				fromListPush(leaf, nodes);
				table = new Array(M);
				i = 0;
			}
		}
	
		// Maybe there is something left on the table.
		if (i > 0)
		{
			var leaf = {
				ctor: '_Array',
				height: 0,
				table: table.splice(0, i)
			};
			fromListPush(leaf, nodes);
		}
	
		// Go through all of the nodes and eventually push them into higher nodes.
		for (var h = 0; h < nodes.length - 1; h++)
		{
			if (nodes[h].table.length > 0)
			{
				fromListPush(nodes[h], nodes);
			}
		}
	
		var head = nodes[nodes.length - 1];
		if (head.height > 0 && head.table.length === 1)
		{
			return head.table[0];
		}
		else
		{
			return head;
		}
	}
	
	// Push a node into a higher node as a child.
	function fromListPush(toPush, nodes)
	{
		var h = toPush.height;
	
		// Maybe the node on this height does not exist.
		if (nodes.length === h)
		{
			var node = {
				ctor: '_Array',
				height: h + 1,
				table: [],
				lengths: []
			};
			nodes.push(node);
		}
	
		nodes[h].table.push(toPush);
		var len = length(toPush);
		if (nodes[h].lengths.length > 0)
		{
			len += nodes[h].lengths[nodes[h].lengths.length - 1];
		}
		nodes[h].lengths.push(len);
	
		if (nodes[h].table.length === M)
		{
			fromListPush(nodes[h], nodes);
			nodes[h] = {
				ctor: '_Array',
				height: h + 1,
				table: [],
				lengths: []
			};
		}
	}
	
	// Pushes an item via push_ to the bottom right of a tree.
	function push(item, a)
	{
		var pushed = push_(item, a);
		if (pushed !== null)
		{
			return pushed;
		}
	
		var newTree = create(item, a.height);
		return siblise(a, newTree);
	}
	
	// Recursively tries to push an item to the bottom-right most
	// tree possible. If there is no space left for the item,
	// null will be returned.
	function push_(item, a)
	{
		// Handle resursion stop at leaf level.
		if (a.height === 0)
		{
			if (a.table.length < M)
			{
				var newA = {
					ctor: '_Array',
					height: 0,
					table: a.table.slice()
				};
				newA.table.push(item);
				return newA;
			}
			else
			{
			  return null;
			}
		}
	
		// Recursively push
		var pushed = push_(item, botRight(a));
	
		// There was space in the bottom right tree, so the slot will
		// be updated.
		if (pushed !== null)
		{
			var newA = nodeCopy(a);
			newA.table[newA.table.length - 1] = pushed;
			newA.lengths[newA.lengths.length - 1]++;
			return newA;
		}
	
		// When there was no space left, check if there is space left
		// for a new slot with a tree which contains only the item
		// at the bottom.
		if (a.table.length < M)
		{
			var newSlot = create(item, a.height - 1);
			var newA = nodeCopy(a);
			newA.table.push(newSlot);
			newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
			return newA;
		}
		else
		{
			return null;
		}
	}
	
	// Converts an array into a list of elements.
	function toList(a)
	{
		return toList_(_elm_lang$core$Native_List.Nil, a);
	}
	
	function toList_(list, a)
	{
		for (var i = a.table.length - 1; i >= 0; i--)
		{
			list =
				a.height === 0
					? _elm_lang$core$Native_List.Cons(a.table[i], list)
					: toList_(list, a.table[i]);
		}
		return list;
	}
	
	// Maps a function over the elements of an array.
	function map(f, a)
	{
		var newA = {
			ctor: '_Array',
			height: a.height,
			table: new Array(a.table.length)
		};
		if (a.height > 0)
		{
			newA.lengths = a.lengths;
		}
		for (var i = 0; i < a.table.length; i++)
		{
			newA.table[i] =
				a.height === 0
					? f(a.table[i])
					: map(f, a.table[i]);
		}
		return newA;
	}
	
	// Maps a function over the elements with their index as first argument.
	function indexedMap(f, a)
	{
		return indexedMap_(f, a, 0);
	}
	
	function indexedMap_(f, a, from)
	{
		var newA = {
			ctor: '_Array',
			height: a.height,
			table: new Array(a.table.length)
		};
		if (a.height > 0)
		{
			newA.lengths = a.lengths;
		}
		for (var i = 0; i < a.table.length; i++)
		{
			newA.table[i] =
				a.height === 0
					? A2(f, from + i, a.table[i])
					: indexedMap_(f, a.table[i], i == 0 ? from : from + a.lengths[i - 1]);
		}
		return newA;
	}
	
	function foldl(f, b, a)
	{
		if (a.height === 0)
		{
			for (var i = 0; i < a.table.length; i++)
			{
				b = A2(f, a.table[i], b);
			}
		}
		else
		{
			for (var i = 0; i < a.table.length; i++)
			{
				b = foldl(f, b, a.table[i]);
			}
		}
		return b;
	}
	
	function foldr(f, b, a)
	{
		if (a.height === 0)
		{
			for (var i = a.table.length; i--; )
			{
				b = A2(f, a.table[i], b);
			}
		}
		else
		{
			for (var i = a.table.length; i--; )
			{
				b = foldr(f, b, a.table[i]);
			}
		}
		return b;
	}
	
	// TODO: currently, it slices the right, then the left. This can be
	// optimized.
	function slice(from, to, a)
	{
		if (from < 0)
		{
			from += length(a);
		}
		if (to < 0)
		{
			to += length(a);
		}
		return sliceLeft(from, sliceRight(to, a));
	}
	
	function sliceRight(to, a)
	{
		if (to === length(a))
		{
			return a;
		}
	
		// Handle leaf level.
		if (a.height === 0)
		{
			var newA = { ctor:'_Array', height:0 };
			newA.table = a.table.slice(0, to);
			return newA;
		}
	
		// Slice the right recursively.
		var right = getSlot(to, a);
		var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);
	
		// Maybe the a node is not even needed, as sliced contains the whole slice.
		if (right === 0)
		{
			return sliced;
		}
	
		// Create new node.
		var newA = {
			ctor: '_Array',
			height: a.height,
			table: a.table.slice(0, right),
			lengths: a.lengths.slice(0, right)
		};
		if (sliced.table.length > 0)
		{
			newA.table[right] = sliced;
			newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
		}
		return newA;
	}
	
	function sliceLeft(from, a)
	{
		if (from === 0)
		{
			return a;
		}
	
		// Handle leaf level.
		if (a.height === 0)
		{
			var newA = { ctor:'_Array', height:0 };
			newA.table = a.table.slice(from, a.table.length + 1);
			return newA;
		}
	
		// Slice the left recursively.
		var left = getSlot(from, a);
		var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);
	
		// Maybe the a node is not even needed, as sliced contains the whole slice.
		if (left === a.table.length - 1)
		{
			return sliced;
		}
	
		// Create new node.
		var newA = {
			ctor: '_Array',
			height: a.height,
			table: a.table.slice(left, a.table.length + 1),
			lengths: new Array(a.table.length - left)
		};
		newA.table[0] = sliced;
		var len = 0;
		for (var i = 0; i < newA.table.length; i++)
		{
			len += length(newA.table[i]);
			newA.lengths[i] = len;
		}
	
		return newA;
	}
	
	// Appends two trees.
	function append(a,b)
	{
		if (a.table.length === 0)
		{
			return b;
		}
		if (b.table.length === 0)
		{
			return a;
		}
	
		var c = append_(a, b);
	
		// Check if both nodes can be crunshed together.
		if (c[0].table.length + c[1].table.length <= M)
		{
			if (c[0].table.length === 0)
			{
				return c[1];
			}
			if (c[1].table.length === 0)
			{
				return c[0];
			}
	
			// Adjust .table and .lengths
			c[0].table = c[0].table.concat(c[1].table);
			if (c[0].height > 0)
			{
				var len = length(c[0]);
				for (var i = 0; i < c[1].lengths.length; i++)
				{
					c[1].lengths[i] += len;
				}
				c[0].lengths = c[0].lengths.concat(c[1].lengths);
			}
	
			return c[0];
		}
	
		if (c[0].height > 0)
		{
			var toRemove = calcToRemove(a, b);
			if (toRemove > E)
			{
				c = shuffle(c[0], c[1], toRemove);
			}
		}
	
		return siblise(c[0], c[1]);
	}
	
	// Returns an array of two nodes; right and left. One node _may_ be empty.
	function append_(a, b)
	{
		if (a.height === 0 && b.height === 0)
		{
			return [a, b];
		}
	
		if (a.height !== 1 || b.height !== 1)
		{
			if (a.height === b.height)
			{
				a = nodeCopy(a);
				b = nodeCopy(b);
				var appended = append_(botRight(a), botLeft(b));
	
				insertRight(a, appended[1]);
				insertLeft(b, appended[0]);
			}
			else if (a.height > b.height)
			{
				a = nodeCopy(a);
				var appended = append_(botRight(a), b);
	
				insertRight(a, appended[0]);
				b = parentise(appended[1], appended[1].height + 1);
			}
			else
			{
				b = nodeCopy(b);
				var appended = append_(a, botLeft(b));
	
				var left = appended[0].table.length === 0 ? 0 : 1;
				var right = left === 0 ? 1 : 0;
				insertLeft(b, appended[left]);
				a = parentise(appended[right], appended[right].height + 1);
			}
		}
	
		// Check if balancing is needed and return based on that.
		if (a.table.length === 0 || b.table.length === 0)
		{
			return [a, b];
		}
	
		var toRemove = calcToRemove(a, b);
		if (toRemove <= E)
		{
			return [a, b];
		}
		return shuffle(a, b, toRemove);
	}
	
	// Helperfunctions for append_. Replaces a child node at the side of the parent.
	function insertRight(parent, node)
	{
		var index = parent.table.length - 1;
		parent.table[index] = node;
		parent.lengths[index] = length(node);
		parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
	}
	
	function insertLeft(parent, node)
	{
		if (node.table.length > 0)
		{
			parent.table[0] = node;
			parent.lengths[0] = length(node);
	
			var len = length(parent.table[0]);
			for (var i = 1; i < parent.lengths.length; i++)
			{
				len += length(parent.table[i]);
				parent.lengths[i] = len;
			}
		}
		else
		{
			parent.table.shift();
			for (var i = 1; i < parent.lengths.length; i++)
			{
				parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
			}
			parent.lengths.shift();
		}
	}
	
	// Returns the extra search steps for E. Refer to the paper.
	function calcToRemove(a, b)
	{
		var subLengths = 0;
		for (var i = 0; i < a.table.length; i++)
		{
			subLengths += a.table[i].table.length;
		}
		for (var i = 0; i < b.table.length; i++)
		{
			subLengths += b.table[i].table.length;
		}
	
		var toRemove = a.table.length + b.table.length;
		return toRemove - (Math.floor((subLengths - 1) / M) + 1);
	}
	
	// get2, set2 and saveSlot are helpers for accessing elements over two arrays.
	function get2(a, b, index)
	{
		return index < a.length
			? a[index]
			: b[index - a.length];
	}
	
	function set2(a, b, index, value)
	{
		if (index < a.length)
		{
			a[index] = value;
		}
		else
		{
			b[index - a.length] = value;
		}
	}
	
	function saveSlot(a, b, index, slot)
	{
		set2(a.table, b.table, index, slot);
	
		var l = (index === 0 || index === a.lengths.length)
			? 0
			: get2(a.lengths, a.lengths, index - 1);
	
		set2(a.lengths, b.lengths, index, l + length(slot));
	}
	
	// Creates a node or leaf with a given length at their arrays for perfomance.
	// Is only used by shuffle.
	function createNode(h, length)
	{
		if (length < 0)
		{
			length = 0;
		}
		var a = {
			ctor: '_Array',
			height: h,
			table: new Array(length)
		};
		if (h > 0)
		{
			a.lengths = new Array(length);
		}
		return a;
	}
	
	// Returns an array of two balanced nodes.
	function shuffle(a, b, toRemove)
	{
		var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
		var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));
	
		// Skip the slots with size M. More precise: copy the slot references
		// to the new node
		var read = 0;
		while (get2(a.table, b.table, read).table.length % M === 0)
		{
			set2(newA.table, newB.table, read, get2(a.table, b.table, read));
			set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
			read++;
		}
	
		// Pulling items from left to right, caching in a slot before writing
		// it into the new nodes.
		var write = read;
		var slot = new createNode(a.height - 1, 0);
		var from = 0;
	
		// If the current slot is still containing data, then there will be at
		// least one more write, so we do not break this loop yet.
		while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove)
		{
			// Find out the max possible items for copying.
			var source = get2(a.table, b.table, read);
			var to = Math.min(M - slot.table.length, source.table.length);
	
			// Copy and adjust size table.
			slot.table = slot.table.concat(source.table.slice(from, to));
			if (slot.height > 0)
			{
				var len = slot.lengths.length;
				for (var i = len; i < len + to - from; i++)
				{
					slot.lengths[i] = length(slot.table[i]);
					slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
				}
			}
	
			from += to;
	
			// Only proceed to next slots[i] if the current one was
			// fully copied.
			if (source.table.length <= to)
			{
				read++; from = 0;
			}
	
			// Only create a new slot if the current one is filled up.
			if (slot.table.length === M)
			{
				saveSlot(newA, newB, write, slot);
				slot = createNode(a.height - 1, 0);
				write++;
			}
		}
	
		// Cleanup after the loop. Copy the last slot into the new nodes.
		if (slot.table.length > 0)
		{
			saveSlot(newA, newB, write, slot);
			write++;
		}
	
		// Shift the untouched slots to the left
		while (read < a.table.length + b.table.length )
		{
			saveSlot(newA, newB, write, get2(a.table, b.table, read));
			read++;
			write++;
		}
	
		return [newA, newB];
	}
	
	// Navigation functions
	function botRight(a)
	{
		return a.table[a.table.length - 1];
	}
	function botLeft(a)
	{
		return a.table[0];
	}
	
	// Copies a node for updating. Note that you should not use this if
	// only updating only one of "table" or "lengths" for performance reasons.
	function nodeCopy(a)
	{
		var newA = {
			ctor: '_Array',
			height: a.height,
			table: a.table.slice()
		};
		if (a.height > 0)
		{
			newA.lengths = a.lengths.slice();
		}
		return newA;
	}
	
	// Returns how many items are in the tree.
	function length(array)
	{
		if (array.height === 0)
		{
			return array.table.length;
		}
		else
		{
			return array.lengths[array.lengths.length - 1];
		}
	}
	
	// Calculates in which slot of "table" the item probably is, then
	// find the exact slot via forward searching in  "lengths". Returns the index.
	function getSlot(i, a)
	{
		var slot = i >> (5 * a.height);
		while (a.lengths[slot] <= i)
		{
			slot++;
		}
		return slot;
	}
	
	// Recursively creates a tree with a given height containing
	// only the given item.
	function create(item, h)
	{
		if (h === 0)
		{
			return {
				ctor: '_Array',
				height: 0,
				table: [item]
			};
		}
		return {
			ctor: '_Array',
			height: h,
			table: [create(item, h - 1)],
			lengths: [1]
		};
	}
	
	// Recursively creates a tree that contains the given tree.
	function parentise(tree, h)
	{
		if (h === tree.height)
		{
			return tree;
		}
	
		return {
			ctor: '_Array',
			height: h,
			table: [parentise(tree, h - 1)],
			lengths: [length(tree)]
		};
	}
	
	// Emphasizes blood brotherhood beneath two trees.
	function siblise(a, b)
	{
		return {
			ctor: '_Array',
			height: a.height + 1,
			table: [a, b],
			lengths: [length(a), length(a) + length(b)]
		};
	}
	
	function toJSArray(a)
	{
		var jsArray = new Array(length(a));
		toJSArray_(jsArray, 0, a);
		return jsArray;
	}
	
	function toJSArray_(jsArray, i, a)
	{
		for (var t = 0; t < a.table.length; t++)
		{
			if (a.height === 0)
			{
				jsArray[i + t] = a.table[t];
			}
			else
			{
				var inc = t === 0 ? 0 : a.lengths[t - 1];
				toJSArray_(jsArray, i + inc, a.table[t]);
			}
		}
	}
	
	function fromJSArray(jsArray)
	{
		if (jsArray.length === 0)
		{
			return empty;
		}
		var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
		return fromJSArray_(jsArray, h, 0, jsArray.length);
	}
	
	function fromJSArray_(jsArray, h, from, to)
	{
		if (h === 0)
		{
			return {
				ctor: '_Array',
				height: 0,
				table: jsArray.slice(from, to)
			};
		}
	
		var step = Math.pow(M, h);
		var table = new Array(Math.ceil((to - from) / step));
		var lengths = new Array(table.length);
		for (var i = 0; i < table.length; i++)
		{
			table[i] = fromJSArray_(jsArray, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
			lengths[i] = length(table[i]) + (i > 0 ? lengths[i - 1] : 0);
		}
		return {
			ctor: '_Array',
			height: h,
			table: table,
			lengths: lengths
		};
	}
	
	return {
		empty: empty,
		fromList: fromList,
		toList: toList,
		initialize: F2(initialize),
		append: F2(append),
		push: F2(push),
		slice: F3(slice),
		get: F2(get),
		set: F3(set),
		map: F2(map),
		indexedMap: F2(indexedMap),
		foldl: F3(foldl),
		foldr: F3(foldr),
		length: length,
	
		toJSArray: toJSArray,
		fromJSArray: fromJSArray
	};
	
	}();
	//import Native.Utils //
	
	var _elm_lang$core$Native_Basics = function() {
	
	function div(a, b)
	{
		return (a / b) | 0;
	}
	function rem(a, b)
	{
		return a % b;
	}
	function mod(a, b)
	{
		if (b === 0)
		{
			throw new Error('Cannot perform mod 0. Division by zero error.');
		}
		var r = a % b;
		var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r + b) : -mod(-a, -b));
	
		return m === b ? 0 : m;
	}
	function logBase(base, n)
	{
		return Math.log(n) / Math.log(base);
	}
	function negate(n)
	{
		return -n;
	}
	function abs(n)
	{
		return n < 0 ? -n : n;
	}
	
	function min(a, b)
	{
		return _elm_lang$core$Native_Utils.cmp(a, b) < 0 ? a : b;
	}
	function max(a, b)
	{
		return _elm_lang$core$Native_Utils.cmp(a, b) > 0 ? a : b;
	}
	function clamp(lo, hi, n)
	{
		return _elm_lang$core$Native_Utils.cmp(n, lo) < 0
			? lo
			: _elm_lang$core$Native_Utils.cmp(n, hi) > 0
				? hi
				: n;
	}
	
	var ord = ['LT', 'EQ', 'GT'];
	
	function compare(x, y)
	{
		return { ctor: ord[_elm_lang$core$Native_Utils.cmp(x, y) + 1] };
	}
	
	function xor(a, b)
	{
		return a !== b;
	}
	function not(b)
	{
		return !b;
	}
	function isInfinite(n)
	{
		return n === Infinity || n === -Infinity;
	}
	
	function truncate(n)
	{
		return n | 0;
	}
	
	function degrees(d)
	{
		return d * Math.PI / 180;
	}
	function turns(t)
	{
		return 2 * Math.PI * t;
	}
	function fromPolar(point)
	{
		var r = point._0;
		var t = point._1;
		return _elm_lang$core$Native_Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
	}
	function toPolar(point)
	{
		var x = point._0;
		var y = point._1;
		return _elm_lang$core$Native_Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y, x));
	}
	
	return {
		div: F2(div),
		rem: F2(rem),
		mod: F2(mod),
	
		pi: Math.PI,
		e: Math.E,
		cos: Math.cos,
		sin: Math.sin,
		tan: Math.tan,
		acos: Math.acos,
		asin: Math.asin,
		atan: Math.atan,
		atan2: F2(Math.atan2),
	
		degrees: degrees,
		turns: turns,
		fromPolar: fromPolar,
		toPolar: toPolar,
	
		sqrt: Math.sqrt,
		logBase: F2(logBase),
		negate: negate,
		abs: abs,
		min: F2(min),
		max: F2(max),
		clamp: F3(clamp),
		compare: F2(compare),
	
		xor: F2(xor),
		not: not,
	
		truncate: truncate,
		ceiling: Math.ceil,
		floor: Math.floor,
		round: Math.round,
		toFloat: function(x) { return x; },
		isNaN: isNaN,
		isInfinite: isInfinite
	};
	
	}();
	//import //
	
	var _elm_lang$core$Native_Utils = function() {
	
	// COMPARISONS
	
	function eq(x, y)
	{
		var stack = [];
		var isEqual = eqHelp(x, y, 0, stack);
		var pair;
		while (isEqual && (pair = stack.pop()))
		{
			isEqual = eqHelp(pair.x, pair.y, 0, stack);
		}
		return isEqual;
	}
	
	
	function eqHelp(x, y, depth, stack)
	{
		if (depth > 100)
		{
			stack.push({ x: x, y: y });
			return true;
		}
	
		if (x === y)
		{
			return true;
		}
	
		if (typeof x !== 'object')
		{
			if (typeof x === 'function')
			{
				throw new Error(
					'Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense.'
					+ ' Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#=='
					+ ' which describes why it is this way and what the better version will look like.'
				);
			}
			return false;
		}
	
		if (x === null || y === null)
		{
			return false
		}
	
		if (x instanceof Date)
		{
			return x.getTime() === y.getTime();
		}
	
		if (!('ctor' in x))
		{
			for (var key in x)
			{
				if (!eqHelp(x[key], y[key], depth + 1, stack))
				{
					return false;
				}
			}
			return true;
		}
	
		// convert Dicts and Sets to lists
		if (x.ctor === 'RBNode_elm_builtin' || x.ctor === 'RBEmpty_elm_builtin')
		{
			x = _elm_lang$core$Dict$toList(x);
			y = _elm_lang$core$Dict$toList(y);
		}
		if (x.ctor === 'Set_elm_builtin')
		{
			x = _elm_lang$core$Set$toList(x);
			y = _elm_lang$core$Set$toList(y);
		}
	
		// check if lists are equal without recursion
		if (x.ctor === '::')
		{
			var a = x;
			var b = y;
			while (a.ctor === '::' && b.ctor === '::')
			{
				if (!eqHelp(a._0, b._0, depth + 1, stack))
				{
					return false;
				}
				a = a._1;
				b = b._1;
			}
			return a.ctor === b.ctor;
		}
	
		// check if Arrays are equal
		if (x.ctor === '_Array')
		{
			var xs = _elm_lang$core$Native_Array.toJSArray(x);
			var ys = _elm_lang$core$Native_Array.toJSArray(y);
			if (xs.length !== ys.length)
			{
				return false;
			}
			for (var i = 0; i < xs.length; i++)
			{
				if (!eqHelp(xs[i], ys[i], depth + 1, stack))
				{
					return false;
				}
			}
			return true;
		}
	
		if (!eqHelp(x.ctor, y.ctor, depth + 1, stack))
		{
			return false;
		}
	
		for (var key in x)
		{
			if (!eqHelp(x[key], y[key], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}
	
	// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
	// the particular integer values assigned to LT, EQ, and GT.
	
	var LT = -1, EQ = 0, GT = 1;
	
	function cmp(x, y)
	{
		if (typeof x !== 'object')
		{
			return x === y ? EQ : x < y ? LT : GT;
		}
	
		if (x instanceof String)
		{
			var a = x.valueOf();
			var b = y.valueOf();
			return a === b ? EQ : a < b ? LT : GT;
		}
	
		if (x.ctor === '::' || x.ctor === '[]')
		{
			while (x.ctor === '::' && y.ctor === '::')
			{
				var ord = cmp(x._0, y._0);
				if (ord !== EQ)
				{
					return ord;
				}
				x = x._1;
				y = y._1;
			}
			return x.ctor === y.ctor ? EQ : x.ctor === '[]' ? LT : GT;
		}
	
		if (x.ctor.slice(0, 6) === '_Tuple')
		{
			var ord;
			var n = x.ctor.slice(6) - 0;
			var err = 'cannot compare tuples with more than 6 elements.';
			if (n === 0) return EQ;
			if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
			if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
			if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
			if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
			if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
			if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
			if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
			return EQ;
		}
	
		throw new Error(
			'Comparison error: comparison is only defined on ints, '
			+ 'floats, times, chars, strings, lists of comparable values, '
			+ 'and tuples of comparable values.'
		);
	}
	
	
	// COMMON VALUES
	
	var Tuple0 = {
		ctor: '_Tuple0'
	};
	
	function Tuple2(x, y)
	{
		return {
			ctor: '_Tuple2',
			_0: x,
			_1: y
		};
	}
	
	function chr(c)
	{
		return new String(c);
	}
	
	
	// GUID
	
	var count = 0;
	function guid(_)
	{
		return count++;
	}
	
	
	// RECORDS
	
	function update(oldRecord, updatedFields)
	{
		var newRecord = {};
	
		for (var key in oldRecord)
		{
			newRecord[key] = oldRecord[key];
		}
	
		for (var key in updatedFields)
		{
			newRecord[key] = updatedFields[key];
		}
	
		return newRecord;
	}
	
	
	//// LIST STUFF ////
	
	var Nil = { ctor: '[]' };
	
	function Cons(hd, tl)
	{
		return {
			ctor: '::',
			_0: hd,
			_1: tl
		};
	}
	
	function append(xs, ys)
	{
		// append Strings
		if (typeof xs === 'string')
		{
			return xs + ys;
		}
	
		// append Lists
		if (xs.ctor === '[]')
		{
			return ys;
		}
		var root = Cons(xs._0, Nil);
		var curr = root;
		xs = xs._1;
		while (xs.ctor !== '[]')
		{
			curr._1 = Cons(xs._0, Nil);
			xs = xs._1;
			curr = curr._1;
		}
		curr._1 = ys;
		return root;
	}
	
	
	// CRASHES
	
	function crash(moduleName, region)
	{
		return function(message) {
			throw new Error(
				'Ran into a `Debug.crash` in module `' + moduleName + '` ' + regionToString(region) + '\n'
				+ 'The message provided by the code author is:\n\n    '
				+ message
			);
		};
	}
	
	function crashCase(moduleName, region, value)
	{
		return function(message) {
			throw new Error(
				'Ran into a `Debug.crash` in module `' + moduleName + '`\n\n'
				+ 'This was caused by the `case` expression ' + regionToString(region) + '.\n'
				+ 'One of the branches ended with a crash and the following value got through:\n\n    ' + toString(value) + '\n\n'
				+ 'The message provided by the code author is:\n\n    '
				+ message
			);
		};
	}
	
	function regionToString(region)
	{
		if (region.start.line == region.end.line)
		{
			return 'on line ' + region.start.line;
		}
		return 'between lines ' + region.start.line + ' and ' + region.end.line;
	}
	
	
	// TO STRING
	
	function toString(v)
	{
		var type = typeof v;
		if (type === 'function')
		{
			return '<function>';
		}
	
		if (type === 'boolean')
		{
			return v ? 'True' : 'False';
		}
	
		if (type === 'number')
		{
			return v + '';
		}
	
		if (v instanceof String)
		{
			return '\'' + addSlashes(v, true) + '\'';
		}
	
		if (type === 'string')
		{
			return '"' + addSlashes(v, false) + '"';
		}
	
		if (v === null)
		{
			return 'null';
		}
	
		if (type === 'object' && 'ctor' in v)
		{
			var ctorStarter = v.ctor.substring(0, 5);
	
			if (ctorStarter === '_Tupl')
			{
				var output = [];
				for (var k in v)
				{
					if (k === 'ctor') continue;
					output.push(toString(v[k]));
				}
				return '(' + output.join(',') + ')';
			}
	
			if (ctorStarter === '_Task')
			{
				return '<task>'
			}
	
			if (v.ctor === '_Array')
			{
				var list = _elm_lang$core$Array$toList(v);
				return 'Array.fromList ' + toString(list);
			}
	
			if (v.ctor === '<decoder>')
			{
				return '<decoder>';
			}
	
			if (v.ctor === '_Process')
			{
				return '<process:' + v.id + '>';
			}
	
			if (v.ctor === '::')
			{
				var output = '[' + toString(v._0);
				v = v._1;
				while (v.ctor === '::')
				{
					output += ',' + toString(v._0);
					v = v._1;
				}
				return output + ']';
			}
	
			if (v.ctor === '[]')
			{
				return '[]';
			}
	
			if (v.ctor === 'Set_elm_builtin')
			{
				return 'Set.fromList ' + toString(_elm_lang$core$Set$toList(v));
			}
	
			if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin')
			{
				return 'Dict.fromList ' + toString(_elm_lang$core$Dict$toList(v));
			}
	
			var output = '';
			for (var i in v)
			{
				if (i === 'ctor') continue;
				var str = toString(v[i]);
				var c0 = str[0];
				var parenless = c0 === '{' || c0 === '(' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
				output += ' ' + (parenless ? str : '(' + str + ')');
			}
			return v.ctor + output;
		}
	
		if (type === 'object')
		{
			if (v instanceof Date)
			{
				return '<' + v.toString() + '>';
			}
	
			if (v.elm_web_socket)
			{
				return '<websocket>';
			}
	
			var output = [];
			for (var k in v)
			{
				output.push(k + ' = ' + toString(v[k]));
			}
			if (output.length === 0)
			{
				return '{}';
			}
			return '{ ' + output.join(', ') + ' }';
		}
	
		return '<internal structure>';
	}
	
	function addSlashes(str, isChar)
	{
		var s = str.replace(/\\/g, '\\\\')
				  .replace(/\n/g, '\\n')
				  .replace(/\t/g, '\\t')
				  .replace(/\r/g, '\\r')
				  .replace(/\v/g, '\\v')
				  .replace(/\0/g, '\\0');
		if (isChar)
		{
			return s.replace(/\'/g, '\\\'');
		}
		else
		{
			return s.replace(/\"/g, '\\"');
		}
	}
	
	
	return {
		eq: eq,
		cmp: cmp,
		Tuple0: Tuple0,
		Tuple2: Tuple2,
		chr: chr,
		update: update,
		guid: guid,
	
		append: F2(append),
	
		crash: crash,
		crashCase: crashCase,
	
		toString: toString
	};
	
	}();
	var _elm_lang$core$Basics$never = function (_p0) {
		never:
		while (true) {
			var _p1 = _p0;
			var _v1 = _p1._0;
			_p0 = _v1;
			continue never;
		}
	};
	var _elm_lang$core$Basics$uncurry = F2(
		function (f, _p2) {
			var _p3 = _p2;
			return A2(f, _p3._0, _p3._1);
		});
	var _elm_lang$core$Basics$curry = F3(
		function (f, a, b) {
			return f(
				{ctor: '_Tuple2', _0: a, _1: b});
		});
	var _elm_lang$core$Basics$flip = F3(
		function (f, b, a) {
			return A2(f, a, b);
		});
	var _elm_lang$core$Basics$always = F2(
		function (a, _p4) {
			return a;
		});
	var _elm_lang$core$Basics$identity = function (x) {
		return x;
	};
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['<|'] = F2(
		function (f, x) {
			return f(x);
		});
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['|>'] = F2(
		function (x, f) {
			return f(x);
		});
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['>>'] = F3(
		function (f, g, x) {
			return g(
				f(x));
		});
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['<<'] = F3(
		function (g, f, x) {
			return g(
				f(x));
		});
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['++'] = _elm_lang$core$Native_Utils.append;
	var _elm_lang$core$Basics$toString = _elm_lang$core$Native_Utils.toString;
	var _elm_lang$core$Basics$isInfinite = _elm_lang$core$Native_Basics.isInfinite;
	var _elm_lang$core$Basics$isNaN = _elm_lang$core$Native_Basics.isNaN;
	var _elm_lang$core$Basics$toFloat = _elm_lang$core$Native_Basics.toFloat;
	var _elm_lang$core$Basics$ceiling = _elm_lang$core$Native_Basics.ceiling;
	var _elm_lang$core$Basics$floor = _elm_lang$core$Native_Basics.floor;
	var _elm_lang$core$Basics$truncate = _elm_lang$core$Native_Basics.truncate;
	var _elm_lang$core$Basics$round = _elm_lang$core$Native_Basics.round;
	var _elm_lang$core$Basics$not = _elm_lang$core$Native_Basics.not;
	var _elm_lang$core$Basics$xor = _elm_lang$core$Native_Basics.xor;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['||'] = _elm_lang$core$Native_Basics.or;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['&&'] = _elm_lang$core$Native_Basics.and;
	var _elm_lang$core$Basics$max = _elm_lang$core$Native_Basics.max;
	var _elm_lang$core$Basics$min = _elm_lang$core$Native_Basics.min;
	var _elm_lang$core$Basics$compare = _elm_lang$core$Native_Basics.compare;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['>='] = _elm_lang$core$Native_Basics.ge;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['<='] = _elm_lang$core$Native_Basics.le;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['>'] = _elm_lang$core$Native_Basics.gt;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['<'] = _elm_lang$core$Native_Basics.lt;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['/='] = _elm_lang$core$Native_Basics.neq;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['=='] = _elm_lang$core$Native_Basics.eq;
	var _elm_lang$core$Basics$e = _elm_lang$core$Native_Basics.e;
	var _elm_lang$core$Basics$pi = _elm_lang$core$Native_Basics.pi;
	var _elm_lang$core$Basics$clamp = _elm_lang$core$Native_Basics.clamp;
	var _elm_lang$core$Basics$logBase = _elm_lang$core$Native_Basics.logBase;
	var _elm_lang$core$Basics$abs = _elm_lang$core$Native_Basics.abs;
	var _elm_lang$core$Basics$negate = _elm_lang$core$Native_Basics.negate;
	var _elm_lang$core$Basics$sqrt = _elm_lang$core$Native_Basics.sqrt;
	var _elm_lang$core$Basics$atan2 = _elm_lang$core$Native_Basics.atan2;
	var _elm_lang$core$Basics$atan = _elm_lang$core$Native_Basics.atan;
	var _elm_lang$core$Basics$asin = _elm_lang$core$Native_Basics.asin;
	var _elm_lang$core$Basics$acos = _elm_lang$core$Native_Basics.acos;
	var _elm_lang$core$Basics$tan = _elm_lang$core$Native_Basics.tan;
	var _elm_lang$core$Basics$sin = _elm_lang$core$Native_Basics.sin;
	var _elm_lang$core$Basics$cos = _elm_lang$core$Native_Basics.cos;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['^'] = _elm_lang$core$Native_Basics.exp;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['%'] = _elm_lang$core$Native_Basics.mod;
	var _elm_lang$core$Basics$rem = _elm_lang$core$Native_Basics.rem;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['//'] = _elm_lang$core$Native_Basics.div;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['/'] = _elm_lang$core$Native_Basics.floatDiv;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['*'] = _elm_lang$core$Native_Basics.mul;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['-'] = _elm_lang$core$Native_Basics.sub;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['+'] = _elm_lang$core$Native_Basics.add;
	var _elm_lang$core$Basics$toPolar = _elm_lang$core$Native_Basics.toPolar;
	var _elm_lang$core$Basics$fromPolar = _elm_lang$core$Native_Basics.fromPolar;
	var _elm_lang$core$Basics$turns = _elm_lang$core$Native_Basics.turns;
	var _elm_lang$core$Basics$degrees = _elm_lang$core$Native_Basics.degrees;
	var _elm_lang$core$Basics$radians = function (t) {
		return t;
	};
	var _elm_lang$core$Basics$GT = {ctor: 'GT'};
	var _elm_lang$core$Basics$EQ = {ctor: 'EQ'};
	var _elm_lang$core$Basics$LT = {ctor: 'LT'};
	var _elm_lang$core$Basics$JustOneMore = function (a) {
		return {ctor: 'JustOneMore', _0: a};
	};
	
	var _elm_lang$core$Maybe$withDefault = F2(
		function ($default, maybe) {
			var _p0 = maybe;
			if (_p0.ctor === 'Just') {
				return _p0._0;
			} else {
				return $default;
			}
		});
	var _elm_lang$core$Maybe$Nothing = {ctor: 'Nothing'};
	var _elm_lang$core$Maybe$andThen = F2(
		function (callback, maybeValue) {
			var _p1 = maybeValue;
			if (_p1.ctor === 'Just') {
				return callback(_p1._0);
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		});
	var _elm_lang$core$Maybe$Just = function (a) {
		return {ctor: 'Just', _0: a};
	};
	var _elm_lang$core$Maybe$map = F2(
		function (f, maybe) {
			var _p2 = maybe;
			if (_p2.ctor === 'Just') {
				return _elm_lang$core$Maybe$Just(
					f(_p2._0));
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		});
	var _elm_lang$core$Maybe$map2 = F3(
		function (func, ma, mb) {
			var _p3 = {ctor: '_Tuple2', _0: ma, _1: mb};
			if (((_p3.ctor === '_Tuple2') && (_p3._0.ctor === 'Just')) && (_p3._1.ctor === 'Just')) {
				return _elm_lang$core$Maybe$Just(
					A2(func, _p3._0._0, _p3._1._0));
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		});
	var _elm_lang$core$Maybe$map3 = F4(
		function (func, ma, mb, mc) {
			var _p4 = {ctor: '_Tuple3', _0: ma, _1: mb, _2: mc};
			if ((((_p4.ctor === '_Tuple3') && (_p4._0.ctor === 'Just')) && (_p4._1.ctor === 'Just')) && (_p4._2.ctor === 'Just')) {
				return _elm_lang$core$Maybe$Just(
					A3(func, _p4._0._0, _p4._1._0, _p4._2._0));
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		});
	var _elm_lang$core$Maybe$map4 = F5(
		function (func, ma, mb, mc, md) {
			var _p5 = {ctor: '_Tuple4', _0: ma, _1: mb, _2: mc, _3: md};
			if (((((_p5.ctor === '_Tuple4') && (_p5._0.ctor === 'Just')) && (_p5._1.ctor === 'Just')) && (_p5._2.ctor === 'Just')) && (_p5._3.ctor === 'Just')) {
				return _elm_lang$core$Maybe$Just(
					A4(func, _p5._0._0, _p5._1._0, _p5._2._0, _p5._3._0));
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		});
	var _elm_lang$core$Maybe$map5 = F6(
		function (func, ma, mb, mc, md, me) {
			var _p6 = {ctor: '_Tuple5', _0: ma, _1: mb, _2: mc, _3: md, _4: me};
			if ((((((_p6.ctor === '_Tuple5') && (_p6._0.ctor === 'Just')) && (_p6._1.ctor === 'Just')) && (_p6._2.ctor === 'Just')) && (_p6._3.ctor === 'Just')) && (_p6._4.ctor === 'Just')) {
				return _elm_lang$core$Maybe$Just(
					A5(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0, _p6._4._0));
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		});
	
	//import Native.Utils //
	
	var _elm_lang$core$Native_List = function() {
	
	var Nil = { ctor: '[]' };
	
	function Cons(hd, tl)
	{
		return { ctor: '::', _0: hd, _1: tl };
	}
	
	function fromArray(arr)
	{
		var out = Nil;
		for (var i = arr.length; i--; )
		{
			out = Cons(arr[i], out);
		}
		return out;
	}
	
	function toArray(xs)
	{
		var out = [];
		while (xs.ctor !== '[]')
		{
			out.push(xs._0);
			xs = xs._1;
		}
		return out;
	}
	
	function foldr(f, b, xs)
	{
		var arr = toArray(xs);
		var acc = b;
		for (var i = arr.length; i--; )
		{
			acc = A2(f, arr[i], acc);
		}
		return acc;
	}
	
	function map2(f, xs, ys)
	{
		var arr = [];
		while (xs.ctor !== '[]' && ys.ctor !== '[]')
		{
			arr.push(A2(f, xs._0, ys._0));
			xs = xs._1;
			ys = ys._1;
		}
		return fromArray(arr);
	}
	
	function map3(f, xs, ys, zs)
	{
		var arr = [];
		while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]')
		{
			arr.push(A3(f, xs._0, ys._0, zs._0));
			xs = xs._1;
			ys = ys._1;
			zs = zs._1;
		}
		return fromArray(arr);
	}
	
	function map4(f, ws, xs, ys, zs)
	{
		var arr = [];
		while (   ws.ctor !== '[]'
			   && xs.ctor !== '[]'
			   && ys.ctor !== '[]'
			   && zs.ctor !== '[]')
		{
			arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
			ws = ws._1;
			xs = xs._1;
			ys = ys._1;
			zs = zs._1;
		}
		return fromArray(arr);
	}
	
	function map5(f, vs, ws, xs, ys, zs)
	{
		var arr = [];
		while (   vs.ctor !== '[]'
			   && ws.ctor !== '[]'
			   && xs.ctor !== '[]'
			   && ys.ctor !== '[]'
			   && zs.ctor !== '[]')
		{
			arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
			vs = vs._1;
			ws = ws._1;
			xs = xs._1;
			ys = ys._1;
			zs = zs._1;
		}
		return fromArray(arr);
	}
	
	function sortBy(f, xs)
	{
		return fromArray(toArray(xs).sort(function(a, b) {
			return _elm_lang$core$Native_Utils.cmp(f(a), f(b));
		}));
	}
	
	function sortWith(f, xs)
	{
		return fromArray(toArray(xs).sort(function(a, b) {
			var ord = f(a)(b).ctor;
			return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
		}));
	}
	
	return {
		Nil: Nil,
		Cons: Cons,
		cons: F2(Cons),
		toArray: toArray,
		fromArray: fromArray,
	
		foldr: F3(foldr),
	
		map2: F3(map2),
		map3: F4(map3),
		map4: F5(map4),
		map5: F6(map5),
		sortBy: F2(sortBy),
		sortWith: F2(sortWith)
	};
	
	}();
	var _elm_lang$core$List$sortWith = _elm_lang$core$Native_List.sortWith;
	var _elm_lang$core$List$sortBy = _elm_lang$core$Native_List.sortBy;
	var _elm_lang$core$List$sort = function (xs) {
		return A2(_elm_lang$core$List$sortBy, _elm_lang$core$Basics$identity, xs);
	};
	var _elm_lang$core$List$singleton = function (value) {
		return {
			ctor: '::',
			_0: value,
			_1: {ctor: '[]'}
		};
	};
	var _elm_lang$core$List$drop = F2(
		function (n, list) {
			drop:
			while (true) {
				if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
					return list;
				} else {
					var _p0 = list;
					if (_p0.ctor === '[]') {
						return list;
					} else {
						var _v1 = n - 1,
							_v2 = _p0._1;
						n = _v1;
						list = _v2;
						continue drop;
					}
				}
			}
		});
	var _elm_lang$core$List$map5 = _elm_lang$core$Native_List.map5;
	var _elm_lang$core$List$map4 = _elm_lang$core$Native_List.map4;
	var _elm_lang$core$List$map3 = _elm_lang$core$Native_List.map3;
	var _elm_lang$core$List$map2 = _elm_lang$core$Native_List.map2;
	var _elm_lang$core$List$any = F2(
		function (isOkay, list) {
			any:
			while (true) {
				var _p1 = list;
				if (_p1.ctor === '[]') {
					return false;
				} else {
					if (isOkay(_p1._0)) {
						return true;
					} else {
						var _v4 = isOkay,
							_v5 = _p1._1;
						isOkay = _v4;
						list = _v5;
						continue any;
					}
				}
			}
		});
	var _elm_lang$core$List$all = F2(
		function (isOkay, list) {
			return !A2(
				_elm_lang$core$List$any,
				function (_p2) {
					return !isOkay(_p2);
				},
				list);
		});
	var _elm_lang$core$List$foldr = _elm_lang$core$Native_List.foldr;
	var _elm_lang$core$List$foldl = F3(
		function (func, acc, list) {
			foldl:
			while (true) {
				var _p3 = list;
				if (_p3.ctor === '[]') {
					return acc;
				} else {
					var _v7 = func,
						_v8 = A2(func, _p3._0, acc),
						_v9 = _p3._1;
					func = _v7;
					acc = _v8;
					list = _v9;
					continue foldl;
				}
			}
		});
	var _elm_lang$core$List$length = function (xs) {
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p4, i) {
					return i + 1;
				}),
			0,
			xs);
	};
	var _elm_lang$core$List$sum = function (numbers) {
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (x, y) {
					return x + y;
				}),
			0,
			numbers);
	};
	var _elm_lang$core$List$product = function (numbers) {
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (x, y) {
					return x * y;
				}),
			1,
			numbers);
	};
	var _elm_lang$core$List$maximum = function (list) {
		var _p5 = list;
		if (_p5.ctor === '::') {
			return _elm_lang$core$Maybe$Just(
				A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$max, _p5._0, _p5._1));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	};
	var _elm_lang$core$List$minimum = function (list) {
		var _p6 = list;
		if (_p6.ctor === '::') {
			return _elm_lang$core$Maybe$Just(
				A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$min, _p6._0, _p6._1));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	};
	var _elm_lang$core$List$member = F2(
		function (x, xs) {
			return A2(
				_elm_lang$core$List$any,
				function (a) {
					return _elm_lang$core$Native_Utils.eq(a, x);
				},
				xs);
		});
	var _elm_lang$core$List$isEmpty = function (xs) {
		var _p7 = xs;
		if (_p7.ctor === '[]') {
			return true;
		} else {
			return false;
		}
	};
	var _elm_lang$core$List$tail = function (list) {
		var _p8 = list;
		if (_p8.ctor === '::') {
			return _elm_lang$core$Maybe$Just(_p8._1);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	};
	var _elm_lang$core$List$head = function (list) {
		var _p9 = list;
		if (_p9.ctor === '::') {
			return _elm_lang$core$Maybe$Just(_p9._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	};
	var _elm_lang$core$List_ops = _elm_lang$core$List_ops || {};
	_elm_lang$core$List_ops['::'] = _elm_lang$core$Native_List.cons;
	var _elm_lang$core$List$map = F2(
		function (f, xs) {
			return A3(
				_elm_lang$core$List$foldr,
				F2(
					function (x, acc) {
						return {
							ctor: '::',
							_0: f(x),
							_1: acc
						};
					}),
				{ctor: '[]'},
				xs);
		});
	var _elm_lang$core$List$filter = F2(
		function (pred, xs) {
			var conditionalCons = F2(
				function (front, back) {
					return pred(front) ? {ctor: '::', _0: front, _1: back} : back;
				});
			return A3(
				_elm_lang$core$List$foldr,
				conditionalCons,
				{ctor: '[]'},
				xs);
		});
	var _elm_lang$core$List$maybeCons = F3(
		function (f, mx, xs) {
			var _p10 = f(mx);
			if (_p10.ctor === 'Just') {
				return {ctor: '::', _0: _p10._0, _1: xs};
			} else {
				return xs;
			}
		});
	var _elm_lang$core$List$filterMap = F2(
		function (f, xs) {
			return A3(
				_elm_lang$core$List$foldr,
				_elm_lang$core$List$maybeCons(f),
				{ctor: '[]'},
				xs);
		});
	var _elm_lang$core$List$reverse = function (list) {
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (x, y) {
					return {ctor: '::', _0: x, _1: y};
				}),
			{ctor: '[]'},
			list);
	};
	var _elm_lang$core$List$scanl = F3(
		function (f, b, xs) {
			var scan1 = F2(
				function (x, accAcc) {
					var _p11 = accAcc;
					if (_p11.ctor === '::') {
						return {
							ctor: '::',
							_0: A2(f, x, _p11._0),
							_1: accAcc
						};
					} else {
						return {ctor: '[]'};
					}
				});
			return _elm_lang$core$List$reverse(
				A3(
					_elm_lang$core$List$foldl,
					scan1,
					{
						ctor: '::',
						_0: b,
						_1: {ctor: '[]'}
					},
					xs));
		});
	var _elm_lang$core$List$append = F2(
		function (xs, ys) {
			var _p12 = ys;
			if (_p12.ctor === '[]') {
				return xs;
			} else {
				return A3(
					_elm_lang$core$List$foldr,
					F2(
						function (x, y) {
							return {ctor: '::', _0: x, _1: y};
						}),
					ys,
					xs);
			}
		});
	var _elm_lang$core$List$concat = function (lists) {
		return A3(
			_elm_lang$core$List$foldr,
			_elm_lang$core$List$append,
			{ctor: '[]'},
			lists);
	};
	var _elm_lang$core$List$concatMap = F2(
		function (f, list) {
			return _elm_lang$core$List$concat(
				A2(_elm_lang$core$List$map, f, list));
		});
	var _elm_lang$core$List$partition = F2(
		function (pred, list) {
			var step = F2(
				function (x, _p13) {
					var _p14 = _p13;
					var _p16 = _p14._0;
					var _p15 = _p14._1;
					return pred(x) ? {
						ctor: '_Tuple2',
						_0: {ctor: '::', _0: x, _1: _p16},
						_1: _p15
					} : {
						ctor: '_Tuple2',
						_0: _p16,
						_1: {ctor: '::', _0: x, _1: _p15}
					};
				});
			return A3(
				_elm_lang$core$List$foldr,
				step,
				{
					ctor: '_Tuple2',
					_0: {ctor: '[]'},
					_1: {ctor: '[]'}
				},
				list);
		});
	var _elm_lang$core$List$unzip = function (pairs) {
		var step = F2(
			function (_p18, _p17) {
				var _p19 = _p18;
				var _p20 = _p17;
				return {
					ctor: '_Tuple2',
					_0: {ctor: '::', _0: _p19._0, _1: _p20._0},
					_1: {ctor: '::', _0: _p19._1, _1: _p20._1}
				};
			});
		return A3(
			_elm_lang$core$List$foldr,
			step,
			{
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: {ctor: '[]'}
			},
			pairs);
	};
	var _elm_lang$core$List$intersperse = F2(
		function (sep, xs) {
			var _p21 = xs;
			if (_p21.ctor === '[]') {
				return {ctor: '[]'};
			} else {
				var step = F2(
					function (x, rest) {
						return {
							ctor: '::',
							_0: sep,
							_1: {ctor: '::', _0: x, _1: rest}
						};
					});
				var spersed = A3(
					_elm_lang$core$List$foldr,
					step,
					{ctor: '[]'},
					_p21._1);
				return {ctor: '::', _0: _p21._0, _1: spersed};
			}
		});
	var _elm_lang$core$List$takeReverse = F3(
		function (n, list, taken) {
			takeReverse:
			while (true) {
				if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
					return taken;
				} else {
					var _p22 = list;
					if (_p22.ctor === '[]') {
						return taken;
					} else {
						var _v23 = n - 1,
							_v24 = _p22._1,
							_v25 = {ctor: '::', _0: _p22._0, _1: taken};
						n = _v23;
						list = _v24;
						taken = _v25;
						continue takeReverse;
					}
				}
			}
		});
	var _elm_lang$core$List$takeTailRec = F2(
		function (n, list) {
			return _elm_lang$core$List$reverse(
				A3(
					_elm_lang$core$List$takeReverse,
					n,
					list,
					{ctor: '[]'}));
		});
	var _elm_lang$core$List$takeFast = F3(
		function (ctr, n, list) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return {ctor: '[]'};
			} else {
				var _p23 = {ctor: '_Tuple2', _0: n, _1: list};
				_v26_5:
				do {
					_v26_1:
					do {
						if (_p23.ctor === '_Tuple2') {
							if (_p23._1.ctor === '[]') {
								return list;
							} else {
								if (_p23._1._1.ctor === '::') {
									switch (_p23._0) {
										case 1:
											break _v26_1;
										case 2:
											return {
												ctor: '::',
												_0: _p23._1._0,
												_1: {
													ctor: '::',
													_0: _p23._1._1._0,
													_1: {ctor: '[]'}
												}
											};
										case 3:
											if (_p23._1._1._1.ctor === '::') {
												return {
													ctor: '::',
													_0: _p23._1._0,
													_1: {
														ctor: '::',
														_0: _p23._1._1._0,
														_1: {
															ctor: '::',
															_0: _p23._1._1._1._0,
															_1: {ctor: '[]'}
														}
													}
												};
											} else {
												break _v26_5;
											}
										default:
											if ((_p23._1._1._1.ctor === '::') && (_p23._1._1._1._1.ctor === '::')) {
												var _p28 = _p23._1._1._1._0;
												var _p27 = _p23._1._1._0;
												var _p26 = _p23._1._0;
												var _p25 = _p23._1._1._1._1._0;
												var _p24 = _p23._1._1._1._1._1;
												return (_elm_lang$core$Native_Utils.cmp(ctr, 1000) > 0) ? {
													ctor: '::',
													_0: _p26,
													_1: {
														ctor: '::',
														_0: _p27,
														_1: {
															ctor: '::',
															_0: _p28,
															_1: {
																ctor: '::',
																_0: _p25,
																_1: A2(_elm_lang$core$List$takeTailRec, n - 4, _p24)
															}
														}
													}
												} : {
													ctor: '::',
													_0: _p26,
													_1: {
														ctor: '::',
														_0: _p27,
														_1: {
															ctor: '::',
															_0: _p28,
															_1: {
																ctor: '::',
																_0: _p25,
																_1: A3(_elm_lang$core$List$takeFast, ctr + 1, n - 4, _p24)
															}
														}
													}
												};
											} else {
												break _v26_5;
											}
									}
								} else {
									if (_p23._0 === 1) {
										break _v26_1;
									} else {
										break _v26_5;
									}
								}
							}
						} else {
							break _v26_5;
						}
					} while(false);
					return {
						ctor: '::',
						_0: _p23._1._0,
						_1: {ctor: '[]'}
					};
				} while(false);
				return list;
			}
		});
	var _elm_lang$core$List$take = F2(
		function (n, list) {
			return A3(_elm_lang$core$List$takeFast, 0, n, list);
		});
	var _elm_lang$core$List$repeatHelp = F3(
		function (result, n, value) {
			repeatHelp:
			while (true) {
				if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
					return result;
				} else {
					var _v27 = {ctor: '::', _0: value, _1: result},
						_v28 = n - 1,
						_v29 = value;
					result = _v27;
					n = _v28;
					value = _v29;
					continue repeatHelp;
				}
			}
		});
	var _elm_lang$core$List$repeat = F2(
		function (n, value) {
			return A3(
				_elm_lang$core$List$repeatHelp,
				{ctor: '[]'},
				n,
				value);
		});
	var _elm_lang$core$List$rangeHelp = F3(
		function (lo, hi, list) {
			rangeHelp:
			while (true) {
				if (_elm_lang$core$Native_Utils.cmp(lo, hi) < 1) {
					var _v30 = lo,
						_v31 = hi - 1,
						_v32 = {ctor: '::', _0: hi, _1: list};
					lo = _v30;
					hi = _v31;
					list = _v32;
					continue rangeHelp;
				} else {
					return list;
				}
			}
		});
	var _elm_lang$core$List$range = F2(
		function (lo, hi) {
			return A3(
				_elm_lang$core$List$rangeHelp,
				lo,
				hi,
				{ctor: '[]'});
		});
	var _elm_lang$core$List$indexedMap = F2(
		function (f, xs) {
			return A3(
				_elm_lang$core$List$map2,
				f,
				A2(
					_elm_lang$core$List$range,
					0,
					_elm_lang$core$List$length(xs) - 1),
				xs);
		});
	
	var _elm_lang$core$Array$append = _elm_lang$core$Native_Array.append;
	var _elm_lang$core$Array$length = _elm_lang$core$Native_Array.length;
	var _elm_lang$core$Array$isEmpty = function (array) {
		return _elm_lang$core$Native_Utils.eq(
			_elm_lang$core$Array$length(array),
			0);
	};
	var _elm_lang$core$Array$slice = _elm_lang$core$Native_Array.slice;
	var _elm_lang$core$Array$set = _elm_lang$core$Native_Array.set;
	var _elm_lang$core$Array$get = F2(
		function (i, array) {
			return ((_elm_lang$core$Native_Utils.cmp(0, i) < 1) && (_elm_lang$core$Native_Utils.cmp(
				i,
				_elm_lang$core$Native_Array.length(array)) < 0)) ? _elm_lang$core$Maybe$Just(
				A2(_elm_lang$core$Native_Array.get, i, array)) : _elm_lang$core$Maybe$Nothing;
		});
	var _elm_lang$core$Array$push = _elm_lang$core$Native_Array.push;
	var _elm_lang$core$Array$empty = _elm_lang$core$Native_Array.empty;
	var _elm_lang$core$Array$filter = F2(
		function (isOkay, arr) {
			var update = F2(
				function (x, xs) {
					return isOkay(x) ? A2(_elm_lang$core$Native_Array.push, x, xs) : xs;
				});
			return A3(_elm_lang$core$Native_Array.foldl, update, _elm_lang$core$Native_Array.empty, arr);
		});
	var _elm_lang$core$Array$foldr = _elm_lang$core$Native_Array.foldr;
	var _elm_lang$core$Array$foldl = _elm_lang$core$Native_Array.foldl;
	var _elm_lang$core$Array$indexedMap = _elm_lang$core$Native_Array.indexedMap;
	var _elm_lang$core$Array$map = _elm_lang$core$Native_Array.map;
	var _elm_lang$core$Array$toIndexedList = function (array) {
		return A3(
			_elm_lang$core$List$map2,
			F2(
				function (v0, v1) {
					return {ctor: '_Tuple2', _0: v0, _1: v1};
				}),
			A2(
				_elm_lang$core$List$range,
				0,
				_elm_lang$core$Native_Array.length(array) - 1),
			_elm_lang$core$Native_Array.toList(array));
	};
	var _elm_lang$core$Array$toList = _elm_lang$core$Native_Array.toList;
	var _elm_lang$core$Array$fromList = _elm_lang$core$Native_Array.fromList;
	var _elm_lang$core$Array$initialize = _elm_lang$core$Native_Array.initialize;
	var _elm_lang$core$Array$repeat = F2(
		function (n, e) {
			return A2(
				_elm_lang$core$Array$initialize,
				n,
				_elm_lang$core$Basics$always(e));
		});
	var _elm_lang$core$Array$Array = {ctor: 'Array'};
	
	//import Native.Utils //
	
	var _elm_lang$core$Native_Char = function() {
	
	return {
		fromCode: function(c) { return _elm_lang$core$Native_Utils.chr(String.fromCharCode(c)); },
		toCode: function(c) { return c.charCodeAt(0); },
		toUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toUpperCase()); },
		toLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLowerCase()); },
		toLocaleUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleUpperCase()); },
		toLocaleLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleLowerCase()); }
	};
	
	}();
	var _elm_lang$core$Char$fromCode = _elm_lang$core$Native_Char.fromCode;
	var _elm_lang$core$Char$toCode = _elm_lang$core$Native_Char.toCode;
	var _elm_lang$core$Char$toLocaleLower = _elm_lang$core$Native_Char.toLocaleLower;
	var _elm_lang$core$Char$toLocaleUpper = _elm_lang$core$Native_Char.toLocaleUpper;
	var _elm_lang$core$Char$toLower = _elm_lang$core$Native_Char.toLower;
	var _elm_lang$core$Char$toUpper = _elm_lang$core$Native_Char.toUpper;
	var _elm_lang$core$Char$isBetween = F3(
		function (low, high, $char) {
			var code = _elm_lang$core$Char$toCode($char);
			return (_elm_lang$core$Native_Utils.cmp(
				code,
				_elm_lang$core$Char$toCode(low)) > -1) && (_elm_lang$core$Native_Utils.cmp(
				code,
				_elm_lang$core$Char$toCode(high)) < 1);
		});
	var _elm_lang$core$Char$isUpper = A2(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('A'),
		_elm_lang$core$Native_Utils.chr('Z'));
	var _elm_lang$core$Char$isLower = A2(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('a'),
		_elm_lang$core$Native_Utils.chr('z'));
	var _elm_lang$core$Char$isDigit = A2(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('0'),
		_elm_lang$core$Native_Utils.chr('9'));
	var _elm_lang$core$Char$isOctDigit = A2(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('0'),
		_elm_lang$core$Native_Utils.chr('7'));
	var _elm_lang$core$Char$isHexDigit = function ($char) {
		return _elm_lang$core$Char$isDigit($char) || (A3(
			_elm_lang$core$Char$isBetween,
			_elm_lang$core$Native_Utils.chr('a'),
			_elm_lang$core$Native_Utils.chr('f'),
			$char) || A3(
			_elm_lang$core$Char$isBetween,
			_elm_lang$core$Native_Utils.chr('A'),
			_elm_lang$core$Native_Utils.chr('F'),
			$char));
	};
	
	//import Native.Utils //
	
	var _elm_lang$core$Native_Scheduler = function() {
	
	var MAX_STEPS = 10000;
	
	
	// TASKS
	
	function succeed(value)
	{
		return {
			ctor: '_Task_succeed',
			value: value
		};
	}
	
	function fail(error)
	{
		return {
			ctor: '_Task_fail',
			value: error
		};
	}
	
	function nativeBinding(callback)
	{
		return {
			ctor: '_Task_nativeBinding',
			callback: callback,
			cancel: null
		};
	}
	
	function andThen(callback, task)
	{
		return {
			ctor: '_Task_andThen',
			callback: callback,
			task: task
		};
	}
	
	function onError(callback, task)
	{
		return {
			ctor: '_Task_onError',
			callback: callback,
			task: task
		};
	}
	
	function receive(callback)
	{
		return {
			ctor: '_Task_receive',
			callback: callback
		};
	}
	
	
	// PROCESSES
	
	function rawSpawn(task)
	{
		var process = {
			ctor: '_Process',
			id: _elm_lang$core$Native_Utils.guid(),
			root: task,
			stack: null,
			mailbox: []
		};
	
		enqueue(process);
	
		return process;
	}
	
	function spawn(task)
	{
		return nativeBinding(function(callback) {
			var process = rawSpawn(task);
			callback(succeed(process));
		});
	}
	
	function rawSend(process, msg)
	{
		process.mailbox.push(msg);
		enqueue(process);
	}
	
	function send(process, msg)
	{
		return nativeBinding(function(callback) {
			rawSend(process, msg);
			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		});
	}
	
	function kill(process)
	{
		return nativeBinding(function(callback) {
			var root = process.root;
			if (root.ctor === '_Task_nativeBinding' && root.cancel)
			{
				root.cancel();
			}
	
			process.root = null;
	
			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		});
	}
	
	function sleep(time)
	{
		return nativeBinding(function(callback) {
			var id = setTimeout(function() {
				callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
			}, time);
	
			return function() { clearTimeout(id); };
		});
	}
	
	
	// STEP PROCESSES
	
	function step(numSteps, process)
	{
		while (numSteps < MAX_STEPS)
		{
			var ctor = process.root.ctor;
	
			if (ctor === '_Task_succeed')
			{
				while (process.stack && process.stack.ctor === '_Task_onError')
				{
					process.stack = process.stack.rest;
				}
				if (process.stack === null)
				{
					break;
				}
				process.root = process.stack.callback(process.root.value);
				process.stack = process.stack.rest;
				++numSteps;
				continue;
			}
	
			if (ctor === '_Task_fail')
			{
				while (process.stack && process.stack.ctor === '_Task_andThen')
				{
					process.stack = process.stack.rest;
				}
				if (process.stack === null)
				{
					break;
				}
				process.root = process.stack.callback(process.root.value);
				process.stack = process.stack.rest;
				++numSteps;
				continue;
			}
	
			if (ctor === '_Task_andThen')
			{
				process.stack = {
					ctor: '_Task_andThen',
					callback: process.root.callback,
					rest: process.stack
				};
				process.root = process.root.task;
				++numSteps;
				continue;
			}
	
			if (ctor === '_Task_onError')
			{
				process.stack = {
					ctor: '_Task_onError',
					callback: process.root.callback,
					rest: process.stack
				};
				process.root = process.root.task;
				++numSteps;
				continue;
			}
	
			if (ctor === '_Task_nativeBinding')
			{
				process.root.cancel = process.root.callback(function(newRoot) {
					process.root = newRoot;
					enqueue(process);
				});
	
				break;
			}
	
			if (ctor === '_Task_receive')
			{
				var mailbox = process.mailbox;
				if (mailbox.length === 0)
				{
					break;
				}
	
				process.root = process.root.callback(mailbox.shift());
				++numSteps;
				continue;
			}
	
			throw new Error(ctor);
		}
	
		if (numSteps < MAX_STEPS)
		{
			return numSteps + 1;
		}
		enqueue(process);
	
		return numSteps;
	}
	
	
	// WORK QUEUE
	
	var working = false;
	var workQueue = [];
	
	function enqueue(process)
	{
		workQueue.push(process);
	
		if (!working)
		{
			setTimeout(work, 0);
			working = true;
		}
	}
	
	function work()
	{
		var numSteps = 0;
		var process;
		while (numSteps < MAX_STEPS && (process = workQueue.shift()))
		{
			if (process.root)
			{
				numSteps = step(numSteps, process);
			}
		}
		if (!process)
		{
			working = false;
			return;
		}
		setTimeout(work, 0);
	}
	
	
	return {
		succeed: succeed,
		fail: fail,
		nativeBinding: nativeBinding,
		andThen: F2(andThen),
		onError: F2(onError),
		receive: receive,
	
		spawn: spawn,
		kill: kill,
		sleep: sleep,
		send: F2(send),
	
		rawSpawn: rawSpawn,
		rawSend: rawSend
	};
	
	}();
	//import //
	
	var _elm_lang$core$Native_Platform = function() {
	
	
	// PROGRAMS
	
	function program(impl)
	{
		return function(flagDecoder)
		{
			return function(object, moduleName)
			{
				object['worker'] = function worker(flags)
				{
					if (typeof flags !== 'undefined')
					{
						throw new Error(
							'The `' + moduleName + '` module does not need flags.\n'
							+ 'Call ' + moduleName + '.worker() with no arguments and you should be all set!'
						);
					}
	
					return initialize(
						impl.init,
						impl.update,
						impl.subscriptions,
						renderer
					);
				};
			};
		};
	}
	
	function programWithFlags(impl)
	{
		return function(flagDecoder)
		{
			return function(object, moduleName)
			{
				object['worker'] = function worker(flags)
				{
					if (typeof flagDecoder === 'undefined')
					{
						throw new Error(
							'Are you trying to sneak a Never value into Elm? Trickster!\n'
							+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
							+ 'Use `program` instead if you do not want flags.'
						);
					}
	
					var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
					if (result.ctor === 'Err')
					{
						throw new Error(
							moduleName + '.worker(...) was called with an unexpected argument.\n'
							+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
							+ result._0
						);
					}
	
					return initialize(
						impl.init(result._0),
						impl.update,
						impl.subscriptions,
						renderer
					);
				};
			};
		};
	}
	
	function renderer(enqueue, _)
	{
		return function(_) {};
	}
	
	
	// HTML TO PROGRAM
	
	function htmlToProgram(vnode)
	{
		var emptyBag = batch(_elm_lang$core$Native_List.Nil);
		var noChange = _elm_lang$core$Native_Utils.Tuple2(
			_elm_lang$core$Native_Utils.Tuple0,
			emptyBag
		);
	
		return _elm_lang$virtual_dom$VirtualDom$program({
			init: noChange,
			view: function(model) { return main; },
			update: F2(function(msg, model) { return noChange; }),
			subscriptions: function (model) { return emptyBag; }
		});
	}
	
	
	// INITIALIZE A PROGRAM
	
	function initialize(init, update, subscriptions, renderer)
	{
		// ambient state
		var managers = {};
		var updateView;
	
		// init and update state in main process
		var initApp = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
			var model = init._0;
			updateView = renderer(enqueue, model);
			var cmds = init._1;
			var subs = subscriptions(model);
			dispatchEffects(managers, cmds, subs);
			callback(_elm_lang$core$Native_Scheduler.succeed(model));
		});
	
		function onMessage(msg, model)
		{
			return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
				var results = A2(update, msg, model);
				model = results._0;
				updateView(model);
				var cmds = results._1;
				var subs = subscriptions(model);
				dispatchEffects(managers, cmds, subs);
				callback(_elm_lang$core$Native_Scheduler.succeed(model));
			});
		}
	
		var mainProcess = spawnLoop(initApp, onMessage);
	
		function enqueue(msg)
		{
			_elm_lang$core$Native_Scheduler.rawSend(mainProcess, msg);
		}
	
		var ports = setupEffects(managers, enqueue);
	
		return ports ? { ports: ports } : {};
	}
	
	
	// EFFECT MANAGERS
	
	var effectManagers = {};
	
	function setupEffects(managers, callback)
	{
		var ports;
	
		// setup all necessary effect managers
		for (var key in effectManagers)
		{
			var manager = effectManagers[key];
	
			if (manager.isForeign)
			{
				ports = ports || {};
				ports[key] = manager.tag === 'cmd'
					? setupOutgoingPort(key)
					: setupIncomingPort(key, callback);
			}
	
			managers[key] = makeManager(manager, callback);
		}
	
		return ports;
	}
	
	function makeManager(info, callback)
	{
		var router = {
			main: callback,
			self: undefined
		};
	
		var tag = info.tag;
		var onEffects = info.onEffects;
		var onSelfMsg = info.onSelfMsg;
	
		function onMessage(msg, state)
		{
			if (msg.ctor === 'self')
			{
				return A3(onSelfMsg, router, msg._0, state);
			}
	
			var fx = msg._0;
			switch (tag)
			{
				case 'cmd':
					return A3(onEffects, router, fx.cmds, state);
	
				case 'sub':
					return A3(onEffects, router, fx.subs, state);
	
				case 'fx':
					return A4(onEffects, router, fx.cmds, fx.subs, state);
			}
		}
	
		var process = spawnLoop(info.init, onMessage);
		router.self = process;
		return process;
	}
	
	function sendToApp(router, msg)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
		{
			router.main(msg);
			callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
		});
	}
	
	function sendToSelf(router, msg)
	{
		return A2(_elm_lang$core$Native_Scheduler.send, router.self, {
			ctor: 'self',
			_0: msg
		});
	}
	
	
	// HELPER for STATEFUL LOOPS
	
	function spawnLoop(init, onMessage)
	{
		var andThen = _elm_lang$core$Native_Scheduler.andThen;
	
		function loop(state)
		{
			var handleMsg = _elm_lang$core$Native_Scheduler.receive(function(msg) {
				return onMessage(msg, state);
			});
			return A2(andThen, loop, handleMsg);
		}
	
		var task = A2(andThen, loop, init);
	
		return _elm_lang$core$Native_Scheduler.rawSpawn(task);
	}
	
	
	// BAGS
	
	function leaf(home)
	{
		return function(value)
		{
			return {
				type: 'leaf',
				home: home,
				value: value
			};
		};
	}
	
	function batch(list)
	{
		return {
			type: 'node',
			branches: list
		};
	}
	
	function map(tagger, bag)
	{
		return {
			type: 'map',
			tagger: tagger,
			tree: bag
		}
	}
	
	
	// PIPE BAGS INTO EFFECT MANAGERS
	
	function dispatchEffects(managers, cmdBag, subBag)
	{
		var effectsDict = {};
		gatherEffects(true, cmdBag, effectsDict, null);
		gatherEffects(false, subBag, effectsDict, null);
	
		for (var home in managers)
		{
			var fx = home in effectsDict
				? effectsDict[home]
				: {
					cmds: _elm_lang$core$Native_List.Nil,
					subs: _elm_lang$core$Native_List.Nil
				};
	
			_elm_lang$core$Native_Scheduler.rawSend(managers[home], { ctor: 'fx', _0: fx });
		}
	}
	
	function gatherEffects(isCmd, bag, effectsDict, taggers)
	{
		switch (bag.type)
		{
			case 'leaf':
				var home = bag.home;
				var effect = toEffect(isCmd, home, taggers, bag.value);
				effectsDict[home] = insert(isCmd, effect, effectsDict[home]);
				return;
	
			case 'node':
				var list = bag.branches;
				while (list.ctor !== '[]')
				{
					gatherEffects(isCmd, list._0, effectsDict, taggers);
					list = list._1;
				}
				return;
	
			case 'map':
				gatherEffects(isCmd, bag.tree, effectsDict, {
					tagger: bag.tagger,
					rest: taggers
				});
				return;
		}
	}
	
	function toEffect(isCmd, home, taggers, value)
	{
		function applyTaggers(x)
		{
			var temp = taggers;
			while (temp)
			{
				x = temp.tagger(x);
				temp = temp.rest;
			}
			return x;
		}
	
		var map = isCmd
			? effectManagers[home].cmdMap
			: effectManagers[home].subMap;
	
		return A2(map, applyTaggers, value)
	}
	
	function insert(isCmd, newEffect, effects)
	{
		effects = effects || {
			cmds: _elm_lang$core$Native_List.Nil,
			subs: _elm_lang$core$Native_List.Nil
		};
		if (isCmd)
		{
			effects.cmds = _elm_lang$core$Native_List.Cons(newEffect, effects.cmds);
			return effects;
		}
		effects.subs = _elm_lang$core$Native_List.Cons(newEffect, effects.subs);
		return effects;
	}
	
	
	// PORTS
	
	function checkPortName(name)
	{
		if (name in effectManagers)
		{
			throw new Error('There can only be one port named `' + name + '`, but your program has multiple.');
		}
	}
	
	
	// OUTGOING PORTS
	
	function outgoingPort(name, converter)
	{
		checkPortName(name);
		effectManagers[name] = {
			tag: 'cmd',
			cmdMap: outgoingPortMap,
			converter: converter,
			isForeign: true
		};
		return leaf(name);
	}
	
	var outgoingPortMap = F2(function cmdMap(tagger, value) {
		return value;
	});
	
	function setupOutgoingPort(name)
	{
		var subs = [];
		var converter = effectManagers[name].converter;
	
		// CREATE MANAGER
	
		var init = _elm_lang$core$Native_Scheduler.succeed(null);
	
		function onEffects(router, cmdList, state)
		{
			while (cmdList.ctor !== '[]')
			{
				// grab a separate reference to subs in case unsubscribe is called
				var currentSubs = subs;
				var value = converter(cmdList._0);
				for (var i = 0; i < currentSubs.length; i++)
				{
					currentSubs[i](value);
				}
				cmdList = cmdList._1;
			}
			return init;
		}
	
		effectManagers[name].init = init;
		effectManagers[name].onEffects = F3(onEffects);
	
		// PUBLIC API
	
		function subscribe(callback)
		{
			subs.push(callback);
		}
	
		function unsubscribe(callback)
		{
			// copy subs into a new array in case unsubscribe is called within a
			// subscribed callback
			subs = subs.slice();
			var index = subs.indexOf(callback);
			if (index >= 0)
			{
				subs.splice(index, 1);
			}
		}
	
		return {
			subscribe: subscribe,
			unsubscribe: unsubscribe
		};
	}
	
	
	// INCOMING PORTS
	
	function incomingPort(name, converter)
	{
		checkPortName(name);
		effectManagers[name] = {
			tag: 'sub',
			subMap: incomingPortMap,
			converter: converter,
			isForeign: true
		};
		return leaf(name);
	}
	
	var incomingPortMap = F2(function subMap(tagger, finalTagger)
	{
		return function(value)
		{
			return tagger(finalTagger(value));
		};
	});
	
	function setupIncomingPort(name, callback)
	{
		var sentBeforeInit = [];
		var subs = _elm_lang$core$Native_List.Nil;
		var converter = effectManagers[name].converter;
		var currentOnEffects = preInitOnEffects;
		var currentSend = preInitSend;
	
		// CREATE MANAGER
	
		var init = _elm_lang$core$Native_Scheduler.succeed(null);
	
		function preInitOnEffects(router, subList, state)
		{
			var postInitResult = postInitOnEffects(router, subList, state);
	
			for(var i = 0; i < sentBeforeInit.length; i++)
			{
				postInitSend(sentBeforeInit[i]);
			}
	
			sentBeforeInit = null; // to release objects held in queue
			currentSend = postInitSend;
			currentOnEffects = postInitOnEffects;
			return postInitResult;
		}
	
		function postInitOnEffects(router, subList, state)
		{
			subs = subList;
			return init;
		}
	
		function onEffects(router, subList, state)
		{
			return currentOnEffects(router, subList, state);
		}
	
		effectManagers[name].init = init;
		effectManagers[name].onEffects = F3(onEffects);
	
		// PUBLIC API
	
		function preInitSend(value)
		{
			sentBeforeInit.push(value);
		}
	
		function postInitSend(value)
		{
			var temp = subs;
			while (temp.ctor !== '[]')
			{
				callback(temp._0(value));
				temp = temp._1;
			}
		}
	
		function send(incomingValue)
		{
			var result = A2(_elm_lang$core$Json_Decode$decodeValue, converter, incomingValue);
			if (result.ctor === 'Err')
			{
				throw new Error('Trying to send an unexpected type of value through port `' + name + '`:\n' + result._0);
			}
	
			currentSend(result._0);
		}
	
		return { send: send };
	}
	
	return {
		// routers
		sendToApp: F2(sendToApp),
		sendToSelf: F2(sendToSelf),
	
		// global setup
		effectManagers: effectManagers,
		outgoingPort: outgoingPort,
		incomingPort: incomingPort,
	
		htmlToProgram: htmlToProgram,
		program: program,
		programWithFlags: programWithFlags,
		initialize: initialize,
	
		// effect bags
		leaf: leaf,
		batch: batch,
		map: F2(map)
	};
	
	}();
	
	var _elm_lang$core$Platform_Cmd$batch = _elm_lang$core$Native_Platform.batch;
	var _elm_lang$core$Platform_Cmd$none = _elm_lang$core$Platform_Cmd$batch(
		{ctor: '[]'});
	var _elm_lang$core$Platform_Cmd_ops = _elm_lang$core$Platform_Cmd_ops || {};
	_elm_lang$core$Platform_Cmd_ops['!'] = F2(
		function (model, commands) {
			return {
				ctor: '_Tuple2',
				_0: model,
				_1: _elm_lang$core$Platform_Cmd$batch(commands)
			};
		});
	var _elm_lang$core$Platform_Cmd$map = _elm_lang$core$Native_Platform.map;
	var _elm_lang$core$Platform_Cmd$Cmd = {ctor: 'Cmd'};
	
	var _elm_lang$core$Platform_Sub$batch = _elm_lang$core$Native_Platform.batch;
	var _elm_lang$core$Platform_Sub$none = _elm_lang$core$Platform_Sub$batch(
		{ctor: '[]'});
	var _elm_lang$core$Platform_Sub$map = _elm_lang$core$Native_Platform.map;
	var _elm_lang$core$Platform_Sub$Sub = {ctor: 'Sub'};
	
	var _elm_lang$core$Platform$hack = _elm_lang$core$Native_Scheduler.succeed;
	var _elm_lang$core$Platform$sendToSelf = _elm_lang$core$Native_Platform.sendToSelf;
	var _elm_lang$core$Platform$sendToApp = _elm_lang$core$Native_Platform.sendToApp;
	var _elm_lang$core$Platform$programWithFlags = _elm_lang$core$Native_Platform.programWithFlags;
	var _elm_lang$core$Platform$program = _elm_lang$core$Native_Platform.program;
	var _elm_lang$core$Platform$Program = {ctor: 'Program'};
	var _elm_lang$core$Platform$Task = {ctor: 'Task'};
	var _elm_lang$core$Platform$ProcessId = {ctor: 'ProcessId'};
	var _elm_lang$core$Platform$Router = {ctor: 'Router'};
	
	var _elm_lang$core$Result$toMaybe = function (result) {
		var _p0 = result;
		if (_p0.ctor === 'Ok') {
			return _elm_lang$core$Maybe$Just(_p0._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	};
	var _elm_lang$core$Result$withDefault = F2(
		function (def, result) {
			var _p1 = result;
			if (_p1.ctor === 'Ok') {
				return _p1._0;
			} else {
				return def;
			}
		});
	var _elm_lang$core$Result$Err = function (a) {
		return {ctor: 'Err', _0: a};
	};
	var _elm_lang$core$Result$andThen = F2(
		function (callback, result) {
			var _p2 = result;
			if (_p2.ctor === 'Ok') {
				return callback(_p2._0);
			} else {
				return _elm_lang$core$Result$Err(_p2._0);
			}
		});
	var _elm_lang$core$Result$Ok = function (a) {
		return {ctor: 'Ok', _0: a};
	};
	var _elm_lang$core$Result$map = F2(
		function (func, ra) {
			var _p3 = ra;
			if (_p3.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(
					func(_p3._0));
			} else {
				return _elm_lang$core$Result$Err(_p3._0);
			}
		});
	var _elm_lang$core$Result$map2 = F3(
		function (func, ra, rb) {
			var _p4 = {ctor: '_Tuple2', _0: ra, _1: rb};
			if (_p4._0.ctor === 'Ok') {
				if (_p4._1.ctor === 'Ok') {
					return _elm_lang$core$Result$Ok(
						A2(func, _p4._0._0, _p4._1._0));
				} else {
					return _elm_lang$core$Result$Err(_p4._1._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p4._0._0);
			}
		});
	var _elm_lang$core$Result$map3 = F4(
		function (func, ra, rb, rc) {
			var _p5 = {ctor: '_Tuple3', _0: ra, _1: rb, _2: rc};
			if (_p5._0.ctor === 'Ok') {
				if (_p5._1.ctor === 'Ok') {
					if (_p5._2.ctor === 'Ok') {
						return _elm_lang$core$Result$Ok(
							A3(func, _p5._0._0, _p5._1._0, _p5._2._0));
					} else {
						return _elm_lang$core$Result$Err(_p5._2._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p5._1._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p5._0._0);
			}
		});
	var _elm_lang$core$Result$map4 = F5(
		function (func, ra, rb, rc, rd) {
			var _p6 = {ctor: '_Tuple4', _0: ra, _1: rb, _2: rc, _3: rd};
			if (_p6._0.ctor === 'Ok') {
				if (_p6._1.ctor === 'Ok') {
					if (_p6._2.ctor === 'Ok') {
						if (_p6._3.ctor === 'Ok') {
							return _elm_lang$core$Result$Ok(
								A4(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0));
						} else {
							return _elm_lang$core$Result$Err(_p6._3._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p6._2._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p6._1._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p6._0._0);
			}
		});
	var _elm_lang$core$Result$map5 = F6(
		function (func, ra, rb, rc, rd, re) {
			var _p7 = {ctor: '_Tuple5', _0: ra, _1: rb, _2: rc, _3: rd, _4: re};
			if (_p7._0.ctor === 'Ok') {
				if (_p7._1.ctor === 'Ok') {
					if (_p7._2.ctor === 'Ok') {
						if (_p7._3.ctor === 'Ok') {
							if (_p7._4.ctor === 'Ok') {
								return _elm_lang$core$Result$Ok(
									A5(func, _p7._0._0, _p7._1._0, _p7._2._0, _p7._3._0, _p7._4._0));
							} else {
								return _elm_lang$core$Result$Err(_p7._4._0);
							}
						} else {
							return _elm_lang$core$Result$Err(_p7._3._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p7._2._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p7._1._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p7._0._0);
			}
		});
	var _elm_lang$core$Result$mapError = F2(
		function (f, result) {
			var _p8 = result;
			if (_p8.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(_p8._0);
			} else {
				return _elm_lang$core$Result$Err(
					f(_p8._0));
			}
		});
	var _elm_lang$core$Result$fromMaybe = F2(
		function (err, maybe) {
			var _p9 = maybe;
			if (_p9.ctor === 'Just') {
				return _elm_lang$core$Result$Ok(_p9._0);
			} else {
				return _elm_lang$core$Result$Err(err);
			}
		});
	
	var _elm_lang$core$Task$onError = _elm_lang$core$Native_Scheduler.onError;
	var _elm_lang$core$Task$andThen = _elm_lang$core$Native_Scheduler.andThen;
	var _elm_lang$core$Task$spawnCmd = F2(
		function (router, _p0) {
			var _p1 = _p0;
			return _elm_lang$core$Native_Scheduler.spawn(
				A2(
					_elm_lang$core$Task$andThen,
					_elm_lang$core$Platform$sendToApp(router),
					_p1._0));
		});
	var _elm_lang$core$Task$fail = _elm_lang$core$Native_Scheduler.fail;
	var _elm_lang$core$Task$mapError = F2(
		function (convert, task) {
			return A2(
				_elm_lang$core$Task$onError,
				function (_p2) {
					return _elm_lang$core$Task$fail(
						convert(_p2));
				},
				task);
		});
	var _elm_lang$core$Task$succeed = _elm_lang$core$Native_Scheduler.succeed;
	var _elm_lang$core$Task$map = F2(
		function (func, taskA) {
			return A2(
				_elm_lang$core$Task$andThen,
				function (a) {
					return _elm_lang$core$Task$succeed(
						func(a));
				},
				taskA);
		});
	var _elm_lang$core$Task$map2 = F3(
		function (func, taskA, taskB) {
			return A2(
				_elm_lang$core$Task$andThen,
				function (a) {
					return A2(
						_elm_lang$core$Task$andThen,
						function (b) {
							return _elm_lang$core$Task$succeed(
								A2(func, a, b));
						},
						taskB);
				},
				taskA);
		});
	var _elm_lang$core$Task$map3 = F4(
		function (func, taskA, taskB, taskC) {
			return A2(
				_elm_lang$core$Task$andThen,
				function (a) {
					return A2(
						_elm_lang$core$Task$andThen,
						function (b) {
							return A2(
								_elm_lang$core$Task$andThen,
								function (c) {
									return _elm_lang$core$Task$succeed(
										A3(func, a, b, c));
								},
								taskC);
						},
						taskB);
				},
				taskA);
		});
	var _elm_lang$core$Task$map4 = F5(
		function (func, taskA, taskB, taskC, taskD) {
			return A2(
				_elm_lang$core$Task$andThen,
				function (a) {
					return A2(
						_elm_lang$core$Task$andThen,
						function (b) {
							return A2(
								_elm_lang$core$Task$andThen,
								function (c) {
									return A2(
										_elm_lang$core$Task$andThen,
										function (d) {
											return _elm_lang$core$Task$succeed(
												A4(func, a, b, c, d));
										},
										taskD);
								},
								taskC);
						},
						taskB);
				},
				taskA);
		});
	var _elm_lang$core$Task$map5 = F6(
		function (func, taskA, taskB, taskC, taskD, taskE) {
			return A2(
				_elm_lang$core$Task$andThen,
				function (a) {
					return A2(
						_elm_lang$core$Task$andThen,
						function (b) {
							return A2(
								_elm_lang$core$Task$andThen,
								function (c) {
									return A2(
										_elm_lang$core$Task$andThen,
										function (d) {
											return A2(
												_elm_lang$core$Task$andThen,
												function (e) {
													return _elm_lang$core$Task$succeed(
														A5(func, a, b, c, d, e));
												},
												taskE);
										},
										taskD);
								},
								taskC);
						},
						taskB);
				},
				taskA);
		});
	var _elm_lang$core$Task$sequence = function (tasks) {
		var _p3 = tasks;
		if (_p3.ctor === '[]') {
			return _elm_lang$core$Task$succeed(
				{ctor: '[]'});
		} else {
			return A3(
				_elm_lang$core$Task$map2,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				_p3._0,
				_elm_lang$core$Task$sequence(_p3._1));
		}
	};
	var _elm_lang$core$Task$onEffects = F3(
		function (router, commands, state) {
			return A2(
				_elm_lang$core$Task$map,
				function (_p4) {
					return {ctor: '_Tuple0'};
				},
				_elm_lang$core$Task$sequence(
					A2(
						_elm_lang$core$List$map,
						_elm_lang$core$Task$spawnCmd(router),
						commands)));
		});
	var _elm_lang$core$Task$init = _elm_lang$core$Task$succeed(
		{ctor: '_Tuple0'});
	var _elm_lang$core$Task$onSelfMsg = F3(
		function (_p7, _p6, _p5) {
			return _elm_lang$core$Task$succeed(
				{ctor: '_Tuple0'});
		});
	var _elm_lang$core$Task$command = _elm_lang$core$Native_Platform.leaf('Task');
	var _elm_lang$core$Task$Perform = function (a) {
		return {ctor: 'Perform', _0: a};
	};
	var _elm_lang$core$Task$perform = F2(
		function (toMessage, task) {
			return _elm_lang$core$Task$command(
				_elm_lang$core$Task$Perform(
					A2(_elm_lang$core$Task$map, toMessage, task)));
		});
	var _elm_lang$core$Task$attempt = F2(
		function (resultToMessage, task) {
			return _elm_lang$core$Task$command(
				_elm_lang$core$Task$Perform(
					A2(
						_elm_lang$core$Task$onError,
						function (_p8) {
							return _elm_lang$core$Task$succeed(
								resultToMessage(
									_elm_lang$core$Result$Err(_p8)));
						},
						A2(
							_elm_lang$core$Task$andThen,
							function (_p9) {
								return _elm_lang$core$Task$succeed(
									resultToMessage(
										_elm_lang$core$Result$Ok(_p9)));
							},
							task))));
		});
	var _elm_lang$core$Task$cmdMap = F2(
		function (tagger, _p10) {
			var _p11 = _p10;
			return _elm_lang$core$Task$Perform(
				A2(_elm_lang$core$Task$map, tagger, _p11._0));
		});
	_elm_lang$core$Native_Platform.effectManagers['Task'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Task$init, onEffects: _elm_lang$core$Task$onEffects, onSelfMsg: _elm_lang$core$Task$onSelfMsg, tag: 'cmd', cmdMap: _elm_lang$core$Task$cmdMap};
	
	//import Native.Utils //
	
	var _elm_lang$core$Native_Debug = function() {
	
	function log(tag, value)
	{
		var msg = tag + ': ' + _elm_lang$core$Native_Utils.toString(value);
		var process = process || {};
		if (process.stdout)
		{
			process.stdout.write(msg);
		}
		else
		{
			console.log(msg);
		}
		return value;
	}
	
	function crash(message)
	{
		throw new Error(message);
	}
	
	return {
		crash: crash,
		log: F2(log)
	};
	
	}();
	//import Maybe, Native.List, Native.Utils, Result //
	
	var _elm_lang$core$Native_String = function() {
	
	function isEmpty(str)
	{
		return str.length === 0;
	}
	function cons(chr, str)
	{
		return chr + str;
	}
	function uncons(str)
	{
		var hd = str[0];
		if (hd)
		{
			return _elm_lang$core$Maybe$Just(_elm_lang$core$Native_Utils.Tuple2(_elm_lang$core$Native_Utils.chr(hd), str.slice(1)));
		}
		return _elm_lang$core$Maybe$Nothing;
	}
	function append(a, b)
	{
		return a + b;
	}
	function concat(strs)
	{
		return _elm_lang$core$Native_List.toArray(strs).join('');
	}
	function length(str)
	{
		return str.length;
	}
	function map(f, str)
	{
		var out = str.split('');
		for (var i = out.length; i--; )
		{
			out[i] = f(_elm_lang$core$Native_Utils.chr(out[i]));
		}
		return out.join('');
	}
	function filter(pred, str)
	{
		return str.split('').map(_elm_lang$core$Native_Utils.chr).filter(pred).join('');
	}
	function reverse(str)
	{
		return str.split('').reverse().join('');
	}
	function foldl(f, b, str)
	{
		var len = str.length;
		for (var i = 0; i < len; ++i)
		{
			b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
		}
		return b;
	}
	function foldr(f, b, str)
	{
		for (var i = str.length; i--; )
		{
			b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
		}
		return b;
	}
	function split(sep, str)
	{
		return _elm_lang$core$Native_List.fromArray(str.split(sep));
	}
	function join(sep, strs)
	{
		return _elm_lang$core$Native_List.toArray(strs).join(sep);
	}
	function repeat(n, str)
	{
		var result = '';
		while (n > 0)
		{
			if (n & 1)
			{
				result += str;
			}
			n >>= 1, str += str;
		}
		return result;
	}
	function slice(start, end, str)
	{
		return str.slice(start, end);
	}
	function left(n, str)
	{
		return n < 1 ? '' : str.slice(0, n);
	}
	function right(n, str)
	{
		return n < 1 ? '' : str.slice(-n);
	}
	function dropLeft(n, str)
	{
		return n < 1 ? str : str.slice(n);
	}
	function dropRight(n, str)
	{
		return n < 1 ? str : str.slice(0, -n);
	}
	function pad(n, chr, str)
	{
		var half = (n - str.length) / 2;
		return repeat(Math.ceil(half), chr) + str + repeat(half | 0, chr);
	}
	function padRight(n, chr, str)
	{
		return str + repeat(n - str.length, chr);
	}
	function padLeft(n, chr, str)
	{
		return repeat(n - str.length, chr) + str;
	}
	
	function trim(str)
	{
		return str.trim();
	}
	function trimLeft(str)
	{
		return str.replace(/^\s+/, '');
	}
	function trimRight(str)
	{
		return str.replace(/\s+$/, '');
	}
	
	function words(str)
	{
		return _elm_lang$core$Native_List.fromArray(str.trim().split(/\s+/g));
	}
	function lines(str)
	{
		return _elm_lang$core$Native_List.fromArray(str.split(/\r\n|\r|\n/g));
	}
	
	function toUpper(str)
	{
		return str.toUpperCase();
	}
	function toLower(str)
	{
		return str.toLowerCase();
	}
	
	function any(pred, str)
	{
		for (var i = str.length; i--; )
		{
			if (pred(_elm_lang$core$Native_Utils.chr(str[i])))
			{
				return true;
			}
		}
		return false;
	}
	function all(pred, str)
	{
		for (var i = str.length; i--; )
		{
			if (!pred(_elm_lang$core$Native_Utils.chr(str[i])))
			{
				return false;
			}
		}
		return true;
	}
	
	function contains(sub, str)
	{
		return str.indexOf(sub) > -1;
	}
	function startsWith(sub, str)
	{
		return str.indexOf(sub) === 0;
	}
	function endsWith(sub, str)
	{
		return str.length >= sub.length &&
			str.lastIndexOf(sub) === str.length - sub.length;
	}
	function indexes(sub, str)
	{
		var subLen = sub.length;
	
		if (subLen < 1)
		{
			return _elm_lang$core$Native_List.Nil;
		}
	
		var i = 0;
		var is = [];
	
		while ((i = str.indexOf(sub, i)) > -1)
		{
			is.push(i);
			i = i + subLen;
		}
	
		return _elm_lang$core$Native_List.fromArray(is);
	}
	
	
	function toInt(s)
	{
		var len = s.length;
	
		// if empty
		if (len === 0)
		{
			return intErr(s);
		}
	
		// if hex
		var c = s[0];
		if (c === '0' && s[1] === 'x')
		{
			for (var i = 2; i < len; ++i)
			{
				var c = s[i];
				if (('0' <= c && c <= '9') || ('A' <= c && c <= 'F') || ('a' <= c && c <= 'f'))
				{
					continue;
				}
				return intErr(s);
			}
			return _elm_lang$core$Result$Ok(parseInt(s, 16));
		}
	
		// is decimal
		if (c > '9' || (c < '0' && c !== '-' && c !== '+'))
		{
			return intErr(s);
		}
		for (var i = 1; i < len; ++i)
		{
			var c = s[i];
			if (c < '0' || '9' < c)
			{
				return intErr(s);
			}
		}
	
		return _elm_lang$core$Result$Ok(parseInt(s, 10));
	}
	
	function intErr(s)
	{
		return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int");
	}
	
	
	function toFloat(s)
	{
		// check if it is a hex, octal, or binary number
		if (s.length === 0 || /[\sxbo]/.test(s))
		{
			return floatErr(s);
		}
		var n = +s;
		// faster isNaN check
		return n === n ? _elm_lang$core$Result$Ok(n) : floatErr(s);
	}
	
	function floatErr(s)
	{
		return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float");
	}
	
	
	function toList(str)
	{
		return _elm_lang$core$Native_List.fromArray(str.split('').map(_elm_lang$core$Native_Utils.chr));
	}
	function fromList(chars)
	{
		return _elm_lang$core$Native_List.toArray(chars).join('');
	}
	
	return {
		isEmpty: isEmpty,
		cons: F2(cons),
		uncons: uncons,
		append: F2(append),
		concat: concat,
		length: length,
		map: F2(map),
		filter: F2(filter),
		reverse: reverse,
		foldl: F3(foldl),
		foldr: F3(foldr),
	
		split: F2(split),
		join: F2(join),
		repeat: F2(repeat),
	
		slice: F3(slice),
		left: F2(left),
		right: F2(right),
		dropLeft: F2(dropLeft),
		dropRight: F2(dropRight),
	
		pad: F3(pad),
		padLeft: F3(padLeft),
		padRight: F3(padRight),
	
		trim: trim,
		trimLeft: trimLeft,
		trimRight: trimRight,
	
		words: words,
		lines: lines,
	
		toUpper: toUpper,
		toLower: toLower,
	
		any: F2(any),
		all: F2(all),
	
		contains: F2(contains),
		startsWith: F2(startsWith),
		endsWith: F2(endsWith),
		indexes: F2(indexes),
	
		toInt: toInt,
		toFloat: toFloat,
		toList: toList,
		fromList: fromList
	};
	
	}();
	
	var _elm_lang$core$String$fromList = _elm_lang$core$Native_String.fromList;
	var _elm_lang$core$String$toList = _elm_lang$core$Native_String.toList;
	var _elm_lang$core$String$toFloat = _elm_lang$core$Native_String.toFloat;
	var _elm_lang$core$String$toInt = _elm_lang$core$Native_String.toInt;
	var _elm_lang$core$String$indices = _elm_lang$core$Native_String.indexes;
	var _elm_lang$core$String$indexes = _elm_lang$core$Native_String.indexes;
	var _elm_lang$core$String$endsWith = _elm_lang$core$Native_String.endsWith;
	var _elm_lang$core$String$startsWith = _elm_lang$core$Native_String.startsWith;
	var _elm_lang$core$String$contains = _elm_lang$core$Native_String.contains;
	var _elm_lang$core$String$all = _elm_lang$core$Native_String.all;
	var _elm_lang$core$String$any = _elm_lang$core$Native_String.any;
	var _elm_lang$core$String$toLower = _elm_lang$core$Native_String.toLower;
	var _elm_lang$core$String$toUpper = _elm_lang$core$Native_String.toUpper;
	var _elm_lang$core$String$lines = _elm_lang$core$Native_String.lines;
	var _elm_lang$core$String$words = _elm_lang$core$Native_String.words;
	var _elm_lang$core$String$trimRight = _elm_lang$core$Native_String.trimRight;
	var _elm_lang$core$String$trimLeft = _elm_lang$core$Native_String.trimLeft;
	var _elm_lang$core$String$trim = _elm_lang$core$Native_String.trim;
	var _elm_lang$core$String$padRight = _elm_lang$core$Native_String.padRight;
	var _elm_lang$core$String$padLeft = _elm_lang$core$Native_String.padLeft;
	var _elm_lang$core$String$pad = _elm_lang$core$Native_String.pad;
	var _elm_lang$core$String$dropRight = _elm_lang$core$Native_String.dropRight;
	var _elm_lang$core$String$dropLeft = _elm_lang$core$Native_String.dropLeft;
	var _elm_lang$core$String$right = _elm_lang$core$Native_String.right;
	var _elm_lang$core$String$left = _elm_lang$core$Native_String.left;
	var _elm_lang$core$String$slice = _elm_lang$core$Native_String.slice;
	var _elm_lang$core$String$repeat = _elm_lang$core$Native_String.repeat;
	var _elm_lang$core$String$join = _elm_lang$core$Native_String.join;
	var _elm_lang$core$String$split = _elm_lang$core$Native_String.split;
	var _elm_lang$core$String$foldr = _elm_lang$core$Native_String.foldr;
	var _elm_lang$core$String$foldl = _elm_lang$core$Native_String.foldl;
	var _elm_lang$core$String$reverse = _elm_lang$core$Native_String.reverse;
	var _elm_lang$core$String$filter = _elm_lang$core$Native_String.filter;
	var _elm_lang$core$String$map = _elm_lang$core$Native_String.map;
	var _elm_lang$core$String$length = _elm_lang$core$Native_String.length;
	var _elm_lang$core$String$concat = _elm_lang$core$Native_String.concat;
	var _elm_lang$core$String$append = _elm_lang$core$Native_String.append;
	var _elm_lang$core$String$uncons = _elm_lang$core$Native_String.uncons;
	var _elm_lang$core$String$cons = _elm_lang$core$Native_String.cons;
	var _elm_lang$core$String$fromChar = function ($char) {
		return A2(_elm_lang$core$String$cons, $char, '');
	};
	var _elm_lang$core$String$isEmpty = _elm_lang$core$Native_String.isEmpty;
	
	var _elm_lang$core$Dict$foldr = F3(
		function (f, acc, t) {
			foldr:
			while (true) {
				var _p0 = t;
				if (_p0.ctor === 'RBEmpty_elm_builtin') {
					return acc;
				} else {
					var _v1 = f,
						_v2 = A3(
						f,
						_p0._1,
						_p0._2,
						A3(_elm_lang$core$Dict$foldr, f, acc, _p0._4)),
						_v3 = _p0._3;
					f = _v1;
					acc = _v2;
					t = _v3;
					continue foldr;
				}
			}
		});
	var _elm_lang$core$Dict$keys = function (dict) {
		return A3(
			_elm_lang$core$Dict$foldr,
			F3(
				function (key, value, keyList) {
					return {ctor: '::', _0: key, _1: keyList};
				}),
			{ctor: '[]'},
			dict);
	};
	var _elm_lang$core$Dict$values = function (dict) {
		return A3(
			_elm_lang$core$Dict$foldr,
			F3(
				function (key, value, valueList) {
					return {ctor: '::', _0: value, _1: valueList};
				}),
			{ctor: '[]'},
			dict);
	};
	var _elm_lang$core$Dict$toList = function (dict) {
		return A3(
			_elm_lang$core$Dict$foldr,
			F3(
				function (key, value, list) {
					return {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: key, _1: value},
						_1: list
					};
				}),
			{ctor: '[]'},
			dict);
	};
	var _elm_lang$core$Dict$foldl = F3(
		function (f, acc, dict) {
			foldl:
			while (true) {
				var _p1 = dict;
				if (_p1.ctor === 'RBEmpty_elm_builtin') {
					return acc;
				} else {
					var _v5 = f,
						_v6 = A3(
						f,
						_p1._1,
						_p1._2,
						A3(_elm_lang$core$Dict$foldl, f, acc, _p1._3)),
						_v7 = _p1._4;
					f = _v5;
					acc = _v6;
					dict = _v7;
					continue foldl;
				}
			}
		});
	var _elm_lang$core$Dict$merge = F6(
		function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
			var stepState = F3(
				function (rKey, rValue, _p2) {
					stepState:
					while (true) {
						var _p3 = _p2;
						var _p9 = _p3._1;
						var _p8 = _p3._0;
						var _p4 = _p8;
						if (_p4.ctor === '[]') {
							return {
								ctor: '_Tuple2',
								_0: _p8,
								_1: A3(rightStep, rKey, rValue, _p9)
							};
						} else {
							var _p7 = _p4._1;
							var _p6 = _p4._0._1;
							var _p5 = _p4._0._0;
							if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) < 0) {
								var _v10 = rKey,
									_v11 = rValue,
									_v12 = {
									ctor: '_Tuple2',
									_0: _p7,
									_1: A3(leftStep, _p5, _p6, _p9)
								};
								rKey = _v10;
								rValue = _v11;
								_p2 = _v12;
								continue stepState;
							} else {
								if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) > 0) {
									return {
										ctor: '_Tuple2',
										_0: _p8,
										_1: A3(rightStep, rKey, rValue, _p9)
									};
								} else {
									return {
										ctor: '_Tuple2',
										_0: _p7,
										_1: A4(bothStep, _p5, _p6, rValue, _p9)
									};
								}
							}
						}
					}
				});
			var _p10 = A3(
				_elm_lang$core$Dict$foldl,
				stepState,
				{
					ctor: '_Tuple2',
					_0: _elm_lang$core$Dict$toList(leftDict),
					_1: initialResult
				},
				rightDict);
			var leftovers = _p10._0;
			var intermediateResult = _p10._1;
			return A3(
				_elm_lang$core$List$foldl,
				F2(
					function (_p11, result) {
						var _p12 = _p11;
						return A3(leftStep, _p12._0, _p12._1, result);
					}),
				intermediateResult,
				leftovers);
		});
	var _elm_lang$core$Dict$reportRemBug = F4(
		function (msg, c, lgot, rgot) {
			return _elm_lang$core$Native_Debug.crash(
				_elm_lang$core$String$concat(
					{
						ctor: '::',
						_0: 'Internal red-black tree invariant violated, expected ',
						_1: {
							ctor: '::',
							_0: msg,
							_1: {
								ctor: '::',
								_0: ' and got ',
								_1: {
									ctor: '::',
									_0: _elm_lang$core$Basics$toString(c),
									_1: {
										ctor: '::',
										_0: '/',
										_1: {
											ctor: '::',
											_0: lgot,
											_1: {
												ctor: '::',
												_0: '/',
												_1: {
													ctor: '::',
													_0: rgot,
													_1: {
														ctor: '::',
														_0: '\nPlease report this bug to <https://github.com/elm-lang/core/issues>',
														_1: {ctor: '[]'}
													}
												}
											}
										}
									}
								}
							}
						}
					}));
		});
	var _elm_lang$core$Dict$isBBlack = function (dict) {
		var _p13 = dict;
		_v14_2:
		do {
			if (_p13.ctor === 'RBNode_elm_builtin') {
				if (_p13._0.ctor === 'BBlack') {
					return true;
				} else {
					break _v14_2;
				}
			} else {
				if (_p13._0.ctor === 'LBBlack') {
					return true;
				} else {
					break _v14_2;
				}
			}
		} while(false);
		return false;
	};
	var _elm_lang$core$Dict$sizeHelp = F2(
		function (n, dict) {
			sizeHelp:
			while (true) {
				var _p14 = dict;
				if (_p14.ctor === 'RBEmpty_elm_builtin') {
					return n;
				} else {
					var _v16 = A2(_elm_lang$core$Dict$sizeHelp, n + 1, _p14._4),
						_v17 = _p14._3;
					n = _v16;
					dict = _v17;
					continue sizeHelp;
				}
			}
		});
	var _elm_lang$core$Dict$size = function (dict) {
		return A2(_elm_lang$core$Dict$sizeHelp, 0, dict);
	};
	var _elm_lang$core$Dict$get = F2(
		function (targetKey, dict) {
			get:
			while (true) {
				var _p15 = dict;
				if (_p15.ctor === 'RBEmpty_elm_builtin') {
					return _elm_lang$core$Maybe$Nothing;
				} else {
					var _p16 = A2(_elm_lang$core$Basics$compare, targetKey, _p15._1);
					switch (_p16.ctor) {
						case 'LT':
							var _v20 = targetKey,
								_v21 = _p15._3;
							targetKey = _v20;
							dict = _v21;
							continue get;
						case 'EQ':
							return _elm_lang$core$Maybe$Just(_p15._2);
						default:
							var _v22 = targetKey,
								_v23 = _p15._4;
							targetKey = _v22;
							dict = _v23;
							continue get;
					}
				}
			}
		});
	var _elm_lang$core$Dict$member = F2(
		function (key, dict) {
			var _p17 = A2(_elm_lang$core$Dict$get, key, dict);
			if (_p17.ctor === 'Just') {
				return true;
			} else {
				return false;
			}
		});
	var _elm_lang$core$Dict$maxWithDefault = F3(
		function (k, v, r) {
			maxWithDefault:
			while (true) {
				var _p18 = r;
				if (_p18.ctor === 'RBEmpty_elm_builtin') {
					return {ctor: '_Tuple2', _0: k, _1: v};
				} else {
					var _v26 = _p18._1,
						_v27 = _p18._2,
						_v28 = _p18._4;
					k = _v26;
					v = _v27;
					r = _v28;
					continue maxWithDefault;
				}
			}
		});
	var _elm_lang$core$Dict$NBlack = {ctor: 'NBlack'};
	var _elm_lang$core$Dict$BBlack = {ctor: 'BBlack'};
	var _elm_lang$core$Dict$Black = {ctor: 'Black'};
	var _elm_lang$core$Dict$blackish = function (t) {
		var _p19 = t;
		if (_p19.ctor === 'RBNode_elm_builtin') {
			var _p20 = _p19._0;
			return _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$Black) || _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$BBlack);
		} else {
			return true;
		}
	};
	var _elm_lang$core$Dict$Red = {ctor: 'Red'};
	var _elm_lang$core$Dict$moreBlack = function (color) {
		var _p21 = color;
		switch (_p21.ctor) {
			case 'Black':
				return _elm_lang$core$Dict$BBlack;
			case 'Red':
				return _elm_lang$core$Dict$Black;
			case 'NBlack':
				return _elm_lang$core$Dict$Red;
			default:
				return _elm_lang$core$Native_Debug.crash('Can\'t make a double black node more black!');
		}
	};
	var _elm_lang$core$Dict$lessBlack = function (color) {
		var _p22 = color;
		switch (_p22.ctor) {
			case 'BBlack':
				return _elm_lang$core$Dict$Black;
			case 'Black':
				return _elm_lang$core$Dict$Red;
			case 'Red':
				return _elm_lang$core$Dict$NBlack;
			default:
				return _elm_lang$core$Native_Debug.crash('Can\'t make a negative black node less black!');
		}
	};
	var _elm_lang$core$Dict$LBBlack = {ctor: 'LBBlack'};
	var _elm_lang$core$Dict$LBlack = {ctor: 'LBlack'};
	var _elm_lang$core$Dict$RBEmpty_elm_builtin = function (a) {
		return {ctor: 'RBEmpty_elm_builtin', _0: a};
	};
	var _elm_lang$core$Dict$empty = _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	var _elm_lang$core$Dict$isEmpty = function (dict) {
		return _elm_lang$core$Native_Utils.eq(dict, _elm_lang$core$Dict$empty);
	};
	var _elm_lang$core$Dict$RBNode_elm_builtin = F5(
		function (a, b, c, d, e) {
			return {ctor: 'RBNode_elm_builtin', _0: a, _1: b, _2: c, _3: d, _4: e};
		});
	var _elm_lang$core$Dict$ensureBlackRoot = function (dict) {
		var _p23 = dict;
		if ((_p23.ctor === 'RBNode_elm_builtin') && (_p23._0.ctor === 'Red')) {
			return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p23._1, _p23._2, _p23._3, _p23._4);
		} else {
			return dict;
		}
	};
	var _elm_lang$core$Dict$lessBlackTree = function (dict) {
		var _p24 = dict;
		if (_p24.ctor === 'RBNode_elm_builtin') {
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$lessBlack(_p24._0),
				_p24._1,
				_p24._2,
				_p24._3,
				_p24._4);
		} else {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		}
	};
	var _elm_lang$core$Dict$balancedTree = function (col) {
		return function (xk) {
			return function (xv) {
				return function (yk) {
					return function (yv) {
						return function (zk) {
							return function (zv) {
								return function (a) {
									return function (b) {
										return function (c) {
											return function (d) {
												return A5(
													_elm_lang$core$Dict$RBNode_elm_builtin,
													_elm_lang$core$Dict$lessBlack(col),
													yk,
													yv,
													A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, xk, xv, a, b),
													A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, zk, zv, c, d));
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
	var _elm_lang$core$Dict$blacken = function (t) {
		var _p25 = t;
		if (_p25.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		} else {
			return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p25._1, _p25._2, _p25._3, _p25._4);
		}
	};
	var _elm_lang$core$Dict$redden = function (t) {
		var _p26 = t;
		if (_p26.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Native_Debug.crash('can\'t make a Leaf red');
		} else {
			return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, _p26._1, _p26._2, _p26._3, _p26._4);
		}
	};
	var _elm_lang$core$Dict$balanceHelp = function (tree) {
		var _p27 = tree;
		_v36_6:
		do {
			_v36_5:
			do {
				_v36_4:
				do {
					_v36_3:
					do {
						_v36_2:
						do {
							_v36_1:
							do {
								_v36_0:
								do {
									if (_p27.ctor === 'RBNode_elm_builtin') {
										if (_p27._3.ctor === 'RBNode_elm_builtin') {
											if (_p27._4.ctor === 'RBNode_elm_builtin') {
												switch (_p27._3._0.ctor) {
													case 'Red':
														switch (_p27._4._0.ctor) {
															case 'Red':
																if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																	break _v36_0;
																} else {
																	if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																		break _v36_1;
																	} else {
																		if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																			break _v36_2;
																		} else {
																			if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																				break _v36_3;
																			} else {
																				break _v36_6;
																			}
																		}
																	}
																}
															case 'NBlack':
																if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																	break _v36_0;
																} else {
																	if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																		break _v36_1;
																	} else {
																		if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																			break _v36_4;
																		} else {
																			break _v36_6;
																		}
																	}
																}
															default:
																if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																	break _v36_0;
																} else {
																	if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																		break _v36_1;
																	} else {
																		break _v36_6;
																	}
																}
														}
													case 'NBlack':
														switch (_p27._4._0.ctor) {
															case 'Red':
																if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																	break _v36_2;
																} else {
																	if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																		break _v36_3;
																	} else {
																		if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																			break _v36_5;
																		} else {
																			break _v36_6;
																		}
																	}
																}
															case 'NBlack':
																if (_p27._0.ctor === 'BBlack') {
																	if ((((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																		break _v36_4;
																	} else {
																		if ((((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																			break _v36_5;
																		} else {
																			break _v36_6;
																		}
																	}
																} else {
																	break _v36_6;
																}
															default:
																if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																	break _v36_5;
																} else {
																	break _v36_6;
																}
														}
													default:
														switch (_p27._4._0.ctor) {
															case 'Red':
																if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																	break _v36_2;
																} else {
																	if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																		break _v36_3;
																	} else {
																		break _v36_6;
																	}
																}
															case 'NBlack':
																if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																	break _v36_4;
																} else {
																	break _v36_6;
																}
															default:
																break _v36_6;
														}
												}
											} else {
												switch (_p27._3._0.ctor) {
													case 'Red':
														if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
															break _v36_0;
														} else {
															if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																break _v36_1;
															} else {
																break _v36_6;
															}
														}
													case 'NBlack':
														if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
															break _v36_5;
														} else {
															break _v36_6;
														}
													default:
														break _v36_6;
												}
											}
										} else {
											if (_p27._4.ctor === 'RBNode_elm_builtin') {
												switch (_p27._4._0.ctor) {
													case 'Red':
														if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
															break _v36_2;
														} else {
															if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																break _v36_3;
															} else {
																break _v36_6;
															}
														}
													case 'NBlack':
														if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
															break _v36_4;
														} else {
															break _v36_6;
														}
													default:
														break _v36_6;
												}
											} else {
												break _v36_6;
											}
										}
									} else {
										break _v36_6;
									}
								} while(false);
								return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._3._1)(_p27._3._3._2)(_p27._3._1)(_p27._3._2)(_p27._1)(_p27._2)(_p27._3._3._3)(_p27._3._3._4)(_p27._3._4)(_p27._4);
							} while(false);
							return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._1)(_p27._3._2)(_p27._3._4._1)(_p27._3._4._2)(_p27._1)(_p27._2)(_p27._3._3)(_p27._3._4._3)(_p27._3._4._4)(_p27._4);
						} while(false);
						return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._3._1)(_p27._4._3._2)(_p27._4._1)(_p27._4._2)(_p27._3)(_p27._4._3._3)(_p27._4._3._4)(_p27._4._4);
					} while(false);
					return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._1)(_p27._4._2)(_p27._4._4._1)(_p27._4._4._2)(_p27._3)(_p27._4._3)(_p27._4._4._3)(_p27._4._4._4);
				} while(false);
				return A5(
					_elm_lang$core$Dict$RBNode_elm_builtin,
					_elm_lang$core$Dict$Black,
					_p27._4._3._1,
					_p27._4._3._2,
					A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3, _p27._4._3._3),
					A5(
						_elm_lang$core$Dict$balance,
						_elm_lang$core$Dict$Black,
						_p27._4._1,
						_p27._4._2,
						_p27._4._3._4,
						_elm_lang$core$Dict$redden(_p27._4._4)));
			} while(false);
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$Black,
				_p27._3._4._1,
				_p27._3._4._2,
				A5(
					_elm_lang$core$Dict$balance,
					_elm_lang$core$Dict$Black,
					_p27._3._1,
					_p27._3._2,
					_elm_lang$core$Dict$redden(_p27._3._3),
					_p27._3._4._3),
				A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3._4._4, _p27._4));
		} while(false);
		return tree;
	};
	var _elm_lang$core$Dict$balance = F5(
		function (c, k, v, l, r) {
			var tree = A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
			return _elm_lang$core$Dict$blackish(tree) ? _elm_lang$core$Dict$balanceHelp(tree) : tree;
		});
	var _elm_lang$core$Dict$bubble = F5(
		function (c, k, v, l, r) {
			return (_elm_lang$core$Dict$isBBlack(l) || _elm_lang$core$Dict$isBBlack(r)) ? A5(
				_elm_lang$core$Dict$balance,
				_elm_lang$core$Dict$moreBlack(c),
				k,
				v,
				_elm_lang$core$Dict$lessBlackTree(l),
				_elm_lang$core$Dict$lessBlackTree(r)) : A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
		});
	var _elm_lang$core$Dict$removeMax = F5(
		function (c, k, v, l, r) {
			var _p28 = r;
			if (_p28.ctor === 'RBEmpty_elm_builtin') {
				return A3(_elm_lang$core$Dict$rem, c, l, r);
			} else {
				return A5(
					_elm_lang$core$Dict$bubble,
					c,
					k,
					v,
					l,
					A5(_elm_lang$core$Dict$removeMax, _p28._0, _p28._1, _p28._2, _p28._3, _p28._4));
			}
		});
	var _elm_lang$core$Dict$rem = F3(
		function (color, left, right) {
			var _p29 = {ctor: '_Tuple2', _0: left, _1: right};
			if (_p29._0.ctor === 'RBEmpty_elm_builtin') {
				if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
					var _p30 = color;
					switch (_p30.ctor) {
						case 'Red':
							return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
						case 'Black':
							return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBBlack);
						default:
							return _elm_lang$core$Native_Debug.crash('cannot have bblack or nblack nodes at this point');
					}
				} else {
					var _p33 = _p29._1._0;
					var _p32 = _p29._0._0;
					var _p31 = {ctor: '_Tuple3', _0: color, _1: _p32, _2: _p33};
					if ((((_p31.ctor === '_Tuple3') && (_p31._0.ctor === 'Black')) && (_p31._1.ctor === 'LBlack')) && (_p31._2.ctor === 'Red')) {
						return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._1._1, _p29._1._2, _p29._1._3, _p29._1._4);
					} else {
						return A4(
							_elm_lang$core$Dict$reportRemBug,
							'Black/LBlack/Red',
							color,
							_elm_lang$core$Basics$toString(_p32),
							_elm_lang$core$Basics$toString(_p33));
					}
				}
			} else {
				if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
					var _p36 = _p29._1._0;
					var _p35 = _p29._0._0;
					var _p34 = {ctor: '_Tuple3', _0: color, _1: _p35, _2: _p36};
					if ((((_p34.ctor === '_Tuple3') && (_p34._0.ctor === 'Black')) && (_p34._1.ctor === 'Red')) && (_p34._2.ctor === 'LBlack')) {
						return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._0._1, _p29._0._2, _p29._0._3, _p29._0._4);
					} else {
						return A4(
							_elm_lang$core$Dict$reportRemBug,
							'Black/Red/LBlack',
							color,
							_elm_lang$core$Basics$toString(_p35),
							_elm_lang$core$Basics$toString(_p36));
					}
				} else {
					var _p40 = _p29._0._2;
					var _p39 = _p29._0._4;
					var _p38 = _p29._0._1;
					var newLeft = A5(_elm_lang$core$Dict$removeMax, _p29._0._0, _p38, _p40, _p29._0._3, _p39);
					var _p37 = A3(_elm_lang$core$Dict$maxWithDefault, _p38, _p40, _p39);
					var k = _p37._0;
					var v = _p37._1;
					return A5(_elm_lang$core$Dict$bubble, color, k, v, newLeft, right);
				}
			}
		});
	var _elm_lang$core$Dict$map = F2(
		function (f, dict) {
			var _p41 = dict;
			if (_p41.ctor === 'RBEmpty_elm_builtin') {
				return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
			} else {
				var _p42 = _p41._1;
				return A5(
					_elm_lang$core$Dict$RBNode_elm_builtin,
					_p41._0,
					_p42,
					A2(f, _p42, _p41._2),
					A2(_elm_lang$core$Dict$map, f, _p41._3),
					A2(_elm_lang$core$Dict$map, f, _p41._4));
			}
		});
	var _elm_lang$core$Dict$Same = {ctor: 'Same'};
	var _elm_lang$core$Dict$Remove = {ctor: 'Remove'};
	var _elm_lang$core$Dict$Insert = {ctor: 'Insert'};
	var _elm_lang$core$Dict$update = F3(
		function (k, alter, dict) {
			var up = function (dict) {
				var _p43 = dict;
				if (_p43.ctor === 'RBEmpty_elm_builtin') {
					var _p44 = alter(_elm_lang$core$Maybe$Nothing);
					if (_p44.ctor === 'Nothing') {
						return {ctor: '_Tuple2', _0: _elm_lang$core$Dict$Same, _1: _elm_lang$core$Dict$empty};
					} else {
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Dict$Insert,
							_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, k, _p44._0, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty)
						};
					}
				} else {
					var _p55 = _p43._2;
					var _p54 = _p43._4;
					var _p53 = _p43._3;
					var _p52 = _p43._1;
					var _p51 = _p43._0;
					var _p45 = A2(_elm_lang$core$Basics$compare, k, _p52);
					switch (_p45.ctor) {
						case 'EQ':
							var _p46 = alter(
								_elm_lang$core$Maybe$Just(_p55));
							if (_p46.ctor === 'Nothing') {
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A3(_elm_lang$core$Dict$rem, _p51, _p53, _p54)
								};
							} else {
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p46._0, _p53, _p54)
								};
							}
						case 'LT':
							var _p47 = up(_p53);
							var flag = _p47._0;
							var newLeft = _p47._1;
							var _p48 = flag;
							switch (_p48.ctor) {
								case 'Same':
									return {
										ctor: '_Tuple2',
										_0: _elm_lang$core$Dict$Same,
										_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, newLeft, _p54)
									};
								case 'Insert':
									return {
										ctor: '_Tuple2',
										_0: _elm_lang$core$Dict$Insert,
										_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, newLeft, _p54)
									};
								default:
									return {
										ctor: '_Tuple2',
										_0: _elm_lang$core$Dict$Remove,
										_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, newLeft, _p54)
									};
							}
						default:
							var _p49 = up(_p54);
							var flag = _p49._0;
							var newRight = _p49._1;
							var _p50 = flag;
							switch (_p50.ctor) {
								case 'Same':
									return {
										ctor: '_Tuple2',
										_0: _elm_lang$core$Dict$Same,
										_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, _p53, newRight)
									};
								case 'Insert':
									return {
										ctor: '_Tuple2',
										_0: _elm_lang$core$Dict$Insert,
										_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, _p53, newRight)
									};
								default:
									return {
										ctor: '_Tuple2',
										_0: _elm_lang$core$Dict$Remove,
										_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, _p53, newRight)
									};
							}
					}
				}
			};
			var _p56 = up(dict);
			var flag = _p56._0;
			var updatedDict = _p56._1;
			var _p57 = flag;
			switch (_p57.ctor) {
				case 'Same':
					return updatedDict;
				case 'Insert':
					return _elm_lang$core$Dict$ensureBlackRoot(updatedDict);
				default:
					return _elm_lang$core$Dict$blacken(updatedDict);
			}
		});
	var _elm_lang$core$Dict$insert = F3(
		function (key, value, dict) {
			return A3(
				_elm_lang$core$Dict$update,
				key,
				_elm_lang$core$Basics$always(
					_elm_lang$core$Maybe$Just(value)),
				dict);
		});
	var _elm_lang$core$Dict$singleton = F2(
		function (key, value) {
			return A3(_elm_lang$core$Dict$insert, key, value, _elm_lang$core$Dict$empty);
		});
	var _elm_lang$core$Dict$union = F2(
		function (t1, t2) {
			return A3(_elm_lang$core$Dict$foldl, _elm_lang$core$Dict$insert, t2, t1);
		});
	var _elm_lang$core$Dict$filter = F2(
		function (predicate, dictionary) {
			var add = F3(
				function (key, value, dict) {
					return A2(predicate, key, value) ? A3(_elm_lang$core$Dict$insert, key, value, dict) : dict;
				});
			return A3(_elm_lang$core$Dict$foldl, add, _elm_lang$core$Dict$empty, dictionary);
		});
	var _elm_lang$core$Dict$intersect = F2(
		function (t1, t2) {
			return A2(
				_elm_lang$core$Dict$filter,
				F2(
					function (k, _p58) {
						return A2(_elm_lang$core$Dict$member, k, t2);
					}),
				t1);
		});
	var _elm_lang$core$Dict$partition = F2(
		function (predicate, dict) {
			var add = F3(
				function (key, value, _p59) {
					var _p60 = _p59;
					var _p62 = _p60._1;
					var _p61 = _p60._0;
					return A2(predicate, key, value) ? {
						ctor: '_Tuple2',
						_0: A3(_elm_lang$core$Dict$insert, key, value, _p61),
						_1: _p62
					} : {
						ctor: '_Tuple2',
						_0: _p61,
						_1: A3(_elm_lang$core$Dict$insert, key, value, _p62)
					};
				});
			return A3(
				_elm_lang$core$Dict$foldl,
				add,
				{ctor: '_Tuple2', _0: _elm_lang$core$Dict$empty, _1: _elm_lang$core$Dict$empty},
				dict);
		});
	var _elm_lang$core$Dict$fromList = function (assocs) {
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p63, dict) {
					var _p64 = _p63;
					return A3(_elm_lang$core$Dict$insert, _p64._0, _p64._1, dict);
				}),
			_elm_lang$core$Dict$empty,
			assocs);
	};
	var _elm_lang$core$Dict$remove = F2(
		function (key, dict) {
			return A3(
				_elm_lang$core$Dict$update,
				key,
				_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
				dict);
		});
	var _elm_lang$core$Dict$diff = F2(
		function (t1, t2) {
			return A3(
				_elm_lang$core$Dict$foldl,
				F3(
					function (k, v, t) {
						return A2(_elm_lang$core$Dict$remove, k, t);
					}),
				t1,
				t2);
		});
	
	//import Native.Scheduler //
	
	var _elm_lang$core$Native_Time = function() {
	
	var now = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		callback(_elm_lang$core$Native_Scheduler.succeed(Date.now()));
	});
	
	function setInterval_(interval, task)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
		{
			var id = setInterval(function() {
				_elm_lang$core$Native_Scheduler.rawSpawn(task);
			}, interval);
	
			return function() { clearInterval(id); };
		});
	}
	
	return {
		now: now,
		setInterval_: F2(setInterval_)
	};
	
	}();
	var _elm_lang$core$Time$setInterval = _elm_lang$core$Native_Time.setInterval_;
	var _elm_lang$core$Time$spawnHelp = F3(
		function (router, intervals, processes) {
			var _p0 = intervals;
			if (_p0.ctor === '[]') {
				return _elm_lang$core$Task$succeed(processes);
			} else {
				var _p1 = _p0._0;
				var spawnRest = function (id) {
					return A3(
						_elm_lang$core$Time$spawnHelp,
						router,
						_p0._1,
						A3(_elm_lang$core$Dict$insert, _p1, id, processes));
				};
				var spawnTimer = _elm_lang$core$Native_Scheduler.spawn(
					A2(
						_elm_lang$core$Time$setInterval,
						_p1,
						A2(_elm_lang$core$Platform$sendToSelf, router, _p1)));
				return A2(_elm_lang$core$Task$andThen, spawnRest, spawnTimer);
			}
		});
	var _elm_lang$core$Time$addMySub = F2(
		function (_p2, state) {
			var _p3 = _p2;
			var _p6 = _p3._1;
			var _p5 = _p3._0;
			var _p4 = A2(_elm_lang$core$Dict$get, _p5, state);
			if (_p4.ctor === 'Nothing') {
				return A3(
					_elm_lang$core$Dict$insert,
					_p5,
					{
						ctor: '::',
						_0: _p6,
						_1: {ctor: '[]'}
					},
					state);
			} else {
				return A3(
					_elm_lang$core$Dict$insert,
					_p5,
					{ctor: '::', _0: _p6, _1: _p4._0},
					state);
			}
		});
	var _elm_lang$core$Time$inMilliseconds = function (t) {
		return t;
	};
	var _elm_lang$core$Time$millisecond = 1;
	var _elm_lang$core$Time$second = 1000 * _elm_lang$core$Time$millisecond;
	var _elm_lang$core$Time$minute = 60 * _elm_lang$core$Time$second;
	var _elm_lang$core$Time$hour = 60 * _elm_lang$core$Time$minute;
	var _elm_lang$core$Time$inHours = function (t) {
		return t / _elm_lang$core$Time$hour;
	};
	var _elm_lang$core$Time$inMinutes = function (t) {
		return t / _elm_lang$core$Time$minute;
	};
	var _elm_lang$core$Time$inSeconds = function (t) {
		return t / _elm_lang$core$Time$second;
	};
	var _elm_lang$core$Time$now = _elm_lang$core$Native_Time.now;
	var _elm_lang$core$Time$onSelfMsg = F3(
		function (router, interval, state) {
			var _p7 = A2(_elm_lang$core$Dict$get, interval, state.taggers);
			if (_p7.ctor === 'Nothing') {
				return _elm_lang$core$Task$succeed(state);
			} else {
				var tellTaggers = function (time) {
					return _elm_lang$core$Task$sequence(
						A2(
							_elm_lang$core$List$map,
							function (tagger) {
								return A2(
									_elm_lang$core$Platform$sendToApp,
									router,
									tagger(time));
							},
							_p7._0));
				};
				return A2(
					_elm_lang$core$Task$andThen,
					function (_p8) {
						return _elm_lang$core$Task$succeed(state);
					},
					A2(_elm_lang$core$Task$andThen, tellTaggers, _elm_lang$core$Time$now));
			}
		});
	var _elm_lang$core$Time$subscription = _elm_lang$core$Native_Platform.leaf('Time');
	var _elm_lang$core$Time$State = F2(
		function (a, b) {
			return {taggers: a, processes: b};
		});
	var _elm_lang$core$Time$init = _elm_lang$core$Task$succeed(
		A2(_elm_lang$core$Time$State, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty));
	var _elm_lang$core$Time$onEffects = F3(
		function (router, subs, _p9) {
			var _p10 = _p9;
			var rightStep = F3(
				function (_p12, id, _p11) {
					var _p13 = _p11;
					return {
						ctor: '_Tuple3',
						_0: _p13._0,
						_1: _p13._1,
						_2: A2(
							_elm_lang$core$Task$andThen,
							function (_p14) {
								return _p13._2;
							},
							_elm_lang$core$Native_Scheduler.kill(id))
					};
				});
			var bothStep = F4(
				function (interval, taggers, id, _p15) {
					var _p16 = _p15;
					return {
						ctor: '_Tuple3',
						_0: _p16._0,
						_1: A3(_elm_lang$core$Dict$insert, interval, id, _p16._1),
						_2: _p16._2
					};
				});
			var leftStep = F3(
				function (interval, taggers, _p17) {
					var _p18 = _p17;
					return {
						ctor: '_Tuple3',
						_0: {ctor: '::', _0: interval, _1: _p18._0},
						_1: _p18._1,
						_2: _p18._2
					};
				});
			var newTaggers = A3(_elm_lang$core$List$foldl, _elm_lang$core$Time$addMySub, _elm_lang$core$Dict$empty, subs);
			var _p19 = A6(
				_elm_lang$core$Dict$merge,
				leftStep,
				bothStep,
				rightStep,
				newTaggers,
				_p10.processes,
				{
					ctor: '_Tuple3',
					_0: {ctor: '[]'},
					_1: _elm_lang$core$Dict$empty,
					_2: _elm_lang$core$Task$succeed(
						{ctor: '_Tuple0'})
				});
			var spawnList = _p19._0;
			var existingDict = _p19._1;
			var killTask = _p19._2;
			return A2(
				_elm_lang$core$Task$andThen,
				function (newProcesses) {
					return _elm_lang$core$Task$succeed(
						A2(_elm_lang$core$Time$State, newTaggers, newProcesses));
				},
				A2(
					_elm_lang$core$Task$andThen,
					function (_p20) {
						return A3(_elm_lang$core$Time$spawnHelp, router, spawnList, existingDict);
					},
					killTask));
		});
	var _elm_lang$core$Time$Every = F2(
		function (a, b) {
			return {ctor: 'Every', _0: a, _1: b};
		});
	var _elm_lang$core$Time$every = F2(
		function (interval, tagger) {
			return _elm_lang$core$Time$subscription(
				A2(_elm_lang$core$Time$Every, interval, tagger));
		});
	var _elm_lang$core$Time$subMap = F2(
		function (f, _p21) {
			var _p22 = _p21;
			return A2(
				_elm_lang$core$Time$Every,
				_p22._0,
				function (_p23) {
					return f(
						_p22._1(_p23));
				});
		});
	_elm_lang$core$Native_Platform.effectManagers['Time'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Time$init, onEffects: _elm_lang$core$Time$onEffects, onSelfMsg: _elm_lang$core$Time$onSelfMsg, tag: 'sub', subMap: _elm_lang$core$Time$subMap};
	
	var _elm_lang$core$Debug$crash = _elm_lang$core$Native_Debug.crash;
	var _elm_lang$core$Debug$log = _elm_lang$core$Native_Debug.log;
	
	//import Maybe, Native.Array, Native.List, Native.Utils, Result //
	
	var _elm_lang$core$Native_Json = function() {
	
	
	// CORE DECODERS
	
	function succeed(msg)
	{
		return {
			ctor: '<decoder>',
			tag: 'succeed',
			msg: msg
		};
	}
	
	function fail(msg)
	{
		return {
			ctor: '<decoder>',
			tag: 'fail',
			msg: msg
		};
	}
	
	function decodePrimitive(tag)
	{
		return {
			ctor: '<decoder>',
			tag: tag
		};
	}
	
	function decodeContainer(tag, decoder)
	{
		return {
			ctor: '<decoder>',
			tag: tag,
			decoder: decoder
		};
	}
	
	function decodeNull(value)
	{
		return {
			ctor: '<decoder>',
			tag: 'null',
			value: value
		};
	}
	
	function decodeField(field, decoder)
	{
		return {
			ctor: '<decoder>',
			tag: 'field',
			field: field,
			decoder: decoder
		};
	}
	
	function decodeIndex(index, decoder)
	{
		return {
			ctor: '<decoder>',
			tag: 'index',
			index: index,
			decoder: decoder
		};
	}
	
	function decodeKeyValuePairs(decoder)
	{
		return {
			ctor: '<decoder>',
			tag: 'key-value',
			decoder: decoder
		};
	}
	
	function mapMany(f, decoders)
	{
		return {
			ctor: '<decoder>',
			tag: 'map-many',
			func: f,
			decoders: decoders
		};
	}
	
	function andThen(callback, decoder)
	{
		return {
			ctor: '<decoder>',
			tag: 'andThen',
			decoder: decoder,
			callback: callback
		};
	}
	
	function oneOf(decoders)
	{
		return {
			ctor: '<decoder>',
			tag: 'oneOf',
			decoders: decoders
		};
	}
	
	
	// DECODING OBJECTS
	
	function map1(f, d1)
	{
		return mapMany(f, [d1]);
	}
	
	function map2(f, d1, d2)
	{
		return mapMany(f, [d1, d2]);
	}
	
	function map3(f, d1, d2, d3)
	{
		return mapMany(f, [d1, d2, d3]);
	}
	
	function map4(f, d1, d2, d3, d4)
	{
		return mapMany(f, [d1, d2, d3, d4]);
	}
	
	function map5(f, d1, d2, d3, d4, d5)
	{
		return mapMany(f, [d1, d2, d3, d4, d5]);
	}
	
	function map6(f, d1, d2, d3, d4, d5, d6)
	{
		return mapMany(f, [d1, d2, d3, d4, d5, d6]);
	}
	
	function map7(f, d1, d2, d3, d4, d5, d6, d7)
	{
		return mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
	}
	
	function map8(f, d1, d2, d3, d4, d5, d6, d7, d8)
	{
		return mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
	}
	
	
	// DECODE HELPERS
	
	function ok(value)
	{
		return { tag: 'ok', value: value };
	}
	
	function badPrimitive(type, value)
	{
		return { tag: 'primitive', type: type, value: value };
	}
	
	function badIndex(index, nestedProblems)
	{
		return { tag: 'index', index: index, rest: nestedProblems };
	}
	
	function badField(field, nestedProblems)
	{
		return { tag: 'field', field: field, rest: nestedProblems };
	}
	
	function badIndex(index, nestedProblems)
	{
		return { tag: 'index', index: index, rest: nestedProblems };
	}
	
	function badOneOf(problems)
	{
		return { tag: 'oneOf', problems: problems };
	}
	
	function bad(msg)
	{
		return { tag: 'fail', msg: msg };
	}
	
	function badToString(problem)
	{
		var context = '_';
		while (problem)
		{
			switch (problem.tag)
			{
				case 'primitive':
					return 'Expecting ' + problem.type
						+ (context === '_' ? '' : ' at ' + context)
						+ ' but instead got: ' + jsToString(problem.value);
	
				case 'index':
					context += '[' + problem.index + ']';
					problem = problem.rest;
					break;
	
				case 'field':
					context += '.' + problem.field;
					problem = problem.rest;
					break;
	
				case 'oneOf':
					var problems = problem.problems;
					for (var i = 0; i < problems.length; i++)
					{
						problems[i] = badToString(problems[i]);
					}
					return 'I ran into the following problems'
						+ (context === '_' ? '' : ' at ' + context)
						+ ':\n\n' + problems.join('\n');
	
				case 'fail':
					return 'I ran into a `fail` decoder'
						+ (context === '_' ? '' : ' at ' + context)
						+ ': ' + problem.msg;
			}
		}
	}
	
	function jsToString(value)
	{
		return value === undefined
			? 'undefined'
			: JSON.stringify(value);
	}
	
	
	// DECODE
	
	function runOnString(decoder, string)
	{
		var json;
		try
		{
			json = JSON.parse(string);
		}
		catch (e)
		{
			return _elm_lang$core$Result$Err('Given an invalid JSON: ' + e.message);
		}
		return run(decoder, json);
	}
	
	function run(decoder, value)
	{
		var result = runHelp(decoder, value);
		return (result.tag === 'ok')
			? _elm_lang$core$Result$Ok(result.value)
			: _elm_lang$core$Result$Err(badToString(result));
	}
	
	function runHelp(decoder, value)
	{
		switch (decoder.tag)
		{
			case 'bool':
				return (typeof value === 'boolean')
					? ok(value)
					: badPrimitive('a Bool', value);
	
			case 'int':
				if (typeof value !== 'number') {
					return badPrimitive('an Int', value);
				}
	
				if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
					return ok(value);
				}
	
				if (isFinite(value) && !(value % 1)) {
					return ok(value);
				}
	
				return badPrimitive('an Int', value);
	
			case 'float':
				return (typeof value === 'number')
					? ok(value)
					: badPrimitive('a Float', value);
	
			case 'string':
				return (typeof value === 'string')
					? ok(value)
					: (value instanceof String)
						? ok(value + '')
						: badPrimitive('a String', value);
	
			case 'null':
				return (value === null)
					? ok(decoder.value)
					: badPrimitive('null', value);
	
			case 'value':
				return ok(value);
	
			case 'list':
				if (!(value instanceof Array))
				{
					return badPrimitive('a List', value);
				}
	
				var list = _elm_lang$core$Native_List.Nil;
				for (var i = value.length; i--; )
				{
					var result = runHelp(decoder.decoder, value[i]);
					if (result.tag !== 'ok')
					{
						return badIndex(i, result)
					}
					list = _elm_lang$core$Native_List.Cons(result.value, list);
				}
				return ok(list);
	
			case 'array':
				if (!(value instanceof Array))
				{
					return badPrimitive('an Array', value);
				}
	
				var len = value.length;
				var array = new Array(len);
				for (var i = len; i--; )
				{
					var result = runHelp(decoder.decoder, value[i]);
					if (result.tag !== 'ok')
					{
						return badIndex(i, result);
					}
					array[i] = result.value;
				}
				return ok(_elm_lang$core$Native_Array.fromJSArray(array));
	
			case 'maybe':
				var result = runHelp(decoder.decoder, value);
				return (result.tag === 'ok')
					? ok(_elm_lang$core$Maybe$Just(result.value))
					: ok(_elm_lang$core$Maybe$Nothing);
	
			case 'field':
				var field = decoder.field;
				if (typeof value !== 'object' || value === null || !(field in value))
				{
					return badPrimitive('an object with a field named `' + field + '`', value);
				}
	
				var result = runHelp(decoder.decoder, value[field]);
				return (result.tag === 'ok') ? result : badField(field, result);
	
			case 'index':
				var index = decoder.index;
				if (!(value instanceof Array))
				{
					return badPrimitive('an array', value);
				}
				if (index >= value.length)
				{
					return badPrimitive('a longer array. Need index ' + index + ' but there are only ' + value.length + ' entries', value);
				}
	
				var result = runHelp(decoder.decoder, value[index]);
				return (result.tag === 'ok') ? result : badIndex(index, result);
	
			case 'key-value':
				if (typeof value !== 'object' || value === null || value instanceof Array)
				{
					return badPrimitive('an object', value);
				}
	
				var keyValuePairs = _elm_lang$core$Native_List.Nil;
				for (var key in value)
				{
					var result = runHelp(decoder.decoder, value[key]);
					if (result.tag !== 'ok')
					{
						return badField(key, result);
					}
					var pair = _elm_lang$core$Native_Utils.Tuple2(key, result.value);
					keyValuePairs = _elm_lang$core$Native_List.Cons(pair, keyValuePairs);
				}
				return ok(keyValuePairs);
	
			case 'map-many':
				var answer = decoder.func;
				var decoders = decoder.decoders;
				for (var i = 0; i < decoders.length; i++)
				{
					var result = runHelp(decoders[i], value);
					if (result.tag !== 'ok')
					{
						return result;
					}
					answer = answer(result.value);
				}
				return ok(answer);
	
			case 'andThen':
				var result = runHelp(decoder.decoder, value);
				return (result.tag !== 'ok')
					? result
					: runHelp(decoder.callback(result.value), value);
	
			case 'oneOf':
				var errors = [];
				var temp = decoder.decoders;
				while (temp.ctor !== '[]')
				{
					var result = runHelp(temp._0, value);
	
					if (result.tag === 'ok')
					{
						return result;
					}
	
					errors.push(result);
	
					temp = temp._1;
				}
				return badOneOf(errors);
	
			case 'fail':
				return bad(decoder.msg);
	
			case 'succeed':
				return ok(decoder.msg);
		}
	}
	
	
	// EQUALITY
	
	function equality(a, b)
	{
		if (a === b)
		{
			return true;
		}
	
		if (a.tag !== b.tag)
		{
			return false;
		}
	
		switch (a.tag)
		{
			case 'succeed':
			case 'fail':
				return a.msg === b.msg;
	
			case 'bool':
			case 'int':
			case 'float':
			case 'string':
			case 'value':
				return true;
	
			case 'null':
				return a.value === b.value;
	
			case 'list':
			case 'array':
			case 'maybe':
			case 'key-value':
				return equality(a.decoder, b.decoder);
	
			case 'field':
				return a.field === b.field && equality(a.decoder, b.decoder);
	
			case 'index':
				return a.index === b.index && equality(a.decoder, b.decoder);
	
			case 'map-many':
				if (a.func !== b.func)
				{
					return false;
				}
				return listEquality(a.decoders, b.decoders);
	
			case 'andThen':
				return a.callback === b.callback && equality(a.decoder, b.decoder);
	
			case 'oneOf':
				return listEquality(a.decoders, b.decoders);
		}
	}
	
	function listEquality(aDecoders, bDecoders)
	{
		var len = aDecoders.length;
		if (len !== bDecoders.length)
		{
			return false;
		}
		for (var i = 0; i < len; i++)
		{
			if (!equality(aDecoders[i], bDecoders[i]))
			{
				return false;
			}
		}
		return true;
	}
	
	
	// ENCODE
	
	function encode(indentLevel, value)
	{
		return JSON.stringify(value, null, indentLevel);
	}
	
	function identity(value)
	{
		return value;
	}
	
	function encodeObject(keyValuePairs)
	{
		var obj = {};
		while (keyValuePairs.ctor !== '[]')
		{
			var pair = keyValuePairs._0;
			obj[pair._0] = pair._1;
			keyValuePairs = keyValuePairs._1;
		}
		return obj;
	}
	
	return {
		encode: F2(encode),
		runOnString: F2(runOnString),
		run: F2(run),
	
		decodeNull: decodeNull,
		decodePrimitive: decodePrimitive,
		decodeContainer: F2(decodeContainer),
	
		decodeField: F2(decodeField),
		decodeIndex: F2(decodeIndex),
	
		map1: F2(map1),
		map2: F3(map2),
		map3: F4(map3),
		map4: F5(map4),
		map5: F6(map5),
		map6: F7(map6),
		map7: F8(map7),
		map8: F9(map8),
		decodeKeyValuePairs: decodeKeyValuePairs,
	
		andThen: F2(andThen),
		fail: fail,
		succeed: succeed,
		oneOf: oneOf,
	
		identity: identity,
		encodeNull: null,
		encodeArray: _elm_lang$core$Native_Array.toJSArray,
		encodeList: _elm_lang$core$Native_List.toArray,
		encodeObject: encodeObject,
	
		equality: equality
	};
	
	}();
	
	var _elm_lang$core$Json_Encode$list = _elm_lang$core$Native_Json.encodeList;
	var _elm_lang$core$Json_Encode$array = _elm_lang$core$Native_Json.encodeArray;
	var _elm_lang$core$Json_Encode$object = _elm_lang$core$Native_Json.encodeObject;
	var _elm_lang$core$Json_Encode$null = _elm_lang$core$Native_Json.encodeNull;
	var _elm_lang$core$Json_Encode$bool = _elm_lang$core$Native_Json.identity;
	var _elm_lang$core$Json_Encode$float = _elm_lang$core$Native_Json.identity;
	var _elm_lang$core$Json_Encode$int = _elm_lang$core$Native_Json.identity;
	var _elm_lang$core$Json_Encode$string = _elm_lang$core$Native_Json.identity;
	var _elm_lang$core$Json_Encode$encode = _elm_lang$core$Native_Json.encode;
	var _elm_lang$core$Json_Encode$Value = {ctor: 'Value'};
	
	var _elm_lang$core$Json_Decode$null = _elm_lang$core$Native_Json.decodeNull;
	var _elm_lang$core$Json_Decode$value = _elm_lang$core$Native_Json.decodePrimitive('value');
	var _elm_lang$core$Json_Decode$andThen = _elm_lang$core$Native_Json.andThen;
	var _elm_lang$core$Json_Decode$fail = _elm_lang$core$Native_Json.fail;
	var _elm_lang$core$Json_Decode$succeed = _elm_lang$core$Native_Json.succeed;
	var _elm_lang$core$Json_Decode$lazy = function (thunk) {
		return A2(
			_elm_lang$core$Json_Decode$andThen,
			thunk,
			_elm_lang$core$Json_Decode$succeed(
				{ctor: '_Tuple0'}));
	};
	var _elm_lang$core$Json_Decode$decodeValue = _elm_lang$core$Native_Json.run;
	var _elm_lang$core$Json_Decode$decodeString = _elm_lang$core$Native_Json.runOnString;
	var _elm_lang$core$Json_Decode$map8 = _elm_lang$core$Native_Json.map8;
	var _elm_lang$core$Json_Decode$map7 = _elm_lang$core$Native_Json.map7;
	var _elm_lang$core$Json_Decode$map6 = _elm_lang$core$Native_Json.map6;
	var _elm_lang$core$Json_Decode$map5 = _elm_lang$core$Native_Json.map5;
	var _elm_lang$core$Json_Decode$map4 = _elm_lang$core$Native_Json.map4;
	var _elm_lang$core$Json_Decode$map3 = _elm_lang$core$Native_Json.map3;
	var _elm_lang$core$Json_Decode$map2 = _elm_lang$core$Native_Json.map2;
	var _elm_lang$core$Json_Decode$map = _elm_lang$core$Native_Json.map1;
	var _elm_lang$core$Json_Decode$oneOf = _elm_lang$core$Native_Json.oneOf;
	var _elm_lang$core$Json_Decode$maybe = function (decoder) {
		return A2(_elm_lang$core$Native_Json.decodeContainer, 'maybe', decoder);
	};
	var _elm_lang$core$Json_Decode$index = _elm_lang$core$Native_Json.decodeIndex;
	var _elm_lang$core$Json_Decode$field = _elm_lang$core$Native_Json.decodeField;
	var _elm_lang$core$Json_Decode$at = F2(
		function (fields, decoder) {
			return A3(_elm_lang$core$List$foldr, _elm_lang$core$Json_Decode$field, decoder, fields);
		});
	var _elm_lang$core$Json_Decode$keyValuePairs = _elm_lang$core$Native_Json.decodeKeyValuePairs;
	var _elm_lang$core$Json_Decode$dict = function (decoder) {
		return A2(
			_elm_lang$core$Json_Decode$map,
			_elm_lang$core$Dict$fromList,
			_elm_lang$core$Json_Decode$keyValuePairs(decoder));
	};
	var _elm_lang$core$Json_Decode$array = function (decoder) {
		return A2(_elm_lang$core$Native_Json.decodeContainer, 'array', decoder);
	};
	var _elm_lang$core$Json_Decode$list = function (decoder) {
		return A2(_elm_lang$core$Native_Json.decodeContainer, 'list', decoder);
	};
	var _elm_lang$core$Json_Decode$nullable = function (decoder) {
		return _elm_lang$core$Json_Decode$oneOf(
			{
				ctor: '::',
				_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
				_1: {
					ctor: '::',
					_0: A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, decoder),
					_1: {ctor: '[]'}
				}
			});
	};
	var _elm_lang$core$Json_Decode$float = _elm_lang$core$Native_Json.decodePrimitive('float');
	var _elm_lang$core$Json_Decode$int = _elm_lang$core$Native_Json.decodePrimitive('int');
	var _elm_lang$core$Json_Decode$bool = _elm_lang$core$Native_Json.decodePrimitive('bool');
	var _elm_lang$core$Json_Decode$string = _elm_lang$core$Native_Json.decodePrimitive('string');
	var _elm_lang$core$Json_Decode$Decoder = {ctor: 'Decoder'};
	
	var _elm_lang$core$Process$kill = _elm_lang$core$Native_Scheduler.kill;
	var _elm_lang$core$Process$sleep = _elm_lang$core$Native_Scheduler.sleep;
	var _elm_lang$core$Process$spawn = _elm_lang$core$Native_Scheduler.spawn;
	
	var _elm_lang$core$Tuple$mapSecond = F2(
		function (func, _p0) {
			var _p1 = _p0;
			return {
				ctor: '_Tuple2',
				_0: _p1._0,
				_1: func(_p1._1)
			};
		});
	var _elm_lang$core$Tuple$mapFirst = F2(
		function (func, _p2) {
			var _p3 = _p2;
			return {
				ctor: '_Tuple2',
				_0: func(_p3._0),
				_1: _p3._1
			};
		});
	var _elm_lang$core$Tuple$second = function (_p4) {
		var _p5 = _p4;
		return _p5._1;
	};
	var _elm_lang$core$Tuple$first = function (_p6) {
		var _p7 = _p6;
		return _p7._0;
	};
	
	var _elm_lang$dom$Native_Dom = function() {
	
	var fakeNode = {
		addEventListener: function() {},
		removeEventListener: function() {}
	};
	
	var onDocument = on(typeof document !== 'undefined' ? document : fakeNode);
	var onWindow = on(typeof window !== 'undefined' ? window : fakeNode);
	
	function on(node)
	{
		return function(eventName, decoder, toTask)
		{
			return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
	
				function performTask(event)
				{
					var result = A2(_elm_lang$core$Json_Decode$decodeValue, decoder, event);
					if (result.ctor === 'Ok')
					{
						_elm_lang$core$Native_Scheduler.rawSpawn(toTask(result._0));
					}
				}
	
				node.addEventListener(eventName, performTask);
	
				return function()
				{
					node.removeEventListener(eventName, performTask);
				};
			});
		};
	}
	
	var rAF = typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { callback(); };
	
	function withNode(id, doStuff)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
		{
			rAF(function()
			{
				var node = document.getElementById(id);
				if (node === null)
				{
					callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'NotFound', _0: id }));
					return;
				}
				callback(_elm_lang$core$Native_Scheduler.succeed(doStuff(node)));
			});
		});
	}
	
	
	// FOCUS
	
	function focus(id)
	{
		return withNode(id, function(node) {
			node.focus();
			return _elm_lang$core$Native_Utils.Tuple0;
		});
	}
	
	function blur(id)
	{
		return withNode(id, function(node) {
			node.blur();
			return _elm_lang$core$Native_Utils.Tuple0;
		});
	}
	
	
	// SCROLLING
	
	function getScrollTop(id)
	{
		return withNode(id, function(node) {
			return node.scrollTop;
		});
	}
	
	function setScrollTop(id, desiredScrollTop)
	{
		return withNode(id, function(node) {
			node.scrollTop = desiredScrollTop;
			return _elm_lang$core$Native_Utils.Tuple0;
		});
	}
	
	function toBottom(id)
	{
		return withNode(id, function(node) {
			node.scrollTop = node.scrollHeight;
			return _elm_lang$core$Native_Utils.Tuple0;
		});
	}
	
	function getScrollLeft(id)
	{
		return withNode(id, function(node) {
			return node.scrollLeft;
		});
	}
	
	function setScrollLeft(id, desiredScrollLeft)
	{
		return withNode(id, function(node) {
			node.scrollLeft = desiredScrollLeft;
			return _elm_lang$core$Native_Utils.Tuple0;
		});
	}
	
	function toRight(id)
	{
		return withNode(id, function(node) {
			node.scrollLeft = node.scrollWidth;
			return _elm_lang$core$Native_Utils.Tuple0;
		});
	}
	
	
	// SIZE
	
	function width(options, id)
	{
		return withNode(id, function(node) {
			switch (options.ctor)
			{
				case 'Content':
					return node.scrollWidth;
				case 'VisibleContent':
					return node.clientWidth;
				case 'VisibleContentWithBorders':
					return node.offsetWidth;
				case 'VisibleContentWithBordersAndMargins':
					var rect = node.getBoundingClientRect();
					return rect.right - rect.left;
			}
		});
	}
	
	function height(options, id)
	{
		return withNode(id, function(node) {
			switch (options.ctor)
			{
				case 'Content':
					return node.scrollHeight;
				case 'VisibleContent':
					return node.clientHeight;
				case 'VisibleContentWithBorders':
					return node.offsetHeight;
				case 'VisibleContentWithBordersAndMargins':
					var rect = node.getBoundingClientRect();
					return rect.bottom - rect.top;
			}
		});
	}
	
	return {
		onDocument: F3(onDocument),
		onWindow: F3(onWindow),
	
		focus: focus,
		blur: blur,
	
		getScrollTop: getScrollTop,
		setScrollTop: F2(setScrollTop),
		getScrollLeft: getScrollLeft,
		setScrollLeft: F2(setScrollLeft),
		toBottom: toBottom,
		toRight: toRight,
	
		height: F2(height),
		width: F2(width)
	};
	
	}();
	
	var _elm_lang$dom$Dom_LowLevel$onWindow = _elm_lang$dom$Native_Dom.onWindow;
	var _elm_lang$dom$Dom_LowLevel$onDocument = _elm_lang$dom$Native_Dom.onDocument;
	
	var _elm_lang$virtual_dom$VirtualDom_Debug$wrap;
	var _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags;
	
	var _elm_lang$virtual_dom$Native_VirtualDom = function() {
	
	var STYLE_KEY = 'STYLE';
	var EVENT_KEY = 'EVENT';
	var ATTR_KEY = 'ATTR';
	var ATTR_NS_KEY = 'ATTR_NS';
	
	var localDoc = typeof document !== 'undefined' ? document : {};
	
	
	////////////  VIRTUAL DOM NODES  ////////////
	
	
	function text(string)
	{
		return {
			type: 'text',
			text: string
		};
	}
	
	
	function node(tag)
	{
		return F2(function(factList, kidList) {
			return nodeHelp(tag, factList, kidList);
		});
	}
	
	
	function nodeHelp(tag, factList, kidList)
	{
		var organized = organizeFacts(factList);
		var namespace = organized.namespace;
		var facts = organized.facts;
	
		var children = [];
		var descendantsCount = 0;
		while (kidList.ctor !== '[]')
		{
			var kid = kidList._0;
			descendantsCount += (kid.descendantsCount || 0);
			children.push(kid);
			kidList = kidList._1;
		}
		descendantsCount += children.length;
	
		return {
			type: 'node',
			tag: tag,
			facts: facts,
			children: children,
			namespace: namespace,
			descendantsCount: descendantsCount
		};
	}
	
	
	function keyedNode(tag, factList, kidList)
	{
		var organized = organizeFacts(factList);
		var namespace = organized.namespace;
		var facts = organized.facts;
	
		var children = [];
		var descendantsCount = 0;
		while (kidList.ctor !== '[]')
		{
			var kid = kidList._0;
			descendantsCount += (kid._1.descendantsCount || 0);
			children.push(kid);
			kidList = kidList._1;
		}
		descendantsCount += children.length;
	
		return {
			type: 'keyed-node',
			tag: tag,
			facts: facts,
			children: children,
			namespace: namespace,
			descendantsCount: descendantsCount
		};
	}
	
	
	function custom(factList, model, impl)
	{
		var facts = organizeFacts(factList).facts;
	
		return {
			type: 'custom',
			facts: facts,
			model: model,
			impl: impl
		};
	}
	
	
	function map(tagger, node)
	{
		return {
			type: 'tagger',
			tagger: tagger,
			node: node,
			descendantsCount: 1 + (node.descendantsCount || 0)
		};
	}
	
	
	function thunk(func, args, thunk)
	{
		return {
			type: 'thunk',
			func: func,
			args: args,
			thunk: thunk,
			node: undefined
		};
	}
	
	function lazy(fn, a)
	{
		return thunk(fn, [a], function() {
			return fn(a);
		});
	}
	
	function lazy2(fn, a, b)
	{
		return thunk(fn, [a,b], function() {
			return A2(fn, a, b);
		});
	}
	
	function lazy3(fn, a, b, c)
	{
		return thunk(fn, [a,b,c], function() {
			return A3(fn, a, b, c);
		});
	}
	
	
	
	// FACTS
	
	
	function organizeFacts(factList)
	{
		var namespace, facts = {};
	
		while (factList.ctor !== '[]')
		{
			var entry = factList._0;
			var key = entry.key;
	
			if (key === ATTR_KEY || key === ATTR_NS_KEY || key === EVENT_KEY)
			{
				var subFacts = facts[key] || {};
				subFacts[entry.realKey] = entry.value;
				facts[key] = subFacts;
			}
			else if (key === STYLE_KEY)
			{
				var styles = facts[key] || {};
				var styleList = entry.value;
				while (styleList.ctor !== '[]')
				{
					var style = styleList._0;
					styles[style._0] = style._1;
					styleList = styleList._1;
				}
				facts[key] = styles;
			}
			else if (key === 'namespace')
			{
				namespace = entry.value;
			}
			else if (key === 'className')
			{
				var classes = facts[key];
				facts[key] = typeof classes === 'undefined'
					? entry.value
					: classes + ' ' + entry.value;
			}
	 		else
			{
				facts[key] = entry.value;
			}
			factList = factList._1;
		}
	
		return {
			facts: facts,
			namespace: namespace
		};
	}
	
	
	
	////////////  PROPERTIES AND ATTRIBUTES  ////////////
	
	
	function style(value)
	{
		return {
			key: STYLE_KEY,
			value: value
		};
	}
	
	
	function property(key, value)
	{
		return {
			key: key,
			value: value
		};
	}
	
	
	function attribute(key, value)
	{
		return {
			key: ATTR_KEY,
			realKey: key,
			value: value
		};
	}
	
	
	function attributeNS(namespace, key, value)
	{
		return {
			key: ATTR_NS_KEY,
			realKey: key,
			value: {
				value: value,
				namespace: namespace
			}
		};
	}
	
	
	function on(name, options, decoder)
	{
		return {
			key: EVENT_KEY,
			realKey: name,
			value: {
				options: options,
				decoder: decoder
			}
		};
	}
	
	
	function equalEvents(a, b)
	{
		if (a.options !== b.options)
		{
			if (a.options.stopPropagation !== b.options.stopPropagation || a.options.preventDefault !== b.options.preventDefault)
			{
				return false;
			}
		}
		return _elm_lang$core$Native_Json.equality(a.decoder, b.decoder);
	}
	
	
	function mapProperty(func, property)
	{
		if (property.key !== EVENT_KEY)
		{
			return property;
		}
		return on(
			property.realKey,
			property.value.options,
			A2(_elm_lang$core$Json_Decode$map, func, property.value.decoder)
		);
	}
	
	
	////////////  RENDER  ////////////
	
	
	function render(vNode, eventNode)
	{
		switch (vNode.type)
		{
			case 'thunk':
				if (!vNode.node)
				{
					vNode.node = vNode.thunk();
				}
				return render(vNode.node, eventNode);
	
			case 'tagger':
				var subNode = vNode.node;
				var tagger = vNode.tagger;
	
				while (subNode.type === 'tagger')
				{
					typeof tagger !== 'object'
						? tagger = [tagger, subNode.tagger]
						: tagger.push(subNode.tagger);
	
					subNode = subNode.node;
				}
	
				var subEventRoot = { tagger: tagger, parent: eventNode };
				var domNode = render(subNode, subEventRoot);
				domNode.elm_event_node_ref = subEventRoot;
				return domNode;
	
			case 'text':
				return localDoc.createTextNode(vNode.text);
	
			case 'node':
				var domNode = vNode.namespace
					? localDoc.createElementNS(vNode.namespace, vNode.tag)
					: localDoc.createElement(vNode.tag);
	
				applyFacts(domNode, eventNode, vNode.facts);
	
				var children = vNode.children;
	
				for (var i = 0; i < children.length; i++)
				{
					domNode.appendChild(render(children[i], eventNode));
				}
	
				return domNode;
	
			case 'keyed-node':
				var domNode = vNode.namespace
					? localDoc.createElementNS(vNode.namespace, vNode.tag)
					: localDoc.createElement(vNode.tag);
	
				applyFacts(domNode, eventNode, vNode.facts);
	
				var children = vNode.children;
	
				for (var i = 0; i < children.length; i++)
				{
					domNode.appendChild(render(children[i]._1, eventNode));
				}
	
				return domNode;
	
			case 'custom':
				var domNode = vNode.impl.render(vNode.model);
				applyFacts(domNode, eventNode, vNode.facts);
				return domNode;
		}
	}
	
	
	
	////////////  APPLY FACTS  ////////////
	
	
	function applyFacts(domNode, eventNode, facts)
	{
		for (var key in facts)
		{
			var value = facts[key];
	
			switch (key)
			{
				case STYLE_KEY:
					applyStyles(domNode, value);
					break;
	
				case EVENT_KEY:
					applyEvents(domNode, eventNode, value);
					break;
	
				case ATTR_KEY:
					applyAttrs(domNode, value);
					break;
	
				case ATTR_NS_KEY:
					applyAttrsNS(domNode, value);
					break;
	
				case 'value':
					if (domNode[key] !== value)
					{
						domNode[key] = value;
					}
					break;
	
				default:
					domNode[key] = value;
					break;
			}
		}
	}
	
	function applyStyles(domNode, styles)
	{
		var domNodeStyle = domNode.style;
	
		for (var key in styles)
		{
			domNodeStyle[key] = styles[key];
		}
	}
	
	function applyEvents(domNode, eventNode, events)
	{
		var allHandlers = domNode.elm_handlers || {};
	
		for (var key in events)
		{
			var handler = allHandlers[key];
			var value = events[key];
	
			if (typeof value === 'undefined')
			{
				domNode.removeEventListener(key, handler);
				allHandlers[key] = undefined;
			}
			else if (typeof handler === 'undefined')
			{
				var handler = makeEventHandler(eventNode, value);
				domNode.addEventListener(key, handler);
				allHandlers[key] = handler;
			}
			else
			{
				handler.info = value;
			}
		}
	
		domNode.elm_handlers = allHandlers;
	}
	
	function makeEventHandler(eventNode, info)
	{
		function eventHandler(event)
		{
			var info = eventHandler.info;
	
			var value = A2(_elm_lang$core$Native_Json.run, info.decoder, event);
	
			if (value.ctor === 'Ok')
			{
				var options = info.options;
				if (options.stopPropagation)
				{
					event.stopPropagation();
				}
				if (options.preventDefault)
				{
					event.preventDefault();
				}
	
				var message = value._0;
	
				var currentEventNode = eventNode;
				while (currentEventNode)
				{
					var tagger = currentEventNode.tagger;
					if (typeof tagger === 'function')
					{
						message = tagger(message);
					}
					else
					{
						for (var i = tagger.length; i--; )
						{
							message = tagger[i](message);
						}
					}
					currentEventNode = currentEventNode.parent;
				}
			}
		};
	
		eventHandler.info = info;
	
		return eventHandler;
	}
	
	function applyAttrs(domNode, attrs)
	{
		for (var key in attrs)
		{
			var value = attrs[key];
			if (typeof value === 'undefined')
			{
				domNode.removeAttribute(key);
			}
			else
			{
				domNode.setAttribute(key, value);
			}
		}
	}
	
	function applyAttrsNS(domNode, nsAttrs)
	{
		for (var key in nsAttrs)
		{
			var pair = nsAttrs[key];
			var namespace = pair.namespace;
			var value = pair.value;
	
			if (typeof value === 'undefined')
			{
				domNode.removeAttributeNS(namespace, key);
			}
			else
			{
				domNode.setAttributeNS(namespace, key, value);
			}
		}
	}
	
	
	
	////////////  DIFF  ////////////
	
	
	function diff(a, b)
	{
		var patches = [];
		diffHelp(a, b, patches, 0);
		return patches;
	}
	
	
	function makePatch(type, index, data)
	{
		return {
			index: index,
			type: type,
			data: data,
			domNode: undefined,
			eventNode: undefined
		};
	}
	
	
	function diffHelp(a, b, patches, index)
	{
		if (a === b)
		{
			return;
		}
	
		var aType = a.type;
		var bType = b.type;
	
		// Bail if you run into different types of nodes. Implies that the
		// structure has changed significantly and it's not worth a diff.
		if (aType !== bType)
		{
			patches.push(makePatch('p-redraw', index, b));
			return;
		}
	
		// Now we know that both nodes are the same type.
		switch (bType)
		{
			case 'thunk':
				var aArgs = a.args;
				var bArgs = b.args;
				var i = aArgs.length;
				var same = a.func === b.func && i === bArgs.length;
				while (same && i--)
				{
					same = aArgs[i] === bArgs[i];
				}
				if (same)
				{
					b.node = a.node;
					return;
				}
				b.node = b.thunk();
				var subPatches = [];
				diffHelp(a.node, b.node, subPatches, 0);
				if (subPatches.length > 0)
				{
					patches.push(makePatch('p-thunk', index, subPatches));
				}
				return;
	
			case 'tagger':
				// gather nested taggers
				var aTaggers = a.tagger;
				var bTaggers = b.tagger;
				var nesting = false;
	
				var aSubNode = a.node;
				while (aSubNode.type === 'tagger')
				{
					nesting = true;
	
					typeof aTaggers !== 'object'
						? aTaggers = [aTaggers, aSubNode.tagger]
						: aTaggers.push(aSubNode.tagger);
	
					aSubNode = aSubNode.node;
				}
	
				var bSubNode = b.node;
				while (bSubNode.type === 'tagger')
				{
					nesting = true;
	
					typeof bTaggers !== 'object'
						? bTaggers = [bTaggers, bSubNode.tagger]
						: bTaggers.push(bSubNode.tagger);
	
					bSubNode = bSubNode.node;
				}
	
				// Just bail if different numbers of taggers. This implies the
				// structure of the virtual DOM has changed.
				if (nesting && aTaggers.length !== bTaggers.length)
				{
					patches.push(makePatch('p-redraw', index, b));
					return;
				}
	
				// check if taggers are "the same"
				if (nesting ? !pairwiseRefEqual(aTaggers, bTaggers) : aTaggers !== bTaggers)
				{
					patches.push(makePatch('p-tagger', index, bTaggers));
				}
	
				// diff everything below the taggers
				diffHelp(aSubNode, bSubNode, patches, index + 1);
				return;
	
			case 'text':
				if (a.text !== b.text)
				{
					patches.push(makePatch('p-text', index, b.text));
					return;
				}
	
				return;
	
			case 'node':
				// Bail if obvious indicators have changed. Implies more serious
				// structural changes such that it's not worth it to diff.
				if (a.tag !== b.tag || a.namespace !== b.namespace)
				{
					patches.push(makePatch('p-redraw', index, b));
					return;
				}
	
				var factsDiff = diffFacts(a.facts, b.facts);
	
				if (typeof factsDiff !== 'undefined')
				{
					patches.push(makePatch('p-facts', index, factsDiff));
				}
	
				diffChildren(a, b, patches, index);
				return;
	
			case 'keyed-node':
				// Bail if obvious indicators have changed. Implies more serious
				// structural changes such that it's not worth it to diff.
				if (a.tag !== b.tag || a.namespace !== b.namespace)
				{
					patches.push(makePatch('p-redraw', index, b));
					return;
				}
	
				var factsDiff = diffFacts(a.facts, b.facts);
	
				if (typeof factsDiff !== 'undefined')
				{
					patches.push(makePatch('p-facts', index, factsDiff));
				}
	
				diffKeyedChildren(a, b, patches, index);
				return;
	
			case 'custom':
				if (a.impl !== b.impl)
				{
					patches.push(makePatch('p-redraw', index, b));
					return;
				}
	
				var factsDiff = diffFacts(a.facts, b.facts);
				if (typeof factsDiff !== 'undefined')
				{
					patches.push(makePatch('p-facts', index, factsDiff));
				}
	
				var patch = b.impl.diff(a,b);
				if (patch)
				{
					patches.push(makePatch('p-custom', index, patch));
					return;
				}
	
				return;
		}
	}
	
	
	// assumes the incoming arrays are the same length
	function pairwiseRefEqual(as, bs)
	{
		for (var i = 0; i < as.length; i++)
		{
			if (as[i] !== bs[i])
			{
				return false;
			}
		}
	
		return true;
	}
	
	
	// TODO Instead of creating a new diff object, it's possible to just test if
	// there *is* a diff. During the actual patch, do the diff again and make the
	// modifications directly. This way, there's no new allocations. Worth it?
	function diffFacts(a, b, category)
	{
		var diff;
	
		// look for changes and removals
		for (var aKey in a)
		{
			if (aKey === STYLE_KEY || aKey === EVENT_KEY || aKey === ATTR_KEY || aKey === ATTR_NS_KEY)
			{
				var subDiff = diffFacts(a[aKey], b[aKey] || {}, aKey);
				if (subDiff)
				{
					diff = diff || {};
					diff[aKey] = subDiff;
				}
				continue;
			}
	
			// remove if not in the new facts
			if (!(aKey in b))
			{
				diff = diff || {};
				diff[aKey] =
					(typeof category === 'undefined')
						? (typeof a[aKey] === 'string' ? '' : null)
						:
					(category === STYLE_KEY)
						? ''
						:
					(category === EVENT_KEY || category === ATTR_KEY)
						? undefined
						:
					{ namespace: a[aKey].namespace, value: undefined };
	
				continue;
			}
	
			var aValue = a[aKey];
			var bValue = b[aKey];
	
			// reference equal, so don't worry about it
			if (aValue === bValue && aKey !== 'value'
				|| category === EVENT_KEY && equalEvents(aValue, bValue))
			{
				continue;
			}
	
			diff = diff || {};
			diff[aKey] = bValue;
		}
	
		// add new stuff
		for (var bKey in b)
		{
			if (!(bKey in a))
			{
				diff = diff || {};
				diff[bKey] = b[bKey];
			}
		}
	
		return diff;
	}
	
	
	function diffChildren(aParent, bParent, patches, rootIndex)
	{
		var aChildren = aParent.children;
		var bChildren = bParent.children;
	
		var aLen = aChildren.length;
		var bLen = bChildren.length;
	
		// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS
	
		if (aLen > bLen)
		{
			patches.push(makePatch('p-remove-last', rootIndex, aLen - bLen));
		}
		else if (aLen < bLen)
		{
			patches.push(makePatch('p-append', rootIndex, bChildren.slice(aLen)));
		}
	
		// PAIRWISE DIFF EVERYTHING ELSE
	
		var index = rootIndex;
		var minLen = aLen < bLen ? aLen : bLen;
		for (var i = 0; i < minLen; i++)
		{
			index++;
			var aChild = aChildren[i];
			diffHelp(aChild, bChildren[i], patches, index);
			index += aChild.descendantsCount || 0;
		}
	}
	
	
	
	////////////  KEYED DIFF  ////////////
	
	
	function diffKeyedChildren(aParent, bParent, patches, rootIndex)
	{
		var localPatches = [];
	
		var changes = {}; // Dict String Entry
		var inserts = []; // Array { index : Int, entry : Entry }
		// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }
	
		var aChildren = aParent.children;
		var bChildren = bParent.children;
		var aLen = aChildren.length;
		var bLen = bChildren.length;
		var aIndex = 0;
		var bIndex = 0;
	
		var index = rootIndex;
	
		while (aIndex < aLen && bIndex < bLen)
		{
			var a = aChildren[aIndex];
			var b = bChildren[bIndex];
	
			var aKey = a._0;
			var bKey = b._0;
			var aNode = a._1;
			var bNode = b._1;
	
			// check if keys match
	
			if (aKey === bKey)
			{
				index++;
				diffHelp(aNode, bNode, localPatches, index);
				index += aNode.descendantsCount || 0;
	
				aIndex++;
				bIndex++;
				continue;
			}
	
			// look ahead 1 to detect insertions and removals.
	
			var aLookAhead = aIndex + 1 < aLen;
			var bLookAhead = bIndex + 1 < bLen;
	
			if (aLookAhead)
			{
				var aNext = aChildren[aIndex + 1];
				var aNextKey = aNext._0;
				var aNextNode = aNext._1;
				var oldMatch = bKey === aNextKey;
			}
	
			if (bLookAhead)
			{
				var bNext = bChildren[bIndex + 1];
				var bNextKey = bNext._0;
				var bNextNode = bNext._1;
				var newMatch = aKey === bNextKey;
			}
	
	
			// swap a and b
			if (aLookAhead && bLookAhead && newMatch && oldMatch)
			{
				index++;
				diffHelp(aNode, bNextNode, localPatches, index);
				insertNode(changes, localPatches, aKey, bNode, bIndex, inserts);
				index += aNode.descendantsCount || 0;
	
				index++;
				removeNode(changes, localPatches, aKey, aNextNode, index);
				index += aNextNode.descendantsCount || 0;
	
				aIndex += 2;
				bIndex += 2;
				continue;
			}
	
			// insert b
			if (bLookAhead && newMatch)
			{
				index++;
				insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
				diffHelp(aNode, bNextNode, localPatches, index);
				index += aNode.descendantsCount || 0;
	
				aIndex += 1;
				bIndex += 2;
				continue;
			}
	
			// remove a
			if (aLookAhead && oldMatch)
			{
				index++;
				removeNode(changes, localPatches, aKey, aNode, index);
				index += aNode.descendantsCount || 0;
	
				index++;
				diffHelp(aNextNode, bNode, localPatches, index);
				index += aNextNode.descendantsCount || 0;
	
				aIndex += 2;
				bIndex += 1;
				continue;
			}
	
			// remove a, insert b
			if (aLookAhead && bLookAhead && aNextKey === bNextKey)
			{
				index++;
				removeNode(changes, localPatches, aKey, aNode, index);
				insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
				index += aNode.descendantsCount || 0;
	
				index++;
				diffHelp(aNextNode, bNextNode, localPatches, index);
				index += aNextNode.descendantsCount || 0;
	
				aIndex += 2;
				bIndex += 2;
				continue;
			}
	
			break;
		}
	
		// eat up any remaining nodes with removeNode and insertNode
	
		while (aIndex < aLen)
		{
			index++;
			var a = aChildren[aIndex];
			var aNode = a._1;
			removeNode(changes, localPatches, a._0, aNode, index);
			index += aNode.descendantsCount || 0;
			aIndex++;
		}
	
		var endInserts;
		while (bIndex < bLen)
		{
			endInserts = endInserts || [];
			var b = bChildren[bIndex];
			insertNode(changes, localPatches, b._0, b._1, undefined, endInserts);
			bIndex++;
		}
	
		if (localPatches.length > 0 || inserts.length > 0 || typeof endInserts !== 'undefined')
		{
			patches.push(makePatch('p-reorder', rootIndex, {
				patches: localPatches,
				inserts: inserts,
				endInserts: endInserts
			}));
		}
	}
	
	
	
	////////////  CHANGES FROM KEYED DIFF  ////////////
	
	
	var POSTFIX = '_elmW6BL';
	
	
	function insertNode(changes, localPatches, key, vnode, bIndex, inserts)
	{
		var entry = changes[key];
	
		// never seen this key before
		if (typeof entry === 'undefined')
		{
			entry = {
				tag: 'insert',
				vnode: vnode,
				index: bIndex,
				data: undefined
			};
	
			inserts.push({ index: bIndex, entry: entry });
			changes[key] = entry;
	
			return;
		}
	
		// this key was removed earlier, a match!
		if (entry.tag === 'remove')
		{
			inserts.push({ index: bIndex, entry: entry });
	
			entry.tag = 'move';
			var subPatches = [];
			diffHelp(entry.vnode, vnode, subPatches, entry.index);
			entry.index = bIndex;
			entry.data.data = {
				patches: subPatches,
				entry: entry
			};
	
			return;
		}
	
		// this key has already been inserted or moved, a duplicate!
		insertNode(changes, localPatches, key + POSTFIX, vnode, bIndex, inserts);
	}
	
	
	function removeNode(changes, localPatches, key, vnode, index)
	{
		var entry = changes[key];
	
		// never seen this key before
		if (typeof entry === 'undefined')
		{
			var patch = makePatch('p-remove', index, undefined);
			localPatches.push(patch);
	
			changes[key] = {
				tag: 'remove',
				vnode: vnode,
				index: index,
				data: patch
			};
	
			return;
		}
	
		// this key was inserted earlier, a match!
		if (entry.tag === 'insert')
		{
			entry.tag = 'move';
			var subPatches = [];
			diffHelp(vnode, entry.vnode, subPatches, index);
	
			var patch = makePatch('p-remove', index, {
				patches: subPatches,
				entry: entry
			});
			localPatches.push(patch);
	
			return;
		}
	
		// this key has already been removed or moved, a duplicate!
		removeNode(changes, localPatches, key + POSTFIX, vnode, index);
	}
	
	
	
	////////////  ADD DOM NODES  ////////////
	//
	// Each DOM node has an "index" assigned in order of traversal. It is important
	// to minimize our crawl over the actual DOM, so these indexes (along with the
	// descendantsCount of virtual nodes) let us skip touching entire subtrees of
	// the DOM if we know there are no patches there.
	
	
	function addDomNodes(domNode, vNode, patches, eventNode)
	{
		addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.descendantsCount, eventNode);
	}
	
	
	// assumes `patches` is non-empty and indexes increase monotonically.
	function addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
	{
		var patch = patches[i];
		var index = patch.index;
	
		while (index === low)
		{
			var patchType = patch.type;
	
			if (patchType === 'p-thunk')
			{
				addDomNodes(domNode, vNode.node, patch.data, eventNode);
			}
			else if (patchType === 'p-reorder')
			{
				patch.domNode = domNode;
				patch.eventNode = eventNode;
	
				var subPatches = patch.data.patches;
				if (subPatches.length > 0)
				{
					addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
			else if (patchType === 'p-remove')
			{
				patch.domNode = domNode;
				patch.eventNode = eventNode;
	
				var data = patch.data;
				if (typeof data !== 'undefined')
				{
					data.entry.data = domNode;
					var subPatches = data.patches;
					if (subPatches.length > 0)
					{
						addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
					}
				}
			}
			else
			{
				patch.domNode = domNode;
				patch.eventNode = eventNode;
			}
	
			i++;
	
			if (!(patch = patches[i]) || (index = patch.index) > high)
			{
				return i;
			}
		}
	
		switch (vNode.type)
		{
			case 'tagger':
				var subNode = vNode.node;
	
				while (subNode.type === "tagger")
				{
					subNode = subNode.node;
				}
	
				return addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	
			case 'node':
				var vChildren = vNode.children;
				var childNodes = domNode.childNodes;
				for (var j = 0; j < vChildren.length; j++)
				{
					low++;
					var vChild = vChildren[j];
					var nextLow = low + (vChild.descendantsCount || 0);
					if (low <= index && index <= nextLow)
					{
						i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
						if (!(patch = patches[i]) || (index = patch.index) > high)
						{
							return i;
						}
					}
					low = nextLow;
				}
				return i;
	
			case 'keyed-node':
				var vChildren = vNode.children;
				var childNodes = domNode.childNodes;
				for (var j = 0; j < vChildren.length; j++)
				{
					low++;
					var vChild = vChildren[j]._1;
					var nextLow = low + (vChild.descendantsCount || 0);
					if (low <= index && index <= nextLow)
					{
						i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
						if (!(patch = patches[i]) || (index = patch.index) > high)
						{
							return i;
						}
					}
					low = nextLow;
				}
				return i;
	
			case 'text':
			case 'thunk':
				throw new Error('should never traverse `text` or `thunk` nodes like this');
		}
	}
	
	
	
	////////////  APPLY PATCHES  ////////////
	
	
	function applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
	{
		if (patches.length === 0)
		{
			return rootDomNode;
		}
	
		addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
		return applyPatchesHelp(rootDomNode, patches);
	}
	
	function applyPatchesHelp(rootDomNode, patches)
	{
		for (var i = 0; i < patches.length; i++)
		{
			var patch = patches[i];
			var localDomNode = patch.domNode
			var newNode = applyPatch(localDomNode, patch);
			if (localDomNode === rootDomNode)
			{
				rootDomNode = newNode;
			}
		}
		return rootDomNode;
	}
	
	function applyPatch(domNode, patch)
	{
		switch (patch.type)
		{
			case 'p-redraw':
				return applyPatchRedraw(domNode, patch.data, patch.eventNode);
	
			case 'p-facts':
				applyFacts(domNode, patch.eventNode, patch.data);
				return domNode;
	
			case 'p-text':
				domNode.replaceData(0, domNode.length, patch.data);
				return domNode;
	
			case 'p-thunk':
				return applyPatchesHelp(domNode, patch.data);
	
			case 'p-tagger':
				if (typeof domNode.elm_event_node_ref !== 'undefined')
				{
					domNode.elm_event_node_ref.tagger = patch.data;
				}
				else
				{
					domNode.elm_event_node_ref = { tagger: patch.data, parent: patch.eventNode };
				}
				return domNode;
	
			case 'p-remove-last':
				var i = patch.data;
				while (i--)
				{
					domNode.removeChild(domNode.lastChild);
				}
				return domNode;
	
			case 'p-append':
				var newNodes = patch.data;
				for (var i = 0; i < newNodes.length; i++)
				{
					domNode.appendChild(render(newNodes[i], patch.eventNode));
				}
				return domNode;
	
			case 'p-remove':
				var data = patch.data;
				if (typeof data === 'undefined')
				{
					domNode.parentNode.removeChild(domNode);
					return domNode;
				}
				var entry = data.entry;
				if (typeof entry.index !== 'undefined')
				{
					domNode.parentNode.removeChild(domNode);
				}
				entry.data = applyPatchesHelp(domNode, data.patches);
				return domNode;
	
			case 'p-reorder':
				return applyPatchReorder(domNode, patch);
	
			case 'p-custom':
				var impl = patch.data;
				return impl.applyPatch(domNode, impl.data);
	
			default:
				throw new Error('Ran into an unknown patch!');
		}
	}
	
	
	function applyPatchRedraw(domNode, vNode, eventNode)
	{
		var parentNode = domNode.parentNode;
		var newNode = render(vNode, eventNode);
	
		if (typeof newNode.elm_event_node_ref === 'undefined')
		{
			newNode.elm_event_node_ref = domNode.elm_event_node_ref;
		}
	
		if (parentNode && newNode !== domNode)
		{
			parentNode.replaceChild(newNode, domNode);
		}
		return newNode;
	}
	
	
	function applyPatchReorder(domNode, patch)
	{
		var data = patch.data;
	
		// remove end inserts
		var frag = applyPatchReorderEndInsertsHelp(data.endInserts, patch);
	
		// removals
		domNode = applyPatchesHelp(domNode, data.patches);
	
		// inserts
		var inserts = data.inserts;
		for (var i = 0; i < inserts.length; i++)
		{
			var insert = inserts[i];
			var entry = insert.entry;
			var node = entry.tag === 'move'
				? entry.data
				: render(entry.vnode, patch.eventNode);
			domNode.insertBefore(node, domNode.childNodes[insert.index]);
		}
	
		// add end inserts
		if (typeof frag !== 'undefined')
		{
			domNode.appendChild(frag);
		}
	
		return domNode;
	}
	
	
	function applyPatchReorderEndInsertsHelp(endInserts, patch)
	{
		if (typeof endInserts === 'undefined')
		{
			return;
		}
	
		var frag = localDoc.createDocumentFragment();
		for (var i = 0; i < endInserts.length; i++)
		{
			var insert = endInserts[i];
			var entry = insert.entry;
			frag.appendChild(entry.tag === 'move'
				? entry.data
				: render(entry.vnode, patch.eventNode)
			);
		}
		return frag;
	}
	
	
	// PROGRAMS
	
	var program = makeProgram(checkNoFlags);
	var programWithFlags = makeProgram(checkYesFlags);
	
	function makeProgram(flagChecker)
	{
		return F2(function(debugWrap, impl)
		{
			return function(flagDecoder)
			{
				return function(object, moduleName, debugMetadata)
				{
					var checker = flagChecker(flagDecoder, moduleName);
					if (typeof debugMetadata === 'undefined')
					{
						normalSetup(impl, object, moduleName, checker);
					}
					else
					{
						debugSetup(A2(debugWrap, debugMetadata, impl), object, moduleName, checker);
					}
				};
			};
		});
	}
	
	function staticProgram(vNode)
	{
		var nothing = _elm_lang$core$Native_Utils.Tuple2(
			_elm_lang$core$Native_Utils.Tuple0,
			_elm_lang$core$Platform_Cmd$none
		);
		return A2(program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, {
			init: nothing,
			view: function() { return vNode; },
			update: F2(function() { return nothing; }),
			subscriptions: function() { return _elm_lang$core$Platform_Sub$none; }
		})();
	}
	
	
	// FLAG CHECKERS
	
	function checkNoFlags(flagDecoder, moduleName)
	{
		return function(init, flags, domNode)
		{
			if (typeof flags === 'undefined')
			{
				return init;
			}
	
			var errorMessage =
				'The `' + moduleName + '` module does not need flags.\n'
				+ 'Initialize it with no arguments and you should be all set!';
	
			crash(errorMessage, domNode);
		};
	}
	
	function checkYesFlags(flagDecoder, moduleName)
	{
		return function(init, flags, domNode)
		{
			if (typeof flagDecoder === 'undefined')
			{
				var errorMessage =
					'Are you trying to sneak a Never value into Elm? Trickster!\n'
					+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
					+ 'Use `program` instead if you do not want flags.'
	
				crash(errorMessage, domNode);
			}
	
			var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
			if (result.ctor === 'Ok')
			{
				return init(result._0);
			}
	
			var errorMessage =
				'Trying to initialize the `' + moduleName + '` module with an unexpected flag.\n'
				+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
				+ result._0;
	
			crash(errorMessage, domNode);
		};
	}
	
	function crash(errorMessage, domNode)
	{
		if (domNode)
		{
			domNode.innerHTML =
				'<div style="padding-left:1em;">'
				+ '<h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2>'
				+ '<pre style="padding-left:1em;">' + errorMessage + '</pre>'
				+ '</div>';
		}
	
		throw new Error(errorMessage);
	}
	
	
	//  NORMAL SETUP
	
	function normalSetup(impl, object, moduleName, flagChecker)
	{
		object['embed'] = function embed(node, flags)
		{
			while (node.lastChild)
			{
				node.removeChild(node.lastChild);
			}
	
			return _elm_lang$core$Native_Platform.initialize(
				flagChecker(impl.init, flags, node),
				impl.update,
				impl.subscriptions,
				normalRenderer(node, impl.view)
			);
		};
	
		object['fullscreen'] = function fullscreen(flags)
		{
			return _elm_lang$core$Native_Platform.initialize(
				flagChecker(impl.init, flags, document.body),
				impl.update,
				impl.subscriptions,
				normalRenderer(document.body, impl.view)
			);
		};
	}
	
	function normalRenderer(parentNode, view)
	{
		return function(tagger, initialModel)
		{
			var eventNode = { tagger: tagger, parent: undefined };
			var initialVirtualNode = view(initialModel);
			var domNode = render(initialVirtualNode, eventNode);
			parentNode.appendChild(domNode);
			return makeStepper(domNode, view, initialVirtualNode, eventNode);
		};
	}
	
	
	// STEPPER
	
	var rAF =
		typeof requestAnimationFrame !== 'undefined'
			? requestAnimationFrame
			: function(callback) { setTimeout(callback, 1000 / 60); };
	
	function makeStepper(domNode, view, initialVirtualNode, eventNode)
	{
		var state = 'NO_REQUEST';
		var currNode = initialVirtualNode;
		var nextModel;
	
		function updateIfNeeded()
		{
			switch (state)
			{
				case 'NO_REQUEST':
					throw new Error(
						'Unexpected draw callback.\n' +
						'Please report this to <https://github.com/elm-lang/virtual-dom/issues>.'
					);
	
				case 'PENDING_REQUEST':
					rAF(updateIfNeeded);
					state = 'EXTRA_REQUEST';
	
					var nextNode = view(nextModel);
					var patches = diff(currNode, nextNode);
					domNode = applyPatches(domNode, currNode, patches, eventNode);
					currNode = nextNode;
	
					return;
	
				case 'EXTRA_REQUEST':
					state = 'NO_REQUEST';
					return;
			}
		}
	
		return function stepper(model)
		{
			if (state === 'NO_REQUEST')
			{
				rAF(updateIfNeeded);
			}
			state = 'PENDING_REQUEST';
			nextModel = model;
		};
	}
	
	
	// DEBUG SETUP
	
	function debugSetup(impl, object, moduleName, flagChecker)
	{
		object['fullscreen'] = function fullscreen(flags)
		{
			var popoutRef = { doc: undefined };
			return _elm_lang$core$Native_Platform.initialize(
				flagChecker(impl.init, flags, document.body),
				impl.update(scrollTask(popoutRef)),
				impl.subscriptions,
				debugRenderer(moduleName, document.body, popoutRef, impl.view, impl.viewIn, impl.viewOut)
			);
		};
	
		object['embed'] = function fullscreen(node, flags)
		{
			var popoutRef = { doc: undefined };
			return _elm_lang$core$Native_Platform.initialize(
				flagChecker(impl.init, flags, node),
				impl.update(scrollTask(popoutRef)),
				impl.subscriptions,
				debugRenderer(moduleName, node, popoutRef, impl.view, impl.viewIn, impl.viewOut)
			);
		};
	}
	
	function scrollTask(popoutRef)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
		{
			var doc = popoutRef.doc;
			if (doc)
			{
				var msgs = doc.getElementsByClassName('debugger-sidebar-messages')[0];
				if (msgs)
				{
					msgs.scrollTop = msgs.scrollHeight;
				}
			}
			callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
		});
	}
	
	
	function debugRenderer(moduleName, parentNode, popoutRef, view, viewIn, viewOut)
	{
		return function(tagger, initialModel)
		{
			var appEventNode = { tagger: tagger, parent: undefined };
			var eventNode = { tagger: tagger, parent: undefined };
	
			// make normal stepper
			var appVirtualNode = view(initialModel);
			var appNode = render(appVirtualNode, appEventNode);
			parentNode.appendChild(appNode);
			var appStepper = makeStepper(appNode, view, appVirtualNode, appEventNode);
	
			// make overlay stepper
			var overVirtualNode = viewIn(initialModel)._1;
			var overNode = render(overVirtualNode, eventNode);
			parentNode.appendChild(overNode);
			var wrappedViewIn = wrapViewIn(appEventNode, overNode, viewIn);
			var overStepper = makeStepper(overNode, wrappedViewIn, overVirtualNode, eventNode);
	
			// make debugger stepper
			var debugStepper = makeDebugStepper(initialModel, viewOut, eventNode, parentNode, moduleName, popoutRef);
	
			return function stepper(model)
			{
				appStepper(model);
				overStepper(model);
				debugStepper(model);
			}
		};
	}
	
	function makeDebugStepper(initialModel, view, eventNode, parentNode, moduleName, popoutRef)
	{
		var curr;
		var domNode;
	
		return function stepper(model)
		{
			if (!model.isDebuggerOpen)
			{
				return;
			}
	
			if (!popoutRef.doc)
			{
				curr = view(model);
				domNode = openDebugWindow(moduleName, popoutRef, curr, eventNode);
				return;
			}
	
			// switch to document of popout
			localDoc = popoutRef.doc;
	
			var next = view(model);
			var patches = diff(curr, next);
			domNode = applyPatches(domNode, curr, patches, eventNode);
			curr = next;
	
			// switch back to normal document
			localDoc = document;
		};
	}
	
	function openDebugWindow(moduleName, popoutRef, virtualNode, eventNode)
	{
		var w = 900;
		var h = 360;
		var x = screen.width - w;
		var y = screen.height - h;
		var debugWindow = window.open('', '', 'width=' + w + ',height=' + h + ',left=' + x + ',top=' + y);
	
		// switch to window document
		localDoc = debugWindow.document;
	
		popoutRef.doc = localDoc;
		localDoc.title = 'Debugger - ' + moduleName;
		localDoc.body.style.margin = '0';
		localDoc.body.style.padding = '0';
		var domNode = render(virtualNode, eventNode);
		localDoc.body.appendChild(domNode);
	
		localDoc.addEventListener('keydown', function(event) {
			if (event.metaKey && event.which === 82)
			{
				window.location.reload();
			}
			if (event.which === 38)
			{
				eventNode.tagger({ ctor: 'Up' });
				event.preventDefault();
			}
			if (event.which === 40)
			{
				eventNode.tagger({ ctor: 'Down' });
				event.preventDefault();
			}
		});
	
		function close()
		{
			popoutRef.doc = undefined;
			debugWindow.close();
		}
		window.addEventListener('unload', close);
		debugWindow.addEventListener('unload', function() {
			popoutRef.doc = undefined;
			window.removeEventListener('unload', close);
			eventNode.tagger({ ctor: 'Close' });
		});
	
		// switch back to the normal document
		localDoc = document;
	
		return domNode;
	}
	
	
	// BLOCK EVENTS
	
	function wrapViewIn(appEventNode, overlayNode, viewIn)
	{
		var ignorer = makeIgnorer(overlayNode);
		var blocking = 'Normal';
		var overflow;
	
		var normalTagger = appEventNode.tagger;
		var blockTagger = function() {};
	
		return function(model)
		{
			var tuple = viewIn(model);
			var newBlocking = tuple._0.ctor;
			appEventNode.tagger = newBlocking === 'Normal' ? normalTagger : blockTagger;
			if (blocking !== newBlocking)
			{
				traverse('removeEventListener', ignorer, blocking);
				traverse('addEventListener', ignorer, newBlocking);
	
				if (blocking === 'Normal')
				{
					overflow = document.body.style.overflow;
					document.body.style.overflow = 'hidden';
				}
	
				if (newBlocking === 'Normal')
				{
					document.body.style.overflow = overflow;
				}
	
				blocking = newBlocking;
			}
			return tuple._1;
		}
	}
	
	function traverse(verbEventListener, ignorer, blocking)
	{
		switch(blocking)
		{
			case 'Normal':
				return;
	
			case 'Pause':
				return traverseHelp(verbEventListener, ignorer, mostEvents);
	
			case 'Message':
				return traverseHelp(verbEventListener, ignorer, allEvents);
		}
	}
	
	function traverseHelp(verbEventListener, handler, eventNames)
	{
		for (var i = 0; i < eventNames.length; i++)
		{
			document.body[verbEventListener](eventNames[i], handler, true);
		}
	}
	
	function makeIgnorer(overlayNode)
	{
		return function(event)
		{
			if (event.type === 'keydown' && event.metaKey && event.which === 82)
			{
				return;
			}
	
			var isScroll = event.type === 'scroll' || event.type === 'wheel';
	
			var node = event.target;
			while (node !== null)
			{
				if (node.className === 'elm-overlay-message-details' && isScroll)
				{
					return;
				}
	
				if (node === overlayNode && !isScroll)
				{
					return;
				}
				node = node.parentNode;
			}
	
			event.stopPropagation();
			event.preventDefault();
		}
	}
	
	var mostEvents = [
		'click', 'dblclick', 'mousemove',
		'mouseup', 'mousedown', 'mouseenter', 'mouseleave',
		'touchstart', 'touchend', 'touchcancel', 'touchmove',
		'pointerdown', 'pointerup', 'pointerover', 'pointerout',
		'pointerenter', 'pointerleave', 'pointermove', 'pointercancel',
		'dragstart', 'drag', 'dragend', 'dragenter', 'dragover', 'dragleave', 'drop',
		'keyup', 'keydown', 'keypress',
		'input', 'change',
		'focus', 'blur'
	];
	
	var allEvents = mostEvents.concat('wheel', 'scroll');
	
	
	return {
		node: node,
		text: text,
		custom: custom,
		map: F2(map),
	
		on: F3(on),
		style: style,
		property: F2(property),
		attribute: F2(attribute),
		attributeNS: F3(attributeNS),
		mapProperty: F2(mapProperty),
	
		lazy: F2(lazy),
		lazy2: F3(lazy2),
		lazy3: F4(lazy3),
		keyedNode: F3(keyedNode),
	
		program: program,
		programWithFlags: programWithFlags,
		staticProgram: staticProgram
	};
	
	}();
	
	var _elm_lang$virtual_dom$VirtualDom$programWithFlags = function (impl) {
		return A2(_elm_lang$virtual_dom$Native_VirtualDom.programWithFlags, _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags, impl);
	};
	var _elm_lang$virtual_dom$VirtualDom$program = function (impl) {
		return A2(_elm_lang$virtual_dom$Native_VirtualDom.program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, impl);
	};
	var _elm_lang$virtual_dom$VirtualDom$keyedNode = _elm_lang$virtual_dom$Native_VirtualDom.keyedNode;
	var _elm_lang$virtual_dom$VirtualDom$lazy3 = _elm_lang$virtual_dom$Native_VirtualDom.lazy3;
	var _elm_lang$virtual_dom$VirtualDom$lazy2 = _elm_lang$virtual_dom$Native_VirtualDom.lazy2;
	var _elm_lang$virtual_dom$VirtualDom$lazy = _elm_lang$virtual_dom$Native_VirtualDom.lazy;
	var _elm_lang$virtual_dom$VirtualDom$defaultOptions = {stopPropagation: false, preventDefault: false};
	var _elm_lang$virtual_dom$VirtualDom$onWithOptions = _elm_lang$virtual_dom$Native_VirtualDom.on;
	var _elm_lang$virtual_dom$VirtualDom$on = F2(
		function (eventName, decoder) {
			return A3(_elm_lang$virtual_dom$VirtualDom$onWithOptions, eventName, _elm_lang$virtual_dom$VirtualDom$defaultOptions, decoder);
		});
	var _elm_lang$virtual_dom$VirtualDom$style = _elm_lang$virtual_dom$Native_VirtualDom.style;
	var _elm_lang$virtual_dom$VirtualDom$mapProperty = _elm_lang$virtual_dom$Native_VirtualDom.mapProperty;
	var _elm_lang$virtual_dom$VirtualDom$attributeNS = _elm_lang$virtual_dom$Native_VirtualDom.attributeNS;
	var _elm_lang$virtual_dom$VirtualDom$attribute = _elm_lang$virtual_dom$Native_VirtualDom.attribute;
	var _elm_lang$virtual_dom$VirtualDom$property = _elm_lang$virtual_dom$Native_VirtualDom.property;
	var _elm_lang$virtual_dom$VirtualDom$map = _elm_lang$virtual_dom$Native_VirtualDom.map;
	var _elm_lang$virtual_dom$VirtualDom$text = _elm_lang$virtual_dom$Native_VirtualDom.text;
	var _elm_lang$virtual_dom$VirtualDom$node = _elm_lang$virtual_dom$Native_VirtualDom.node;
	var _elm_lang$virtual_dom$VirtualDom$Options = F2(
		function (a, b) {
			return {stopPropagation: a, preventDefault: b};
		});
	var _elm_lang$virtual_dom$VirtualDom$Node = {ctor: 'Node'};
	var _elm_lang$virtual_dom$VirtualDom$Property = {ctor: 'Property'};
	
	var _elm_lang$html$Html$programWithFlags = _elm_lang$virtual_dom$VirtualDom$programWithFlags;
	var _elm_lang$html$Html$program = _elm_lang$virtual_dom$VirtualDom$program;
	var _elm_lang$html$Html$beginnerProgram = function (_p0) {
		var _p1 = _p0;
		return _elm_lang$html$Html$program(
			{
				init: A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_p1.model,
					{ctor: '[]'}),
				update: F2(
					function (msg, model) {
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							A2(_p1.update, msg, model),
							{ctor: '[]'});
					}),
				view: _p1.view,
				subscriptions: function (_p2) {
					return _elm_lang$core$Platform_Sub$none;
				}
			});
	};
	var _elm_lang$html$Html$map = _elm_lang$virtual_dom$VirtualDom$map;
	var _elm_lang$html$Html$text = _elm_lang$virtual_dom$VirtualDom$text;
	var _elm_lang$html$Html$node = _elm_lang$virtual_dom$VirtualDom$node;
	var _elm_lang$html$Html$body = _elm_lang$html$Html$node('body');
	var _elm_lang$html$Html$section = _elm_lang$html$Html$node('section');
	var _elm_lang$html$Html$nav = _elm_lang$html$Html$node('nav');
	var _elm_lang$html$Html$article = _elm_lang$html$Html$node('article');
	var _elm_lang$html$Html$aside = _elm_lang$html$Html$node('aside');
	var _elm_lang$html$Html$h1 = _elm_lang$html$Html$node('h1');
	var _elm_lang$html$Html$h2 = _elm_lang$html$Html$node('h2');
	var _elm_lang$html$Html$h3 = _elm_lang$html$Html$node('h3');
	var _elm_lang$html$Html$h4 = _elm_lang$html$Html$node('h4');
	var _elm_lang$html$Html$h5 = _elm_lang$html$Html$node('h5');
	var _elm_lang$html$Html$h6 = _elm_lang$html$Html$node('h6');
	var _elm_lang$html$Html$header = _elm_lang$html$Html$node('header');
	var _elm_lang$html$Html$footer = _elm_lang$html$Html$node('footer');
	var _elm_lang$html$Html$address = _elm_lang$html$Html$node('address');
	var _elm_lang$html$Html$main_ = _elm_lang$html$Html$node('main');
	var _elm_lang$html$Html$p = _elm_lang$html$Html$node('p');
	var _elm_lang$html$Html$hr = _elm_lang$html$Html$node('hr');
	var _elm_lang$html$Html$pre = _elm_lang$html$Html$node('pre');
	var _elm_lang$html$Html$blockquote = _elm_lang$html$Html$node('blockquote');
	var _elm_lang$html$Html$ol = _elm_lang$html$Html$node('ol');
	var _elm_lang$html$Html$ul = _elm_lang$html$Html$node('ul');
	var _elm_lang$html$Html$li = _elm_lang$html$Html$node('li');
	var _elm_lang$html$Html$dl = _elm_lang$html$Html$node('dl');
	var _elm_lang$html$Html$dt = _elm_lang$html$Html$node('dt');
	var _elm_lang$html$Html$dd = _elm_lang$html$Html$node('dd');
	var _elm_lang$html$Html$figure = _elm_lang$html$Html$node('figure');
	var _elm_lang$html$Html$figcaption = _elm_lang$html$Html$node('figcaption');
	var _elm_lang$html$Html$div = _elm_lang$html$Html$node('div');
	var _elm_lang$html$Html$a = _elm_lang$html$Html$node('a');
	var _elm_lang$html$Html$em = _elm_lang$html$Html$node('em');
	var _elm_lang$html$Html$strong = _elm_lang$html$Html$node('strong');
	var _elm_lang$html$Html$small = _elm_lang$html$Html$node('small');
	var _elm_lang$html$Html$s = _elm_lang$html$Html$node('s');
	var _elm_lang$html$Html$cite = _elm_lang$html$Html$node('cite');
	var _elm_lang$html$Html$q = _elm_lang$html$Html$node('q');
	var _elm_lang$html$Html$dfn = _elm_lang$html$Html$node('dfn');
	var _elm_lang$html$Html$abbr = _elm_lang$html$Html$node('abbr');
	var _elm_lang$html$Html$time = _elm_lang$html$Html$node('time');
	var _elm_lang$html$Html$code = _elm_lang$html$Html$node('code');
	var _elm_lang$html$Html$var = _elm_lang$html$Html$node('var');
	var _elm_lang$html$Html$samp = _elm_lang$html$Html$node('samp');
	var _elm_lang$html$Html$kbd = _elm_lang$html$Html$node('kbd');
	var _elm_lang$html$Html$sub = _elm_lang$html$Html$node('sub');
	var _elm_lang$html$Html$sup = _elm_lang$html$Html$node('sup');
	var _elm_lang$html$Html$i = _elm_lang$html$Html$node('i');
	var _elm_lang$html$Html$b = _elm_lang$html$Html$node('b');
	var _elm_lang$html$Html$u = _elm_lang$html$Html$node('u');
	var _elm_lang$html$Html$mark = _elm_lang$html$Html$node('mark');
	var _elm_lang$html$Html$ruby = _elm_lang$html$Html$node('ruby');
	var _elm_lang$html$Html$rt = _elm_lang$html$Html$node('rt');
	var _elm_lang$html$Html$rp = _elm_lang$html$Html$node('rp');
	var _elm_lang$html$Html$bdi = _elm_lang$html$Html$node('bdi');
	var _elm_lang$html$Html$bdo = _elm_lang$html$Html$node('bdo');
	var _elm_lang$html$Html$span = _elm_lang$html$Html$node('span');
	var _elm_lang$html$Html$br = _elm_lang$html$Html$node('br');
	var _elm_lang$html$Html$wbr = _elm_lang$html$Html$node('wbr');
	var _elm_lang$html$Html$ins = _elm_lang$html$Html$node('ins');
	var _elm_lang$html$Html$del = _elm_lang$html$Html$node('del');
	var _elm_lang$html$Html$img = _elm_lang$html$Html$node('img');
	var _elm_lang$html$Html$iframe = _elm_lang$html$Html$node('iframe');
	var _elm_lang$html$Html$embed = _elm_lang$html$Html$node('embed');
	var _elm_lang$html$Html$object = _elm_lang$html$Html$node('object');
	var _elm_lang$html$Html$param = _elm_lang$html$Html$node('param');
	var _elm_lang$html$Html$video = _elm_lang$html$Html$node('video');
	var _elm_lang$html$Html$audio = _elm_lang$html$Html$node('audio');
	var _elm_lang$html$Html$source = _elm_lang$html$Html$node('source');
	var _elm_lang$html$Html$track = _elm_lang$html$Html$node('track');
	var _elm_lang$html$Html$canvas = _elm_lang$html$Html$node('canvas');
	var _elm_lang$html$Html$math = _elm_lang$html$Html$node('math');
	var _elm_lang$html$Html$table = _elm_lang$html$Html$node('table');
	var _elm_lang$html$Html$caption = _elm_lang$html$Html$node('caption');
	var _elm_lang$html$Html$colgroup = _elm_lang$html$Html$node('colgroup');
	var _elm_lang$html$Html$col = _elm_lang$html$Html$node('col');
	var _elm_lang$html$Html$tbody = _elm_lang$html$Html$node('tbody');
	var _elm_lang$html$Html$thead = _elm_lang$html$Html$node('thead');
	var _elm_lang$html$Html$tfoot = _elm_lang$html$Html$node('tfoot');
	var _elm_lang$html$Html$tr = _elm_lang$html$Html$node('tr');
	var _elm_lang$html$Html$td = _elm_lang$html$Html$node('td');
	var _elm_lang$html$Html$th = _elm_lang$html$Html$node('th');
	var _elm_lang$html$Html$form = _elm_lang$html$Html$node('form');
	var _elm_lang$html$Html$fieldset = _elm_lang$html$Html$node('fieldset');
	var _elm_lang$html$Html$legend = _elm_lang$html$Html$node('legend');
	var _elm_lang$html$Html$label = _elm_lang$html$Html$node('label');
	var _elm_lang$html$Html$input = _elm_lang$html$Html$node('input');
	var _elm_lang$html$Html$button = _elm_lang$html$Html$node('button');
	var _elm_lang$html$Html$select = _elm_lang$html$Html$node('select');
	var _elm_lang$html$Html$datalist = _elm_lang$html$Html$node('datalist');
	var _elm_lang$html$Html$optgroup = _elm_lang$html$Html$node('optgroup');
	var _elm_lang$html$Html$option = _elm_lang$html$Html$node('option');
	var _elm_lang$html$Html$textarea = _elm_lang$html$Html$node('textarea');
	var _elm_lang$html$Html$keygen = _elm_lang$html$Html$node('keygen');
	var _elm_lang$html$Html$output = _elm_lang$html$Html$node('output');
	var _elm_lang$html$Html$progress = _elm_lang$html$Html$node('progress');
	var _elm_lang$html$Html$meter = _elm_lang$html$Html$node('meter');
	var _elm_lang$html$Html$details = _elm_lang$html$Html$node('details');
	var _elm_lang$html$Html$summary = _elm_lang$html$Html$node('summary');
	var _elm_lang$html$Html$menuitem = _elm_lang$html$Html$node('menuitem');
	var _elm_lang$html$Html$menu = _elm_lang$html$Html$node('menu');
	
	var _elm_lang$html$Html_Attributes$map = _elm_lang$virtual_dom$VirtualDom$mapProperty;
	var _elm_lang$html$Html_Attributes$attribute = _elm_lang$virtual_dom$VirtualDom$attribute;
	var _elm_lang$html$Html_Attributes$contextmenu = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'contextmenu', value);
	};
	var _elm_lang$html$Html_Attributes$draggable = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'draggable', value);
	};
	var _elm_lang$html$Html_Attributes$itemprop = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'itemprop', value);
	};
	var _elm_lang$html$Html_Attributes$tabindex = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'tabIndex',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$charset = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'charset', value);
	};
	var _elm_lang$html$Html_Attributes$height = function (value) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'height',
			_elm_lang$core$Basics$toString(value));
	};
	var _elm_lang$html$Html_Attributes$width = function (value) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'width',
			_elm_lang$core$Basics$toString(value));
	};
	var _elm_lang$html$Html_Attributes$formaction = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'formAction', value);
	};
	var _elm_lang$html$Html_Attributes$list = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'list', value);
	};
	var _elm_lang$html$Html_Attributes$minlength = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'minLength',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$maxlength = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'maxlength',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$size = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'size',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$form = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'form', value);
	};
	var _elm_lang$html$Html_Attributes$cols = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'cols',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$rows = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'rows',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$challenge = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'challenge', value);
	};
	var _elm_lang$html$Html_Attributes$media = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'media', value);
	};
	var _elm_lang$html$Html_Attributes$rel = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'rel', value);
	};
	var _elm_lang$html$Html_Attributes$datetime = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'datetime', value);
	};
	var _elm_lang$html$Html_Attributes$pubdate = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'pubdate', value);
	};
	var _elm_lang$html$Html_Attributes$colspan = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'colspan',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$rowspan = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'rowspan',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$manifest = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'manifest', value);
	};
	var _elm_lang$html$Html_Attributes$property = _elm_lang$virtual_dom$VirtualDom$property;
	var _elm_lang$html$Html_Attributes$stringProperty = F2(
		function (name, string) {
			return A2(
				_elm_lang$html$Html_Attributes$property,
				name,
				_elm_lang$core$Json_Encode$string(string));
		});
	var _elm_lang$html$Html_Attributes$class = function (name) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'className', name);
	};
	var _elm_lang$html$Html_Attributes$id = function (name) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'id', name);
	};
	var _elm_lang$html$Html_Attributes$title = function (name) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'title', name);
	};
	var _elm_lang$html$Html_Attributes$accesskey = function ($char) {
		return A2(
			_elm_lang$html$Html_Attributes$stringProperty,
			'accessKey',
			_elm_lang$core$String$fromChar($char));
	};
	var _elm_lang$html$Html_Attributes$dir = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dir', value);
	};
	var _elm_lang$html$Html_Attributes$dropzone = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dropzone', value);
	};
	var _elm_lang$html$Html_Attributes$lang = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'lang', value);
	};
	var _elm_lang$html$Html_Attributes$content = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'content', value);
	};
	var _elm_lang$html$Html_Attributes$httpEquiv = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'httpEquiv', value);
	};
	var _elm_lang$html$Html_Attributes$language = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'language', value);
	};
	var _elm_lang$html$Html_Attributes$src = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'src', value);
	};
	var _elm_lang$html$Html_Attributes$alt = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'alt', value);
	};
	var _elm_lang$html$Html_Attributes$preload = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'preload', value);
	};
	var _elm_lang$html$Html_Attributes$poster = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'poster', value);
	};
	var _elm_lang$html$Html_Attributes$kind = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'kind', value);
	};
	var _elm_lang$html$Html_Attributes$srclang = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srclang', value);
	};
	var _elm_lang$html$Html_Attributes$sandbox = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'sandbox', value);
	};
	var _elm_lang$html$Html_Attributes$srcdoc = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srcdoc', value);
	};
	var _elm_lang$html$Html_Attributes$type_ = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'type', value);
	};
	var _elm_lang$html$Html_Attributes$value = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'value', value);
	};
	var _elm_lang$html$Html_Attributes$defaultValue = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'defaultValue', value);
	};
	var _elm_lang$html$Html_Attributes$placeholder = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'placeholder', value);
	};
	var _elm_lang$html$Html_Attributes$accept = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'accept', value);
	};
	var _elm_lang$html$Html_Attributes$acceptCharset = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'acceptCharset', value);
	};
	var _elm_lang$html$Html_Attributes$action = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'action', value);
	};
	var _elm_lang$html$Html_Attributes$autocomplete = function (bool) {
		return A2(
			_elm_lang$html$Html_Attributes$stringProperty,
			'autocomplete',
			bool ? 'on' : 'off');
	};
	var _elm_lang$html$Html_Attributes$enctype = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'enctype', value);
	};
	var _elm_lang$html$Html_Attributes$method = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'method', value);
	};
	var _elm_lang$html$Html_Attributes$name = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'name', value);
	};
	var _elm_lang$html$Html_Attributes$pattern = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'pattern', value);
	};
	var _elm_lang$html$Html_Attributes$for = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'htmlFor', value);
	};
	var _elm_lang$html$Html_Attributes$max = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'max', value);
	};
	var _elm_lang$html$Html_Attributes$min = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'min', value);
	};
	var _elm_lang$html$Html_Attributes$step = function (n) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'step', n);
	};
	var _elm_lang$html$Html_Attributes$wrap = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'wrap', value);
	};
	var _elm_lang$html$Html_Attributes$usemap = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'useMap', value);
	};
	var _elm_lang$html$Html_Attributes$shape = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'shape', value);
	};
	var _elm_lang$html$Html_Attributes$coords = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'coords', value);
	};
	var _elm_lang$html$Html_Attributes$keytype = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'keytype', value);
	};
	var _elm_lang$html$Html_Attributes$align = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'align', value);
	};
	var _elm_lang$html$Html_Attributes$cite = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'cite', value);
	};
	var _elm_lang$html$Html_Attributes$href = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'href', value);
	};
	var _elm_lang$html$Html_Attributes$target = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'target', value);
	};
	var _elm_lang$html$Html_Attributes$downloadAs = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'download', value);
	};
	var _elm_lang$html$Html_Attributes$hreflang = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'hreflang', value);
	};
	var _elm_lang$html$Html_Attributes$ping = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'ping', value);
	};
	var _elm_lang$html$Html_Attributes$start = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$stringProperty,
			'start',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$headers = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'headers', value);
	};
	var _elm_lang$html$Html_Attributes$scope = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'scope', value);
	};
	var _elm_lang$html$Html_Attributes$boolProperty = F2(
		function (name, bool) {
			return A2(
				_elm_lang$html$Html_Attributes$property,
				name,
				_elm_lang$core$Json_Encode$bool(bool));
		});
	var _elm_lang$html$Html_Attributes$hidden = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'hidden', bool);
	};
	var _elm_lang$html$Html_Attributes$contenteditable = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'contentEditable', bool);
	};
	var _elm_lang$html$Html_Attributes$spellcheck = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'spellcheck', bool);
	};
	var _elm_lang$html$Html_Attributes$async = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'async', bool);
	};
	var _elm_lang$html$Html_Attributes$defer = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'defer', bool);
	};
	var _elm_lang$html$Html_Attributes$scoped = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'scoped', bool);
	};
	var _elm_lang$html$Html_Attributes$autoplay = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autoplay', bool);
	};
	var _elm_lang$html$Html_Attributes$controls = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'controls', bool);
	};
	var _elm_lang$html$Html_Attributes$loop = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'loop', bool);
	};
	var _elm_lang$html$Html_Attributes$default = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'default', bool);
	};
	var _elm_lang$html$Html_Attributes$seamless = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'seamless', bool);
	};
	var _elm_lang$html$Html_Attributes$checked = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'checked', bool);
	};
	var _elm_lang$html$Html_Attributes$selected = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'selected', bool);
	};
	var _elm_lang$html$Html_Attributes$autofocus = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autofocus', bool);
	};
	var _elm_lang$html$Html_Attributes$disabled = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'disabled', bool);
	};
	var _elm_lang$html$Html_Attributes$multiple = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'multiple', bool);
	};
	var _elm_lang$html$Html_Attributes$novalidate = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'noValidate', bool);
	};
	var _elm_lang$html$Html_Attributes$readonly = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'readOnly', bool);
	};
	var _elm_lang$html$Html_Attributes$required = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'required', bool);
	};
	var _elm_lang$html$Html_Attributes$ismap = function (value) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'isMap', value);
	};
	var _elm_lang$html$Html_Attributes$download = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'download', bool);
	};
	var _elm_lang$html$Html_Attributes$reversed = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'reversed', bool);
	};
	var _elm_lang$html$Html_Attributes$classList = function (list) {
		return _elm_lang$html$Html_Attributes$class(
			A2(
				_elm_lang$core$String$join,
				' ',
				A2(
					_elm_lang$core$List$map,
					_elm_lang$core$Tuple$first,
					A2(_elm_lang$core$List$filter, _elm_lang$core$Tuple$second, list))));
	};
	var _elm_lang$html$Html_Attributes$style = _elm_lang$virtual_dom$VirtualDom$style;
	
	var _elm_lang$html$Html_Events$keyCode = A2(_elm_lang$core$Json_Decode$field, 'keyCode', _elm_lang$core$Json_Decode$int);
	var _elm_lang$html$Html_Events$targetChecked = A2(
		_elm_lang$core$Json_Decode$at,
		{
			ctor: '::',
			_0: 'target',
			_1: {
				ctor: '::',
				_0: 'checked',
				_1: {ctor: '[]'}
			}
		},
		_elm_lang$core$Json_Decode$bool);
	var _elm_lang$html$Html_Events$targetValue = A2(
		_elm_lang$core$Json_Decode$at,
		{
			ctor: '::',
			_0: 'target',
			_1: {
				ctor: '::',
				_0: 'value',
				_1: {ctor: '[]'}
			}
		},
		_elm_lang$core$Json_Decode$string);
	var _elm_lang$html$Html_Events$defaultOptions = _elm_lang$virtual_dom$VirtualDom$defaultOptions;
	var _elm_lang$html$Html_Events$onWithOptions = _elm_lang$virtual_dom$VirtualDom$onWithOptions;
	var _elm_lang$html$Html_Events$on = _elm_lang$virtual_dom$VirtualDom$on;
	var _elm_lang$html$Html_Events$onFocus = function (msg) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'focus',
			_elm_lang$core$Json_Decode$succeed(msg));
	};
	var _elm_lang$html$Html_Events$onBlur = function (msg) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'blur',
			_elm_lang$core$Json_Decode$succeed(msg));
	};
	var _elm_lang$html$Html_Events$onSubmitOptions = _elm_lang$core$Native_Utils.update(
		_elm_lang$html$Html_Events$defaultOptions,
		{preventDefault: true});
	var _elm_lang$html$Html_Events$onSubmit = function (msg) {
		return A3(
			_elm_lang$html$Html_Events$onWithOptions,
			'submit',
			_elm_lang$html$Html_Events$onSubmitOptions,
			_elm_lang$core$Json_Decode$succeed(msg));
	};
	var _elm_lang$html$Html_Events$onCheck = function (tagger) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'change',
			A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetChecked));
	};
	var _elm_lang$html$Html_Events$onInput = function (tagger) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'input',
			A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetValue));
	};
	var _elm_lang$html$Html_Events$onMouseOut = function (msg) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'mouseout',
			_elm_lang$core$Json_Decode$succeed(msg));
	};
	var _elm_lang$html$Html_Events$onMouseOver = function (msg) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'mouseover',
			_elm_lang$core$Json_Decode$succeed(msg));
	};
	var _elm_lang$html$Html_Events$onMouseLeave = function (msg) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'mouseleave',
			_elm_lang$core$Json_Decode$succeed(msg));
	};
	var _elm_lang$html$Html_Events$onMouseEnter = function (msg) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'mouseenter',
			_elm_lang$core$Json_Decode$succeed(msg));
	};
	var _elm_lang$html$Html_Events$onMouseUp = function (msg) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'mouseup',
			_elm_lang$core$Json_Decode$succeed(msg));
	};
	var _elm_lang$html$Html_Events$onMouseDown = function (msg) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'mousedown',
			_elm_lang$core$Json_Decode$succeed(msg));
	};
	var _elm_lang$html$Html_Events$onDoubleClick = function (msg) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'dblclick',
			_elm_lang$core$Json_Decode$succeed(msg));
	};
	var _elm_lang$html$Html_Events$onClick = function (msg) {
		return A2(
			_elm_lang$html$Html_Events$on,
			'click',
			_elm_lang$core$Json_Decode$succeed(msg));
	};
	var _elm_lang$html$Html_Events$Options = F2(
		function (a, b) {
			return {stopPropagation: a, preventDefault: b};
		});
	
	var _elm_lang$http$Native_Http = function() {
	
	
	// ENCODING AND DECODING
	
	function encodeUri(string)
	{
		return encodeURIComponent(string);
	}
	
	function decodeUri(string)
	{
		try
		{
			return _elm_lang$core$Maybe$Just(decodeURIComponent(string));
		}
		catch(e)
		{
			return _elm_lang$core$Maybe$Nothing;
		}
	}
	
	
	// SEND REQUEST
	
	function toTask(request, maybeProgress)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
		{
			var xhr = new XMLHttpRequest();
	
			configureProgress(xhr, maybeProgress);
	
			xhr.addEventListener('error', function() {
				callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'NetworkError' }));
			});
			xhr.addEventListener('timeout', function() {
				callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'Timeout' }));
			});
			xhr.addEventListener('load', function() {
				callback(handleResponse(xhr, request.expect.responseToResult));
			});
	
			try
			{
				xhr.open(request.method, request.url, true);
			}
			catch (e)
			{
				return callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'BadUrl', _0: request.url }));
			}
	
			configureRequest(xhr, request);
			send(xhr, request.body);
	
			return function() { xhr.abort(); };
		});
	}
	
	function configureProgress(xhr, maybeProgress)
	{
		if (maybeProgress.ctor === 'Nothing')
		{
			return;
		}
	
		xhr.addEventListener('progress', function(event) {
			if (!event.lengthComputable)
			{
				return;
			}
			_elm_lang$core$Native_Scheduler.rawSpawn(maybeProgress._0({
				bytes: event.loaded,
				bytesExpected: event.total
			}));
		});
	}
	
	function configureRequest(xhr, request)
	{
		function setHeader(pair)
		{
			xhr.setRequestHeader(pair._0, pair._1);
		}
	
		A2(_elm_lang$core$List$map, setHeader, request.headers);
		xhr.responseType = request.expect.responseType;
		xhr.withCredentials = request.withCredentials;
	
		if (request.timeout.ctor === 'Just')
		{
			xhr.timeout = request.timeout._0;
		}
	}
	
	function send(xhr, body)
	{
		switch (body.ctor)
		{
			case 'EmptyBody':
				xhr.send();
				return;
	
			case 'StringBody':
				xhr.setRequestHeader('Content-Type', body._0);
				xhr.send(body._1);
				return;
	
			case 'FormDataBody':
				xhr.send(body._0);
				return;
		}
	}
	
	
	// RESPONSES
	
	function handleResponse(xhr, responseToResult)
	{
		var response = toResponse(xhr);
	
		if (xhr.status < 200 || 300 <= xhr.status)
		{
			response.body = xhr.responseText;
			return _elm_lang$core$Native_Scheduler.fail({
				ctor: 'BadStatus',
				_0: response
			});
		}
	
		var result = responseToResult(response);
	
		if (result.ctor === 'Ok')
		{
			return _elm_lang$core$Native_Scheduler.succeed(result._0);
		}
		else
		{
			response.body = xhr.responseText;
			return _elm_lang$core$Native_Scheduler.fail({
				ctor: 'BadPayload',
				_0: result._0,
				_1: response
			});
		}
	}
	
	function toResponse(xhr)
	{
		return {
			status: { code: xhr.status, message: xhr.statusText },
			headers: parseHeaders(xhr.getAllResponseHeaders()),
			url: xhr.responseURL,
			body: xhr.response
		};
	}
	
	function parseHeaders(rawHeaders)
	{
		var headers = _elm_lang$core$Dict$empty;
	
		if (!rawHeaders)
		{
			return headers;
		}
	
		var headerPairs = rawHeaders.split('\u000d\u000a');
		for (var i = headerPairs.length; i--; )
		{
			var headerPair = headerPairs[i];
			var index = headerPair.indexOf('\u003a\u0020');
			if (index > 0)
			{
				var key = headerPair.substring(0, index);
				var value = headerPair.substring(index + 2);
	
				headers = A3(_elm_lang$core$Dict$update, key, function(oldValue) {
					if (oldValue.ctor === 'Just')
					{
						return _elm_lang$core$Maybe$Just(value + ', ' + oldValue._0);
					}
					return _elm_lang$core$Maybe$Just(value);
				}, headers);
			}
		}
	
		return headers;
	}
	
	
	// EXPECTORS
	
	function expectStringResponse(responseToResult)
	{
		return {
			responseType: 'text',
			responseToResult: responseToResult
		};
	}
	
	function mapExpect(func, expect)
	{
		return {
			responseType: expect.responseType,
			responseToResult: function(response) {
				var convertedResponse = expect.responseToResult(response);
				return A2(_elm_lang$core$Result$map, func, convertedResponse);
			}
		};
	}
	
	
	// BODY
	
	function multipart(parts)
	{
		var formData = new FormData();
	
		while (parts.ctor !== '[]')
		{
			var part = parts._0;
			formData.append(part._0, part._1);
			parts = parts._1;
		}
	
		return { ctor: 'FormDataBody', _0: formData };
	}
	
	return {
		toTask: F2(toTask),
		expectStringResponse: expectStringResponse,
		mapExpect: F2(mapExpect),
		multipart: multipart,
		encodeUri: encodeUri,
		decodeUri: decodeUri
	};
	
	}();
	
	var _elm_lang$http$Http_Internal$map = F2(
		function (func, request) {
			return _elm_lang$core$Native_Utils.update(
				request,
				{
					expect: A2(_elm_lang$http$Native_Http.mapExpect, func, request.expect)
				});
		});
	var _elm_lang$http$Http_Internal$RawRequest = F7(
		function (a, b, c, d, e, f, g) {
			return {method: a, headers: b, url: c, body: d, expect: e, timeout: f, withCredentials: g};
		});
	var _elm_lang$http$Http_Internal$Request = function (a) {
		return {ctor: 'Request', _0: a};
	};
	var _elm_lang$http$Http_Internal$Expect = {ctor: 'Expect'};
	var _elm_lang$http$Http_Internal$FormDataBody = {ctor: 'FormDataBody'};
	var _elm_lang$http$Http_Internal$StringBody = F2(
		function (a, b) {
			return {ctor: 'StringBody', _0: a, _1: b};
		});
	var _elm_lang$http$Http_Internal$EmptyBody = {ctor: 'EmptyBody'};
	var _elm_lang$http$Http_Internal$Header = F2(
		function (a, b) {
			return {ctor: 'Header', _0: a, _1: b};
		});
	
	var _elm_lang$http$Http$decodeUri = _elm_lang$http$Native_Http.decodeUri;
	var _elm_lang$http$Http$encodeUri = _elm_lang$http$Native_Http.encodeUri;
	var _elm_lang$http$Http$expectStringResponse = _elm_lang$http$Native_Http.expectStringResponse;
	var _elm_lang$http$Http$expectJson = function (decoder) {
		return _elm_lang$http$Http$expectStringResponse(
			function (response) {
				return A2(_elm_lang$core$Json_Decode$decodeString, decoder, response.body);
			});
	};
	var _elm_lang$http$Http$expectString = _elm_lang$http$Http$expectStringResponse(
		function (response) {
			return _elm_lang$core$Result$Ok(response.body);
		});
	var _elm_lang$http$Http$multipartBody = _elm_lang$http$Native_Http.multipart;
	var _elm_lang$http$Http$stringBody = _elm_lang$http$Http_Internal$StringBody;
	var _elm_lang$http$Http$jsonBody = function (value) {
		return A2(
			_elm_lang$http$Http_Internal$StringBody,
			'application/json',
			A2(_elm_lang$core$Json_Encode$encode, 0, value));
	};
	var _elm_lang$http$Http$emptyBody = _elm_lang$http$Http_Internal$EmptyBody;
	var _elm_lang$http$Http$header = _elm_lang$http$Http_Internal$Header;
	var _elm_lang$http$Http$request = _elm_lang$http$Http_Internal$Request;
	var _elm_lang$http$Http$post = F3(
		function (url, body, decoder) {
			return _elm_lang$http$Http$request(
				{
					method: 'POST',
					headers: {ctor: '[]'},
					url: url,
					body: body,
					expect: _elm_lang$http$Http$expectJson(decoder),
					timeout: _elm_lang$core$Maybe$Nothing,
					withCredentials: false
				});
		});
	var _elm_lang$http$Http$get = F2(
		function (url, decoder) {
			return _elm_lang$http$Http$request(
				{
					method: 'GET',
					headers: {ctor: '[]'},
					url: url,
					body: _elm_lang$http$Http$emptyBody,
					expect: _elm_lang$http$Http$expectJson(decoder),
					timeout: _elm_lang$core$Maybe$Nothing,
					withCredentials: false
				});
		});
	var _elm_lang$http$Http$getString = function (url) {
		return _elm_lang$http$Http$request(
			{
				method: 'GET',
				headers: {ctor: '[]'},
				url: url,
				body: _elm_lang$http$Http$emptyBody,
				expect: _elm_lang$http$Http$expectString,
				timeout: _elm_lang$core$Maybe$Nothing,
				withCredentials: false
			});
	};
	var _elm_lang$http$Http$toTask = function (_p0) {
		var _p1 = _p0;
		return A2(_elm_lang$http$Native_Http.toTask, _p1._0, _elm_lang$core$Maybe$Nothing);
	};
	var _elm_lang$http$Http$send = F2(
		function (resultToMessage, request) {
			return A2(
				_elm_lang$core$Task$attempt,
				resultToMessage,
				_elm_lang$http$Http$toTask(request));
		});
	var _elm_lang$http$Http$Response = F4(
		function (a, b, c, d) {
			return {url: a, status: b, headers: c, body: d};
		});
	var _elm_lang$http$Http$BadPayload = F2(
		function (a, b) {
			return {ctor: 'BadPayload', _0: a, _1: b};
		});
	var _elm_lang$http$Http$BadStatus = function (a) {
		return {ctor: 'BadStatus', _0: a};
	};
	var _elm_lang$http$Http$NetworkError = {ctor: 'NetworkError'};
	var _elm_lang$http$Http$Timeout = {ctor: 'Timeout'};
	var _elm_lang$http$Http$BadUrl = function (a) {
		return {ctor: 'BadUrl', _0: a};
	};
	var _elm_lang$http$Http$StringPart = F2(
		function (a, b) {
			return {ctor: 'StringPart', _0: a, _1: b};
		});
	var _elm_lang$http$Http$stringPart = _elm_lang$http$Http$StringPart;
	
	var _elm_lang$navigation$Native_Navigation = function() {
	
	
	// FAKE NAVIGATION
	
	function go(n)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
		{
			if (n !== 0)
			{
				history.go(n);
			}
			callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
		});
	}
	
	function pushState(url)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
		{
			history.pushState({}, '', url);
			callback(_elm_lang$core$Native_Scheduler.succeed(getLocation()));
		});
	}
	
	function replaceState(url)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
		{
			history.replaceState({}, '', url);
			callback(_elm_lang$core$Native_Scheduler.succeed(getLocation()));
		});
	}
	
	
	// REAL NAVIGATION
	
	function reloadPage(skipCache)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
		{
			document.location.reload(skipCache);
			callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
		});
	}
	
	function setLocation(url)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
		{
			try
			{
				window.location = url;
			}
			catch(err)
			{
				// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
				// Other browsers reload the page, so let's be consistent about that.
				document.location.reload(false);
			}
			callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
		});
	}
	
	
	// GET LOCATION
	
	function getLocation()
	{
		var location = document.location;
	
		return {
			href: location.href,
			host: location.host,
			hostname: location.hostname,
			protocol: location.protocol,
			origin: location.origin,
			port_: location.port,
			pathname: location.pathname,
			search: location.search,
			hash: location.hash,
			username: location.username,
			password: location.password
		};
	}
	
	
	// DETECT IE11 PROBLEMS
	
	function isInternetExplorer11()
	{
		return window.navigator.userAgent.indexOf('Trident') !== -1;
	}
	
	
	return {
		go: go,
		setLocation: setLocation,
		reloadPage: reloadPage,
		pushState: pushState,
		replaceState: replaceState,
		getLocation: getLocation,
		isInternetExplorer11: isInternetExplorer11
	};
	
	}();
	
	var _elm_lang$navigation$Navigation$replaceState = _elm_lang$navigation$Native_Navigation.replaceState;
	var _elm_lang$navigation$Navigation$pushState = _elm_lang$navigation$Native_Navigation.pushState;
	var _elm_lang$navigation$Navigation$go = _elm_lang$navigation$Native_Navigation.go;
	var _elm_lang$navigation$Navigation$reloadPage = _elm_lang$navigation$Native_Navigation.reloadPage;
	var _elm_lang$navigation$Navigation$setLocation = _elm_lang$navigation$Native_Navigation.setLocation;
	var _elm_lang$navigation$Navigation_ops = _elm_lang$navigation$Navigation_ops || {};
	_elm_lang$navigation$Navigation_ops['&>'] = F2(
		function (task1, task2) {
			return A2(
				_elm_lang$core$Task$andThen,
				function (_p0) {
					return task2;
				},
				task1);
		});
	var _elm_lang$navigation$Navigation$notify = F3(
		function (router, subs, location) {
			var send = function (_p1) {
				var _p2 = _p1;
				return A2(
					_elm_lang$core$Platform$sendToApp,
					router,
					_p2._0(location));
			};
			return A2(
				_elm_lang$navigation$Navigation_ops['&>'],
				_elm_lang$core$Task$sequence(
					A2(_elm_lang$core$List$map, send, subs)),
				_elm_lang$core$Task$succeed(
					{ctor: '_Tuple0'}));
		});
	var _elm_lang$navigation$Navigation$cmdHelp = F3(
		function (router, subs, cmd) {
			var _p3 = cmd;
			switch (_p3.ctor) {
				case 'Jump':
					return _elm_lang$navigation$Navigation$go(_p3._0);
				case 'New':
					return A2(
						_elm_lang$core$Task$andThen,
						A2(_elm_lang$navigation$Navigation$notify, router, subs),
						_elm_lang$navigation$Navigation$pushState(_p3._0));
				case 'Modify':
					return A2(
						_elm_lang$core$Task$andThen,
						A2(_elm_lang$navigation$Navigation$notify, router, subs),
						_elm_lang$navigation$Navigation$replaceState(_p3._0));
				case 'Visit':
					return _elm_lang$navigation$Navigation$setLocation(_p3._0);
				default:
					return _elm_lang$navigation$Navigation$reloadPage(_p3._0);
			}
		});
	var _elm_lang$navigation$Navigation$killPopWatcher = function (popWatcher) {
		var _p4 = popWatcher;
		if (_p4.ctor === 'Normal') {
			return _elm_lang$core$Process$kill(_p4._0);
		} else {
			return A2(
				_elm_lang$navigation$Navigation_ops['&>'],
				_elm_lang$core$Process$kill(_p4._0),
				_elm_lang$core$Process$kill(_p4._1));
		}
	};
	var _elm_lang$navigation$Navigation$onSelfMsg = F3(
		function (router, location, state) {
			return A2(
				_elm_lang$navigation$Navigation_ops['&>'],
				A3(_elm_lang$navigation$Navigation$notify, router, state.subs, location),
				_elm_lang$core$Task$succeed(state));
		});
	var _elm_lang$navigation$Navigation$subscription = _elm_lang$core$Native_Platform.leaf('Navigation');
	var _elm_lang$navigation$Navigation$command = _elm_lang$core$Native_Platform.leaf('Navigation');
	var _elm_lang$navigation$Navigation$Location = function (a) {
		return function (b) {
			return function (c) {
				return function (d) {
					return function (e) {
						return function (f) {
							return function (g) {
								return function (h) {
									return function (i) {
										return function (j) {
											return function (k) {
												return {href: a, host: b, hostname: c, protocol: d, origin: e, port_: f, pathname: g, search: h, hash: i, username: j, password: k};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
	var _elm_lang$navigation$Navigation$State = F2(
		function (a, b) {
			return {subs: a, popWatcher: b};
		});
	var _elm_lang$navigation$Navigation$init = _elm_lang$core$Task$succeed(
		A2(
			_elm_lang$navigation$Navigation$State,
			{ctor: '[]'},
			_elm_lang$core$Maybe$Nothing));
	var _elm_lang$navigation$Navigation$Reload = function (a) {
		return {ctor: 'Reload', _0: a};
	};
	var _elm_lang$navigation$Navigation$reload = _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Reload(false));
	var _elm_lang$navigation$Navigation$reloadAndSkipCache = _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Reload(true));
	var _elm_lang$navigation$Navigation$Visit = function (a) {
		return {ctor: 'Visit', _0: a};
	};
	var _elm_lang$navigation$Navigation$load = function (url) {
		return _elm_lang$navigation$Navigation$command(
			_elm_lang$navigation$Navigation$Visit(url));
	};
	var _elm_lang$navigation$Navigation$Modify = function (a) {
		return {ctor: 'Modify', _0: a};
	};
	var _elm_lang$navigation$Navigation$modifyUrl = function (url) {
		return _elm_lang$navigation$Navigation$command(
			_elm_lang$navigation$Navigation$Modify(url));
	};
	var _elm_lang$navigation$Navigation$New = function (a) {
		return {ctor: 'New', _0: a};
	};
	var _elm_lang$navigation$Navigation$newUrl = function (url) {
		return _elm_lang$navigation$Navigation$command(
			_elm_lang$navigation$Navigation$New(url));
	};
	var _elm_lang$navigation$Navigation$Jump = function (a) {
		return {ctor: 'Jump', _0: a};
	};
	var _elm_lang$navigation$Navigation$back = function (n) {
		return _elm_lang$navigation$Navigation$command(
			_elm_lang$navigation$Navigation$Jump(0 - n));
	};
	var _elm_lang$navigation$Navigation$forward = function (n) {
		return _elm_lang$navigation$Navigation$command(
			_elm_lang$navigation$Navigation$Jump(n));
	};
	var _elm_lang$navigation$Navigation$cmdMap = F2(
		function (_p5, myCmd) {
			var _p6 = myCmd;
			switch (_p6.ctor) {
				case 'Jump':
					return _elm_lang$navigation$Navigation$Jump(_p6._0);
				case 'New':
					return _elm_lang$navigation$Navigation$New(_p6._0);
				case 'Modify':
					return _elm_lang$navigation$Navigation$Modify(_p6._0);
				case 'Visit':
					return _elm_lang$navigation$Navigation$Visit(_p6._0);
				default:
					return _elm_lang$navigation$Navigation$Reload(_p6._0);
			}
		});
	var _elm_lang$navigation$Navigation$Monitor = function (a) {
		return {ctor: 'Monitor', _0: a};
	};
	var _elm_lang$navigation$Navigation$program = F2(
		function (locationToMessage, stuff) {
			var init = stuff.init(
				_elm_lang$navigation$Native_Navigation.getLocation(
					{ctor: '_Tuple0'}));
			var subs = function (model) {
				return _elm_lang$core$Platform_Sub$batch(
					{
						ctor: '::',
						_0: _elm_lang$navigation$Navigation$subscription(
							_elm_lang$navigation$Navigation$Monitor(locationToMessage)),
						_1: {
							ctor: '::',
							_0: stuff.subscriptions(model),
							_1: {ctor: '[]'}
						}
					});
			};
			return _elm_lang$html$Html$program(
				{init: init, view: stuff.view, update: stuff.update, subscriptions: subs});
		});
	var _elm_lang$navigation$Navigation$programWithFlags = F2(
		function (locationToMessage, stuff) {
			var init = function (flags) {
				return A2(
					stuff.init,
					flags,
					_elm_lang$navigation$Native_Navigation.getLocation(
						{ctor: '_Tuple0'}));
			};
			var subs = function (model) {
				return _elm_lang$core$Platform_Sub$batch(
					{
						ctor: '::',
						_0: _elm_lang$navigation$Navigation$subscription(
							_elm_lang$navigation$Navigation$Monitor(locationToMessage)),
						_1: {
							ctor: '::',
							_0: stuff.subscriptions(model),
							_1: {ctor: '[]'}
						}
					});
			};
			return _elm_lang$html$Html$programWithFlags(
				{init: init, view: stuff.view, update: stuff.update, subscriptions: subs});
		});
	var _elm_lang$navigation$Navigation$subMap = F2(
		function (func, _p7) {
			var _p8 = _p7;
			return _elm_lang$navigation$Navigation$Monitor(
				function (_p9) {
					return func(
						_p8._0(_p9));
				});
		});
	var _elm_lang$navigation$Navigation$InternetExplorer = F2(
		function (a, b) {
			return {ctor: 'InternetExplorer', _0: a, _1: b};
		});
	var _elm_lang$navigation$Navigation$Normal = function (a) {
		return {ctor: 'Normal', _0: a};
	};
	var _elm_lang$navigation$Navigation$spawnPopWatcher = function (router) {
		var reportLocation = function (_p10) {
			return A2(
				_elm_lang$core$Platform$sendToSelf,
				router,
				_elm_lang$navigation$Native_Navigation.getLocation(
					{ctor: '_Tuple0'}));
		};
		return _elm_lang$navigation$Native_Navigation.isInternetExplorer11(
			{ctor: '_Tuple0'}) ? A3(
			_elm_lang$core$Task$map2,
			_elm_lang$navigation$Navigation$InternetExplorer,
			_elm_lang$core$Process$spawn(
				A3(_elm_lang$dom$Dom_LowLevel$onWindow, 'popstate', _elm_lang$core$Json_Decode$value, reportLocation)),
			_elm_lang$core$Process$spawn(
				A3(_elm_lang$dom$Dom_LowLevel$onWindow, 'hashchange', _elm_lang$core$Json_Decode$value, reportLocation))) : A2(
			_elm_lang$core$Task$map,
			_elm_lang$navigation$Navigation$Normal,
			_elm_lang$core$Process$spawn(
				A3(_elm_lang$dom$Dom_LowLevel$onWindow, 'popstate', _elm_lang$core$Json_Decode$value, reportLocation)));
	};
	var _elm_lang$navigation$Navigation$onEffects = F4(
		function (router, cmds, subs, _p11) {
			var _p12 = _p11;
			var _p15 = _p12.popWatcher;
			var stepState = function () {
				var _p13 = {ctor: '_Tuple2', _0: subs, _1: _p15};
				_v6_2:
				do {
					if (_p13._0.ctor === '[]') {
						if (_p13._1.ctor === 'Just') {
							return A2(
								_elm_lang$navigation$Navigation_ops['&>'],
								_elm_lang$navigation$Navigation$killPopWatcher(_p13._1._0),
								_elm_lang$core$Task$succeed(
									A2(_elm_lang$navigation$Navigation$State, subs, _elm_lang$core$Maybe$Nothing)));
						} else {
							break _v6_2;
						}
					} else {
						if (_p13._1.ctor === 'Nothing') {
							return A2(
								_elm_lang$core$Task$map,
								function (_p14) {
									return A2(
										_elm_lang$navigation$Navigation$State,
										subs,
										_elm_lang$core$Maybe$Just(_p14));
								},
								_elm_lang$navigation$Navigation$spawnPopWatcher(router));
						} else {
							break _v6_2;
						}
					}
				} while(false);
				return _elm_lang$core$Task$succeed(
					A2(_elm_lang$navigation$Navigation$State, subs, _p15));
			}();
			return A2(
				_elm_lang$navigation$Navigation_ops['&>'],
				_elm_lang$core$Task$sequence(
					A2(
						_elm_lang$core$List$map,
						A2(_elm_lang$navigation$Navigation$cmdHelp, router, subs),
						cmds)),
				stepState);
		});
	_elm_lang$core$Native_Platform.effectManagers['Navigation'] = {pkg: 'elm-lang/navigation', init: _elm_lang$navigation$Navigation$init, onEffects: _elm_lang$navigation$Navigation$onEffects, onSelfMsg: _elm_lang$navigation$Navigation$onSelfMsg, tag: 'fx', cmdMap: _elm_lang$navigation$Navigation$cmdMap, subMap: _elm_lang$navigation$Navigation$subMap};
	
	var _evancz$url_parser$UrlParser$toKeyValuePair = function (segment) {
		var _p0 = A2(_elm_lang$core$String$split, '=', segment);
		if (((_p0.ctor === '::') && (_p0._1.ctor === '::')) && (_p0._1._1.ctor === '[]')) {
			return A3(
				_elm_lang$core$Maybe$map2,
				F2(
					function (v0, v1) {
						return {ctor: '_Tuple2', _0: v0, _1: v1};
					}),
				_elm_lang$http$Http$decodeUri(_p0._0),
				_elm_lang$http$Http$decodeUri(_p0._1._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	};
	var _evancz$url_parser$UrlParser$parseParams = function (queryString) {
		return _elm_lang$core$Dict$fromList(
			A2(
				_elm_lang$core$List$filterMap,
				_evancz$url_parser$UrlParser$toKeyValuePair,
				A2(
					_elm_lang$core$String$split,
					'&',
					A2(_elm_lang$core$String$dropLeft, 1, queryString))));
	};
	var _evancz$url_parser$UrlParser$splitUrl = function (url) {
		var _p1 = A2(_elm_lang$core$String$split, '/', url);
		if ((_p1.ctor === '::') && (_p1._0 === '')) {
			return _p1._1;
		} else {
			return _p1;
		}
	};
	var _evancz$url_parser$UrlParser$parseHelp = function (states) {
		parseHelp:
		while (true) {
			var _p2 = states;
			if (_p2.ctor === '[]') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p4 = _p2._0;
				var _p3 = _p4.unvisited;
				if (_p3.ctor === '[]') {
					return _elm_lang$core$Maybe$Just(_p4.value);
				} else {
					if ((_p3._0 === '') && (_p3._1.ctor === '[]')) {
						return _elm_lang$core$Maybe$Just(_p4.value);
					} else {
						var _v4 = _p2._1;
						states = _v4;
						continue parseHelp;
					}
				}
			}
		}
	};
	var _evancz$url_parser$UrlParser$parse = F3(
		function (_p5, url, params) {
			var _p6 = _p5;
			return _evancz$url_parser$UrlParser$parseHelp(
				_p6._0(
					{
						visited: {ctor: '[]'},
						unvisited: _evancz$url_parser$UrlParser$splitUrl(url),
						params: params,
						value: _elm_lang$core$Basics$identity
					}));
		});
	var _evancz$url_parser$UrlParser$parseHash = F2(
		function (parser, location) {
			return A3(
				_evancz$url_parser$UrlParser$parse,
				parser,
				A2(_elm_lang$core$String$dropLeft, 1, location.hash),
				_evancz$url_parser$UrlParser$parseParams(location.search));
		});
	var _evancz$url_parser$UrlParser$parsePath = F2(
		function (parser, location) {
			return A3(
				_evancz$url_parser$UrlParser$parse,
				parser,
				location.pathname,
				_evancz$url_parser$UrlParser$parseParams(location.search));
		});
	var _evancz$url_parser$UrlParser$intParamHelp = function (maybeValue) {
		var _p7 = maybeValue;
		if (_p7.ctor === 'Nothing') {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			return _elm_lang$core$Result$toMaybe(
				_elm_lang$core$String$toInt(_p7._0));
		}
	};
	var _evancz$url_parser$UrlParser$mapHelp = F2(
		function (func, _p8) {
			var _p9 = _p8;
			return {
				visited: _p9.visited,
				unvisited: _p9.unvisited,
				params: _p9.params,
				value: func(_p9.value)
			};
		});
	var _evancz$url_parser$UrlParser$State = F4(
		function (a, b, c, d) {
			return {visited: a, unvisited: b, params: c, value: d};
		});
	var _evancz$url_parser$UrlParser$Parser = function (a) {
		return {ctor: 'Parser', _0: a};
	};
	var _evancz$url_parser$UrlParser$s = function (str) {
		return _evancz$url_parser$UrlParser$Parser(
			function (_p10) {
				var _p11 = _p10;
				var _p12 = _p11.unvisited;
				if (_p12.ctor === '[]') {
					return {ctor: '[]'};
				} else {
					var _p13 = _p12._0;
					return _elm_lang$core$Native_Utils.eq(_p13, str) ? {
						ctor: '::',
						_0: A4(
							_evancz$url_parser$UrlParser$State,
							{ctor: '::', _0: _p13, _1: _p11.visited},
							_p12._1,
							_p11.params,
							_p11.value),
						_1: {ctor: '[]'}
					} : {ctor: '[]'};
				}
			});
	};
	var _evancz$url_parser$UrlParser$custom = F2(
		function (tipe, stringToSomething) {
			return _evancz$url_parser$UrlParser$Parser(
				function (_p14) {
					var _p15 = _p14;
					var _p16 = _p15.unvisited;
					if (_p16.ctor === '[]') {
						return {ctor: '[]'};
					} else {
						var _p18 = _p16._0;
						var _p17 = stringToSomething(_p18);
						if (_p17.ctor === 'Ok') {
							return {
								ctor: '::',
								_0: A4(
									_evancz$url_parser$UrlParser$State,
									{ctor: '::', _0: _p18, _1: _p15.visited},
									_p16._1,
									_p15.params,
									_p15.value(_p17._0)),
								_1: {ctor: '[]'}
							};
						} else {
							return {ctor: '[]'};
						}
					}
				});
		});
	var _evancz$url_parser$UrlParser$string = A2(_evancz$url_parser$UrlParser$custom, 'STRING', _elm_lang$core$Result$Ok);
	var _evancz$url_parser$UrlParser$int = A2(_evancz$url_parser$UrlParser$custom, 'NUMBER', _elm_lang$core$String$toInt);
	var _evancz$url_parser$UrlParser_ops = _evancz$url_parser$UrlParser_ops || {};
	_evancz$url_parser$UrlParser_ops['</>'] = F2(
		function (_p20, _p19) {
			var _p21 = _p20;
			var _p22 = _p19;
			return _evancz$url_parser$UrlParser$Parser(
				function (state) {
					return A2(
						_elm_lang$core$List$concatMap,
						_p22._0,
						_p21._0(state));
				});
		});
	var _evancz$url_parser$UrlParser$map = F2(
		function (subValue, _p23) {
			var _p24 = _p23;
			return _evancz$url_parser$UrlParser$Parser(
				function (_p25) {
					var _p26 = _p25;
					return A2(
						_elm_lang$core$List$map,
						_evancz$url_parser$UrlParser$mapHelp(_p26.value),
						_p24._0(
							{visited: _p26.visited, unvisited: _p26.unvisited, params: _p26.params, value: subValue}));
				});
		});
	var _evancz$url_parser$UrlParser$oneOf = function (parsers) {
		return _evancz$url_parser$UrlParser$Parser(
			function (state) {
				return A2(
					_elm_lang$core$List$concatMap,
					function (_p27) {
						var _p28 = _p27;
						return _p28._0(state);
					},
					parsers);
			});
	};
	var _evancz$url_parser$UrlParser$top = _evancz$url_parser$UrlParser$Parser(
		function (state) {
			return {
				ctor: '::',
				_0: state,
				_1: {ctor: '[]'}
			};
		});
	var _evancz$url_parser$UrlParser_ops = _evancz$url_parser$UrlParser_ops || {};
	_evancz$url_parser$UrlParser_ops['<?>'] = F2(
		function (_p30, _p29) {
			var _p31 = _p30;
			var _p32 = _p29;
			return _evancz$url_parser$UrlParser$Parser(
				function (state) {
					return A2(
						_elm_lang$core$List$concatMap,
						_p32._0,
						_p31._0(state));
				});
		});
	var _evancz$url_parser$UrlParser$QueryParser = function (a) {
		return {ctor: 'QueryParser', _0: a};
	};
	var _evancz$url_parser$UrlParser$customParam = F2(
		function (key, func) {
			return _evancz$url_parser$UrlParser$QueryParser(
				function (_p33) {
					var _p34 = _p33;
					var _p35 = _p34.params;
					return {
						ctor: '::',
						_0: A4(
							_evancz$url_parser$UrlParser$State,
							_p34.visited,
							_p34.unvisited,
							_p35,
							_p34.value(
								func(
									A2(_elm_lang$core$Dict$get, key, _p35)))),
						_1: {ctor: '[]'}
					};
				});
		});
	var _evancz$url_parser$UrlParser$stringParam = function (name) {
		return A2(_evancz$url_parser$UrlParser$customParam, name, _elm_lang$core$Basics$identity);
	};
	var _evancz$url_parser$UrlParser$intParam = function (name) {
		return A2(_evancz$url_parser$UrlParser$customParam, name, _evancz$url_parser$UrlParser$intParamHelp);
	};
	
	var _user$project$Trips_Model$initModel = function (route) {
		return {
			trips: {ctor: '[]'},
			tripName: '',
			places: {ctor: '[]'},
			placeName: '',
			route: route
		};
	};
	var _user$project$Trips_Model$Model = F5(
		function (a, b, c, d, e) {
			return {trips: a, tripName: b, places: c, placeName: d, route: e};
		});
	var _user$project$Trips_Model$Place = F3(
		function (a, b, c) {
			return {name: a, id: b, tripId: c};
		});
	var _user$project$Trips_Model$Trip = F2(
		function (a, b) {
			return {name: a, id: b};
		});
	var _user$project$Trips_Model$NotFoundRoute = {ctor: 'NotFoundRoute'};
	var _user$project$Trips_Model$TripRoute = function (a) {
		return {ctor: 'TripRoute', _0: a};
	};
	var _user$project$Trips_Model$TripsRoute = {ctor: 'TripsRoute'};
	
	var _user$project$Trips_Messages$OnRemoveTrip = function (a) {
		return {ctor: 'OnRemoveTrip', _0: a};
	};
	var _user$project$Trips_Messages$OnFetchAllTrips = function (a) {
		return {ctor: 'OnFetchAllTrips', _0: a};
	};
	var _user$project$Trips_Messages$OnInsertTrip = function (a) {
		return {ctor: 'OnInsertTrip', _0: a};
	};
	var _user$project$Trips_Messages$OnLocationChange = function (a) {
		return {ctor: 'OnLocationChange', _0: a};
	};
	var _user$project$Trips_Messages$ChangePlaceName = function (a) {
		return {ctor: 'ChangePlaceName', _0: a};
	};
	var _user$project$Trips_Messages$ChangeTripName = function (a) {
		return {ctor: 'ChangeTripName', _0: a};
	};
	var _user$project$Trips_Messages$OnInsertPlace = function (a) {
		return {ctor: 'OnInsertPlace', _0: a};
	};
	var _user$project$Trips_Messages$AddPlace = function (a) {
		return {ctor: 'AddPlace', _0: a};
	};
	var _user$project$Trips_Messages$RemoveTrip = function (a) {
		return {ctor: 'RemoveTrip', _0: a};
	};
	var _user$project$Trips_Messages$AddTrip = {ctor: 'AddTrip'};
	var _user$project$Trips_Messages$NoOp = {ctor: 'NoOp'};
	
	var _user$project$Trips_Commands$memberDecoder = A3(
		_elm_lang$core$Json_Decode$map2,
		_user$project$Trips_Model$Trip,
		A2(_elm_lang$core$Json_Decode$field, 'name', _elm_lang$core$Json_Decode$string),
		A2(_elm_lang$core$Json_Decode$field, 'id', _elm_lang$core$Json_Decode$string));
	var _user$project$Trips_Commands$postSuccessDecoder = A3(
		_elm_lang$core$Json_Decode$map2,
		_user$project$Trips_Model$Trip,
		A2(_elm_lang$core$Json_Decode$field, 'name', _elm_lang$core$Json_Decode$string),
		A2(_elm_lang$core$Json_Decode$field, 'id', _elm_lang$core$Json_Decode$string));
	var _user$project$Trips_Commands$collectionDecoder = _elm_lang$core$Json_Decode$list(_user$project$Trips_Commands$memberDecoder);
	var _user$project$Trips_Commands$deleteTripUrl = function (tripId) {
		return A2(_elm_lang$core$Basics_ops['++'], '/api/trips/', tripId);
	};
	var _user$project$Trips_Commands$deleteTrip = function (tripId) {
		return A2(
			_elm_lang$http$Http$send,
			_user$project$Trips_Messages$OnRemoveTrip,
			_elm_lang$http$Http$request(
				{
					method: 'DELETE',
					headers: {ctor: '[]'},
					url: _user$project$Trips_Commands$deleteTripUrl(tripId),
					body: _elm_lang$http$Http$emptyBody,
					expect: _elm_lang$http$Http$expectString,
					timeout: _elm_lang$core$Maybe$Nothing,
					withCredentials: false
				}));
	};
	var _user$project$Trips_Commands$fetchAllUrl = '/api/trips';
	var _user$project$Trips_Commands$fetchAll = A2(
		_elm_lang$http$Http$send,
		_user$project$Trips_Messages$OnFetchAllTrips,
		A2(_elm_lang$http$Http$get, _user$project$Trips_Commands$fetchAllUrl, _user$project$Trips_Commands$collectionDecoder));
	var _user$project$Trips_Commands$postPlaceUrl = '/api/trips';
	var _user$project$Trips_Commands$postPlace = function (newPlace) {
		var payload = A2(
			_elm_lang$http$Http$stringBody,
			'application/json',
			A2(
				_elm_lang$core$Basics_ops['++'],
				'{ \"name\": \"',
				A2(
					_elm_lang$core$Basics_ops['++'],
					newPlace.name,
					A2(
						_elm_lang$core$Basics_ops['++'],
						'\", \"id\": ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(newPlace.id),
							A2(
								_elm_lang$core$Basics_ops['++'],
								', \"tripId\": ',
								A2(_elm_lang$core$Basics_ops['++'], newPlace.tripId, '}')))))));
		return A2(
			_elm_lang$http$Http$send,
			_user$project$Trips_Messages$OnInsertPlace,
			A3(_elm_lang$http$Http$post, _user$project$Trips_Commands$postPlaceUrl, payload, _user$project$Trips_Commands$postSuccessDecoder));
	};
	var _user$project$Trips_Commands$postTripUrl = '/api/trips';
	var _user$project$Trips_Commands$postTrip = function (newTrip) {
		var payload = A2(
			_elm_lang$http$Http$stringBody,
			'application/json',
			A2(
				_elm_lang$core$Basics_ops['++'],
				'{ \"name\": \"',
				A2(
					_elm_lang$core$Basics_ops['++'],
					newTrip.name,
					A2(
						_elm_lang$core$Basics_ops['++'],
						'\", \"id\": ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(newTrip.id),
							'}')))));
		return A2(
			_elm_lang$http$Http$send,
			_user$project$Trips_Messages$OnInsertTrip,
			A3(_elm_lang$http$Http$post, _user$project$Trips_Commands$postTripUrl, payload, _user$project$Trips_Commands$postSuccessDecoder));
	};
	
	var _user$project$Trips_Routing$matchers = _evancz$url_parser$UrlParser$oneOf(
		{
			ctor: '::',
			_0: A2(_evancz$url_parser$UrlParser$map, _user$project$Trips_Model$TripsRoute, _evancz$url_parser$UrlParser$top),
			_1: {
				ctor: '::',
				_0: A2(
					_evancz$url_parser$UrlParser$map,
					_user$project$Trips_Model$TripRoute,
					A2(
						_evancz$url_parser$UrlParser_ops['</>'],
						_evancz$url_parser$UrlParser$s('trips'),
						_evancz$url_parser$UrlParser$int)),
				_1: {
					ctor: '::',
					_0: A2(
						_evancz$url_parser$UrlParser$map,
						_user$project$Trips_Model$TripsRoute,
						_evancz$url_parser$UrlParser$s('trips')),
					_1: {ctor: '[]'}
				}
			}
		});
	var _user$project$Trips_Routing$parseLocation = function (location) {
		var _p0 = A2(_evancz$url_parser$UrlParser$parseHash, _user$project$Trips_Routing$matchers, location);
		if (_p0.ctor === 'Just') {
			return _p0._0;
		} else {
			return _user$project$Trips_Model$NotFoundRoute;
		}
	};
	
	var _user$project$Trips_Pages_Trips$tripsPage = function (model) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('trips'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$ul,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('trips__list'),
						_1: {ctor: '[]'}
					},
					A2(
						_elm_lang$core$List$map,
						function (l) {
							var tripUrl = A2(_elm_lang$core$Basics_ops['++'], '#/trips/', l.id);
							return A2(
								_elm_lang$html$Html$li,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('trips__list-item'),
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$a,
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$class('trips__list-item-name'),
											_1: {
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$href(tripUrl),
												_1: {ctor: '[]'}
											}
										},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text(l.name),
											_1: {ctor: '[]'}
										}),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$a,
											{
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$class('trips__list-item-delete'),
												_1: {
													ctor: '::',
													_0: _elm_lang$html$Html_Events$onClick(
														_user$project$Trips_Messages$RemoveTrip(l.id)),
													_1: {ctor: '[]'}
												}
											},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text('Delete'),
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									}
								});
						},
						model.trips)),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('trips__adder'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$input,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('trips__name'),
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Events$onInput(_user$project$Trips_Messages$ChangeTripName),
										_1: {
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$value(model.tripName),
											_1: {ctor: '[]'}
										}
									}
								},
								{ctor: '[]'}),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$div,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$class('trips__actions'),
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$button,
											{
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$class('trips__add'),
												_1: {
													ctor: '::',
													_0: _elm_lang$html$Html_Events$onClick(_user$project$Trips_Messages$AddTrip),
													_1: {ctor: '[]'}
												}
											},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text('Add trip'),
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									}),
								_1: {ctor: '[]'}
							}
						}),
					_1: {ctor: '[]'}
				}
			});
	};
	
	var _user$project$Trips_Pages_Trip$tripPage = F2(
		function (model, tripId) {
			var trip = A2(
				_elm_lang$core$Array$get,
				tripId - 1,
				_elm_lang$core$Array$fromList(model.trips));
			var _p0 = trip;
			if (_p0.ctor === 'Just') {
				return A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('trip'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$h1,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text(_p0._0.name),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$div,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('trip__plan'),
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$div,
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$class('trip__places'),
											_1: {ctor: '[]'}
										},
										{
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html$ul,
												{
													ctor: '::',
													_0: _elm_lang$html$Html_Attributes$class('trips__place-list'),
													_1: {ctor: '[]'}
												},
												A2(
													_elm_lang$core$List$map,
													function (l) {
														return A2(
															_elm_lang$html$Html$li,
															{
																ctor: '::',
																_0: _elm_lang$html$Html_Attributes$class('trips__place-item'),
																_1: {ctor: '[]'}
															},
															{
																ctor: '::',
																_0: _elm_lang$html$Html$text(l.name),
																_1: {ctor: '[]'}
															});
													},
													model.places)),
											_1: {ctor: '[]'}
										}),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$input,
											{
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$class('trip__location'),
												_1: {
													ctor: '::',
													_0: _elm_lang$html$Html_Events$onInput(_user$project$Trips_Messages$ChangePlaceName),
													_1: {
														ctor: '::',
														_0: _elm_lang$html$Html_Attributes$value(model.placeName),
														_1: {ctor: '[]'}
													}
												}
											},
											{ctor: '[]'}),
										_1: {
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html$button,
												{
													ctor: '::',
													_0: _elm_lang$html$Html_Attributes$class('trip__add-location'),
													_1: {
														ctor: '::',
														_0: _elm_lang$html$Html_Events$onClick(
															_user$project$Trips_Messages$AddPlace(
																_elm_lang$core$Basics$toString(tripId))),
														_1: {ctor: '[]'}
													}
												},
												{
													ctor: '::',
													_0: _elm_lang$html$Html$text('Add Point'),
													_1: {ctor: '[]'}
												}),
											_1: {ctor: '[]'}
										}
									}
								}),
							_1: {ctor: '[]'}
						}
					});
			} else {
				return A2(
					_elm_lang$html$Html$div,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('No trip found'),
						_1: {ctor: '[]'}
					});
			}
		});
	
	var _user$project$Trips_View$notFoundView = A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text('Not found'),
			_1: {ctor: '[]'}
		});
	var _user$project$Trips_View$page = function (model) {
		var _p0 = model.route;
		switch (_p0.ctor) {
			case 'TripsRoute':
				return _user$project$Trips_Pages_Trips$tripsPage(model);
			case 'TripRoute':
				return A2(_user$project$Trips_Pages_Trip$tripPage, model, _p0._0);
			default:
				return _user$project$Trips_View$notFoundView;
		}
	};
	var _user$project$Trips_View$view = function (model) {
		return A2(
			_elm_lang$html$Html$div,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: _user$project$Trips_View$page(model),
				_1: {ctor: '[]'}
			});
	};
	
	var _user$project$Trips_Ports$addTrip = _elm_lang$core$Native_Platform.outgoingPort(
		'addTrip',
		function (v) {
			return {name: v.name, id: v.id};
		});
	var _user$project$Trips_Ports$addPlace = _elm_lang$core$Native_Platform.outgoingPort(
		'addPlace',
		function (v) {
			return {name: v.name, id: v.id, tripId: v.tripId};
		});
	var _user$project$Trips_Ports$openTrip = _elm_lang$core$Native_Platform.outgoingPort(
		'openTrip',
		function (v) {
			return {href: v.href, host: v.host, hostname: v.hostname, protocol: v.protocol, origin: v.origin, port_: v.port_, pathname: v.pathname, search: v.search, hash: v.hash, username: v.username, password: v.password};
		});
	var _user$project$Trips_Ports$loadingTrip = _elm_lang$core$Native_Platform.outgoingPort(
		'loadingTrip',
		function (v) {
			return v;
		});
	
	var _user$project$Trips_Main$subscriptions = function (model) {
		return _elm_lang$core$Platform_Sub$none;
	};
	var _user$project$Trips_Main$update = F2(
		function (msg, model) {
			var _p0 = msg;
			switch (_p0.ctor) {
				case 'OnLocationChange':
					var _p1 = _p0._0;
					var newRoute = _user$project$Trips_Routing$parseLocation(_p1);
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							model,
							{route: newRoute}),
						_1: _user$project$Trips_Ports$openTrip(_p1)
					};
				case 'ChangeTripName':
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							model,
							{tripName: _p0._0}),
						_1: _elm_lang$core$Platform_Cmd$none
					};
				case 'ChangePlaceName':
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							model,
							{placeName: _p0._0}),
						_1: _elm_lang$core$Platform_Cmd$none
					};
				case 'AddTrip':
					var tripId = _elm_lang$core$Basics$toString(
						_elm_lang$core$List$length(model.trips) + 1);
					var newTrip = {name: model.tripName, id: tripId};
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							model,
							{
								trips: A2(
									_elm_lang$core$List$append,
									model.trips,
									{
										ctor: '::',
										_0: newTrip,
										_1: {ctor: '[]'}
									}),
								tripName: ''
							}),
						_1: _user$project$Trips_Commands$postTrip(newTrip)
					};
				case 'RemoveTrip':
					var _p2 = _p0._0;
					var updatedTrips = A2(
						_elm_lang$core$List$filter,
						function (t) {
							return _elm_lang$core$Native_Utils.eq(t.id, _p2);
						},
						model.trips);
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							model,
							{trips: updatedTrips}),
						_1: _user$project$Trips_Commands$deleteTrip(_p2)
					};
				case 'OnInsertTrip':
					if (_p0._0.ctor === 'Ok') {
						return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
					} else {
						return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
					}
				case 'OnRemoveTrip':
					if (_p0._0.ctor === 'Ok') {
						return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
					} else {
						return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
					}
				case 'OnFetchAllTrips':
					if (_p0._0.ctor === 'Ok') {
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Native_Utils.update(
								model,
								{trips: _p0._0._0}),
							_1: _elm_lang$core$Platform_Cmd$none
						};
					} else {
						return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
					}
				case 'AddPlace':
					var placeId = _elm_lang$core$Basics$toString(
						_elm_lang$core$List$length(model.places) + 1);
					var newPlace = {name: model.placeName, id: placeId, tripId: _p0._0};
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							model,
							{
								places: A2(
									_elm_lang$core$List$append,
									model.places,
									{
										ctor: '::',
										_0: newPlace,
										_1: {ctor: '[]'}
									}),
								placeName: ''
							}),
						_1: _user$project$Trips_Commands$postPlace(newPlace)
					};
				case 'OnInsertPlace':
					if (_p0._0.ctor === 'Ok') {
						return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
					} else {
						return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
					}
				default:
					return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
			}
		});
	var _user$project$Trips_Main$init = function (location) {
		var currentRoute = _user$project$Trips_Routing$parseLocation(location);
		return {
			ctor: '_Tuple2',
			_0: _user$project$Trips_Model$initModel(currentRoute),
			_1: _user$project$Trips_Commands$fetchAll
		};
	};
	var _user$project$Trips_Main$main = A2(
		_elm_lang$navigation$Navigation$program,
		_user$project$Trips_Messages$OnLocationChange,
		{init: _user$project$Trips_Main$init, view: _user$project$Trips_View$view, update: _user$project$Trips_Main$update, subscriptions: _user$project$Trips_Main$subscriptions})();
	
	var Elm = {};
	Elm['Trips'] = Elm['Trips'] || {};
	Elm['Trips']['Main'] = Elm['Trips']['Main'] || {};
	if (typeof _user$project$Trips_Main$main !== 'undefined') {
	    _user$project$Trips_Main$main(Elm['Trips']['Main'], 'Trips.Main', undefined);
	}
	
	if (typeof define === "function" && define['amd'])
	{
	  define([], function() { return Elm; });
	  return;
	}
	
	if (typeof module === "object")
	{
	  module['exports'] = Elm;
	  return;
	}
	
	var globalElm = this['Elm'];
	if (typeof globalElm === "undefined")
	{
	  this['Elm'] = Elm;
	  return;
	}
	
	for (var publicModule in Elm)
	{
	  if (publicModule in globalElm)
	  {
	    throw new Error('There are two Elm modules called `' + publicModule + '` on this page! Rename one of them.');
	  }
	  globalElm[publicModule] = Elm[publicModule];
	}
	
	}).call(this);
	


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGRiNzAzODhkNTA2NjU4ZTAyMTM/ZjEyNiIsIndlYnBhY2s6Ly8vLi9hcHAuanN4Pzg4ZTUiLCJ3ZWJwYWNrOi8vLy4vVHJpcHMvTWFpbi5lbG0/ODNiMiJdLCJuYW1lcyI6WyJFbG0iLCJyZXF1aXJlIiwidHJpcE5vZGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhcHAiLCJUcmlwcyIsIk1haW4iLCJlbWJlZCIsInBvcnRzIiwiYWRkVHJpcCIsInN1YnNjcmliZSIsIm9wZW5UcmlwIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTs7QUFFQSxLQUFNQSxNQUFNLG1CQUFBQyxDQUFRLENBQVIsQ0FBWjs7QUFFQSxLQUFNQyxXQUFXQyxTQUFTQyxhQUFULENBQXVCLFdBQXZCLENBQWpCOztBQUVBLEtBQUlGLFFBQUosRUFBYztBQUNaLE9BQU1HLE1BQU1MLElBQUlNLEtBQUosQ0FBVUMsSUFBVixDQUFlQyxLQUFmLENBQXFCTixRQUFyQixDQUFaOztBQUVBRyxPQUFJSSxLQUFKLENBQVVDLE9BQVYsQ0FBa0JDLFNBQWxCLENBQTRCLFlBQU0sQ0FBRSxDQUFwQzs7QUFFQU4sT0FBSUksS0FBSixDQUFVRyxRQUFWLENBQW1CRCxTQUFuQixDQUE2QixZQUFNO0FBQ2pDOzs7Ozs7O0FBT0QsSUFSRDtBQVNELEU7Ozs7Ozs7QUNyQkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXVCLHFCQUFxQixpQkFBaUIsR0FBRztBQUNoRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd0IscUJBQXFCLHFCQUFxQixHQUFHO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF1QixxQkFBcUI7QUFDNUMseUJBQXdCLHdCQUF3QixHQUFHLEdBQUc7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXVCLHFCQUFxQjtBQUM1Qyx5QkFBd0IscUJBQXFCLDJCQUEyQixHQUFHLEdBQUcsR0FBRztBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBdUIscUJBQXFCO0FBQzVDLHlCQUF3QixxQkFBcUI7QUFDN0Msa0NBQWlDLEdBQUcsR0FBRyxHQUFHLEdBQUc7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXVCLHFCQUFxQjtBQUM1Qyx5QkFBd0IscUJBQXFCO0FBQzdDLHlCQUF3QixpQ0FBaUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF1QixxQkFBcUI7QUFDNUMseUJBQXdCLHFCQUFxQjtBQUM3Qyx5QkFBd0I7QUFDeEIsd0NBQXVDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF1QixxQkFBcUI7QUFDNUMseUJBQXdCLHFCQUFxQjtBQUM3Qyx5QkFBd0IscUJBQXFCO0FBQzdDLDJDQUEwQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSw0QkFBMkIsT0FBTztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0Isa0JBQWtCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFnQixzQkFBc0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFpQyxRQUFRO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCLG9CQUFvQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQixvQkFBb0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQixvQkFBb0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCLG9CQUFvQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBOEIsS0FBSztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBOEIsS0FBSztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQix1QkFBdUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFrQix5QkFBeUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWlCLDJCQUEyQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCLDJCQUEyQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0Isb0JBQW9CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQixvQkFBb0I7QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBb0IscUJBQXFCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWdCLG9CQUFvQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQixrQkFBa0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEVBQUM7QUFDRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixVQUFVLEVBQUU7QUFDbkM7QUFDQTtBQUNBOztBQUVBLEVBQUM7QUFDRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWMsYUFBYTtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCLGVBQWU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWUsdUJBQXVCO0FBQ3RDLGdCQUFlLHVCQUF1QjtBQUN0QyxnQkFBZSx1QkFBdUI7QUFDdEMsZ0JBQWUsdUJBQXVCO0FBQ3RDLGdCQUFlLHVCQUF1QjtBQUN0QyxnQkFBZSx1QkFBdUI7QUFDdEMsMkRBQTBELEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtBQUNwRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQSxZQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBLFlBQVcsNEJBQTRCO0FBQ3ZDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEtBQUksOEJBQThCO0FBQ2xDLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFnQztBQUNoQyxpQ0FBZ0M7QUFDaEMsaUNBQWdDO0FBQ2hDO0FBQ0EsVUFBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUU7QUFDRixxQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUU7O0FBRUY7O0FBRUE7O0FBRUEsWUFBVzs7QUFFWDtBQUNBO0FBQ0EsVUFBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5QixLQUFLO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBeUIsS0FBSztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsS0FBSSxXQUFXO0FBQ2Y7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMEIsZ0NBQWdDO0FBQzFELEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxLQUFJLFdBQVc7QUFDZjtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWCxJQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSSxXQUFXO0FBQ2Y7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVk7QUFDWixLQUFJO0FBQ0osSUFBRyxXQUFXO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsY0FBYTtBQUNiO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVTtBQUNWLE1BQUs7QUFDTDtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBYztBQUNkLE9BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHLFdBQVc7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVSw0QkFBNEI7QUFDdEM7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLFdBQVU7QUFDVjtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUyxXQUFXO0FBQ3BCLFVBQVM7QUFDVCxLQUFJO0FBQ0o7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTLHFDQUFxQztBQUM5QyxVQUFTO0FBQ1Q7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVEsV0FBVztBQUNuQixTQUFRO0FBQ1IsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWCxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFLLFdBQVc7QUFDaEI7QUFDQSxZQUFXO0FBQ1g7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsZUFBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSyxXQUFXO0FBQ2hCLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1gsSUFBRztBQUNILGdCQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsU0FBUTtBQUNSO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxXQUFVO0FBQ1Y7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKLGlCQUFnQixrQ0FBa0M7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUksV0FBVztBQUNmO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUksV0FBVztBQUNmLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVk7QUFDWixLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGLG1DQUFrQzs7QUFFbEM7O0FBRUE7O0FBRUE7QUFDQSx5QkFBd0IsZ0VBQWdFLEVBQUU7QUFDMUYsdUJBQXNCLHdCQUF3QixFQUFFO0FBQ2hELHdCQUF1Qix5REFBeUQsRUFBRTtBQUNsRix3QkFBdUIseURBQXlELEVBQUU7QUFDbEYsOEJBQTZCLCtEQUErRCxFQUFFO0FBQzlGLDhCQUE2QiwrREFBK0Q7QUFDNUY7O0FBRUEsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSCxzQkFBcUIsa0JBQWtCO0FBQ3ZDLEdBQUU7QUFDRjs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsRUFBQztBQUNEOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQXlCLGFBQWEsRUFBRTtBQUN4QyxvQ0FBbUMsaUJBQWlCLEVBQUU7QUFDdEQsb0NBQW1DLGlCQUFpQjtBQUNwRCxHQUFFO0FBQ0Y7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsa0JBQWlCLGVBQWU7QUFDaEM7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0REFBMkQscUJBQXFCO0FBQ2hGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWdCLDJCQUEyQjtBQUMzQztBQUNBO0FBQ0E7O0FBRUEseUJBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFDOztBQUVEO0FBQ0E7QUFDQSxHQUFFLFdBQVc7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0Esd0NBQXVDOztBQUV2QztBQUNBO0FBQ0EsR0FBRSxXQUFXO0FBQ2I7QUFDQSx3Q0FBdUM7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBdUM7QUFDdkMscUNBQW9DO0FBQ3BDLDBDQUF5QztBQUN6Qyx1Q0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0EsS0FBSTtBQUNKO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUTtBQUNSO0FBQ0EsT0FBTTtBQUNOO0FBQ0EsS0FBSTtBQUNKO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVTtBQUNWO0FBQ0EsU0FBUTtBQUNSO0FBQ0EsT0FBTTtBQUNOO0FBQ0EsS0FBSTtBQUNKO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWTtBQUNaO0FBQ0EsV0FBVTtBQUNWO0FBQ0EsU0FBUTtBQUNSO0FBQ0EsT0FBTTtBQUNOO0FBQ0EsS0FBSTtBQUNKO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSSxXQUFXO0FBQ2YsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZO0FBQ1osS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQSxHQUFFLGdCQUFnQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxLQUFJLGdCQUFnQjtBQUNwQixHQUFFO0FBQ0Y7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0YsMERBQXlEOztBQUV6RDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUM7QUFDRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQXlCLEtBQUs7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5QixLQUFLO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQXlCLEtBQUs7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBeUIsS0FBSztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWTtBQUNaLEtBQUk7QUFDSixJQUFHLFdBQVc7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVk7QUFDWixLQUFJO0FBQ0osSUFBRyxXQUFXO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVSxvQ0FBb0M7QUFDOUM7QUFDQTtBQUNBLEtBQUk7QUFDSixJQUFHLFdBQVc7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVk7QUFDWixLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGLG1DQUFrQztBQUNsQyxtQ0FBa0M7QUFDbEMsa0NBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBbUM7QUFDbkMsbUNBQWtDO0FBQ2xDO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVTtBQUNWLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsbUJBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxvQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxtQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsbUJBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBLG1CQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWM7QUFDZDtBQUNBO0FBQ0EsZ0JBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFjO0FBQ2Q7QUFDQTtBQUNBLGdCQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxTQUFRO0FBQ1I7QUFDQSxRQUFPO0FBQ1A7QUFDQSxPQUFNO0FBQ047QUFDQSxNQUFLO0FBQ0w7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBLGVBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGLGlDQUFnQztBQUNoQyxtQ0FBa0M7QUFDbEMsbUNBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEtBQUksOEVBQThFO0FBQ2xGO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxHQUFFOztBQUVGOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSCxzQkFBcUIsbUJBQW1CO0FBQ3hDLEdBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVU7QUFDVixNQUFLO0FBQ0w7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsTUFBSyxnQ0FBZ0M7QUFDckM7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsV0FBVTtBQUNWLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVSxzQ0FBc0M7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUyxXQUFXO0FBQ3BCO0FBQ0E7QUFDQSxPQUFNLGdCQUFnQjtBQUN0QixLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0EsV0FBVTtBQUNWLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0osR0FBRTtBQUNGLDBEQUF5RDs7QUFFekQ7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBLFVBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsVUFBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLFVBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsVUFBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLFVBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQTZCLEtBQUs7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFvQixLQUFLO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQWtCLHFCQUFxQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCLFNBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXdDOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUksZ0JBQWdCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMEM7O0FBRTFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGlDQUFnQztBQUNoQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF1QixZQUFZOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBbUQsMkJBQTJCO0FBQzlFO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHQUFFO0FBQ0Y7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEVBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3QkFBdUI7QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsbUJBQWtCLHFCQUFxQjtBQUN2QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsbUJBQWtCLHFCQUFxQjtBQUN2QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFnQyxLQUFLO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0IsZUFBZTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWdCLFlBQVk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBLG1CQUFrQjtBQUNsQixtQkFBa0IsV0FBVztBQUM3QixtQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOzs7O0FBSUE7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFnQiw4QkFBOEI7QUFDOUM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0IsOEJBQThCOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFrQixzQkFBc0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFrQixzQkFBc0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWdCLG9CQUFvQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBa0M7QUFDbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQWtCLHFCQUFxQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFnQixvQkFBb0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFnQix1QkFBdUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFvQixjQUFjLEVBQUU7QUFDcEMsMEJBQXlCLGdCQUFnQixFQUFFO0FBQzNDLDhCQUE2Qix5Q0FBeUM7QUFDdEUsR0FBRTtBQUNGOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWlDO0FBQ2pDLHFDQUFvQztBQUNwQyxvQ0FBbUM7QUFDbkM7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXdCLGlDQUFpQzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUFzQjtBQUN0QixvQkFBbUI7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUIsYUFBYTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQixlQUFlO0FBQ3BDO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFvQixnQkFBZ0I7QUFDcEMsR0FBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBZ0IsdUJBQXVCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFVO0FBQ1YsR0FBRTtBQUNGLDhDQUE2QztBQUM3QyxrREFBaUQ7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUssV0FBVztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTyxXQUFXO0FBQ2xCLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVE7QUFDUjtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFRO0FBQ1I7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRSxxQkFBcUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVTtBQUNWLEdBQUU7O0FBRUY7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxtREFBa0QsdUJBQXVCO0FBQ3pFLElBQUc7QUFDSDtBQUNBLG1EQUFrRCxrQkFBa0I7QUFDcEUsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUF5RCxrQ0FBa0M7QUFDM0Y7O0FBRUE7QUFDQTs7QUFFQSxzQkFBcUIsYUFBYTtBQUNsQyxHQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsR0FBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLDRDQUE0QztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFpQyxLQUFLO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKLEdBQUU7QUFDRjtBQUNBO0FBQ0EsV0FBVTtBQUNWLEdBQUU7QUFDRjtBQUNBLFVBQVM7QUFDVDtBQUNBLDRDQUEyQztBQUMzQyxrREFBaUQ7QUFDakQ7QUFDQTtBQUNBLFdBQVU7QUFDVixHQUFFO0FBQ0YsK0NBQThDO0FBQzlDO0FBQ0E7QUFDQSxXQUFVO0FBQ1YsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWMsV0FBVztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBYyxXQUFXO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0osR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYSxXQUFXO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0EsV0FBVTtBQUNWLEdBQUU7QUFDRjtBQUNBO0FBQ0EsV0FBVTtBQUNWLEdBQUU7QUFDRjtBQUNBLFVBQVM7QUFDVDtBQUNBLHlDQUF3QztBQUN4QyxvQ0FBbUM7QUFDbkM7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsV0FBVTtBQUNWLEdBQUU7QUFDRjs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXNCO0FBQ3RCO0FBQ0EsR0FBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQXlCO0FBQ3pCO0FBQ0EsR0FBRTtBQUNGOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSyxnQkFBZ0I7QUFDckIsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFVO0FBQ1YsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLElBQUcsV0FBVztBQUNkO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSyxnQkFBZ0I7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxLQUFJLHdFQUF3RTtBQUM1RSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNLGdCQUFnQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSSx3RUFBd0U7QUFDNUUsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKLEdBQUU7QUFDRjtBQUNBO0FBQ0EsV0FBVTtBQUNWLEdBQUU7QUFDRjtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUssZ0JBQWdCO0FBQ3JCO0FBQ0E7QUFDQSxJQUFHLGdCQUFnQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVE7QUFDUjtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGLGdFQUErRDs7QUFFL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2IsTUFBSztBQUNMO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWUsV0FBVztBQUMxQjtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQSxXQUFVO0FBQ1YsR0FBRTtBQUNGO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBWTtBQUNaLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTyx1Q0FBdUM7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsV0FBVTtBQUNWLE1BQUssSUFBSTtBQUNUO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2IsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUyx1Q0FBdUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsYUFBWTtBQUNaO0FBQ0EsT0FBTTtBQUNOLGVBQWM7QUFDZDtBQUNBO0FBQ0EsS0FBSTtBQUNKLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSixHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPLHVGQUF1RjtBQUM5RixLQUFJO0FBQ0osR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUTtBQUNSO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0osR0FBRTtBQUNGO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFVO0FBQ1Y7QUFDQSxLQUFJO0FBQ0osR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVSxXQUFXO0FBQ3JCO0FBQ0EsWUFBVyxXQUFXO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVU7QUFDVixHQUFFO0FBQ0Y7QUFDQTtBQUNBLFdBQVU7QUFDVixHQUFFO0FBQ0Y7QUFDQTtBQUNBLFdBQVU7QUFDVixHQUFFO0FBQ0YsZ0RBQStDO0FBQy9DO0FBQ0EsVUFBUztBQUNUO0FBQ0EsNkNBQTRDOztBQUU1QztBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSw2Q0FBNEM7QUFDNUMsMENBQXlDOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFjLFdBQVc7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBOEQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVE7QUFDUixJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFVO0FBQ1YsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYixTQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7QUFDQSxXQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsZ0JBQWU7QUFDZixXQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEIsWUFBVztBQUNYLGVBQWM7QUFDZDtBQUNBLFNBQVE7QUFDUixPQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWCxPQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZTtBQUNmO0FBQ0E7QUFDQSxTQUFRO0FBQ1IsU0FBUSxXQUFXO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBYztBQUNkLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEIsWUFBVztBQUNYLGVBQWM7QUFDZCxVQUFTO0FBQ1QsYUFBWTtBQUNaO0FBQ0EsT0FBTTtBQUNOLFVBQVM7QUFDVDtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVU7QUFDVixNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPLFdBQVc7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsYUFBWTtBQUNaLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYixTQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZTtBQUNmLFdBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQixhQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFvQjtBQUNwQixnQkFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLHFCQUFvQjtBQUNwQixnQkFBZTtBQUNmLGNBQWE7QUFDYjtBQUNBLGdCQUFlO0FBQ2YsV0FBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxZQUFXO0FBQ1gsWUFBVyxXQUFXO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFrQjtBQUNsQjtBQUNBLGFBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakIsYUFBWTtBQUNaLGdCQUFlO0FBQ2Y7QUFDQTtBQUNBLFNBQVE7QUFDUixZQUFXO0FBQ1g7QUFDQSxNQUFLO0FBQ0wsSUFBRztBQUNIO0FBQ0E7QUFDQSxNQUFLLFdBQVc7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsV0FBVTtBQUNWLE1BQUs7QUFDTDtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBLEdBQUUsV0FBVztBQUNiO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUCxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUcsV0FBVztBQUNkO0FBQ0E7QUFDQTtBQUNBLFNBQVE7QUFDUixJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVTtBQUNWLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxXQUFVO0FBQ1YsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLFdBQVU7QUFDVixHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPLGdCQUFnQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU8saUJBQWlCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTyxrQkFBa0I7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBYztBQUNkLFVBQVM7QUFDVDtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPLG9CQUFvQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYixNQUFLO0FBQ0wsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYixNQUFLO0FBQ0wsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUSxpQkFBaUI7QUFDekI7QUFDQTtBQUNBLE1BQUs7QUFDTCxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWM7QUFDZCxVQUFTO0FBQ1Q7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2IsTUFBSztBQUNMLGNBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBWTtBQUNaO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFLHlLQUF5Szs7QUFFM0s7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBeUIsWUFBWSxFQUFFO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFDIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4ZGI3MDM4OGQ1MDY2NThlMDIxM1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4ZGI3MDM4OGQ1MDY2NThlMDIxMyIsIi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuLy8gaW1wb3J0IFRyaXBNYXAgZnJvbSAnLi9jb21wb25lbnRzL1RyaXBNYXAnO1xuXG5jb25zdCBFbG0gPSByZXF1aXJlKCcuL1RyaXBzL01haW4uZWxtJyk7XG5cbmNvbnN0IHRyaXBOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXRyaXBzJyk7XG5cbmlmICh0cmlwTm9kZSkge1xuICBjb25zdCBhcHAgPSBFbG0uVHJpcHMuTWFpbi5lbWJlZCh0cmlwTm9kZSk7XG5cbiAgYXBwLnBvcnRzLmFkZFRyaXAuc3Vic2NyaWJlKCgpID0+IHt9KTtcblxuICBhcHAucG9ydHMub3BlblRyaXAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAvKiBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IG1hcE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtbWFwJyk7XG4gICAgICByZW5kZXIoPFRyaXBNYXBcbiAgICAgICAgcGxhY2VzPXtbXX1cbiAgICAgICAgb25BZGRQbGFjZT17YXBwLnBvcnRzLmFkZFBsYWNlLnN1YnNjcmliZX1cbiAgICAgIC8+LCBtYXBOb2RlKTtcbiAgICB9LCA1MDApOyAqL1xuICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC5qc3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAuanN4IiwiXG4oZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIEYyKGZ1bilcbntcbiAgZnVuY3Rpb24gd3JhcHBlcihhKSB7IHJldHVybiBmdW5jdGlvbihiKSB7IHJldHVybiBmdW4oYSxiKTsgfTsgfVxuICB3cmFwcGVyLmFyaXR5ID0gMjtcbiAgd3JhcHBlci5mdW5jID0gZnVuO1xuICByZXR1cm4gd3JhcHBlcjtcbn1cblxuZnVuY3Rpb24gRjMoZnVuKVxue1xuICBmdW5jdGlvbiB3cmFwcGVyKGEpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oYikgeyByZXR1cm4gZnVuY3Rpb24oYykgeyByZXR1cm4gZnVuKGEsIGIsIGMpOyB9OyB9O1xuICB9XG4gIHdyYXBwZXIuYXJpdHkgPSAzO1xuICB3cmFwcGVyLmZ1bmMgPSBmdW47XG4gIHJldHVybiB3cmFwcGVyO1xufVxuXG5mdW5jdGlvbiBGNChmdW4pXG57XG4gIGZ1bmN0aW9uIHdyYXBwZXIoYSkgeyByZXR1cm4gZnVuY3Rpb24oYikgeyByZXR1cm4gZnVuY3Rpb24oYykge1xuICAgIHJldHVybiBmdW5jdGlvbihkKSB7IHJldHVybiBmdW4oYSwgYiwgYywgZCk7IH07IH07IH07XG4gIH1cbiAgd3JhcHBlci5hcml0eSA9IDQ7XG4gIHdyYXBwZXIuZnVuYyA9IGZ1bjtcbiAgcmV0dXJuIHdyYXBwZXI7XG59XG5cbmZ1bmN0aW9uIEY1KGZ1bilcbntcbiAgZnVuY3Rpb24gd3JhcHBlcihhKSB7IHJldHVybiBmdW5jdGlvbihiKSB7IHJldHVybiBmdW5jdGlvbihjKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGZ1bmN0aW9uKGUpIHsgcmV0dXJuIGZ1bihhLCBiLCBjLCBkLCBlKTsgfTsgfTsgfTsgfTtcbiAgfVxuICB3cmFwcGVyLmFyaXR5ID0gNTtcbiAgd3JhcHBlci5mdW5jID0gZnVuO1xuICByZXR1cm4gd3JhcHBlcjtcbn1cblxuZnVuY3Rpb24gRjYoZnVuKVxue1xuICBmdW5jdGlvbiB3cmFwcGVyKGEpIHsgcmV0dXJuIGZ1bmN0aW9uKGIpIHsgcmV0dXJuIGZ1bmN0aW9uKGMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZCkgeyByZXR1cm4gZnVuY3Rpb24oZSkgeyByZXR1cm4gZnVuY3Rpb24oZikge1xuICAgIHJldHVybiBmdW4oYSwgYiwgYywgZCwgZSwgZik7IH07IH07IH07IH07IH07XG4gIH1cbiAgd3JhcHBlci5hcml0eSA9IDY7XG4gIHdyYXBwZXIuZnVuYyA9IGZ1bjtcbiAgcmV0dXJuIHdyYXBwZXI7XG59XG5cbmZ1bmN0aW9uIEY3KGZ1bilcbntcbiAgZnVuY3Rpb24gd3JhcHBlcihhKSB7IHJldHVybiBmdW5jdGlvbihiKSB7IHJldHVybiBmdW5jdGlvbihjKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGZ1bmN0aW9uKGUpIHsgcmV0dXJuIGZ1bmN0aW9uKGYpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZykgeyByZXR1cm4gZnVuKGEsIGIsIGMsIGQsIGUsIGYsIGcpOyB9OyB9OyB9OyB9OyB9OyB9O1xuICB9XG4gIHdyYXBwZXIuYXJpdHkgPSA3O1xuICB3cmFwcGVyLmZ1bmMgPSBmdW47XG4gIHJldHVybiB3cmFwcGVyO1xufVxuXG5mdW5jdGlvbiBGOChmdW4pXG57XG4gIGZ1bmN0aW9uIHdyYXBwZXIoYSkgeyByZXR1cm4gZnVuY3Rpb24oYikgeyByZXR1cm4gZnVuY3Rpb24oYykge1xuICAgIHJldHVybiBmdW5jdGlvbihkKSB7IHJldHVybiBmdW5jdGlvbihlKSB7IHJldHVybiBmdW5jdGlvbihmKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGcpIHsgcmV0dXJuIGZ1bmN0aW9uKGgpIHtcbiAgICByZXR1cm4gZnVuKGEsIGIsIGMsIGQsIGUsIGYsIGcsIGgpOyB9OyB9OyB9OyB9OyB9OyB9OyB9O1xuICB9XG4gIHdyYXBwZXIuYXJpdHkgPSA4O1xuICB3cmFwcGVyLmZ1bmMgPSBmdW47XG4gIHJldHVybiB3cmFwcGVyO1xufVxuXG5mdW5jdGlvbiBGOShmdW4pXG57XG4gIGZ1bmN0aW9uIHdyYXBwZXIoYSkgeyByZXR1cm4gZnVuY3Rpb24oYikgeyByZXR1cm4gZnVuY3Rpb24oYykge1xuICAgIHJldHVybiBmdW5jdGlvbihkKSB7IHJldHVybiBmdW5jdGlvbihlKSB7IHJldHVybiBmdW5jdGlvbihmKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGcpIHsgcmV0dXJuIGZ1bmN0aW9uKGgpIHsgcmV0dXJuIGZ1bmN0aW9uKGkpIHtcbiAgICByZXR1cm4gZnVuKGEsIGIsIGMsIGQsIGUsIGYsIGcsIGgsIGkpOyB9OyB9OyB9OyB9OyB9OyB9OyB9OyB9O1xuICB9XG4gIHdyYXBwZXIuYXJpdHkgPSA5O1xuICB3cmFwcGVyLmZ1bmMgPSBmdW47XG4gIHJldHVybiB3cmFwcGVyO1xufVxuXG5mdW5jdGlvbiBBMihmdW4sIGEsIGIpXG57XG4gIHJldHVybiBmdW4uYXJpdHkgPT09IDJcbiAgICA/IGZ1bi5mdW5jKGEsIGIpXG4gICAgOiBmdW4oYSkoYik7XG59XG5mdW5jdGlvbiBBMyhmdW4sIGEsIGIsIGMpXG57XG4gIHJldHVybiBmdW4uYXJpdHkgPT09IDNcbiAgICA/IGZ1bi5mdW5jKGEsIGIsIGMpXG4gICAgOiBmdW4oYSkoYikoYyk7XG59XG5mdW5jdGlvbiBBNChmdW4sIGEsIGIsIGMsIGQpXG57XG4gIHJldHVybiBmdW4uYXJpdHkgPT09IDRcbiAgICA/IGZ1bi5mdW5jKGEsIGIsIGMsIGQpXG4gICAgOiBmdW4oYSkoYikoYykoZCk7XG59XG5mdW5jdGlvbiBBNShmdW4sIGEsIGIsIGMsIGQsIGUpXG57XG4gIHJldHVybiBmdW4uYXJpdHkgPT09IDVcbiAgICA/IGZ1bi5mdW5jKGEsIGIsIGMsIGQsIGUpXG4gICAgOiBmdW4oYSkoYikoYykoZCkoZSk7XG59XG5mdW5jdGlvbiBBNihmdW4sIGEsIGIsIGMsIGQsIGUsIGYpXG57XG4gIHJldHVybiBmdW4uYXJpdHkgPT09IDZcbiAgICA/IGZ1bi5mdW5jKGEsIGIsIGMsIGQsIGUsIGYpXG4gICAgOiBmdW4oYSkoYikoYykoZCkoZSkoZik7XG59XG5mdW5jdGlvbiBBNyhmdW4sIGEsIGIsIGMsIGQsIGUsIGYsIGcpXG57XG4gIHJldHVybiBmdW4uYXJpdHkgPT09IDdcbiAgICA/IGZ1bi5mdW5jKGEsIGIsIGMsIGQsIGUsIGYsIGcpXG4gICAgOiBmdW4oYSkoYikoYykoZCkoZSkoZikoZyk7XG59XG5mdW5jdGlvbiBBOChmdW4sIGEsIGIsIGMsIGQsIGUsIGYsIGcsIGgpXG57XG4gIHJldHVybiBmdW4uYXJpdHkgPT09IDhcbiAgICA/IGZ1bi5mdW5jKGEsIGIsIGMsIGQsIGUsIGYsIGcsIGgpXG4gICAgOiBmdW4oYSkoYikoYykoZCkoZSkoZikoZykoaCk7XG59XG5mdW5jdGlvbiBBOShmdW4sIGEsIGIsIGMsIGQsIGUsIGYsIGcsIGgsIGkpXG57XG4gIHJldHVybiBmdW4uYXJpdHkgPT09IDlcbiAgICA/IGZ1bi5mdW5jKGEsIGIsIGMsIGQsIGUsIGYsIGcsIGgsIGkpXG4gICAgOiBmdW4oYSkoYikoYykoZCkoZSkoZikoZykoaCkoaSk7XG59XG5cbi8vaW1wb3J0IE5hdGl2ZS5MaXN0IC8vXG5cbnZhciBfZWxtX2xhbmckY29yZSROYXRpdmVfQXJyYXkgPSBmdW5jdGlvbigpIHtcblxuLy8gQSBSUkItVHJlZSBoYXMgdHdvIGRpc3RpbmN0IGRhdGEgdHlwZXMuXG4vLyBMZWFmIC0+IFwiaGVpZ2h0XCIgIGlzIGFsd2F5cyAwXG4vLyAgICAgICAgIFwidGFibGVcIiAgIGlzIGFuIGFycmF5IG9mIGVsZW1lbnRzXG4vLyBOb2RlIC0+IFwiaGVpZ2h0XCIgIGlzIGFsd2F5cyBncmVhdGVyIHRoYW4gMFxuLy8gICAgICAgICBcInRhYmxlXCIgICBpcyBhbiBhcnJheSBvZiBjaGlsZCBub2Rlc1xuLy8gICAgICAgICBcImxlbmd0aHNcIiBpcyBhbiBhcnJheSBvZiBhY2N1bXVsYXRlZCBsZW5ndGhzIG9mIHRoZSBjaGlsZCBub2Rlc1xuXG4vLyBNIGlzIHRoZSBtYXhpbWFsIHRhYmxlIHNpemUuIDMyIHNlZW1zIGZhc3QuIEUgaXMgdGhlIGFsbG93ZWQgaW5jcmVhc2Vcbi8vIG9mIHNlYXJjaCBzdGVwcyB3aGVuIGNvbmNhdHRpbmcgdG8gZmluZCBhbiBpbmRleC4gTG93ZXIgdmFsdWVzIHdpbGxcbi8vIGRlY3JlYXNlIGJhbGFuY2luZywgYnV0IHdpbGwgaW5jcmVhc2Ugc2VhcmNoIHN0ZXBzLlxudmFyIE0gPSAzMjtcbnZhciBFID0gMjtcblxuLy8gQW4gZW1wdHkgYXJyYXkuXG52YXIgZW1wdHkgPSB7XG5cdGN0b3I6ICdfQXJyYXknLFxuXHRoZWlnaHQ6IDAsXG5cdHRhYmxlOiBbXVxufTtcblxuXG5mdW5jdGlvbiBnZXQoaSwgYXJyYXkpXG57XG5cdGlmIChpIDwgMCB8fCBpID49IGxlbmd0aChhcnJheSkpXG5cdHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHQnSW5kZXggJyArIGkgKyAnIGlzIG91dCBvZiByYW5nZS4gQ2hlY2sgdGhlIGxlbmd0aCBvZiAnICtcblx0XHRcdCd5b3VyIGFycmF5IGZpcnN0IG9yIHVzZSBnZXRNYXliZSBvciBnZXRXaXRoRGVmYXVsdC4nKTtcblx0fVxuXHRyZXR1cm4gdW5zYWZlR2V0KGksIGFycmF5KTtcbn1cblxuXG5mdW5jdGlvbiB1bnNhZmVHZXQoaSwgYXJyYXkpXG57XG5cdGZvciAodmFyIHggPSBhcnJheS5oZWlnaHQ7IHggPiAwOyB4LS0pXG5cdHtcblx0XHR2YXIgc2xvdCA9IGkgPj4gKHggKiA1KTtcblx0XHR3aGlsZSAoYXJyYXkubGVuZ3Roc1tzbG90XSA8PSBpKVxuXHRcdHtcblx0XHRcdHNsb3QrKztcblx0XHR9XG5cdFx0aWYgKHNsb3QgPiAwKVxuXHRcdHtcblx0XHRcdGkgLT0gYXJyYXkubGVuZ3Roc1tzbG90IC0gMV07XG5cdFx0fVxuXHRcdGFycmF5ID0gYXJyYXkudGFibGVbc2xvdF07XG5cdH1cblx0cmV0dXJuIGFycmF5LnRhYmxlW2ldO1xufVxuXG5cbi8vIFNldHMgdGhlIHZhbHVlIGF0IHRoZSBpbmRleCBpLiBPbmx5IHRoZSBub2RlcyBsZWFkaW5nIHRvIGkgd2lsbCBnZXRcbi8vIGNvcGllZCBhbmQgdXBkYXRlZC5cbmZ1bmN0aW9uIHNldChpLCBpdGVtLCBhcnJheSlcbntcblx0aWYgKGkgPCAwIHx8IGxlbmd0aChhcnJheSkgPD0gaSlcblx0e1xuXHRcdHJldHVybiBhcnJheTtcblx0fVxuXHRyZXR1cm4gdW5zYWZlU2V0KGksIGl0ZW0sIGFycmF5KTtcbn1cblxuXG5mdW5jdGlvbiB1bnNhZmVTZXQoaSwgaXRlbSwgYXJyYXkpXG57XG5cdGFycmF5ID0gbm9kZUNvcHkoYXJyYXkpO1xuXG5cdGlmIChhcnJheS5oZWlnaHQgPT09IDApXG5cdHtcblx0XHRhcnJheS50YWJsZVtpXSA9IGl0ZW07XG5cdH1cblx0ZWxzZVxuXHR7XG5cdFx0dmFyIHNsb3QgPSBnZXRTbG90KGksIGFycmF5KTtcblx0XHRpZiAoc2xvdCA+IDApXG5cdFx0e1xuXHRcdFx0aSAtPSBhcnJheS5sZW5ndGhzW3Nsb3QgLSAxXTtcblx0XHR9XG5cdFx0YXJyYXkudGFibGVbc2xvdF0gPSB1bnNhZmVTZXQoaSwgaXRlbSwgYXJyYXkudGFibGVbc2xvdF0pO1xuXHR9XG5cdHJldHVybiBhcnJheTtcbn1cblxuXG5mdW5jdGlvbiBpbml0aWFsaXplKGxlbiwgZilcbntcblx0aWYgKGxlbiA8PSAwKVxuXHR7XG5cdFx0cmV0dXJuIGVtcHR5O1xuXHR9XG5cdHZhciBoID0gTWF0aC5mbG9vciggTWF0aC5sb2cobGVuKSAvIE1hdGgubG9nKE0pICk7XG5cdHJldHVybiBpbml0aWFsaXplXyhmLCBoLCAwLCBsZW4pO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplXyhmLCBoLCBmcm9tLCB0bylcbntcblx0aWYgKGggPT09IDApXG5cdHtcblx0XHR2YXIgdGFibGUgPSBuZXcgQXJyYXkoKHRvIC0gZnJvbSkgJSAoTSArIDEpKTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRhYmxlLmxlbmd0aDsgaSsrKVxuXHRcdHtcblx0XHQgIHRhYmxlW2ldID0gZihmcm9tICsgaSk7XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHRjdG9yOiAnX0FycmF5Jyxcblx0XHRcdGhlaWdodDogMCxcblx0XHRcdHRhYmxlOiB0YWJsZVxuXHRcdH07XG5cdH1cblxuXHR2YXIgc3RlcCA9IE1hdGgucG93KE0sIGgpO1xuXHR2YXIgdGFibGUgPSBuZXcgQXJyYXkoTWF0aC5jZWlsKCh0byAtIGZyb20pIC8gc3RlcCkpO1xuXHR2YXIgbGVuZ3RocyA9IG5ldyBBcnJheSh0YWJsZS5sZW5ndGgpO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHRhYmxlLmxlbmd0aDsgaSsrKVxuXHR7XG5cdFx0dGFibGVbaV0gPSBpbml0aWFsaXplXyhmLCBoIC0gMSwgZnJvbSArIChpICogc3RlcCksIE1hdGgubWluKGZyb20gKyAoKGkgKyAxKSAqIHN0ZXApLCB0bykpO1xuXHRcdGxlbmd0aHNbaV0gPSBsZW5ndGgodGFibGVbaV0pICsgKGkgPiAwID8gbGVuZ3Roc1tpLTFdIDogMCk7XG5cdH1cblx0cmV0dXJuIHtcblx0XHRjdG9yOiAnX0FycmF5Jyxcblx0XHRoZWlnaHQ6IGgsXG5cdFx0dGFibGU6IHRhYmxlLFxuXHRcdGxlbmd0aHM6IGxlbmd0aHNcblx0fTtcbn1cblxuZnVuY3Rpb24gZnJvbUxpc3QobGlzdClcbntcblx0aWYgKGxpc3QuY3RvciA9PT0gJ1tdJylcblx0e1xuXHRcdHJldHVybiBlbXB0eTtcblx0fVxuXG5cdC8vIEFsbG9jYXRlIE0gc2l6ZWQgYmxvY2tzICh0YWJsZSkgYW5kIHdyaXRlIGxpc3QgZWxlbWVudHMgdG8gaXQuXG5cdHZhciB0YWJsZSA9IG5ldyBBcnJheShNKTtcblx0dmFyIG5vZGVzID0gW107XG5cdHZhciBpID0gMDtcblxuXHR3aGlsZSAobGlzdC5jdG9yICE9PSAnW10nKVxuXHR7XG5cdFx0dGFibGVbaV0gPSBsaXN0Ll8wO1xuXHRcdGxpc3QgPSBsaXN0Ll8xO1xuXHRcdGkrKztcblxuXHRcdC8vIHRhYmxlIGlzIGZ1bGwsIHNvIHdlIGNhbiBwdXNoIGEgbGVhZiBjb250YWluaW5nIGl0IGludG8gdGhlXG5cdFx0Ly8gbmV4dCBub2RlLlxuXHRcdGlmIChpID09PSBNKVxuXHRcdHtcblx0XHRcdHZhciBsZWFmID0ge1xuXHRcdFx0XHRjdG9yOiAnX0FycmF5Jyxcblx0XHRcdFx0aGVpZ2h0OiAwLFxuXHRcdFx0XHR0YWJsZTogdGFibGVcblx0XHRcdH07XG5cdFx0XHRmcm9tTGlzdFB1c2gobGVhZiwgbm9kZXMpO1xuXHRcdFx0dGFibGUgPSBuZXcgQXJyYXkoTSk7XG5cdFx0XHRpID0gMDtcblx0XHR9XG5cdH1cblxuXHQvLyBNYXliZSB0aGVyZSBpcyBzb21ldGhpbmcgbGVmdCBvbiB0aGUgdGFibGUuXG5cdGlmIChpID4gMClcblx0e1xuXHRcdHZhciBsZWFmID0ge1xuXHRcdFx0Y3RvcjogJ19BcnJheScsXG5cdFx0XHRoZWlnaHQ6IDAsXG5cdFx0XHR0YWJsZTogdGFibGUuc3BsaWNlKDAsIGkpXG5cdFx0fTtcblx0XHRmcm9tTGlzdFB1c2gobGVhZiwgbm9kZXMpO1xuXHR9XG5cblx0Ly8gR28gdGhyb3VnaCBhbGwgb2YgdGhlIG5vZGVzIGFuZCBldmVudHVhbGx5IHB1c2ggdGhlbSBpbnRvIGhpZ2hlciBub2Rlcy5cblx0Zm9yICh2YXIgaCA9IDA7IGggPCBub2Rlcy5sZW5ndGggLSAxOyBoKyspXG5cdHtcblx0XHRpZiAobm9kZXNbaF0udGFibGUubGVuZ3RoID4gMClcblx0XHR7XG5cdFx0XHRmcm9tTGlzdFB1c2gobm9kZXNbaF0sIG5vZGVzKTtcblx0XHR9XG5cdH1cblxuXHR2YXIgaGVhZCA9IG5vZGVzW25vZGVzLmxlbmd0aCAtIDFdO1xuXHRpZiAoaGVhZC5oZWlnaHQgPiAwICYmIGhlYWQudGFibGUubGVuZ3RoID09PSAxKVxuXHR7XG5cdFx0cmV0dXJuIGhlYWQudGFibGVbMF07XG5cdH1cblx0ZWxzZVxuXHR7XG5cdFx0cmV0dXJuIGhlYWQ7XG5cdH1cbn1cblxuLy8gUHVzaCBhIG5vZGUgaW50byBhIGhpZ2hlciBub2RlIGFzIGEgY2hpbGQuXG5mdW5jdGlvbiBmcm9tTGlzdFB1c2godG9QdXNoLCBub2Rlcylcbntcblx0dmFyIGggPSB0b1B1c2guaGVpZ2h0O1xuXG5cdC8vIE1heWJlIHRoZSBub2RlIG9uIHRoaXMgaGVpZ2h0IGRvZXMgbm90IGV4aXN0LlxuXHRpZiAobm9kZXMubGVuZ3RoID09PSBoKVxuXHR7XG5cdFx0dmFyIG5vZGUgPSB7XG5cdFx0XHRjdG9yOiAnX0FycmF5Jyxcblx0XHRcdGhlaWdodDogaCArIDEsXG5cdFx0XHR0YWJsZTogW10sXG5cdFx0XHRsZW5ndGhzOiBbXVxuXHRcdH07XG5cdFx0bm9kZXMucHVzaChub2RlKTtcblx0fVxuXG5cdG5vZGVzW2hdLnRhYmxlLnB1c2godG9QdXNoKTtcblx0dmFyIGxlbiA9IGxlbmd0aCh0b1B1c2gpO1xuXHRpZiAobm9kZXNbaF0ubGVuZ3Rocy5sZW5ndGggPiAwKVxuXHR7XG5cdFx0bGVuICs9IG5vZGVzW2hdLmxlbmd0aHNbbm9kZXNbaF0ubGVuZ3Rocy5sZW5ndGggLSAxXTtcblx0fVxuXHRub2Rlc1toXS5sZW5ndGhzLnB1c2gobGVuKTtcblxuXHRpZiAobm9kZXNbaF0udGFibGUubGVuZ3RoID09PSBNKVxuXHR7XG5cdFx0ZnJvbUxpc3RQdXNoKG5vZGVzW2hdLCBub2Rlcyk7XG5cdFx0bm9kZXNbaF0gPSB7XG5cdFx0XHRjdG9yOiAnX0FycmF5Jyxcblx0XHRcdGhlaWdodDogaCArIDEsXG5cdFx0XHR0YWJsZTogW10sXG5cdFx0XHRsZW5ndGhzOiBbXVxuXHRcdH07XG5cdH1cbn1cblxuLy8gUHVzaGVzIGFuIGl0ZW0gdmlhIHB1c2hfIHRvIHRoZSBib3R0b20gcmlnaHQgb2YgYSB0cmVlLlxuZnVuY3Rpb24gcHVzaChpdGVtLCBhKVxue1xuXHR2YXIgcHVzaGVkID0gcHVzaF8oaXRlbSwgYSk7XG5cdGlmIChwdXNoZWQgIT09IG51bGwpXG5cdHtcblx0XHRyZXR1cm4gcHVzaGVkO1xuXHR9XG5cblx0dmFyIG5ld1RyZWUgPSBjcmVhdGUoaXRlbSwgYS5oZWlnaHQpO1xuXHRyZXR1cm4gc2libGlzZShhLCBuZXdUcmVlKTtcbn1cblxuLy8gUmVjdXJzaXZlbHkgdHJpZXMgdG8gcHVzaCBhbiBpdGVtIHRvIHRoZSBib3R0b20tcmlnaHQgbW9zdFxuLy8gdHJlZSBwb3NzaWJsZS4gSWYgdGhlcmUgaXMgbm8gc3BhY2UgbGVmdCBmb3IgdGhlIGl0ZW0sXG4vLyBudWxsIHdpbGwgYmUgcmV0dXJuZWQuXG5mdW5jdGlvbiBwdXNoXyhpdGVtLCBhKVxue1xuXHQvLyBIYW5kbGUgcmVzdXJzaW9uIHN0b3AgYXQgbGVhZiBsZXZlbC5cblx0aWYgKGEuaGVpZ2h0ID09PSAwKVxuXHR7XG5cdFx0aWYgKGEudGFibGUubGVuZ3RoIDwgTSlcblx0XHR7XG5cdFx0XHR2YXIgbmV3QSA9IHtcblx0XHRcdFx0Y3RvcjogJ19BcnJheScsXG5cdFx0XHRcdGhlaWdodDogMCxcblx0XHRcdFx0dGFibGU6IGEudGFibGUuc2xpY2UoKVxuXHRcdFx0fTtcblx0XHRcdG5ld0EudGFibGUucHVzaChpdGVtKTtcblx0XHRcdHJldHVybiBuZXdBO1xuXHRcdH1cblx0XHRlbHNlXG5cdFx0e1xuXHRcdCAgcmV0dXJuIG51bGw7XG5cdFx0fVxuXHR9XG5cblx0Ly8gUmVjdXJzaXZlbHkgcHVzaFxuXHR2YXIgcHVzaGVkID0gcHVzaF8oaXRlbSwgYm90UmlnaHQoYSkpO1xuXG5cdC8vIFRoZXJlIHdhcyBzcGFjZSBpbiB0aGUgYm90dG9tIHJpZ2h0IHRyZWUsIHNvIHRoZSBzbG90IHdpbGxcblx0Ly8gYmUgdXBkYXRlZC5cblx0aWYgKHB1c2hlZCAhPT0gbnVsbClcblx0e1xuXHRcdHZhciBuZXdBID0gbm9kZUNvcHkoYSk7XG5cdFx0bmV3QS50YWJsZVtuZXdBLnRhYmxlLmxlbmd0aCAtIDFdID0gcHVzaGVkO1xuXHRcdG5ld0EubGVuZ3Roc1tuZXdBLmxlbmd0aHMubGVuZ3RoIC0gMV0rKztcblx0XHRyZXR1cm4gbmV3QTtcblx0fVxuXG5cdC8vIFdoZW4gdGhlcmUgd2FzIG5vIHNwYWNlIGxlZnQsIGNoZWNrIGlmIHRoZXJlIGlzIHNwYWNlIGxlZnRcblx0Ly8gZm9yIGEgbmV3IHNsb3Qgd2l0aCBhIHRyZWUgd2hpY2ggY29udGFpbnMgb25seSB0aGUgaXRlbVxuXHQvLyBhdCB0aGUgYm90dG9tLlxuXHRpZiAoYS50YWJsZS5sZW5ndGggPCBNKVxuXHR7XG5cdFx0dmFyIG5ld1Nsb3QgPSBjcmVhdGUoaXRlbSwgYS5oZWlnaHQgLSAxKTtcblx0XHR2YXIgbmV3QSA9IG5vZGVDb3B5KGEpO1xuXHRcdG5ld0EudGFibGUucHVzaChuZXdTbG90KTtcblx0XHRuZXdBLmxlbmd0aHMucHVzaChuZXdBLmxlbmd0aHNbbmV3QS5sZW5ndGhzLmxlbmd0aCAtIDFdICsgbGVuZ3RoKG5ld1Nsb3QpKTtcblx0XHRyZXR1cm4gbmV3QTtcblx0fVxuXHRlbHNlXG5cdHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufVxuXG4vLyBDb252ZXJ0cyBhbiBhcnJheSBpbnRvIGEgbGlzdCBvZiBlbGVtZW50cy5cbmZ1bmN0aW9uIHRvTGlzdChhKVxue1xuXHRyZXR1cm4gdG9MaXN0XyhfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5OaWwsIGEpO1xufVxuXG5mdW5jdGlvbiB0b0xpc3RfKGxpc3QsIGEpXG57XG5cdGZvciAodmFyIGkgPSBhLnRhYmxlLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxuXHR7XG5cdFx0bGlzdCA9XG5cdFx0XHRhLmhlaWdodCA9PT0gMFxuXHRcdFx0XHQ/IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LkNvbnMoYS50YWJsZVtpXSwgbGlzdClcblx0XHRcdFx0OiB0b0xpc3RfKGxpc3QsIGEudGFibGVbaV0pO1xuXHR9XG5cdHJldHVybiBsaXN0O1xufVxuXG4vLyBNYXBzIGEgZnVuY3Rpb24gb3ZlciB0aGUgZWxlbWVudHMgb2YgYW4gYXJyYXkuXG5mdW5jdGlvbiBtYXAoZiwgYSlcbntcblx0dmFyIG5ld0EgPSB7XG5cdFx0Y3RvcjogJ19BcnJheScsXG5cdFx0aGVpZ2h0OiBhLmhlaWdodCxcblx0XHR0YWJsZTogbmV3IEFycmF5KGEudGFibGUubGVuZ3RoKVxuXHR9O1xuXHRpZiAoYS5oZWlnaHQgPiAwKVxuXHR7XG5cdFx0bmV3QS5sZW5ndGhzID0gYS5sZW5ndGhzO1xuXHR9XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgYS50YWJsZS5sZW5ndGg7IGkrKylcblx0e1xuXHRcdG5ld0EudGFibGVbaV0gPVxuXHRcdFx0YS5oZWlnaHQgPT09IDBcblx0XHRcdFx0PyBmKGEudGFibGVbaV0pXG5cdFx0XHRcdDogbWFwKGYsIGEudGFibGVbaV0pO1xuXHR9XG5cdHJldHVybiBuZXdBO1xufVxuXG4vLyBNYXBzIGEgZnVuY3Rpb24gb3ZlciB0aGUgZWxlbWVudHMgd2l0aCB0aGVpciBpbmRleCBhcyBmaXJzdCBhcmd1bWVudC5cbmZ1bmN0aW9uIGluZGV4ZWRNYXAoZiwgYSlcbntcblx0cmV0dXJuIGluZGV4ZWRNYXBfKGYsIGEsIDApO1xufVxuXG5mdW5jdGlvbiBpbmRleGVkTWFwXyhmLCBhLCBmcm9tKVxue1xuXHR2YXIgbmV3QSA9IHtcblx0XHRjdG9yOiAnX0FycmF5Jyxcblx0XHRoZWlnaHQ6IGEuaGVpZ2h0LFxuXHRcdHRhYmxlOiBuZXcgQXJyYXkoYS50YWJsZS5sZW5ndGgpXG5cdH07XG5cdGlmIChhLmhlaWdodCA+IDApXG5cdHtcblx0XHRuZXdBLmxlbmd0aHMgPSBhLmxlbmd0aHM7XG5cdH1cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhLnRhYmxlLmxlbmd0aDsgaSsrKVxuXHR7XG5cdFx0bmV3QS50YWJsZVtpXSA9XG5cdFx0XHRhLmhlaWdodCA9PT0gMFxuXHRcdFx0XHQ/IEEyKGYsIGZyb20gKyBpLCBhLnRhYmxlW2ldKVxuXHRcdFx0XHQ6IGluZGV4ZWRNYXBfKGYsIGEudGFibGVbaV0sIGkgPT0gMCA/IGZyb20gOiBmcm9tICsgYS5sZW5ndGhzW2kgLSAxXSk7XG5cdH1cblx0cmV0dXJuIG5ld0E7XG59XG5cbmZ1bmN0aW9uIGZvbGRsKGYsIGIsIGEpXG57XG5cdGlmIChhLmhlaWdodCA9PT0gMClcblx0e1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYS50YWJsZS5sZW5ndGg7IGkrKylcblx0XHR7XG5cdFx0XHRiID0gQTIoZiwgYS50YWJsZVtpXSwgYik7XG5cdFx0fVxuXHR9XG5cdGVsc2Vcblx0e1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYS50YWJsZS5sZW5ndGg7IGkrKylcblx0XHR7XG5cdFx0XHRiID0gZm9sZGwoZiwgYiwgYS50YWJsZVtpXSk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBiO1xufVxuXG5mdW5jdGlvbiBmb2xkcihmLCBiLCBhKVxue1xuXHRpZiAoYS5oZWlnaHQgPT09IDApXG5cdHtcblx0XHRmb3IgKHZhciBpID0gYS50YWJsZS5sZW5ndGg7IGktLTsgKVxuXHRcdHtcblx0XHRcdGIgPSBBMihmLCBhLnRhYmxlW2ldLCBiKTtcblx0XHR9XG5cdH1cblx0ZWxzZVxuXHR7XG5cdFx0Zm9yICh2YXIgaSA9IGEudGFibGUubGVuZ3RoOyBpLS07IClcblx0XHR7XG5cdFx0XHRiID0gZm9sZHIoZiwgYiwgYS50YWJsZVtpXSk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBiO1xufVxuXG4vLyBUT0RPOiBjdXJyZW50bHksIGl0IHNsaWNlcyB0aGUgcmlnaHQsIHRoZW4gdGhlIGxlZnQuIFRoaXMgY2FuIGJlXG4vLyBvcHRpbWl6ZWQuXG5mdW5jdGlvbiBzbGljZShmcm9tLCB0bywgYSlcbntcblx0aWYgKGZyb20gPCAwKVxuXHR7XG5cdFx0ZnJvbSArPSBsZW5ndGgoYSk7XG5cdH1cblx0aWYgKHRvIDwgMClcblx0e1xuXHRcdHRvICs9IGxlbmd0aChhKTtcblx0fVxuXHRyZXR1cm4gc2xpY2VMZWZ0KGZyb20sIHNsaWNlUmlnaHQodG8sIGEpKTtcbn1cblxuZnVuY3Rpb24gc2xpY2VSaWdodCh0bywgYSlcbntcblx0aWYgKHRvID09PSBsZW5ndGgoYSkpXG5cdHtcblx0XHRyZXR1cm4gYTtcblx0fVxuXG5cdC8vIEhhbmRsZSBsZWFmIGxldmVsLlxuXHRpZiAoYS5oZWlnaHQgPT09IDApXG5cdHtcblx0XHR2YXIgbmV3QSA9IHsgY3RvcjonX0FycmF5JywgaGVpZ2h0OjAgfTtcblx0XHRuZXdBLnRhYmxlID0gYS50YWJsZS5zbGljZSgwLCB0byk7XG5cdFx0cmV0dXJuIG5ld0E7XG5cdH1cblxuXHQvLyBTbGljZSB0aGUgcmlnaHQgcmVjdXJzaXZlbHkuXG5cdHZhciByaWdodCA9IGdldFNsb3QodG8sIGEpO1xuXHR2YXIgc2xpY2VkID0gc2xpY2VSaWdodCh0byAtIChyaWdodCA+IDAgPyBhLmxlbmd0aHNbcmlnaHQgLSAxXSA6IDApLCBhLnRhYmxlW3JpZ2h0XSk7XG5cblx0Ly8gTWF5YmUgdGhlIGEgbm9kZSBpcyBub3QgZXZlbiBuZWVkZWQsIGFzIHNsaWNlZCBjb250YWlucyB0aGUgd2hvbGUgc2xpY2UuXG5cdGlmIChyaWdodCA9PT0gMClcblx0e1xuXHRcdHJldHVybiBzbGljZWQ7XG5cdH1cblxuXHQvLyBDcmVhdGUgbmV3IG5vZGUuXG5cdHZhciBuZXdBID0ge1xuXHRcdGN0b3I6ICdfQXJyYXknLFxuXHRcdGhlaWdodDogYS5oZWlnaHQsXG5cdFx0dGFibGU6IGEudGFibGUuc2xpY2UoMCwgcmlnaHQpLFxuXHRcdGxlbmd0aHM6IGEubGVuZ3Rocy5zbGljZSgwLCByaWdodClcblx0fTtcblx0aWYgKHNsaWNlZC50YWJsZS5sZW5ndGggPiAwKVxuXHR7XG5cdFx0bmV3QS50YWJsZVtyaWdodF0gPSBzbGljZWQ7XG5cdFx0bmV3QS5sZW5ndGhzW3JpZ2h0XSA9IGxlbmd0aChzbGljZWQpICsgKHJpZ2h0ID4gMCA/IG5ld0EubGVuZ3Roc1tyaWdodCAtIDFdIDogMCk7XG5cdH1cblx0cmV0dXJuIG5ld0E7XG59XG5cbmZ1bmN0aW9uIHNsaWNlTGVmdChmcm9tLCBhKVxue1xuXHRpZiAoZnJvbSA9PT0gMClcblx0e1xuXHRcdHJldHVybiBhO1xuXHR9XG5cblx0Ly8gSGFuZGxlIGxlYWYgbGV2ZWwuXG5cdGlmIChhLmhlaWdodCA9PT0gMClcblx0e1xuXHRcdHZhciBuZXdBID0geyBjdG9yOidfQXJyYXknLCBoZWlnaHQ6MCB9O1xuXHRcdG5ld0EudGFibGUgPSBhLnRhYmxlLnNsaWNlKGZyb20sIGEudGFibGUubGVuZ3RoICsgMSk7XG5cdFx0cmV0dXJuIG5ld0E7XG5cdH1cblxuXHQvLyBTbGljZSB0aGUgbGVmdCByZWN1cnNpdmVseS5cblx0dmFyIGxlZnQgPSBnZXRTbG90KGZyb20sIGEpO1xuXHR2YXIgc2xpY2VkID0gc2xpY2VMZWZ0KGZyb20gLSAobGVmdCA+IDAgPyBhLmxlbmd0aHNbbGVmdCAtIDFdIDogMCksIGEudGFibGVbbGVmdF0pO1xuXG5cdC8vIE1heWJlIHRoZSBhIG5vZGUgaXMgbm90IGV2ZW4gbmVlZGVkLCBhcyBzbGljZWQgY29udGFpbnMgdGhlIHdob2xlIHNsaWNlLlxuXHRpZiAobGVmdCA9PT0gYS50YWJsZS5sZW5ndGggLSAxKVxuXHR7XG5cdFx0cmV0dXJuIHNsaWNlZDtcblx0fVxuXG5cdC8vIENyZWF0ZSBuZXcgbm9kZS5cblx0dmFyIG5ld0EgPSB7XG5cdFx0Y3RvcjogJ19BcnJheScsXG5cdFx0aGVpZ2h0OiBhLmhlaWdodCxcblx0XHR0YWJsZTogYS50YWJsZS5zbGljZShsZWZ0LCBhLnRhYmxlLmxlbmd0aCArIDEpLFxuXHRcdGxlbmd0aHM6IG5ldyBBcnJheShhLnRhYmxlLmxlbmd0aCAtIGxlZnQpXG5cdH07XG5cdG5ld0EudGFibGVbMF0gPSBzbGljZWQ7XG5cdHZhciBsZW4gPSAwO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IG5ld0EudGFibGUubGVuZ3RoOyBpKyspXG5cdHtcblx0XHRsZW4gKz0gbGVuZ3RoKG5ld0EudGFibGVbaV0pO1xuXHRcdG5ld0EubGVuZ3Roc1tpXSA9IGxlbjtcblx0fVxuXG5cdHJldHVybiBuZXdBO1xufVxuXG4vLyBBcHBlbmRzIHR3byB0cmVlcy5cbmZ1bmN0aW9uIGFwcGVuZChhLGIpXG57XG5cdGlmIChhLnRhYmxlLmxlbmd0aCA9PT0gMClcblx0e1xuXHRcdHJldHVybiBiO1xuXHR9XG5cdGlmIChiLnRhYmxlLmxlbmd0aCA9PT0gMClcblx0e1xuXHRcdHJldHVybiBhO1xuXHR9XG5cblx0dmFyIGMgPSBhcHBlbmRfKGEsIGIpO1xuXG5cdC8vIENoZWNrIGlmIGJvdGggbm9kZXMgY2FuIGJlIGNydW5zaGVkIHRvZ2V0aGVyLlxuXHRpZiAoY1swXS50YWJsZS5sZW5ndGggKyBjWzFdLnRhYmxlLmxlbmd0aCA8PSBNKVxuXHR7XG5cdFx0aWYgKGNbMF0udGFibGUubGVuZ3RoID09PSAwKVxuXHRcdHtcblx0XHRcdHJldHVybiBjWzFdO1xuXHRcdH1cblx0XHRpZiAoY1sxXS50YWJsZS5sZW5ndGggPT09IDApXG5cdFx0e1xuXHRcdFx0cmV0dXJuIGNbMF07XG5cdFx0fVxuXG5cdFx0Ly8gQWRqdXN0IC50YWJsZSBhbmQgLmxlbmd0aHNcblx0XHRjWzBdLnRhYmxlID0gY1swXS50YWJsZS5jb25jYXQoY1sxXS50YWJsZSk7XG5cdFx0aWYgKGNbMF0uaGVpZ2h0ID4gMClcblx0XHR7XG5cdFx0XHR2YXIgbGVuID0gbGVuZ3RoKGNbMF0pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjWzFdLmxlbmd0aHMubGVuZ3RoOyBpKyspXG5cdFx0XHR7XG5cdFx0XHRcdGNbMV0ubGVuZ3Roc1tpXSArPSBsZW47XG5cdFx0XHR9XG5cdFx0XHRjWzBdLmxlbmd0aHMgPSBjWzBdLmxlbmd0aHMuY29uY2F0KGNbMV0ubGVuZ3Rocyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNbMF07XG5cdH1cblxuXHRpZiAoY1swXS5oZWlnaHQgPiAwKVxuXHR7XG5cdFx0dmFyIHRvUmVtb3ZlID0gY2FsY1RvUmVtb3ZlKGEsIGIpO1xuXHRcdGlmICh0b1JlbW92ZSA+IEUpXG5cdFx0e1xuXHRcdFx0YyA9IHNodWZmbGUoY1swXSwgY1sxXSwgdG9SZW1vdmUpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzaWJsaXNlKGNbMF0sIGNbMV0pO1xufVxuXG4vLyBSZXR1cm5zIGFuIGFycmF5IG9mIHR3byBub2RlczsgcmlnaHQgYW5kIGxlZnQuIE9uZSBub2RlIF9tYXlfIGJlIGVtcHR5LlxuZnVuY3Rpb24gYXBwZW5kXyhhLCBiKVxue1xuXHRpZiAoYS5oZWlnaHQgPT09IDAgJiYgYi5oZWlnaHQgPT09IDApXG5cdHtcblx0XHRyZXR1cm4gW2EsIGJdO1xuXHR9XG5cblx0aWYgKGEuaGVpZ2h0ICE9PSAxIHx8IGIuaGVpZ2h0ICE9PSAxKVxuXHR7XG5cdFx0aWYgKGEuaGVpZ2h0ID09PSBiLmhlaWdodClcblx0XHR7XG5cdFx0XHRhID0gbm9kZUNvcHkoYSk7XG5cdFx0XHRiID0gbm9kZUNvcHkoYik7XG5cdFx0XHR2YXIgYXBwZW5kZWQgPSBhcHBlbmRfKGJvdFJpZ2h0KGEpLCBib3RMZWZ0KGIpKTtcblxuXHRcdFx0aW5zZXJ0UmlnaHQoYSwgYXBwZW5kZWRbMV0pO1xuXHRcdFx0aW5zZXJ0TGVmdChiLCBhcHBlbmRlZFswXSk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKGEuaGVpZ2h0ID4gYi5oZWlnaHQpXG5cdFx0e1xuXHRcdFx0YSA9IG5vZGVDb3B5KGEpO1xuXHRcdFx0dmFyIGFwcGVuZGVkID0gYXBwZW5kXyhib3RSaWdodChhKSwgYik7XG5cblx0XHRcdGluc2VydFJpZ2h0KGEsIGFwcGVuZGVkWzBdKTtcblx0XHRcdGIgPSBwYXJlbnRpc2UoYXBwZW5kZWRbMV0sIGFwcGVuZGVkWzFdLmhlaWdodCArIDEpO1xuXHRcdH1cblx0XHRlbHNlXG5cdFx0e1xuXHRcdFx0YiA9IG5vZGVDb3B5KGIpO1xuXHRcdFx0dmFyIGFwcGVuZGVkID0gYXBwZW5kXyhhLCBib3RMZWZ0KGIpKTtcblxuXHRcdFx0dmFyIGxlZnQgPSBhcHBlbmRlZFswXS50YWJsZS5sZW5ndGggPT09IDAgPyAwIDogMTtcblx0XHRcdHZhciByaWdodCA9IGxlZnQgPT09IDAgPyAxIDogMDtcblx0XHRcdGluc2VydExlZnQoYiwgYXBwZW5kZWRbbGVmdF0pO1xuXHRcdFx0YSA9IHBhcmVudGlzZShhcHBlbmRlZFtyaWdodF0sIGFwcGVuZGVkW3JpZ2h0XS5oZWlnaHQgKyAxKTtcblx0XHR9XG5cdH1cblxuXHQvLyBDaGVjayBpZiBiYWxhbmNpbmcgaXMgbmVlZGVkIGFuZCByZXR1cm4gYmFzZWQgb24gdGhhdC5cblx0aWYgKGEudGFibGUubGVuZ3RoID09PSAwIHx8IGIudGFibGUubGVuZ3RoID09PSAwKVxuXHR7XG5cdFx0cmV0dXJuIFthLCBiXTtcblx0fVxuXG5cdHZhciB0b1JlbW92ZSA9IGNhbGNUb1JlbW92ZShhLCBiKTtcblx0aWYgKHRvUmVtb3ZlIDw9IEUpXG5cdHtcblx0XHRyZXR1cm4gW2EsIGJdO1xuXHR9XG5cdHJldHVybiBzaHVmZmxlKGEsIGIsIHRvUmVtb3ZlKTtcbn1cblxuLy8gSGVscGVyZnVuY3Rpb25zIGZvciBhcHBlbmRfLiBSZXBsYWNlcyBhIGNoaWxkIG5vZGUgYXQgdGhlIHNpZGUgb2YgdGhlIHBhcmVudC5cbmZ1bmN0aW9uIGluc2VydFJpZ2h0KHBhcmVudCwgbm9kZSlcbntcblx0dmFyIGluZGV4ID0gcGFyZW50LnRhYmxlLmxlbmd0aCAtIDE7XG5cdHBhcmVudC50YWJsZVtpbmRleF0gPSBub2RlO1xuXHRwYXJlbnQubGVuZ3Roc1tpbmRleF0gPSBsZW5ndGgobm9kZSk7XG5cdHBhcmVudC5sZW5ndGhzW2luZGV4XSArPSBpbmRleCA+IDAgPyBwYXJlbnQubGVuZ3Roc1tpbmRleCAtIDFdIDogMDtcbn1cblxuZnVuY3Rpb24gaW5zZXJ0TGVmdChwYXJlbnQsIG5vZGUpXG57XG5cdGlmIChub2RlLnRhYmxlLmxlbmd0aCA+IDApXG5cdHtcblx0XHRwYXJlbnQudGFibGVbMF0gPSBub2RlO1xuXHRcdHBhcmVudC5sZW5ndGhzWzBdID0gbGVuZ3RoKG5vZGUpO1xuXG5cdFx0dmFyIGxlbiA9IGxlbmd0aChwYXJlbnQudGFibGVbMF0pO1xuXHRcdGZvciAodmFyIGkgPSAxOyBpIDwgcGFyZW50Lmxlbmd0aHMubGVuZ3RoOyBpKyspXG5cdFx0e1xuXHRcdFx0bGVuICs9IGxlbmd0aChwYXJlbnQudGFibGVbaV0pO1xuXHRcdFx0cGFyZW50Lmxlbmd0aHNbaV0gPSBsZW47XG5cdFx0fVxuXHR9XG5cdGVsc2Vcblx0e1xuXHRcdHBhcmVudC50YWJsZS5zaGlmdCgpO1xuXHRcdGZvciAodmFyIGkgPSAxOyBpIDwgcGFyZW50Lmxlbmd0aHMubGVuZ3RoOyBpKyspXG5cdFx0e1xuXHRcdFx0cGFyZW50Lmxlbmd0aHNbaV0gPSBwYXJlbnQubGVuZ3Roc1tpXSAtIHBhcmVudC5sZW5ndGhzWzBdO1xuXHRcdH1cblx0XHRwYXJlbnQubGVuZ3Rocy5zaGlmdCgpO1xuXHR9XG59XG5cbi8vIFJldHVybnMgdGhlIGV4dHJhIHNlYXJjaCBzdGVwcyBmb3IgRS4gUmVmZXIgdG8gdGhlIHBhcGVyLlxuZnVuY3Rpb24gY2FsY1RvUmVtb3ZlKGEsIGIpXG57XG5cdHZhciBzdWJMZW5ndGhzID0gMDtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhLnRhYmxlLmxlbmd0aDsgaSsrKVxuXHR7XG5cdFx0c3ViTGVuZ3RocyArPSBhLnRhYmxlW2ldLnRhYmxlLmxlbmd0aDtcblx0fVxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGIudGFibGUubGVuZ3RoOyBpKyspXG5cdHtcblx0XHRzdWJMZW5ndGhzICs9IGIudGFibGVbaV0udGFibGUubGVuZ3RoO1xuXHR9XG5cblx0dmFyIHRvUmVtb3ZlID0gYS50YWJsZS5sZW5ndGggKyBiLnRhYmxlLmxlbmd0aDtcblx0cmV0dXJuIHRvUmVtb3ZlIC0gKE1hdGguZmxvb3IoKHN1Ykxlbmd0aHMgLSAxKSAvIE0pICsgMSk7XG59XG5cbi8vIGdldDIsIHNldDIgYW5kIHNhdmVTbG90IGFyZSBoZWxwZXJzIGZvciBhY2Nlc3NpbmcgZWxlbWVudHMgb3ZlciB0d28gYXJyYXlzLlxuZnVuY3Rpb24gZ2V0MihhLCBiLCBpbmRleClcbntcblx0cmV0dXJuIGluZGV4IDwgYS5sZW5ndGhcblx0XHQ/IGFbaW5kZXhdXG5cdFx0OiBiW2luZGV4IC0gYS5sZW5ndGhdO1xufVxuXG5mdW5jdGlvbiBzZXQyKGEsIGIsIGluZGV4LCB2YWx1ZSlcbntcblx0aWYgKGluZGV4IDwgYS5sZW5ndGgpXG5cdHtcblx0XHRhW2luZGV4XSA9IHZhbHVlO1xuXHR9XG5cdGVsc2Vcblx0e1xuXHRcdGJbaW5kZXggLSBhLmxlbmd0aF0gPSB2YWx1ZTtcblx0fVxufVxuXG5mdW5jdGlvbiBzYXZlU2xvdChhLCBiLCBpbmRleCwgc2xvdClcbntcblx0c2V0MihhLnRhYmxlLCBiLnRhYmxlLCBpbmRleCwgc2xvdCk7XG5cblx0dmFyIGwgPSAoaW5kZXggPT09IDAgfHwgaW5kZXggPT09IGEubGVuZ3Rocy5sZW5ndGgpXG5cdFx0PyAwXG5cdFx0OiBnZXQyKGEubGVuZ3RocywgYS5sZW5ndGhzLCBpbmRleCAtIDEpO1xuXG5cdHNldDIoYS5sZW5ndGhzLCBiLmxlbmd0aHMsIGluZGV4LCBsICsgbGVuZ3RoKHNsb3QpKTtcbn1cblxuLy8gQ3JlYXRlcyBhIG5vZGUgb3IgbGVhZiB3aXRoIGEgZ2l2ZW4gbGVuZ3RoIGF0IHRoZWlyIGFycmF5cyBmb3IgcGVyZm9tYW5jZS5cbi8vIElzIG9ubHkgdXNlZCBieSBzaHVmZmxlLlxuZnVuY3Rpb24gY3JlYXRlTm9kZShoLCBsZW5ndGgpXG57XG5cdGlmIChsZW5ndGggPCAwKVxuXHR7XG5cdFx0bGVuZ3RoID0gMDtcblx0fVxuXHR2YXIgYSA9IHtcblx0XHRjdG9yOiAnX0FycmF5Jyxcblx0XHRoZWlnaHQ6IGgsXG5cdFx0dGFibGU6IG5ldyBBcnJheShsZW5ndGgpXG5cdH07XG5cdGlmIChoID4gMClcblx0e1xuXHRcdGEubGVuZ3RocyA9IG5ldyBBcnJheShsZW5ndGgpO1xuXHR9XG5cdHJldHVybiBhO1xufVxuXG4vLyBSZXR1cm5zIGFuIGFycmF5IG9mIHR3byBiYWxhbmNlZCBub2Rlcy5cbmZ1bmN0aW9uIHNodWZmbGUoYSwgYiwgdG9SZW1vdmUpXG57XG5cdHZhciBuZXdBID0gY3JlYXRlTm9kZShhLmhlaWdodCwgTWF0aC5taW4oTSwgYS50YWJsZS5sZW5ndGggKyBiLnRhYmxlLmxlbmd0aCAtIHRvUmVtb3ZlKSk7XG5cdHZhciBuZXdCID0gY3JlYXRlTm9kZShhLmhlaWdodCwgbmV3QS50YWJsZS5sZW5ndGggLSAoYS50YWJsZS5sZW5ndGggKyBiLnRhYmxlLmxlbmd0aCAtIHRvUmVtb3ZlKSk7XG5cblx0Ly8gU2tpcCB0aGUgc2xvdHMgd2l0aCBzaXplIE0uIE1vcmUgcHJlY2lzZTogY29weSB0aGUgc2xvdCByZWZlcmVuY2VzXG5cdC8vIHRvIHRoZSBuZXcgbm9kZVxuXHR2YXIgcmVhZCA9IDA7XG5cdHdoaWxlIChnZXQyKGEudGFibGUsIGIudGFibGUsIHJlYWQpLnRhYmxlLmxlbmd0aCAlIE0gPT09IDApXG5cdHtcblx0XHRzZXQyKG5ld0EudGFibGUsIG5ld0IudGFibGUsIHJlYWQsIGdldDIoYS50YWJsZSwgYi50YWJsZSwgcmVhZCkpO1xuXHRcdHNldDIobmV3QS5sZW5ndGhzLCBuZXdCLmxlbmd0aHMsIHJlYWQsIGdldDIoYS5sZW5ndGhzLCBiLmxlbmd0aHMsIHJlYWQpKTtcblx0XHRyZWFkKys7XG5cdH1cblxuXHQvLyBQdWxsaW5nIGl0ZW1zIGZyb20gbGVmdCB0byByaWdodCwgY2FjaGluZyBpbiBhIHNsb3QgYmVmb3JlIHdyaXRpbmdcblx0Ly8gaXQgaW50byB0aGUgbmV3IG5vZGVzLlxuXHR2YXIgd3JpdGUgPSByZWFkO1xuXHR2YXIgc2xvdCA9IG5ldyBjcmVhdGVOb2RlKGEuaGVpZ2h0IC0gMSwgMCk7XG5cdHZhciBmcm9tID0gMDtcblxuXHQvLyBJZiB0aGUgY3VycmVudCBzbG90IGlzIHN0aWxsIGNvbnRhaW5pbmcgZGF0YSwgdGhlbiB0aGVyZSB3aWxsIGJlIGF0XG5cdC8vIGxlYXN0IG9uZSBtb3JlIHdyaXRlLCBzbyB3ZSBkbyBub3QgYnJlYWsgdGhpcyBsb29wIHlldC5cblx0d2hpbGUgKHJlYWQgLSB3cml0ZSAtIChzbG90LnRhYmxlLmxlbmd0aCA+IDAgPyAxIDogMCkgPCB0b1JlbW92ZSlcblx0e1xuXHRcdC8vIEZpbmQgb3V0IHRoZSBtYXggcG9zc2libGUgaXRlbXMgZm9yIGNvcHlpbmcuXG5cdFx0dmFyIHNvdXJjZSA9IGdldDIoYS50YWJsZSwgYi50YWJsZSwgcmVhZCk7XG5cdFx0dmFyIHRvID0gTWF0aC5taW4oTSAtIHNsb3QudGFibGUubGVuZ3RoLCBzb3VyY2UudGFibGUubGVuZ3RoKTtcblxuXHRcdC8vIENvcHkgYW5kIGFkanVzdCBzaXplIHRhYmxlLlxuXHRcdHNsb3QudGFibGUgPSBzbG90LnRhYmxlLmNvbmNhdChzb3VyY2UudGFibGUuc2xpY2UoZnJvbSwgdG8pKTtcblx0XHRpZiAoc2xvdC5oZWlnaHQgPiAwKVxuXHRcdHtcblx0XHRcdHZhciBsZW4gPSBzbG90Lmxlbmd0aHMubGVuZ3RoO1xuXHRcdFx0Zm9yICh2YXIgaSA9IGxlbjsgaSA8IGxlbiArIHRvIC0gZnJvbTsgaSsrKVxuXHRcdFx0e1xuXHRcdFx0XHRzbG90Lmxlbmd0aHNbaV0gPSBsZW5ndGgoc2xvdC50YWJsZVtpXSk7XG5cdFx0XHRcdHNsb3QubGVuZ3Roc1tpXSArPSAoaSA+IDAgPyBzbG90Lmxlbmd0aHNbaSAtIDFdIDogMCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZnJvbSArPSB0bztcblxuXHRcdC8vIE9ubHkgcHJvY2VlZCB0byBuZXh0IHNsb3RzW2ldIGlmIHRoZSBjdXJyZW50IG9uZSB3YXNcblx0XHQvLyBmdWxseSBjb3BpZWQuXG5cdFx0aWYgKHNvdXJjZS50YWJsZS5sZW5ndGggPD0gdG8pXG5cdFx0e1xuXHRcdFx0cmVhZCsrOyBmcm9tID0gMDtcblx0XHR9XG5cblx0XHQvLyBPbmx5IGNyZWF0ZSBhIG5ldyBzbG90IGlmIHRoZSBjdXJyZW50IG9uZSBpcyBmaWxsZWQgdXAuXG5cdFx0aWYgKHNsb3QudGFibGUubGVuZ3RoID09PSBNKVxuXHRcdHtcblx0XHRcdHNhdmVTbG90KG5ld0EsIG5ld0IsIHdyaXRlLCBzbG90KTtcblx0XHRcdHNsb3QgPSBjcmVhdGVOb2RlKGEuaGVpZ2h0IC0gMSwgMCk7XG5cdFx0XHR3cml0ZSsrO1xuXHRcdH1cblx0fVxuXG5cdC8vIENsZWFudXAgYWZ0ZXIgdGhlIGxvb3AuIENvcHkgdGhlIGxhc3Qgc2xvdCBpbnRvIHRoZSBuZXcgbm9kZXMuXG5cdGlmIChzbG90LnRhYmxlLmxlbmd0aCA+IDApXG5cdHtcblx0XHRzYXZlU2xvdChuZXdBLCBuZXdCLCB3cml0ZSwgc2xvdCk7XG5cdFx0d3JpdGUrKztcblx0fVxuXG5cdC8vIFNoaWZ0IHRoZSB1bnRvdWNoZWQgc2xvdHMgdG8gdGhlIGxlZnRcblx0d2hpbGUgKHJlYWQgPCBhLnRhYmxlLmxlbmd0aCArIGIudGFibGUubGVuZ3RoIClcblx0e1xuXHRcdHNhdmVTbG90KG5ld0EsIG5ld0IsIHdyaXRlLCBnZXQyKGEudGFibGUsIGIudGFibGUsIHJlYWQpKTtcblx0XHRyZWFkKys7XG5cdFx0d3JpdGUrKztcblx0fVxuXG5cdHJldHVybiBbbmV3QSwgbmV3Ql07XG59XG5cbi8vIE5hdmlnYXRpb24gZnVuY3Rpb25zXG5mdW5jdGlvbiBib3RSaWdodChhKVxue1xuXHRyZXR1cm4gYS50YWJsZVthLnRhYmxlLmxlbmd0aCAtIDFdO1xufVxuZnVuY3Rpb24gYm90TGVmdChhKVxue1xuXHRyZXR1cm4gYS50YWJsZVswXTtcbn1cblxuLy8gQ29waWVzIGEgbm9kZSBmb3IgdXBkYXRpbmcuIE5vdGUgdGhhdCB5b3Ugc2hvdWxkIG5vdCB1c2UgdGhpcyBpZlxuLy8gb25seSB1cGRhdGluZyBvbmx5IG9uZSBvZiBcInRhYmxlXCIgb3IgXCJsZW5ndGhzXCIgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMuXG5mdW5jdGlvbiBub2RlQ29weShhKVxue1xuXHR2YXIgbmV3QSA9IHtcblx0XHRjdG9yOiAnX0FycmF5Jyxcblx0XHRoZWlnaHQ6IGEuaGVpZ2h0LFxuXHRcdHRhYmxlOiBhLnRhYmxlLnNsaWNlKClcblx0fTtcblx0aWYgKGEuaGVpZ2h0ID4gMClcblx0e1xuXHRcdG5ld0EubGVuZ3RocyA9IGEubGVuZ3Rocy5zbGljZSgpO1xuXHR9XG5cdHJldHVybiBuZXdBO1xufVxuXG4vLyBSZXR1cm5zIGhvdyBtYW55IGl0ZW1zIGFyZSBpbiB0aGUgdHJlZS5cbmZ1bmN0aW9uIGxlbmd0aChhcnJheSlcbntcblx0aWYgKGFycmF5LmhlaWdodCA9PT0gMClcblx0e1xuXHRcdHJldHVybiBhcnJheS50YWJsZS5sZW5ndGg7XG5cdH1cblx0ZWxzZVxuXHR7XG5cdFx0cmV0dXJuIGFycmF5Lmxlbmd0aHNbYXJyYXkubGVuZ3Rocy5sZW5ndGggLSAxXTtcblx0fVxufVxuXG4vLyBDYWxjdWxhdGVzIGluIHdoaWNoIHNsb3Qgb2YgXCJ0YWJsZVwiIHRoZSBpdGVtIHByb2JhYmx5IGlzLCB0aGVuXG4vLyBmaW5kIHRoZSBleGFjdCBzbG90IHZpYSBmb3J3YXJkIHNlYXJjaGluZyBpbiAgXCJsZW5ndGhzXCIuIFJldHVybnMgdGhlIGluZGV4LlxuZnVuY3Rpb24gZ2V0U2xvdChpLCBhKVxue1xuXHR2YXIgc2xvdCA9IGkgPj4gKDUgKiBhLmhlaWdodCk7XG5cdHdoaWxlIChhLmxlbmd0aHNbc2xvdF0gPD0gaSlcblx0e1xuXHRcdHNsb3QrKztcblx0fVxuXHRyZXR1cm4gc2xvdDtcbn1cblxuLy8gUmVjdXJzaXZlbHkgY3JlYXRlcyBhIHRyZWUgd2l0aCBhIGdpdmVuIGhlaWdodCBjb250YWluaW5nXG4vLyBvbmx5IHRoZSBnaXZlbiBpdGVtLlxuZnVuY3Rpb24gY3JlYXRlKGl0ZW0sIGgpXG57XG5cdGlmIChoID09PSAwKVxuXHR7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGN0b3I6ICdfQXJyYXknLFxuXHRcdFx0aGVpZ2h0OiAwLFxuXHRcdFx0dGFibGU6IFtpdGVtXVxuXHRcdH07XG5cdH1cblx0cmV0dXJuIHtcblx0XHRjdG9yOiAnX0FycmF5Jyxcblx0XHRoZWlnaHQ6IGgsXG5cdFx0dGFibGU6IFtjcmVhdGUoaXRlbSwgaCAtIDEpXSxcblx0XHRsZW5ndGhzOiBbMV1cblx0fTtcbn1cblxuLy8gUmVjdXJzaXZlbHkgY3JlYXRlcyBhIHRyZWUgdGhhdCBjb250YWlucyB0aGUgZ2l2ZW4gdHJlZS5cbmZ1bmN0aW9uIHBhcmVudGlzZSh0cmVlLCBoKVxue1xuXHRpZiAoaCA9PT0gdHJlZS5oZWlnaHQpXG5cdHtcblx0XHRyZXR1cm4gdHJlZTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0Y3RvcjogJ19BcnJheScsXG5cdFx0aGVpZ2h0OiBoLFxuXHRcdHRhYmxlOiBbcGFyZW50aXNlKHRyZWUsIGggLSAxKV0sXG5cdFx0bGVuZ3RoczogW2xlbmd0aCh0cmVlKV1cblx0fTtcbn1cblxuLy8gRW1waGFzaXplcyBibG9vZCBicm90aGVyaG9vZCBiZW5lYXRoIHR3byB0cmVlcy5cbmZ1bmN0aW9uIHNpYmxpc2UoYSwgYilcbntcblx0cmV0dXJuIHtcblx0XHRjdG9yOiAnX0FycmF5Jyxcblx0XHRoZWlnaHQ6IGEuaGVpZ2h0ICsgMSxcblx0XHR0YWJsZTogW2EsIGJdLFxuXHRcdGxlbmd0aHM6IFtsZW5ndGgoYSksIGxlbmd0aChhKSArIGxlbmd0aChiKV1cblx0fTtcbn1cblxuZnVuY3Rpb24gdG9KU0FycmF5KGEpXG57XG5cdHZhciBqc0FycmF5ID0gbmV3IEFycmF5KGxlbmd0aChhKSk7XG5cdHRvSlNBcnJheV8oanNBcnJheSwgMCwgYSk7XG5cdHJldHVybiBqc0FycmF5O1xufVxuXG5mdW5jdGlvbiB0b0pTQXJyYXlfKGpzQXJyYXksIGksIGEpXG57XG5cdGZvciAodmFyIHQgPSAwOyB0IDwgYS50YWJsZS5sZW5ndGg7IHQrKylcblx0e1xuXHRcdGlmIChhLmhlaWdodCA9PT0gMClcblx0XHR7XG5cdFx0XHRqc0FycmF5W2kgKyB0XSA9IGEudGFibGVbdF07XG5cdFx0fVxuXHRcdGVsc2Vcblx0XHR7XG5cdFx0XHR2YXIgaW5jID0gdCA9PT0gMCA/IDAgOiBhLmxlbmd0aHNbdCAtIDFdO1xuXHRcdFx0dG9KU0FycmF5Xyhqc0FycmF5LCBpICsgaW5jLCBhLnRhYmxlW3RdKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gZnJvbUpTQXJyYXkoanNBcnJheSlcbntcblx0aWYgKGpzQXJyYXkubGVuZ3RoID09PSAwKVxuXHR7XG5cdFx0cmV0dXJuIGVtcHR5O1xuXHR9XG5cdHZhciBoID0gTWF0aC5mbG9vcihNYXRoLmxvZyhqc0FycmF5Lmxlbmd0aCkgLyBNYXRoLmxvZyhNKSk7XG5cdHJldHVybiBmcm9tSlNBcnJheV8oanNBcnJheSwgaCwgMCwganNBcnJheS5sZW5ndGgpO1xufVxuXG5mdW5jdGlvbiBmcm9tSlNBcnJheV8oanNBcnJheSwgaCwgZnJvbSwgdG8pXG57XG5cdGlmIChoID09PSAwKVxuXHR7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGN0b3I6ICdfQXJyYXknLFxuXHRcdFx0aGVpZ2h0OiAwLFxuXHRcdFx0dGFibGU6IGpzQXJyYXkuc2xpY2UoZnJvbSwgdG8pXG5cdFx0fTtcblx0fVxuXG5cdHZhciBzdGVwID0gTWF0aC5wb3coTSwgaCk7XG5cdHZhciB0YWJsZSA9IG5ldyBBcnJheShNYXRoLmNlaWwoKHRvIC0gZnJvbSkgLyBzdGVwKSk7XG5cdHZhciBsZW5ndGhzID0gbmV3IEFycmF5KHRhYmxlLmxlbmd0aCk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdGFibGUubGVuZ3RoOyBpKyspXG5cdHtcblx0XHR0YWJsZVtpXSA9IGZyb21KU0FycmF5Xyhqc0FycmF5LCBoIC0gMSwgZnJvbSArIChpICogc3RlcCksIE1hdGgubWluKGZyb20gKyAoKGkgKyAxKSAqIHN0ZXApLCB0bykpO1xuXHRcdGxlbmd0aHNbaV0gPSBsZW5ndGgodGFibGVbaV0pICsgKGkgPiAwID8gbGVuZ3Roc1tpIC0gMV0gOiAwKTtcblx0fVxuXHRyZXR1cm4ge1xuXHRcdGN0b3I6ICdfQXJyYXknLFxuXHRcdGhlaWdodDogaCxcblx0XHR0YWJsZTogdGFibGUsXG5cdFx0bGVuZ3RoczogbGVuZ3Roc1xuXHR9O1xufVxuXG5yZXR1cm4ge1xuXHRlbXB0eTogZW1wdHksXG5cdGZyb21MaXN0OiBmcm9tTGlzdCxcblx0dG9MaXN0OiB0b0xpc3QsXG5cdGluaXRpYWxpemU6IEYyKGluaXRpYWxpemUpLFxuXHRhcHBlbmQ6IEYyKGFwcGVuZCksXG5cdHB1c2g6IEYyKHB1c2gpLFxuXHRzbGljZTogRjMoc2xpY2UpLFxuXHRnZXQ6IEYyKGdldCksXG5cdHNldDogRjMoc2V0KSxcblx0bWFwOiBGMihtYXApLFxuXHRpbmRleGVkTWFwOiBGMihpbmRleGVkTWFwKSxcblx0Zm9sZGw6IEYzKGZvbGRsKSxcblx0Zm9sZHI6IEYzKGZvbGRyKSxcblx0bGVuZ3RoOiBsZW5ndGgsXG5cblx0dG9KU0FycmF5OiB0b0pTQXJyYXksXG5cdGZyb21KU0FycmF5OiBmcm9tSlNBcnJheVxufTtcblxufSgpO1xuLy9pbXBvcnQgTmF0aXZlLlV0aWxzIC8vXG5cbnZhciBfZWxtX2xhbmckY29yZSROYXRpdmVfQmFzaWNzID0gZnVuY3Rpb24oKSB7XG5cbmZ1bmN0aW9uIGRpdihhLCBiKVxue1xuXHRyZXR1cm4gKGEgLyBiKSB8IDA7XG59XG5mdW5jdGlvbiByZW0oYSwgYilcbntcblx0cmV0dXJuIGEgJSBiO1xufVxuZnVuY3Rpb24gbW9kKGEsIGIpXG57XG5cdGlmIChiID09PSAwKVxuXHR7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgcGVyZm9ybSBtb2QgMC4gRGl2aXNpb24gYnkgemVybyBlcnJvci4nKTtcblx0fVxuXHR2YXIgciA9IGEgJSBiO1xuXHR2YXIgbSA9IGEgPT09IDAgPyAwIDogKGIgPiAwID8gKGEgPj0gMCA/IHIgOiByICsgYikgOiAtbW9kKC1hLCAtYikpO1xuXG5cdHJldHVybiBtID09PSBiID8gMCA6IG07XG59XG5mdW5jdGlvbiBsb2dCYXNlKGJhc2UsIG4pXG57XG5cdHJldHVybiBNYXRoLmxvZyhuKSAvIE1hdGgubG9nKGJhc2UpO1xufVxuZnVuY3Rpb24gbmVnYXRlKG4pXG57XG5cdHJldHVybiAtbjtcbn1cbmZ1bmN0aW9uIGFicyhuKVxue1xuXHRyZXR1cm4gbiA8IDAgPyAtbiA6IG47XG59XG5cbmZ1bmN0aW9uIG1pbihhLCBiKVxue1xuXHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLmNtcChhLCBiKSA8IDAgPyBhIDogYjtcbn1cbmZ1bmN0aW9uIG1heChhLCBiKVxue1xuXHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLmNtcChhLCBiKSA+IDAgPyBhIDogYjtcbn1cbmZ1bmN0aW9uIGNsYW1wKGxvLCBoaSwgbilcbntcblx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy5jbXAobiwgbG8pIDwgMFxuXHRcdD8gbG9cblx0XHQ6IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy5jbXAobiwgaGkpID4gMFxuXHRcdFx0PyBoaVxuXHRcdFx0OiBuO1xufVxuXG52YXIgb3JkID0gWydMVCcsICdFUScsICdHVCddO1xuXG5mdW5jdGlvbiBjb21wYXJlKHgsIHkpXG57XG5cdHJldHVybiB7IGN0b3I6IG9yZFtfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuY21wKHgsIHkpICsgMV0gfTtcbn1cblxuZnVuY3Rpb24geG9yKGEsIGIpXG57XG5cdHJldHVybiBhICE9PSBiO1xufVxuZnVuY3Rpb24gbm90KGIpXG57XG5cdHJldHVybiAhYjtcbn1cbmZ1bmN0aW9uIGlzSW5maW5pdGUobilcbntcblx0cmV0dXJuIG4gPT09IEluZmluaXR5IHx8IG4gPT09IC1JbmZpbml0eTtcbn1cblxuZnVuY3Rpb24gdHJ1bmNhdGUobilcbntcblx0cmV0dXJuIG4gfCAwO1xufVxuXG5mdW5jdGlvbiBkZWdyZWVzKGQpXG57XG5cdHJldHVybiBkICogTWF0aC5QSSAvIDE4MDtcbn1cbmZ1bmN0aW9uIHR1cm5zKHQpXG57XG5cdHJldHVybiAyICogTWF0aC5QSSAqIHQ7XG59XG5mdW5jdGlvbiBmcm9tUG9sYXIocG9pbnQpXG57XG5cdHZhciByID0gcG9pbnQuXzA7XG5cdHZhciB0ID0gcG9pbnQuXzE7XG5cdHJldHVybiBfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuVHVwbGUyKHIgKiBNYXRoLmNvcyh0KSwgciAqIE1hdGguc2luKHQpKTtcbn1cbmZ1bmN0aW9uIHRvUG9sYXIocG9pbnQpXG57XG5cdHZhciB4ID0gcG9pbnQuXzA7XG5cdHZhciB5ID0gcG9pbnQuXzE7XG5cdHJldHVybiBfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuVHVwbGUyKE1hdGguc3FydCh4ICogeCArIHkgKiB5KSwgTWF0aC5hdGFuMih5LCB4KSk7XG59XG5cbnJldHVybiB7XG5cdGRpdjogRjIoZGl2KSxcblx0cmVtOiBGMihyZW0pLFxuXHRtb2Q6IEYyKG1vZCksXG5cblx0cGk6IE1hdGguUEksXG5cdGU6IE1hdGguRSxcblx0Y29zOiBNYXRoLmNvcyxcblx0c2luOiBNYXRoLnNpbixcblx0dGFuOiBNYXRoLnRhbixcblx0YWNvczogTWF0aC5hY29zLFxuXHRhc2luOiBNYXRoLmFzaW4sXG5cdGF0YW46IE1hdGguYXRhbixcblx0YXRhbjI6IEYyKE1hdGguYXRhbjIpLFxuXG5cdGRlZ3JlZXM6IGRlZ3JlZXMsXG5cdHR1cm5zOiB0dXJucyxcblx0ZnJvbVBvbGFyOiBmcm9tUG9sYXIsXG5cdHRvUG9sYXI6IHRvUG9sYXIsXG5cblx0c3FydDogTWF0aC5zcXJ0LFxuXHRsb2dCYXNlOiBGMihsb2dCYXNlKSxcblx0bmVnYXRlOiBuZWdhdGUsXG5cdGFiczogYWJzLFxuXHRtaW46IEYyKG1pbiksXG5cdG1heDogRjIobWF4KSxcblx0Y2xhbXA6IEYzKGNsYW1wKSxcblx0Y29tcGFyZTogRjIoY29tcGFyZSksXG5cblx0eG9yOiBGMih4b3IpLFxuXHRub3Q6IG5vdCxcblxuXHR0cnVuY2F0ZTogdHJ1bmNhdGUsXG5cdGNlaWxpbmc6IE1hdGguY2VpbCxcblx0Zmxvb3I6IE1hdGguZmxvb3IsXG5cdHJvdW5kOiBNYXRoLnJvdW5kLFxuXHR0b0Zsb2F0OiBmdW5jdGlvbih4KSB7IHJldHVybiB4OyB9LFxuXHRpc05hTjogaXNOYU4sXG5cdGlzSW5maW5pdGU6IGlzSW5maW5pdGVcbn07XG5cbn0oKTtcbi8vaW1wb3J0IC8vXG5cbnZhciBfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMgPSBmdW5jdGlvbigpIHtcblxuLy8gQ09NUEFSSVNPTlNcblxuZnVuY3Rpb24gZXEoeCwgeSlcbntcblx0dmFyIHN0YWNrID0gW107XG5cdHZhciBpc0VxdWFsID0gZXFIZWxwKHgsIHksIDAsIHN0YWNrKTtcblx0dmFyIHBhaXI7XG5cdHdoaWxlIChpc0VxdWFsICYmIChwYWlyID0gc3RhY2sucG9wKCkpKVxuXHR7XG5cdFx0aXNFcXVhbCA9IGVxSGVscChwYWlyLngsIHBhaXIueSwgMCwgc3RhY2spO1xuXHR9XG5cdHJldHVybiBpc0VxdWFsO1xufVxuXG5cbmZ1bmN0aW9uIGVxSGVscCh4LCB5LCBkZXB0aCwgc3RhY2spXG57XG5cdGlmIChkZXB0aCA+IDEwMClcblx0e1xuXHRcdHN0YWNrLnB1c2goeyB4OiB4LCB5OiB5IH0pO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0aWYgKHggPT09IHkpXG5cdHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGlmICh0eXBlb2YgeCAhPT0gJ29iamVjdCcpXG5cdHtcblx0XHRpZiAodHlwZW9mIHggPT09ICdmdW5jdGlvbicpXG5cdFx0e1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFxuXHRcdFx0XHQnVHJ5aW5nIHRvIHVzZSBgKD09KWAgb24gZnVuY3Rpb25zLiBUaGVyZSBpcyBubyB3YXkgdG8ga25vdyBpZiBmdW5jdGlvbnMgYXJlIFwidGhlIHNhbWVcIiBpbiB0aGUgRWxtIHNlbnNlLidcblx0XHRcdFx0KyAnIFJlYWQgbW9yZSBhYm91dCB0aGlzIGF0IGh0dHA6Ly9wYWNrYWdlLmVsbS1sYW5nLm9yZy9wYWNrYWdlcy9lbG0tbGFuZy9jb3JlL2xhdGVzdC9CYXNpY3MjPT0nXG5cdFx0XHRcdCsgJyB3aGljaCBkZXNjcmliZXMgd2h5IGl0IGlzIHRoaXMgd2F5IGFuZCB3aGF0IHRoZSBiZXR0ZXIgdmVyc2lvbiB3aWxsIGxvb2sgbGlrZS4nXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRpZiAoeCA9PT0gbnVsbCB8fCB5ID09PSBudWxsKVxuXHR7XG5cdFx0cmV0dXJuIGZhbHNlXG5cdH1cblxuXHRpZiAoeCBpbnN0YW5jZW9mIERhdGUpXG5cdHtcblx0XHRyZXR1cm4geC5nZXRUaW1lKCkgPT09IHkuZ2V0VGltZSgpO1xuXHR9XG5cblx0aWYgKCEoJ2N0b3InIGluIHgpKVxuXHR7XG5cdFx0Zm9yICh2YXIga2V5IGluIHgpXG5cdFx0e1xuXHRcdFx0aWYgKCFlcUhlbHAoeFtrZXldLCB5W2tleV0sIGRlcHRoICsgMSwgc3RhY2spKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0Ly8gY29udmVydCBEaWN0cyBhbmQgU2V0cyB0byBsaXN0c1xuXHRpZiAoeC5jdG9yID09PSAnUkJOb2RlX2VsbV9idWlsdGluJyB8fCB4LmN0b3IgPT09ICdSQkVtcHR5X2VsbV9idWlsdGluJylcblx0e1xuXHRcdHggPSBfZWxtX2xhbmckY29yZSREaWN0JHRvTGlzdCh4KTtcblx0XHR5ID0gX2VsbV9sYW5nJGNvcmUkRGljdCR0b0xpc3QoeSk7XG5cdH1cblx0aWYgKHguY3RvciA9PT0gJ1NldF9lbG1fYnVpbHRpbicpXG5cdHtcblx0XHR4ID0gX2VsbV9sYW5nJGNvcmUkU2V0JHRvTGlzdCh4KTtcblx0XHR5ID0gX2VsbV9sYW5nJGNvcmUkU2V0JHRvTGlzdCh5KTtcblx0fVxuXG5cdC8vIGNoZWNrIGlmIGxpc3RzIGFyZSBlcXVhbCB3aXRob3V0IHJlY3Vyc2lvblxuXHRpZiAoeC5jdG9yID09PSAnOjonKVxuXHR7XG5cdFx0dmFyIGEgPSB4O1xuXHRcdHZhciBiID0geTtcblx0XHR3aGlsZSAoYS5jdG9yID09PSAnOjonICYmIGIuY3RvciA9PT0gJzo6Jylcblx0XHR7XG5cdFx0XHRpZiAoIWVxSGVscChhLl8wLCBiLl8wLCBkZXB0aCArIDEsIHN0YWNrKSlcblx0XHRcdHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0YSA9IGEuXzE7XG5cdFx0XHRiID0gYi5fMTtcblx0XHR9XG5cdFx0cmV0dXJuIGEuY3RvciA9PT0gYi5jdG9yO1xuXHR9XG5cblx0Ly8gY2hlY2sgaWYgQXJyYXlzIGFyZSBlcXVhbFxuXHRpZiAoeC5jdG9yID09PSAnX0FycmF5Jylcblx0e1xuXHRcdHZhciB4cyA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9BcnJheS50b0pTQXJyYXkoeCk7XG5cdFx0dmFyIHlzID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0FycmF5LnRvSlNBcnJheSh5KTtcblx0XHRpZiAoeHMubGVuZ3RoICE9PSB5cy5sZW5ndGgpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKVxuXHRcdHtcblx0XHRcdGlmICghZXFIZWxwKHhzW2ldLCB5c1tpXSwgZGVwdGggKyAxLCBzdGFjaykpXG5cdFx0XHR7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRpZiAoIWVxSGVscCh4LmN0b3IsIHkuY3RvciwgZGVwdGggKyAxLCBzdGFjaykpXG5cdHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRmb3IgKHZhciBrZXkgaW4geClcblx0e1xuXHRcdGlmICghZXFIZWxwKHhba2V5XSwgeVtrZXldLCBkZXB0aCArIDEsIHN0YWNrKSlcblx0XHR7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0cnVlO1xufVxuXG4vLyBDb2RlIGluIEdlbmVyYXRlL0phdmFTY3JpcHQuaHMsIEJhc2ljcy5qcywgYW5kIExpc3QuanMgZGVwZW5kcyBvblxuLy8gdGhlIHBhcnRpY3VsYXIgaW50ZWdlciB2YWx1ZXMgYXNzaWduZWQgdG8gTFQsIEVRLCBhbmQgR1QuXG5cbnZhciBMVCA9IC0xLCBFUSA9IDAsIEdUID0gMTtcblxuZnVuY3Rpb24gY21wKHgsIHkpXG57XG5cdGlmICh0eXBlb2YgeCAhPT0gJ29iamVjdCcpXG5cdHtcblx0XHRyZXR1cm4geCA9PT0geSA/IEVRIDogeCA8IHkgPyBMVCA6IEdUO1xuXHR9XG5cblx0aWYgKHggaW5zdGFuY2VvZiBTdHJpbmcpXG5cdHtcblx0XHR2YXIgYSA9IHgudmFsdWVPZigpO1xuXHRcdHZhciBiID0geS52YWx1ZU9mKCk7XG5cdFx0cmV0dXJuIGEgPT09IGIgPyBFUSA6IGEgPCBiID8gTFQgOiBHVDtcblx0fVxuXG5cdGlmICh4LmN0b3IgPT09ICc6OicgfHwgeC5jdG9yID09PSAnW10nKVxuXHR7XG5cdFx0d2hpbGUgKHguY3RvciA9PT0gJzo6JyAmJiB5LmN0b3IgPT09ICc6OicpXG5cdFx0e1xuXHRcdFx0dmFyIG9yZCA9IGNtcCh4Ll8wLCB5Ll8wKTtcblx0XHRcdGlmIChvcmQgIT09IEVRKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXR1cm4gb3JkO1xuXHRcdFx0fVxuXHRcdFx0eCA9IHguXzE7XG5cdFx0XHR5ID0geS5fMTtcblx0XHR9XG5cdFx0cmV0dXJuIHguY3RvciA9PT0geS5jdG9yID8gRVEgOiB4LmN0b3IgPT09ICdbXScgPyBMVCA6IEdUO1xuXHR9XG5cblx0aWYgKHguY3Rvci5zbGljZSgwLCA2KSA9PT0gJ19UdXBsZScpXG5cdHtcblx0XHR2YXIgb3JkO1xuXHRcdHZhciBuID0geC5jdG9yLnNsaWNlKDYpIC0gMDtcblx0XHR2YXIgZXJyID0gJ2Nhbm5vdCBjb21wYXJlIHR1cGxlcyB3aXRoIG1vcmUgdGhhbiA2IGVsZW1lbnRzLic7XG5cdFx0aWYgKG4gPT09IDApIHJldHVybiBFUTtcblx0XHRpZiAobiA+PSAxKSB7IG9yZCA9IGNtcCh4Ll8wLCB5Ll8wKTsgaWYgKG9yZCAhPT0gRVEpIHJldHVybiBvcmQ7XG5cdFx0aWYgKG4gPj0gMikgeyBvcmQgPSBjbXAoeC5fMSwgeS5fMSk7IGlmIChvcmQgIT09IEVRKSByZXR1cm4gb3JkO1xuXHRcdGlmIChuID49IDMpIHsgb3JkID0gY21wKHguXzIsIHkuXzIpOyBpZiAob3JkICE9PSBFUSkgcmV0dXJuIG9yZDtcblx0XHRpZiAobiA+PSA0KSB7IG9yZCA9IGNtcCh4Ll8zLCB5Ll8zKTsgaWYgKG9yZCAhPT0gRVEpIHJldHVybiBvcmQ7XG5cdFx0aWYgKG4gPj0gNSkgeyBvcmQgPSBjbXAoeC5fNCwgeS5fNCk7IGlmIChvcmQgIT09IEVRKSByZXR1cm4gb3JkO1xuXHRcdGlmIChuID49IDYpIHsgb3JkID0gY21wKHguXzUsIHkuXzUpOyBpZiAob3JkICE9PSBFUSkgcmV0dXJuIG9yZDtcblx0XHRpZiAobiA+PSA3KSB0aHJvdyBuZXcgRXJyb3IoJ0NvbXBhcmlzb24gZXJyb3I6ICcgKyBlcnIpOyB9IH0gfSB9IH0gfVxuXHRcdHJldHVybiBFUTtcblx0fVxuXG5cdHRocm93IG5ldyBFcnJvcihcblx0XHQnQ29tcGFyaXNvbiBlcnJvcjogY29tcGFyaXNvbiBpcyBvbmx5IGRlZmluZWQgb24gaW50cywgJ1xuXHRcdCsgJ2Zsb2F0cywgdGltZXMsIGNoYXJzLCBzdHJpbmdzLCBsaXN0cyBvZiBjb21wYXJhYmxlIHZhbHVlcywgJ1xuXHRcdCsgJ2FuZCB0dXBsZXMgb2YgY29tcGFyYWJsZSB2YWx1ZXMuJ1xuXHQpO1xufVxuXG5cbi8vIENPTU1PTiBWQUxVRVNcblxudmFyIFR1cGxlMCA9IHtcblx0Y3RvcjogJ19UdXBsZTAnXG59O1xuXG5mdW5jdGlvbiBUdXBsZTIoeCwgeSlcbntcblx0cmV0dXJuIHtcblx0XHRjdG9yOiAnX1R1cGxlMicsXG5cdFx0XzA6IHgsXG5cdFx0XzE6IHlcblx0fTtcbn1cblxuZnVuY3Rpb24gY2hyKGMpXG57XG5cdHJldHVybiBuZXcgU3RyaW5nKGMpO1xufVxuXG5cbi8vIEdVSURcblxudmFyIGNvdW50ID0gMDtcbmZ1bmN0aW9uIGd1aWQoXylcbntcblx0cmV0dXJuIGNvdW50Kys7XG59XG5cblxuLy8gUkVDT1JEU1xuXG5mdW5jdGlvbiB1cGRhdGUob2xkUmVjb3JkLCB1cGRhdGVkRmllbGRzKVxue1xuXHR2YXIgbmV3UmVjb3JkID0ge307XG5cblx0Zm9yICh2YXIga2V5IGluIG9sZFJlY29yZClcblx0e1xuXHRcdG5ld1JlY29yZFtrZXldID0gb2xkUmVjb3JkW2tleV07XG5cdH1cblxuXHRmb3IgKHZhciBrZXkgaW4gdXBkYXRlZEZpZWxkcylcblx0e1xuXHRcdG5ld1JlY29yZFtrZXldID0gdXBkYXRlZEZpZWxkc1trZXldO1xuXHR9XG5cblx0cmV0dXJuIG5ld1JlY29yZDtcbn1cblxuXG4vLy8vIExJU1QgU1RVRkYgLy8vL1xuXG52YXIgTmlsID0geyBjdG9yOiAnW10nIH07XG5cbmZ1bmN0aW9uIENvbnMoaGQsIHRsKVxue1xuXHRyZXR1cm4ge1xuXHRcdGN0b3I6ICc6OicsXG5cdFx0XzA6IGhkLFxuXHRcdF8xOiB0bFxuXHR9O1xufVxuXG5mdW5jdGlvbiBhcHBlbmQoeHMsIHlzKVxue1xuXHQvLyBhcHBlbmQgU3RyaW5nc1xuXHRpZiAodHlwZW9mIHhzID09PSAnc3RyaW5nJylcblx0e1xuXHRcdHJldHVybiB4cyArIHlzO1xuXHR9XG5cblx0Ly8gYXBwZW5kIExpc3RzXG5cdGlmICh4cy5jdG9yID09PSAnW10nKVxuXHR7XG5cdFx0cmV0dXJuIHlzO1xuXHR9XG5cdHZhciByb290ID0gQ29ucyh4cy5fMCwgTmlsKTtcblx0dmFyIGN1cnIgPSByb290O1xuXHR4cyA9IHhzLl8xO1xuXHR3aGlsZSAoeHMuY3RvciAhPT0gJ1tdJylcblx0e1xuXHRcdGN1cnIuXzEgPSBDb25zKHhzLl8wLCBOaWwpO1xuXHRcdHhzID0geHMuXzE7XG5cdFx0Y3VyciA9IGN1cnIuXzE7XG5cdH1cblx0Y3Vyci5fMSA9IHlzO1xuXHRyZXR1cm4gcm9vdDtcbn1cblxuXG4vLyBDUkFTSEVTXG5cbmZ1bmN0aW9uIGNyYXNoKG1vZHVsZU5hbWUsIHJlZ2lvbilcbntcblx0cmV0dXJuIGZ1bmN0aW9uKG1lc3NhZ2UpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHQnUmFuIGludG8gYSBgRGVidWcuY3Jhc2hgIGluIG1vZHVsZSBgJyArIG1vZHVsZU5hbWUgKyAnYCAnICsgcmVnaW9uVG9TdHJpbmcocmVnaW9uKSArICdcXG4nXG5cdFx0XHQrICdUaGUgbWVzc2FnZSBwcm92aWRlZCBieSB0aGUgY29kZSBhdXRob3IgaXM6XFxuXFxuICAgICdcblx0XHRcdCsgbWVzc2FnZVxuXHRcdCk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIGNyYXNoQ2FzZShtb2R1bGVOYW1lLCByZWdpb24sIHZhbHVlKVxue1xuXHRyZXR1cm4gZnVuY3Rpb24obWVzc2FnZSkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdCdSYW4gaW50byBhIGBEZWJ1Zy5jcmFzaGAgaW4gbW9kdWxlIGAnICsgbW9kdWxlTmFtZSArICdgXFxuXFxuJ1xuXHRcdFx0KyAnVGhpcyB3YXMgY2F1c2VkIGJ5IHRoZSBgY2FzZWAgZXhwcmVzc2lvbiAnICsgcmVnaW9uVG9TdHJpbmcocmVnaW9uKSArICcuXFxuJ1xuXHRcdFx0KyAnT25lIG9mIHRoZSBicmFuY2hlcyBlbmRlZCB3aXRoIGEgY3Jhc2ggYW5kIHRoZSBmb2xsb3dpbmcgdmFsdWUgZ290IHRocm91Z2g6XFxuXFxuICAgICcgKyB0b1N0cmluZyh2YWx1ZSkgKyAnXFxuXFxuJ1xuXHRcdFx0KyAnVGhlIG1lc3NhZ2UgcHJvdmlkZWQgYnkgdGhlIGNvZGUgYXV0aG9yIGlzOlxcblxcbiAgICAnXG5cdFx0XHQrIG1lc3NhZ2Vcblx0XHQpO1xuXHR9O1xufVxuXG5mdW5jdGlvbiByZWdpb25Ub1N0cmluZyhyZWdpb24pXG57XG5cdGlmIChyZWdpb24uc3RhcnQubGluZSA9PSByZWdpb24uZW5kLmxpbmUpXG5cdHtcblx0XHRyZXR1cm4gJ29uIGxpbmUgJyArIHJlZ2lvbi5zdGFydC5saW5lO1xuXHR9XG5cdHJldHVybiAnYmV0d2VlbiBsaW5lcyAnICsgcmVnaW9uLnN0YXJ0LmxpbmUgKyAnIGFuZCAnICsgcmVnaW9uLmVuZC5saW5lO1xufVxuXG5cbi8vIFRPIFNUUklOR1xuXG5mdW5jdGlvbiB0b1N0cmluZyh2KVxue1xuXHR2YXIgdHlwZSA9IHR5cGVvZiB2O1xuXHRpZiAodHlwZSA9PT0gJ2Z1bmN0aW9uJylcblx0e1xuXHRcdHJldHVybiAnPGZ1bmN0aW9uPic7XG5cdH1cblxuXHRpZiAodHlwZSA9PT0gJ2Jvb2xlYW4nKVxuXHR7XG5cdFx0cmV0dXJuIHYgPyAnVHJ1ZScgOiAnRmFsc2UnO1xuXHR9XG5cblx0aWYgKHR5cGUgPT09ICdudW1iZXInKVxuXHR7XG5cdFx0cmV0dXJuIHYgKyAnJztcblx0fVxuXG5cdGlmICh2IGluc3RhbmNlb2YgU3RyaW5nKVxuXHR7XG5cdFx0cmV0dXJuICdcXCcnICsgYWRkU2xhc2hlcyh2LCB0cnVlKSArICdcXCcnO1xuXHR9XG5cblx0aWYgKHR5cGUgPT09ICdzdHJpbmcnKVxuXHR7XG5cdFx0cmV0dXJuICdcIicgKyBhZGRTbGFzaGVzKHYsIGZhbHNlKSArICdcIic7XG5cdH1cblxuXHRpZiAodiA9PT0gbnVsbClcblx0e1xuXHRcdHJldHVybiAnbnVsbCc7XG5cdH1cblxuXHRpZiAodHlwZSA9PT0gJ29iamVjdCcgJiYgJ2N0b3InIGluIHYpXG5cdHtcblx0XHR2YXIgY3RvclN0YXJ0ZXIgPSB2LmN0b3Iuc3Vic3RyaW5nKDAsIDUpO1xuXG5cdFx0aWYgKGN0b3JTdGFydGVyID09PSAnX1R1cGwnKVxuXHRcdHtcblx0XHRcdHZhciBvdXRwdXQgPSBbXTtcblx0XHRcdGZvciAodmFyIGsgaW4gdilcblx0XHRcdHtcblx0XHRcdFx0aWYgKGsgPT09ICdjdG9yJykgY29udGludWU7XG5cdFx0XHRcdG91dHB1dC5wdXNoKHRvU3RyaW5nKHZba10pKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAnKCcgKyBvdXRwdXQuam9pbignLCcpICsgJyknO1xuXHRcdH1cblxuXHRcdGlmIChjdG9yU3RhcnRlciA9PT0gJ19UYXNrJylcblx0XHR7XG5cdFx0XHRyZXR1cm4gJzx0YXNrPidcblx0XHR9XG5cblx0XHRpZiAodi5jdG9yID09PSAnX0FycmF5Jylcblx0XHR7XG5cdFx0XHR2YXIgbGlzdCA9IF9lbG1fbGFuZyRjb3JlJEFycmF5JHRvTGlzdCh2KTtcblx0XHRcdHJldHVybiAnQXJyYXkuZnJvbUxpc3QgJyArIHRvU3RyaW5nKGxpc3QpO1xuXHRcdH1cblxuXHRcdGlmICh2LmN0b3IgPT09ICc8ZGVjb2Rlcj4nKVxuXHRcdHtcblx0XHRcdHJldHVybiAnPGRlY29kZXI+Jztcblx0XHR9XG5cblx0XHRpZiAodi5jdG9yID09PSAnX1Byb2Nlc3MnKVxuXHRcdHtcblx0XHRcdHJldHVybiAnPHByb2Nlc3M6JyArIHYuaWQgKyAnPic7XG5cdFx0fVxuXG5cdFx0aWYgKHYuY3RvciA9PT0gJzo6Jylcblx0XHR7XG5cdFx0XHR2YXIgb3V0cHV0ID0gJ1snICsgdG9TdHJpbmcodi5fMCk7XG5cdFx0XHR2ID0gdi5fMTtcblx0XHRcdHdoaWxlICh2LmN0b3IgPT09ICc6OicpXG5cdFx0XHR7XG5cdFx0XHRcdG91dHB1dCArPSAnLCcgKyB0b1N0cmluZyh2Ll8wKTtcblx0XHRcdFx0diA9IHYuXzE7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gb3V0cHV0ICsgJ10nO1xuXHRcdH1cblxuXHRcdGlmICh2LmN0b3IgPT09ICdbXScpXG5cdFx0e1xuXHRcdFx0cmV0dXJuICdbXSc7XG5cdFx0fVxuXG5cdFx0aWYgKHYuY3RvciA9PT0gJ1NldF9lbG1fYnVpbHRpbicpXG5cdFx0e1xuXHRcdFx0cmV0dXJuICdTZXQuZnJvbUxpc3QgJyArIHRvU3RyaW5nKF9lbG1fbGFuZyRjb3JlJFNldCR0b0xpc3QodikpO1xuXHRcdH1cblxuXHRcdGlmICh2LmN0b3IgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nIHx8IHYuY3RvciA9PT0gJ1JCRW1wdHlfZWxtX2J1aWx0aW4nKVxuXHRcdHtcblx0XHRcdHJldHVybiAnRGljdC5mcm9tTGlzdCAnICsgdG9TdHJpbmcoX2VsbV9sYW5nJGNvcmUkRGljdCR0b0xpc3QodikpO1xuXHRcdH1cblxuXHRcdHZhciBvdXRwdXQgPSAnJztcblx0XHRmb3IgKHZhciBpIGluIHYpXG5cdFx0e1xuXHRcdFx0aWYgKGkgPT09ICdjdG9yJykgY29udGludWU7XG5cdFx0XHR2YXIgc3RyID0gdG9TdHJpbmcodltpXSk7XG5cdFx0XHR2YXIgYzAgPSBzdHJbMF07XG5cdFx0XHR2YXIgcGFyZW5sZXNzID0gYzAgPT09ICd7JyB8fCBjMCA9PT0gJygnIHx8IGMwID09PSAnPCcgfHwgYzAgPT09ICdcIicgfHwgc3RyLmluZGV4T2YoJyAnKSA8IDA7XG5cdFx0XHRvdXRwdXQgKz0gJyAnICsgKHBhcmVubGVzcyA/IHN0ciA6ICcoJyArIHN0ciArICcpJyk7XG5cdFx0fVxuXHRcdHJldHVybiB2LmN0b3IgKyBvdXRwdXQ7XG5cdH1cblxuXHRpZiAodHlwZSA9PT0gJ29iamVjdCcpXG5cdHtcblx0XHRpZiAodiBpbnN0YW5jZW9mIERhdGUpXG5cdFx0e1xuXHRcdFx0cmV0dXJuICc8JyArIHYudG9TdHJpbmcoKSArICc+Jztcblx0XHR9XG5cblx0XHRpZiAodi5lbG1fd2ViX3NvY2tldClcblx0XHR7XG5cdFx0XHRyZXR1cm4gJzx3ZWJzb2NrZXQ+Jztcblx0XHR9XG5cblx0XHR2YXIgb3V0cHV0ID0gW107XG5cdFx0Zm9yICh2YXIgayBpbiB2KVxuXHRcdHtcblx0XHRcdG91dHB1dC5wdXNoKGsgKyAnID0gJyArIHRvU3RyaW5nKHZba10pKTtcblx0XHR9XG5cdFx0aWYgKG91dHB1dC5sZW5ndGggPT09IDApXG5cdFx0e1xuXHRcdFx0cmV0dXJuICd7fSc7XG5cdFx0fVxuXHRcdHJldHVybiAneyAnICsgb3V0cHV0LmpvaW4oJywgJykgKyAnIH0nO1xuXHR9XG5cblx0cmV0dXJuICc8aW50ZXJuYWwgc3RydWN0dXJlPic7XG59XG5cbmZ1bmN0aW9uIGFkZFNsYXNoZXMoc3RyLCBpc0NoYXIpXG57XG5cdHZhciBzID0gc3RyLnJlcGxhY2UoL1xcXFwvZywgJ1xcXFxcXFxcJylcblx0XHRcdCAgLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKVxuXHRcdFx0ICAucmVwbGFjZSgvXFx0L2csICdcXFxcdCcpXG5cdFx0XHQgIC5yZXBsYWNlKC9cXHIvZywgJ1xcXFxyJylcblx0XHRcdCAgLnJlcGxhY2UoL1xcdi9nLCAnXFxcXHYnKVxuXHRcdFx0ICAucmVwbGFjZSgvXFwwL2csICdcXFxcMCcpO1xuXHRpZiAoaXNDaGFyKVxuXHR7XG5cdFx0cmV0dXJuIHMucmVwbGFjZSgvXFwnL2csICdcXFxcXFwnJyk7XG5cdH1cblx0ZWxzZVxuXHR7XG5cdFx0cmV0dXJuIHMucmVwbGFjZSgvXFxcIi9nLCAnXFxcXFwiJyk7XG5cdH1cbn1cblxuXG5yZXR1cm4ge1xuXHRlcTogZXEsXG5cdGNtcDogY21wLFxuXHRUdXBsZTA6IFR1cGxlMCxcblx0VHVwbGUyOiBUdXBsZTIsXG5cdGNocjogY2hyLFxuXHR1cGRhdGU6IHVwZGF0ZSxcblx0Z3VpZDogZ3VpZCxcblxuXHRhcHBlbmQ6IEYyKGFwcGVuZCksXG5cblx0Y3Jhc2g6IGNyYXNoLFxuXHRjcmFzaENhc2U6IGNyYXNoQ2FzZSxcblxuXHR0b1N0cmluZzogdG9TdHJpbmdcbn07XG5cbn0oKTtcbnZhciBfZWxtX2xhbmckY29yZSRCYXNpY3MkbmV2ZXIgPSBmdW5jdGlvbiAoX3AwKSB7XG5cdG5ldmVyOlxuXHR3aGlsZSAodHJ1ZSkge1xuXHRcdHZhciBfcDEgPSBfcDA7XG5cdFx0dmFyIF92MSA9IF9wMS5fMDtcblx0XHRfcDAgPSBfdjE7XG5cdFx0Y29udGludWUgbmV2ZXI7XG5cdH1cbn07XG52YXIgX2VsbV9sYW5nJGNvcmUkQmFzaWNzJHVuY3VycnkgPSBGMihcblx0ZnVuY3Rpb24gKGYsIF9wMikge1xuXHRcdHZhciBfcDMgPSBfcDI7XG5cdFx0cmV0dXJuIEEyKGYsIF9wMy5fMCwgX3AzLl8xKTtcblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkQmFzaWNzJGN1cnJ5ID0gRjMoXG5cdGZ1bmN0aW9uIChmLCBhLCBiKSB7XG5cdFx0cmV0dXJuIGYoXG5cdFx0XHR7Y3RvcjogJ19UdXBsZTInLCBfMDogYSwgXzE6IGJ9KTtcblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkQmFzaWNzJGZsaXAgPSBGMyhcblx0ZnVuY3Rpb24gKGYsIGIsIGEpIHtcblx0XHRyZXR1cm4gQTIoZiwgYSwgYik7XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJEJhc2ljcyRhbHdheXMgPSBGMihcblx0ZnVuY3Rpb24gKGEsIF9wNCkge1xuXHRcdHJldHVybiBhO1xuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSRCYXNpY3MkaWRlbnRpdHkgPSBmdW5jdGlvbiAoeCkge1xuXHRyZXR1cm4geDtcbn07XG52YXIgX2VsbV9sYW5nJGNvcmUkQmFzaWNzX29wcyA9IF9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHMgfHwge307XG5fZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzWyc8fCddID0gRjIoXG5cdGZ1bmN0aW9uIChmLCB4KSB7XG5cdFx0cmV0dXJuIGYoeCk7XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHMgPSBfZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzIHx8IHt9O1xuX2VsbV9sYW5nJGNvcmUkQmFzaWNzX29wc1snfD4nXSA9IEYyKFxuXHRmdW5jdGlvbiAoeCwgZikge1xuXHRcdHJldHVybiBmKHgpO1xuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzID0gX2VsbV9sYW5nJGNvcmUkQmFzaWNzX29wcyB8fCB7fTtcbl9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHNbJz4+J10gPSBGMyhcblx0ZnVuY3Rpb24gKGYsIGcsIHgpIHtcblx0XHRyZXR1cm4gZyhcblx0XHRcdGYoeCkpO1xuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzID0gX2VsbV9sYW5nJGNvcmUkQmFzaWNzX29wcyB8fCB7fTtcbl9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHNbJzw8J10gPSBGMyhcblx0ZnVuY3Rpb24gKGcsIGYsIHgpIHtcblx0XHRyZXR1cm4gZyhcblx0XHRcdGYoeCkpO1xuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzID0gX2VsbV9sYW5nJGNvcmUkQmFzaWNzX29wcyB8fCB7fTtcbl9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHNbJysrJ10gPSBfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuYXBwZW5kO1xudmFyIF9lbG1fbGFuZyRjb3JlJEJhc2ljcyR0b1N0cmluZyA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy50b1N0cmluZztcbnZhciBfZWxtX2xhbmckY29yZSRCYXNpY3MkaXNJbmZpbml0ZSA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9CYXNpY3MuaXNJbmZpbml0ZTtcbnZhciBfZWxtX2xhbmckY29yZSRCYXNpY3MkaXNOYU4gPSBfZWxtX2xhbmckY29yZSROYXRpdmVfQmFzaWNzLmlzTmFOO1xudmFyIF9lbG1fbGFuZyRjb3JlJEJhc2ljcyR0b0Zsb2F0ID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0Jhc2ljcy50b0Zsb2F0O1xudmFyIF9lbG1fbGFuZyRjb3JlJEJhc2ljcyRjZWlsaW5nID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0Jhc2ljcy5jZWlsaW5nO1xudmFyIF9lbG1fbGFuZyRjb3JlJEJhc2ljcyRmbG9vciA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9CYXNpY3MuZmxvb3I7XG52YXIgX2VsbV9sYW5nJGNvcmUkQmFzaWNzJHRydW5jYXRlID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0Jhc2ljcy50cnVuY2F0ZTtcbnZhciBfZWxtX2xhbmckY29yZSRCYXNpY3Mkcm91bmQgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfQmFzaWNzLnJvdW5kO1xudmFyIF9lbG1fbGFuZyRjb3JlJEJhc2ljcyRub3QgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfQmFzaWNzLm5vdDtcbnZhciBfZWxtX2xhbmckY29yZSRCYXNpY3MkeG9yID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0Jhc2ljcy54b3I7XG52YXIgX2VsbV9sYW5nJGNvcmUkQmFzaWNzX29wcyA9IF9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHMgfHwge307XG5fZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzWyd8fCddID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0Jhc2ljcy5vcjtcbnZhciBfZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzID0gX2VsbV9sYW5nJGNvcmUkQmFzaWNzX29wcyB8fCB7fTtcbl9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHNbJyYmJ10gPSBfZWxtX2xhbmckY29yZSROYXRpdmVfQmFzaWNzLmFuZDtcbnZhciBfZWxtX2xhbmckY29yZSRCYXNpY3MkbWF4ID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0Jhc2ljcy5tYXg7XG52YXIgX2VsbV9sYW5nJGNvcmUkQmFzaWNzJG1pbiA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9CYXNpY3MubWluO1xudmFyIF9lbG1fbGFuZyRjb3JlJEJhc2ljcyRjb21wYXJlID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0Jhc2ljcy5jb21wYXJlO1xudmFyIF9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHMgPSBfZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzIHx8IHt9O1xuX2VsbV9sYW5nJGNvcmUkQmFzaWNzX29wc1snPj0nXSA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9CYXNpY3MuZ2U7XG52YXIgX2VsbV9sYW5nJGNvcmUkQmFzaWNzX29wcyA9IF9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHMgfHwge307XG5fZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzWyc8PSddID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0Jhc2ljcy5sZTtcbnZhciBfZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzID0gX2VsbV9sYW5nJGNvcmUkQmFzaWNzX29wcyB8fCB7fTtcbl9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHNbJz4nXSA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9CYXNpY3MuZ3Q7XG52YXIgX2VsbV9sYW5nJGNvcmUkQmFzaWNzX29wcyA9IF9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHMgfHwge307XG5fZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzWyc8J10gPSBfZWxtX2xhbmckY29yZSROYXRpdmVfQmFzaWNzLmx0O1xudmFyIF9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHMgPSBfZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzIHx8IHt9O1xuX2VsbV9sYW5nJGNvcmUkQmFzaWNzX29wc1snLz0nXSA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9CYXNpY3MubmVxO1xudmFyIF9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHMgPSBfZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzIHx8IHt9O1xuX2VsbV9sYW5nJGNvcmUkQmFzaWNzX29wc1snPT0nXSA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9CYXNpY3MuZXE7XG52YXIgX2VsbV9sYW5nJGNvcmUkQmFzaWNzJGUgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfQmFzaWNzLmU7XG52YXIgX2VsbV9sYW5nJGNvcmUkQmFzaWNzJHBpID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0Jhc2ljcy5waTtcbnZhciBfZWxtX2xhbmckY29yZSRCYXNpY3MkY2xhbXAgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfQmFzaWNzLmNsYW1wO1xudmFyIF9lbG1fbGFuZyRjb3JlJEJhc2ljcyRsb2dCYXNlID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0Jhc2ljcy5sb2dCYXNlO1xudmFyIF9lbG1fbGFuZyRjb3JlJEJhc2ljcyRhYnMgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfQmFzaWNzLmFicztcbnZhciBfZWxtX2xhbmckY29yZSRCYXNpY3MkbmVnYXRlID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0Jhc2ljcy5uZWdhdGU7XG52YXIgX2VsbV9sYW5nJGNvcmUkQmFzaWNzJHNxcnQgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfQmFzaWNzLnNxcnQ7XG52YXIgX2VsbV9sYW5nJGNvcmUkQmFzaWNzJGF0YW4yID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0Jhc2ljcy5hdGFuMjtcbnZhciBfZWxtX2xhbmckY29yZSRCYXNpY3MkYXRhbiA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9CYXNpY3MuYXRhbjtcbnZhciBfZWxtX2xhbmckY29yZSRCYXNpY3MkYXNpbiA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9CYXNpY3MuYXNpbjtcbnZhciBfZWxtX2xhbmckY29yZSRCYXNpY3MkYWNvcyA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9CYXNpY3MuYWNvcztcbnZhciBfZWxtX2xhbmckY29yZSRCYXNpY3MkdGFuID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0Jhc2ljcy50YW47XG52YXIgX2VsbV9sYW5nJGNvcmUkQmFzaWNzJHNpbiA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9CYXNpY3Muc2luO1xudmFyIF9lbG1fbGFuZyRjb3JlJEJhc2ljcyRjb3MgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfQmFzaWNzLmNvcztcbnZhciBfZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzID0gX2VsbV9sYW5nJGNvcmUkQmFzaWNzX29wcyB8fCB7fTtcbl9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHNbJ14nXSA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9CYXNpY3MuZXhwO1xudmFyIF9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHMgPSBfZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzIHx8IHt9O1xuX2VsbV9sYW5nJGNvcmUkQmFzaWNzX29wc1snJSddID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0Jhc2ljcy5tb2Q7XG52YXIgX2VsbV9sYW5nJGNvcmUkQmFzaWNzJHJlbSA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9CYXNpY3MucmVtO1xudmFyIF9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHMgPSBfZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzIHx8IHt9O1xuX2VsbV9sYW5nJGNvcmUkQmFzaWNzX29wc1snLy8nXSA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9CYXNpY3MuZGl2O1xudmFyIF9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHMgPSBfZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzIHx8IHt9O1xuX2VsbV9sYW5nJGNvcmUkQmFzaWNzX29wc1snLyddID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0Jhc2ljcy5mbG9hdERpdjtcbnZhciBfZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzID0gX2VsbV9sYW5nJGNvcmUkQmFzaWNzX29wcyB8fCB7fTtcbl9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHNbJyonXSA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9CYXNpY3MubXVsO1xudmFyIF9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHMgPSBfZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzIHx8IHt9O1xuX2VsbV9sYW5nJGNvcmUkQmFzaWNzX29wc1snLSddID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0Jhc2ljcy5zdWI7XG52YXIgX2VsbV9sYW5nJGNvcmUkQmFzaWNzX29wcyA9IF9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHMgfHwge307XG5fZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzWycrJ10gPSBfZWxtX2xhbmckY29yZSROYXRpdmVfQmFzaWNzLmFkZDtcbnZhciBfZWxtX2xhbmckY29yZSRCYXNpY3MkdG9Qb2xhciA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9CYXNpY3MudG9Qb2xhcjtcbnZhciBfZWxtX2xhbmckY29yZSRCYXNpY3MkZnJvbVBvbGFyID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0Jhc2ljcy5mcm9tUG9sYXI7XG52YXIgX2VsbV9sYW5nJGNvcmUkQmFzaWNzJHR1cm5zID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0Jhc2ljcy50dXJucztcbnZhciBfZWxtX2xhbmckY29yZSRCYXNpY3MkZGVncmVlcyA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9CYXNpY3MuZGVncmVlcztcbnZhciBfZWxtX2xhbmckY29yZSRCYXNpY3MkcmFkaWFucyA9IGZ1bmN0aW9uICh0KSB7XG5cdHJldHVybiB0O1xufTtcbnZhciBfZWxtX2xhbmckY29yZSRCYXNpY3MkR1QgPSB7Y3RvcjogJ0dUJ307XG52YXIgX2VsbV9sYW5nJGNvcmUkQmFzaWNzJEVRID0ge2N0b3I6ICdFUSd9O1xudmFyIF9lbG1fbGFuZyRjb3JlJEJhc2ljcyRMVCA9IHtjdG9yOiAnTFQnfTtcbnZhciBfZWxtX2xhbmckY29yZSRCYXNpY3MkSnVzdE9uZU1vcmUgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4ge2N0b3I6ICdKdXN0T25lTW9yZScsIF8wOiBhfTtcbn07XG5cbnZhciBfZWxtX2xhbmckY29yZSRNYXliZSR3aXRoRGVmYXVsdCA9IEYyKFxuXHRmdW5jdGlvbiAoJGRlZmF1bHQsIG1heWJlKSB7XG5cdFx0dmFyIF9wMCA9IG1heWJlO1xuXHRcdGlmIChfcDAuY3RvciA9PT0gJ0p1c3QnKSB7XG5cdFx0XHRyZXR1cm4gX3AwLl8wO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gJGRlZmF1bHQ7XG5cdFx0fVxuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSRNYXliZSROb3RoaW5nID0ge2N0b3I6ICdOb3RoaW5nJ307XG52YXIgX2VsbV9sYW5nJGNvcmUkTWF5YmUkYW5kVGhlbiA9IEYyKFxuXHRmdW5jdGlvbiAoY2FsbGJhY2ssIG1heWJlVmFsdWUpIHtcblx0XHR2YXIgX3AxID0gbWF5YmVWYWx1ZTtcblx0XHRpZiAoX3AxLmN0b3IgPT09ICdKdXN0Jykge1xuXHRcdFx0cmV0dXJuIGNhbGxiYWNrKF9wMS5fMCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRNYXliZSROb3RoaW5nO1xuXHRcdH1cblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkTWF5YmUkSnVzdCA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7Y3RvcjogJ0p1c3QnLCBfMDogYX07XG59O1xudmFyIF9lbG1fbGFuZyRjb3JlJE1heWJlJG1hcCA9IEYyKFxuXHRmdW5jdGlvbiAoZiwgbWF5YmUpIHtcblx0XHR2YXIgX3AyID0gbWF5YmU7XG5cdFx0aWYgKF9wMi5jdG9yID09PSAnSnVzdCcpIHtcblx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRNYXliZSRKdXN0KFxuXHRcdFx0XHRmKF9wMi5fMCkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkTWF5YmUkTm90aGluZztcblx0XHR9XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJE1heWJlJG1hcDIgPSBGMyhcblx0ZnVuY3Rpb24gKGZ1bmMsIG1hLCBtYikge1xuXHRcdHZhciBfcDMgPSB7Y3RvcjogJ19UdXBsZTInLCBfMDogbWEsIF8xOiBtYn07XG5cdFx0aWYgKCgoX3AzLmN0b3IgPT09ICdfVHVwbGUyJykgJiYgKF9wMy5fMC5jdG9yID09PSAnSnVzdCcpKSAmJiAoX3AzLl8xLmN0b3IgPT09ICdKdXN0JykpIHtcblx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRNYXliZSRKdXN0KFxuXHRcdFx0XHRBMihmdW5jLCBfcDMuXzAuXzAsIF9wMy5fMS5fMCkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkTWF5YmUkTm90aGluZztcblx0XHR9XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJE1heWJlJG1hcDMgPSBGNChcblx0ZnVuY3Rpb24gKGZ1bmMsIG1hLCBtYiwgbWMpIHtcblx0XHR2YXIgX3A0ID0ge2N0b3I6ICdfVHVwbGUzJywgXzA6IG1hLCBfMTogbWIsIF8yOiBtY307XG5cdFx0aWYgKCgoKF9wNC5jdG9yID09PSAnX1R1cGxlMycpICYmIChfcDQuXzAuY3RvciA9PT0gJ0p1c3QnKSkgJiYgKF9wNC5fMS5jdG9yID09PSAnSnVzdCcpKSAmJiAoX3A0Ll8yLmN0b3IgPT09ICdKdXN0JykpIHtcblx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRNYXliZSRKdXN0KFxuXHRcdFx0XHRBMyhmdW5jLCBfcDQuXzAuXzAsIF9wNC5fMS5fMCwgX3A0Ll8yLl8wKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRNYXliZSROb3RoaW5nO1xuXHRcdH1cblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkTWF5YmUkbWFwNCA9IEY1KFxuXHRmdW5jdGlvbiAoZnVuYywgbWEsIG1iLCBtYywgbWQpIHtcblx0XHR2YXIgX3A1ID0ge2N0b3I6ICdfVHVwbGU0JywgXzA6IG1hLCBfMTogbWIsIF8yOiBtYywgXzM6IG1kfTtcblx0XHRpZiAoKCgoKF9wNS5jdG9yID09PSAnX1R1cGxlNCcpICYmIChfcDUuXzAuY3RvciA9PT0gJ0p1c3QnKSkgJiYgKF9wNS5fMS5jdG9yID09PSAnSnVzdCcpKSAmJiAoX3A1Ll8yLmN0b3IgPT09ICdKdXN0JykpICYmIChfcDUuXzMuY3RvciA9PT0gJ0p1c3QnKSkge1xuXHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE1heWJlJEp1c3QoXG5cdFx0XHRcdEE0KGZ1bmMsIF9wNS5fMC5fMCwgX3A1Ll8xLl8wLCBfcDUuXzIuXzAsIF9wNS5fMy5fMCkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkTWF5YmUkTm90aGluZztcblx0XHR9XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJE1heWJlJG1hcDUgPSBGNihcblx0ZnVuY3Rpb24gKGZ1bmMsIG1hLCBtYiwgbWMsIG1kLCBtZSkge1xuXHRcdHZhciBfcDYgPSB7Y3RvcjogJ19UdXBsZTUnLCBfMDogbWEsIF8xOiBtYiwgXzI6IG1jLCBfMzogbWQsIF80OiBtZX07XG5cdFx0aWYgKCgoKCgoX3A2LmN0b3IgPT09ICdfVHVwbGU1JykgJiYgKF9wNi5fMC5jdG9yID09PSAnSnVzdCcpKSAmJiAoX3A2Ll8xLmN0b3IgPT09ICdKdXN0JykpICYmIChfcDYuXzIuY3RvciA9PT0gJ0p1c3QnKSkgJiYgKF9wNi5fMy5jdG9yID09PSAnSnVzdCcpKSAmJiAoX3A2Ll80LmN0b3IgPT09ICdKdXN0JykpIHtcblx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRNYXliZSRKdXN0KFxuXHRcdFx0XHRBNShmdW5jLCBfcDYuXzAuXzAsIF9wNi5fMS5fMCwgX3A2Ll8yLl8wLCBfcDYuXzMuXzAsIF9wNi5fNC5fMCkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkTWF5YmUkTm90aGluZztcblx0XHR9XG5cdH0pO1xuXG4vL2ltcG9ydCBOYXRpdmUuVXRpbHMgLy9cblxudmFyIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0ID0gZnVuY3Rpb24oKSB7XG5cbnZhciBOaWwgPSB7IGN0b3I6ICdbXScgfTtcblxuZnVuY3Rpb24gQ29ucyhoZCwgdGwpXG57XG5cdHJldHVybiB7IGN0b3I6ICc6OicsIF8wOiBoZCwgXzE6IHRsIH07XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheShhcnIpXG57XG5cdHZhciBvdXQgPSBOaWw7XG5cdGZvciAodmFyIGkgPSBhcnIubGVuZ3RoOyBpLS07IClcblx0e1xuXHRcdG91dCA9IENvbnMoYXJyW2ldLCBvdXQpO1xuXHR9XG5cdHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIHRvQXJyYXkoeHMpXG57XG5cdHZhciBvdXQgPSBbXTtcblx0d2hpbGUgKHhzLmN0b3IgIT09ICdbXScpXG5cdHtcblx0XHRvdXQucHVzaCh4cy5fMCk7XG5cdFx0eHMgPSB4cy5fMTtcblx0fVxuXHRyZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBmb2xkcihmLCBiLCB4cylcbntcblx0dmFyIGFyciA9IHRvQXJyYXkoeHMpO1xuXHR2YXIgYWNjID0gYjtcblx0Zm9yICh2YXIgaSA9IGFyci5sZW5ndGg7IGktLTsgKVxuXHR7XG5cdFx0YWNjID0gQTIoZiwgYXJyW2ldLCBhY2MpO1xuXHR9XG5cdHJldHVybiBhY2M7XG59XG5cbmZ1bmN0aW9uIG1hcDIoZiwgeHMsIHlzKVxue1xuXHR2YXIgYXJyID0gW107XG5cdHdoaWxlICh4cy5jdG9yICE9PSAnW10nICYmIHlzLmN0b3IgIT09ICdbXScpXG5cdHtcblx0XHRhcnIucHVzaChBMihmLCB4cy5fMCwgeXMuXzApKTtcblx0XHR4cyA9IHhzLl8xO1xuXHRcdHlzID0geXMuXzE7XG5cdH1cblx0cmV0dXJuIGZyb21BcnJheShhcnIpO1xufVxuXG5mdW5jdGlvbiBtYXAzKGYsIHhzLCB5cywgenMpXG57XG5cdHZhciBhcnIgPSBbXTtcblx0d2hpbGUgKHhzLmN0b3IgIT09ICdbXScgJiYgeXMuY3RvciAhPT0gJ1tdJyAmJiB6cy5jdG9yICE9PSAnW10nKVxuXHR7XG5cdFx0YXJyLnB1c2goQTMoZiwgeHMuXzAsIHlzLl8wLCB6cy5fMCkpO1xuXHRcdHhzID0geHMuXzE7XG5cdFx0eXMgPSB5cy5fMTtcblx0XHR6cyA9IHpzLl8xO1xuXHR9XG5cdHJldHVybiBmcm9tQXJyYXkoYXJyKTtcbn1cblxuZnVuY3Rpb24gbWFwNChmLCB3cywgeHMsIHlzLCB6cylcbntcblx0dmFyIGFyciA9IFtdO1xuXHR3aGlsZSAoICAgd3MuY3RvciAhPT0gJ1tdJ1xuXHRcdCAgICYmIHhzLmN0b3IgIT09ICdbXSdcblx0XHQgICAmJiB5cy5jdG9yICE9PSAnW10nXG5cdFx0ICAgJiYgenMuY3RvciAhPT0gJ1tdJylcblx0e1xuXHRcdGFyci5wdXNoKEE0KGYsIHdzLl8wLCB4cy5fMCwgeXMuXzAsIHpzLl8wKSk7XG5cdFx0d3MgPSB3cy5fMTtcblx0XHR4cyA9IHhzLl8xO1xuXHRcdHlzID0geXMuXzE7XG5cdFx0enMgPSB6cy5fMTtcblx0fVxuXHRyZXR1cm4gZnJvbUFycmF5KGFycik7XG59XG5cbmZ1bmN0aW9uIG1hcDUoZiwgdnMsIHdzLCB4cywgeXMsIHpzKVxue1xuXHR2YXIgYXJyID0gW107XG5cdHdoaWxlICggICB2cy5jdG9yICE9PSAnW10nXG5cdFx0ICAgJiYgd3MuY3RvciAhPT0gJ1tdJ1xuXHRcdCAgICYmIHhzLmN0b3IgIT09ICdbXSdcblx0XHQgICAmJiB5cy5jdG9yICE9PSAnW10nXG5cdFx0ICAgJiYgenMuY3RvciAhPT0gJ1tdJylcblx0e1xuXHRcdGFyci5wdXNoKEE1KGYsIHZzLl8wLCB3cy5fMCwgeHMuXzAsIHlzLl8wLCB6cy5fMCkpO1xuXHRcdHZzID0gdnMuXzE7XG5cdFx0d3MgPSB3cy5fMTtcblx0XHR4cyA9IHhzLl8xO1xuXHRcdHlzID0geXMuXzE7XG5cdFx0enMgPSB6cy5fMTtcblx0fVxuXHRyZXR1cm4gZnJvbUFycmF5KGFycik7XG59XG5cbmZ1bmN0aW9uIHNvcnRCeShmLCB4cylcbntcblx0cmV0dXJuIGZyb21BcnJheSh0b0FycmF5KHhzKS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLmNtcChmKGEpLCBmKGIpKTtcblx0fSkpO1xufVxuXG5mdW5jdGlvbiBzb3J0V2l0aChmLCB4cylcbntcblx0cmV0dXJuIGZyb21BcnJheSh0b0FycmF5KHhzKS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcblx0XHR2YXIgb3JkID0gZihhKShiKS5jdG9yO1xuXHRcdHJldHVybiBvcmQgPT09ICdFUScgPyAwIDogb3JkID09PSAnTFQnID8gLTEgOiAxO1xuXHR9KSk7XG59XG5cbnJldHVybiB7XG5cdE5pbDogTmlsLFxuXHRDb25zOiBDb25zLFxuXHRjb25zOiBGMihDb25zKSxcblx0dG9BcnJheTogdG9BcnJheSxcblx0ZnJvbUFycmF5OiBmcm9tQXJyYXksXG5cblx0Zm9sZHI6IEYzKGZvbGRyKSxcblxuXHRtYXAyOiBGMyhtYXAyKSxcblx0bWFwMzogRjQobWFwMyksXG5cdG1hcDQ6IEY1KG1hcDQpLFxuXHRtYXA1OiBGNihtYXA1KSxcblx0c29ydEJ5OiBGMihzb3J0QnkpLFxuXHRzb3J0V2l0aDogRjIoc29ydFdpdGgpXG59O1xuXG59KCk7XG52YXIgX2VsbV9sYW5nJGNvcmUkTGlzdCRzb3J0V2l0aCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LnNvcnRXaXRoO1xudmFyIF9lbG1fbGFuZyRjb3JlJExpc3Qkc29ydEJ5ID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3Quc29ydEJ5O1xudmFyIF9lbG1fbGFuZyRjb3JlJExpc3Qkc29ydCA9IGZ1bmN0aW9uICh4cykge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGNvcmUkTGlzdCRzb3J0QnksIF9lbG1fbGFuZyRjb3JlJEJhc2ljcyRpZGVudGl0eSwgeHMpO1xufTtcbnZhciBfZWxtX2xhbmckY29yZSRMaXN0JHNpbmdsZXRvbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4ge1xuXHRcdGN0b3I6ICc6OicsXG5cdFx0XzA6IHZhbHVlLFxuXHRcdF8xOiB7Y3RvcjogJ1tdJ31cblx0fTtcbn07XG52YXIgX2VsbV9sYW5nJGNvcmUkTGlzdCRkcm9wID0gRjIoXG5cdGZ1bmN0aW9uIChuLCBsaXN0KSB7XG5cdFx0ZHJvcDpcblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0aWYgKF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy5jbXAobiwgMCkgPCAxKSB7XG5cdFx0XHRcdHJldHVybiBsaXN0O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIF9wMCA9IGxpc3Q7XG5cdFx0XHRcdGlmIChfcDAuY3RvciA9PT0gJ1tdJykge1xuXHRcdFx0XHRcdHJldHVybiBsaXN0O1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZhciBfdjEgPSBuIC0gMSxcblx0XHRcdFx0XHRcdF92MiA9IF9wMC5fMTtcblx0XHRcdFx0XHRuID0gX3YxO1xuXHRcdFx0XHRcdGxpc3QgPSBfdjI7XG5cdFx0XHRcdFx0Y29udGludWUgZHJvcDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkTGlzdCRtYXA1ID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QubWFwNTtcbnZhciBfZWxtX2xhbmckY29yZSRMaXN0JG1hcDQgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5tYXA0O1xudmFyIF9lbG1fbGFuZyRjb3JlJExpc3QkbWFwMyA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0Lm1hcDM7XG52YXIgX2VsbV9sYW5nJGNvcmUkTGlzdCRtYXAyID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QubWFwMjtcbnZhciBfZWxtX2xhbmckY29yZSRMaXN0JGFueSA9IEYyKFxuXHRmdW5jdGlvbiAoaXNPa2F5LCBsaXN0KSB7XG5cdFx0YW55OlxuXHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHR2YXIgX3AxID0gbGlzdDtcblx0XHRcdGlmIChfcDEuY3RvciA9PT0gJ1tdJykge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoaXNPa2F5KF9wMS5fMCkpIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YXIgX3Y0ID0gaXNPa2F5LFxuXHRcdFx0XHRcdFx0X3Y1ID0gX3AxLl8xO1xuXHRcdFx0XHRcdGlzT2theSA9IF92NDtcblx0XHRcdFx0XHRsaXN0ID0gX3Y1O1xuXHRcdFx0XHRcdGNvbnRpbnVlIGFueTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkTGlzdCRhbGwgPSBGMihcblx0ZnVuY3Rpb24gKGlzT2theSwgbGlzdCkge1xuXHRcdHJldHVybiAhQTIoXG5cdFx0XHRfZWxtX2xhbmckY29yZSRMaXN0JGFueSxcblx0XHRcdGZ1bmN0aW9uIChfcDIpIHtcblx0XHRcdFx0cmV0dXJuICFpc09rYXkoX3AyKTtcblx0XHRcdH0sXG5cdFx0XHRsaXN0KTtcblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkTGlzdCRmb2xkciA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZvbGRyO1xudmFyIF9lbG1fbGFuZyRjb3JlJExpc3QkZm9sZGwgPSBGMyhcblx0ZnVuY3Rpb24gKGZ1bmMsIGFjYywgbGlzdCkge1xuXHRcdGZvbGRsOlxuXHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHR2YXIgX3AzID0gbGlzdDtcblx0XHRcdGlmIChfcDMuY3RvciA9PT0gJ1tdJykge1xuXHRcdFx0XHRyZXR1cm4gYWNjO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIF92NyA9IGZ1bmMsXG5cdFx0XHRcdFx0X3Y4ID0gQTIoZnVuYywgX3AzLl8wLCBhY2MpLFxuXHRcdFx0XHRcdF92OSA9IF9wMy5fMTtcblx0XHRcdFx0ZnVuYyA9IF92Nztcblx0XHRcdFx0YWNjID0gX3Y4O1xuXHRcdFx0XHRsaXN0ID0gX3Y5O1xuXHRcdFx0XHRjb250aW51ZSBmb2xkbDtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJExpc3QkbGVuZ3RoID0gZnVuY3Rpb24gKHhzKSB7XG5cdHJldHVybiBBMyhcblx0XHRfZWxtX2xhbmckY29yZSRMaXN0JGZvbGRsLFxuXHRcdEYyKFxuXHRcdFx0ZnVuY3Rpb24gKF9wNCwgaSkge1xuXHRcdFx0XHRyZXR1cm4gaSArIDE7XG5cdFx0XHR9KSxcblx0XHQwLFxuXHRcdHhzKTtcbn07XG52YXIgX2VsbV9sYW5nJGNvcmUkTGlzdCRzdW0gPSBmdW5jdGlvbiAobnVtYmVycykge1xuXHRyZXR1cm4gQTMoXG5cdFx0X2VsbV9sYW5nJGNvcmUkTGlzdCRmb2xkbCxcblx0XHRGMihcblx0XHRcdGZ1bmN0aW9uICh4LCB5KSB7XG5cdFx0XHRcdHJldHVybiB4ICsgeTtcblx0XHRcdH0pLFxuXHRcdDAsXG5cdFx0bnVtYmVycyk7XG59O1xudmFyIF9lbG1fbGFuZyRjb3JlJExpc3QkcHJvZHVjdCA9IGZ1bmN0aW9uIChudW1iZXJzKSB7XG5cdHJldHVybiBBMyhcblx0XHRfZWxtX2xhbmckY29yZSRMaXN0JGZvbGRsLFxuXHRcdEYyKFxuXHRcdFx0ZnVuY3Rpb24gKHgsIHkpIHtcblx0XHRcdFx0cmV0dXJuIHggKiB5O1xuXHRcdFx0fSksXG5cdFx0MSxcblx0XHRudW1iZXJzKTtcbn07XG52YXIgX2VsbV9sYW5nJGNvcmUkTGlzdCRtYXhpbXVtID0gZnVuY3Rpb24gKGxpc3QpIHtcblx0dmFyIF9wNSA9IGxpc3Q7XG5cdGlmIChfcDUuY3RvciA9PT0gJzo6Jykge1xuXHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRNYXliZSRKdXN0KFxuXHRcdFx0QTMoX2VsbV9sYW5nJGNvcmUkTGlzdCRmb2xkbCwgX2VsbV9sYW5nJGNvcmUkQmFzaWNzJG1heCwgX3A1Ll8wLCBfcDUuXzEpKTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkTWF5YmUkTm90aGluZztcblx0fVxufTtcbnZhciBfZWxtX2xhbmckY29yZSRMaXN0JG1pbmltdW0gPSBmdW5jdGlvbiAobGlzdCkge1xuXHR2YXIgX3A2ID0gbGlzdDtcblx0aWYgKF9wNi5jdG9yID09PSAnOjonKSB7XG5cdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE1heWJlJEp1c3QoXG5cdFx0XHRBMyhfZWxtX2xhbmckY29yZSRMaXN0JGZvbGRsLCBfZWxtX2xhbmckY29yZSRCYXNpY3MkbWluLCBfcDYuXzAsIF9wNi5fMSkpO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRNYXliZSROb3RoaW5nO1xuXHR9XG59O1xudmFyIF9lbG1fbGFuZyRjb3JlJExpc3QkbWVtYmVyID0gRjIoXG5cdGZ1bmN0aW9uICh4LCB4cykge1xuXHRcdHJldHVybiBBMihcblx0XHRcdF9lbG1fbGFuZyRjb3JlJExpc3QkYW55LFxuXHRcdFx0ZnVuY3Rpb24gKGEpIHtcblx0XHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy5lcShhLCB4KTtcblx0XHRcdH0sXG5cdFx0XHR4cyk7XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJExpc3QkaXNFbXB0eSA9IGZ1bmN0aW9uICh4cykge1xuXHR2YXIgX3A3ID0geHM7XG5cdGlmIChfcDcuY3RvciA9PT0gJ1tdJykge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbnZhciBfZWxtX2xhbmckY29yZSRMaXN0JHRhaWwgPSBmdW5jdGlvbiAobGlzdCkge1xuXHR2YXIgX3A4ID0gbGlzdDtcblx0aWYgKF9wOC5jdG9yID09PSAnOjonKSB7XG5cdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE1heWJlJEp1c3QoX3A4Ll8xKTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkTWF5YmUkTm90aGluZztcblx0fVxufTtcbnZhciBfZWxtX2xhbmckY29yZSRMaXN0JGhlYWQgPSBmdW5jdGlvbiAobGlzdCkge1xuXHR2YXIgX3A5ID0gbGlzdDtcblx0aWYgKF9wOS5jdG9yID09PSAnOjonKSB7XG5cdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE1heWJlJEp1c3QoX3A5Ll8wKTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkTWF5YmUkTm90aGluZztcblx0fVxufTtcbnZhciBfZWxtX2xhbmckY29yZSRMaXN0X29wcyA9IF9lbG1fbGFuZyRjb3JlJExpc3Rfb3BzIHx8IHt9O1xuX2VsbV9sYW5nJGNvcmUkTGlzdF9vcHNbJzo6J10gPSBfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5jb25zO1xudmFyIF9lbG1fbGFuZyRjb3JlJExpc3QkbWFwID0gRjIoXG5cdGZ1bmN0aW9uIChmLCB4cykge1xuXHRcdHJldHVybiBBMyhcblx0XHRcdF9lbG1fbGFuZyRjb3JlJExpc3QkZm9sZHIsXG5cdFx0XHRGMihcblx0XHRcdFx0ZnVuY3Rpb24gKHgsIGFjYykge1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRjdG9yOiAnOjonLFxuXHRcdFx0XHRcdFx0XzA6IGYoeCksXG5cdFx0XHRcdFx0XHRfMTogYWNjXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fSksXG5cdFx0XHR7Y3RvcjogJ1tdJ30sXG5cdFx0XHR4cyk7XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJExpc3QkZmlsdGVyID0gRjIoXG5cdGZ1bmN0aW9uIChwcmVkLCB4cykge1xuXHRcdHZhciBjb25kaXRpb25hbENvbnMgPSBGMihcblx0XHRcdGZ1bmN0aW9uIChmcm9udCwgYmFjaykge1xuXHRcdFx0XHRyZXR1cm4gcHJlZChmcm9udCkgPyB7Y3RvcjogJzo6JywgXzA6IGZyb250LCBfMTogYmFja30gOiBiYWNrO1xuXHRcdFx0fSk7XG5cdFx0cmV0dXJuIEEzKFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkTGlzdCRmb2xkcixcblx0XHRcdGNvbmRpdGlvbmFsQ29ucyxcblx0XHRcdHtjdG9yOiAnW10nfSxcblx0XHRcdHhzKTtcblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkTGlzdCRtYXliZUNvbnMgPSBGMyhcblx0ZnVuY3Rpb24gKGYsIG14LCB4cykge1xuXHRcdHZhciBfcDEwID0gZihteCk7XG5cdFx0aWYgKF9wMTAuY3RvciA9PT0gJ0p1c3QnKSB7XG5cdFx0XHRyZXR1cm4ge2N0b3I6ICc6OicsIF8wOiBfcDEwLl8wLCBfMTogeHN9O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4geHM7XG5cdFx0fVxuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSRMaXN0JGZpbHRlck1hcCA9IEYyKFxuXHRmdW5jdGlvbiAoZiwgeHMpIHtcblx0XHRyZXR1cm4gQTMoXG5cdFx0XHRfZWxtX2xhbmckY29yZSRMaXN0JGZvbGRyLFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkTGlzdCRtYXliZUNvbnMoZiksXG5cdFx0XHR7Y3RvcjogJ1tdJ30sXG5cdFx0XHR4cyk7XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJExpc3QkcmV2ZXJzZSA9IGZ1bmN0aW9uIChsaXN0KSB7XG5cdHJldHVybiBBMyhcblx0XHRfZWxtX2xhbmckY29yZSRMaXN0JGZvbGRsLFxuXHRcdEYyKFxuXHRcdFx0ZnVuY3Rpb24gKHgsIHkpIHtcblx0XHRcdFx0cmV0dXJuIHtjdG9yOiAnOjonLCBfMDogeCwgXzE6IHl9O1xuXHRcdFx0fSksXG5cdFx0e2N0b3I6ICdbXSd9LFxuXHRcdGxpc3QpO1xufTtcbnZhciBfZWxtX2xhbmckY29yZSRMaXN0JHNjYW5sID0gRjMoXG5cdGZ1bmN0aW9uIChmLCBiLCB4cykge1xuXHRcdHZhciBzY2FuMSA9IEYyKFxuXHRcdFx0ZnVuY3Rpb24gKHgsIGFjY0FjYykge1xuXHRcdFx0XHR2YXIgX3AxMSA9IGFjY0FjYztcblx0XHRcdFx0aWYgKF9wMTEuY3RvciA9PT0gJzo6Jykge1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRjdG9yOiAnOjonLFxuXHRcdFx0XHRcdFx0XzA6IEEyKGYsIHgsIF9wMTEuXzApLFxuXHRcdFx0XHRcdFx0XzE6IGFjY0FjY1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIHtjdG9yOiAnW10nfTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJExpc3QkcmV2ZXJzZShcblx0XHRcdEEzKFxuXHRcdFx0XHRfZWxtX2xhbmckY29yZSRMaXN0JGZvbGRsLFxuXHRcdFx0XHRzY2FuMSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGN0b3I6ICc6OicsXG5cdFx0XHRcdFx0XzA6IGIsXG5cdFx0XHRcdFx0XzE6IHtjdG9yOiAnW10nfVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR4cykpO1xuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSRMaXN0JGFwcGVuZCA9IEYyKFxuXHRmdW5jdGlvbiAoeHMsIHlzKSB7XG5cdFx0dmFyIF9wMTIgPSB5cztcblx0XHRpZiAoX3AxMi5jdG9yID09PSAnW10nKSB7XG5cdFx0XHRyZXR1cm4geHM7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBBMyhcblx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTGlzdCRmb2xkcixcblx0XHRcdFx0RjIoXG5cdFx0XHRcdFx0ZnVuY3Rpb24gKHgsIHkpIHtcblx0XHRcdFx0XHRcdHJldHVybiB7Y3RvcjogJzo6JywgXzA6IHgsIF8xOiB5fTtcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0eXMsXG5cdFx0XHRcdHhzKTtcblx0XHR9XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJExpc3QkY29uY2F0ID0gZnVuY3Rpb24gKGxpc3RzKSB7XG5cdHJldHVybiBBMyhcblx0XHRfZWxtX2xhbmckY29yZSRMaXN0JGZvbGRyLFxuXHRcdF9lbG1fbGFuZyRjb3JlJExpc3QkYXBwZW5kLFxuXHRcdHtjdG9yOiAnW10nfSxcblx0XHRsaXN0cyk7XG59O1xudmFyIF9lbG1fbGFuZyRjb3JlJExpc3QkY29uY2F0TWFwID0gRjIoXG5cdGZ1bmN0aW9uIChmLCBsaXN0KSB7XG5cdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJExpc3QkY29uY2F0KFxuXHRcdFx0QTIoX2VsbV9sYW5nJGNvcmUkTGlzdCRtYXAsIGYsIGxpc3QpKTtcblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkTGlzdCRwYXJ0aXRpb24gPSBGMihcblx0ZnVuY3Rpb24gKHByZWQsIGxpc3QpIHtcblx0XHR2YXIgc3RlcCA9IEYyKFxuXHRcdFx0ZnVuY3Rpb24gKHgsIF9wMTMpIHtcblx0XHRcdFx0dmFyIF9wMTQgPSBfcDEzO1xuXHRcdFx0XHR2YXIgX3AxNiA9IF9wMTQuXzA7XG5cdFx0XHRcdHZhciBfcDE1ID0gX3AxNC5fMTtcblx0XHRcdFx0cmV0dXJuIHByZWQoeCkgPyB7XG5cdFx0XHRcdFx0Y3RvcjogJ19UdXBsZTInLFxuXHRcdFx0XHRcdF8wOiB7Y3RvcjogJzo6JywgXzA6IHgsIF8xOiBfcDE2fSxcblx0XHRcdFx0XHRfMTogX3AxNVxuXHRcdFx0XHR9IDoge1xuXHRcdFx0XHRcdGN0b3I6ICdfVHVwbGUyJyxcblx0XHRcdFx0XHRfMDogX3AxNixcblx0XHRcdFx0XHRfMToge2N0b3I6ICc6OicsIF8wOiB4LCBfMTogX3AxNX1cblx0XHRcdFx0fTtcblx0XHRcdH0pO1xuXHRcdHJldHVybiBBMyhcblx0XHRcdF9lbG1fbGFuZyRjb3JlJExpc3QkZm9sZHIsXG5cdFx0XHRzdGVwLFxuXHRcdFx0e1xuXHRcdFx0XHRjdG9yOiAnX1R1cGxlMicsXG5cdFx0XHRcdF8wOiB7Y3RvcjogJ1tdJ30sXG5cdFx0XHRcdF8xOiB7Y3RvcjogJ1tdJ31cblx0XHRcdH0sXG5cdFx0XHRsaXN0KTtcblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkTGlzdCR1bnppcCA9IGZ1bmN0aW9uIChwYWlycykge1xuXHR2YXIgc3RlcCA9IEYyKFxuXHRcdGZ1bmN0aW9uIChfcDE4LCBfcDE3KSB7XG5cdFx0XHR2YXIgX3AxOSA9IF9wMTg7XG5cdFx0XHR2YXIgX3AyMCA9IF9wMTc7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRjdG9yOiAnX1R1cGxlMicsXG5cdFx0XHRcdF8wOiB7Y3RvcjogJzo6JywgXzA6IF9wMTkuXzAsIF8xOiBfcDIwLl8wfSxcblx0XHRcdFx0XzE6IHtjdG9yOiAnOjonLCBfMDogX3AxOS5fMSwgXzE6IF9wMjAuXzF9XG5cdFx0XHR9O1xuXHRcdH0pO1xuXHRyZXR1cm4gQTMoXG5cdFx0X2VsbV9sYW5nJGNvcmUkTGlzdCRmb2xkcixcblx0XHRzdGVwLFxuXHRcdHtcblx0XHRcdGN0b3I6ICdfVHVwbGUyJyxcblx0XHRcdF8wOiB7Y3RvcjogJ1tdJ30sXG5cdFx0XHRfMToge2N0b3I6ICdbXSd9XG5cdFx0fSxcblx0XHRwYWlycyk7XG59O1xudmFyIF9lbG1fbGFuZyRjb3JlJExpc3QkaW50ZXJzcGVyc2UgPSBGMihcblx0ZnVuY3Rpb24gKHNlcCwgeHMpIHtcblx0XHR2YXIgX3AyMSA9IHhzO1xuXHRcdGlmIChfcDIxLmN0b3IgPT09ICdbXScpIHtcblx0XHRcdHJldHVybiB7Y3RvcjogJ1tdJ307XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBzdGVwID0gRjIoXG5cdFx0XHRcdGZ1bmN0aW9uICh4LCByZXN0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdGN0b3I6ICc6OicsXG5cdFx0XHRcdFx0XHRfMDogc2VwLFxuXHRcdFx0XHRcdFx0XzE6IHtjdG9yOiAnOjonLCBfMDogeCwgXzE6IHJlc3R9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fSk7XG5cdFx0XHR2YXIgc3BlcnNlZCA9IEEzKFxuXHRcdFx0XHRfZWxtX2xhbmckY29yZSRMaXN0JGZvbGRyLFxuXHRcdFx0XHRzdGVwLFxuXHRcdFx0XHR7Y3RvcjogJ1tdJ30sXG5cdFx0XHRcdF9wMjEuXzEpO1xuXHRcdFx0cmV0dXJuIHtjdG9yOiAnOjonLCBfMDogX3AyMS5fMCwgXzE6IHNwZXJzZWR9O1xuXHRcdH1cblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkTGlzdCR0YWtlUmV2ZXJzZSA9IEYzKFxuXHRmdW5jdGlvbiAobiwgbGlzdCwgdGFrZW4pIHtcblx0XHR0YWtlUmV2ZXJzZTpcblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0aWYgKF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy5jbXAobiwgMCkgPCAxKSB7XG5cdFx0XHRcdHJldHVybiB0YWtlbjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBfcDIyID0gbGlzdDtcblx0XHRcdFx0aWYgKF9wMjIuY3RvciA9PT0gJ1tdJykge1xuXHRcdFx0XHRcdHJldHVybiB0YWtlbjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YXIgX3YyMyA9IG4gLSAxLFxuXHRcdFx0XHRcdFx0X3YyNCA9IF9wMjIuXzEsXG5cdFx0XHRcdFx0XHRfdjI1ID0ge2N0b3I6ICc6OicsIF8wOiBfcDIyLl8wLCBfMTogdGFrZW59O1xuXHRcdFx0XHRcdG4gPSBfdjIzO1xuXHRcdFx0XHRcdGxpc3QgPSBfdjI0O1xuXHRcdFx0XHRcdHRha2VuID0gX3YyNTtcblx0XHRcdFx0XHRjb250aW51ZSB0YWtlUmV2ZXJzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkTGlzdCR0YWtlVGFpbFJlYyA9IEYyKFxuXHRmdW5jdGlvbiAobiwgbGlzdCkge1xuXHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRMaXN0JHJldmVyc2UoXG5cdFx0XHRBMyhcblx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTGlzdCR0YWtlUmV2ZXJzZSxcblx0XHRcdFx0bixcblx0XHRcdFx0bGlzdCxcblx0XHRcdFx0e2N0b3I6ICdbXSd9KSk7XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJExpc3QkdGFrZUZhc3QgPSBGMyhcblx0ZnVuY3Rpb24gKGN0ciwgbiwgbGlzdCkge1xuXHRcdGlmIChfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuY21wKG4sIDApIDwgMSkge1xuXHRcdFx0cmV0dXJuIHtjdG9yOiAnW10nfTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIF9wMjMgPSB7Y3RvcjogJ19UdXBsZTInLCBfMDogbiwgXzE6IGxpc3R9O1xuXHRcdFx0X3YyNl81OlxuXHRcdFx0ZG8ge1xuXHRcdFx0XHRfdjI2XzE6XG5cdFx0XHRcdGRvIHtcblx0XHRcdFx0XHRpZiAoX3AyMy5jdG9yID09PSAnX1R1cGxlMicpIHtcblx0XHRcdFx0XHRcdGlmIChfcDIzLl8xLmN0b3IgPT09ICdbXScpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGxpc3Q7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRpZiAoX3AyMy5fMS5fMS5jdG9yID09PSAnOjonKSB7XG5cdFx0XHRcdFx0XHRcdFx0c3dpdGNoIChfcDIzLl8wKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrIF92MjZfMTtcblx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgMjpcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjdG9yOiAnOjonLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdF8wOiBfcDIzLl8xLl8wLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdF8xOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjdG9yOiAnOjonLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XzA6IF9wMjMuXzEuXzEuXzAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfMToge2N0b3I6ICdbXSd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoX3AyMy5fMS5fMS5fMS5jdG9yID09PSAnOjonKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGN0b3I6ICc6OicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfMDogX3AyMy5fMS5fMCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF8xOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGN0b3I6ICc6OicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF8wOiBfcDIzLl8xLl8xLl8wLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfMToge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGN0b3I6ICc6OicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XzA6IF9wMjMuXzEuXzEuXzEuXzAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XzE6IHtjdG9yOiAnW10nfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhayBfdjI2XzU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICgoX3AyMy5fMS5fMS5fMS5jdG9yID09PSAnOjonKSAmJiAoX3AyMy5fMS5fMS5fMS5fMS5jdG9yID09PSAnOjonKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhciBfcDI4ID0gX3AyMy5fMS5fMS5fMS5fMDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgX3AyNyA9IF9wMjMuXzEuXzEuXzA7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIF9wMjYgPSBfcDIzLl8xLl8wO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhciBfcDI1ID0gX3AyMy5fMS5fMS5fMS5fMS5fMDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YXIgX3AyNCA9IF9wMjMuXzEuXzEuXzEuXzEuXzE7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuY21wKGN0ciwgMTAwMCkgPiAwKSA/IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGN0b3I6ICc6OicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfMDogX3AyNixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF8xOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGN0b3I6ICc6OicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF8wOiBfcDI3LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfMToge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGN0b3I6ICc6OicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XzA6IF9wMjgsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XzE6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGN0b3I6ICc6OicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfMDogX3AyNSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF8xOiBBMihfZWxtX2xhbmckY29yZSRMaXN0JHRha2VUYWlsUmVjLCBuIC0gNCwgX3AyNClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y3RvcjogJzo6Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF8wOiBfcDI2LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XzE6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y3RvcjogJzo6Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XzA6IF9wMjcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF8xOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y3RvcjogJzo6Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfMDogX3AyOCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfMToge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y3RvcjogJzo6Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF8wOiBfcDI1LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XzE6IEEzKF9lbG1fbGFuZyRjb3JlJExpc3QkdGFrZUZhc3QsIGN0ciArIDEsIG4gLSA0LCBfcDI0KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWsgX3YyNl81O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChfcDIzLl8wID09PSAxKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhayBfdjI2XzE7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrIF92MjZfNTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0YnJlYWsgX3YyNl81O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSB3aGlsZShmYWxzZSk7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0Y3RvcjogJzo6Jyxcblx0XHRcdFx0XHRfMDogX3AyMy5fMS5fMCxcblx0XHRcdFx0XHRfMToge2N0b3I6ICdbXSd9XG5cdFx0XHRcdH07XG5cdFx0XHR9IHdoaWxlKGZhbHNlKTtcblx0XHRcdHJldHVybiBsaXN0O1xuXHRcdH1cblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkTGlzdCR0YWtlID0gRjIoXG5cdGZ1bmN0aW9uIChuLCBsaXN0KSB7XG5cdFx0cmV0dXJuIEEzKF9lbG1fbGFuZyRjb3JlJExpc3QkdGFrZUZhc3QsIDAsIG4sIGxpc3QpO1xuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSRMaXN0JHJlcGVhdEhlbHAgPSBGMyhcblx0ZnVuY3Rpb24gKHJlc3VsdCwgbiwgdmFsdWUpIHtcblx0XHRyZXBlYXRIZWxwOlxuXHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRpZiAoX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLmNtcChuLCAwKSA8IDEpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBfdjI3ID0ge2N0b3I6ICc6OicsIF8wOiB2YWx1ZSwgXzE6IHJlc3VsdH0sXG5cdFx0XHRcdFx0X3YyOCA9IG4gLSAxLFxuXHRcdFx0XHRcdF92MjkgPSB2YWx1ZTtcblx0XHRcdFx0cmVzdWx0ID0gX3YyNztcblx0XHRcdFx0biA9IF92Mjg7XG5cdFx0XHRcdHZhbHVlID0gX3YyOTtcblx0XHRcdFx0Y29udGludWUgcmVwZWF0SGVscDtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJExpc3QkcmVwZWF0ID0gRjIoXG5cdGZ1bmN0aW9uIChuLCB2YWx1ZSkge1xuXHRcdHJldHVybiBBMyhcblx0XHRcdF9lbG1fbGFuZyRjb3JlJExpc3QkcmVwZWF0SGVscCxcblx0XHRcdHtjdG9yOiAnW10nfSxcblx0XHRcdG4sXG5cdFx0XHR2YWx1ZSk7XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJExpc3QkcmFuZ2VIZWxwID0gRjMoXG5cdGZ1bmN0aW9uIChsbywgaGksIGxpc3QpIHtcblx0XHRyYW5nZUhlbHA6XG5cdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdGlmIChfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuY21wKGxvLCBoaSkgPCAxKSB7XG5cdFx0XHRcdHZhciBfdjMwID0gbG8sXG5cdFx0XHRcdFx0X3YzMSA9IGhpIC0gMSxcblx0XHRcdFx0XHRfdjMyID0ge2N0b3I6ICc6OicsIF8wOiBoaSwgXzE6IGxpc3R9O1xuXHRcdFx0XHRsbyA9IF92MzA7XG5cdFx0XHRcdGhpID0gX3YzMTtcblx0XHRcdFx0bGlzdCA9IF92MzI7XG5cdFx0XHRcdGNvbnRpbnVlIHJhbmdlSGVscDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBsaXN0O1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkTGlzdCRyYW5nZSA9IEYyKFxuXHRmdW5jdGlvbiAobG8sIGhpKSB7XG5cdFx0cmV0dXJuIEEzKFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkTGlzdCRyYW5nZUhlbHAsXG5cdFx0XHRsbyxcblx0XHRcdGhpLFxuXHRcdFx0e2N0b3I6ICdbXSd9KTtcblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkTGlzdCRpbmRleGVkTWFwID0gRjIoXG5cdGZ1bmN0aW9uIChmLCB4cykge1xuXHRcdHJldHVybiBBMyhcblx0XHRcdF9lbG1fbGFuZyRjb3JlJExpc3QkbWFwMixcblx0XHRcdGYsXG5cdFx0XHRBMihcblx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTGlzdCRyYW5nZSxcblx0XHRcdFx0MCxcblx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTGlzdCRsZW5ndGgoeHMpIC0gMSksXG5cdFx0XHR4cyk7XG5cdH0pO1xuXG52YXIgX2VsbV9sYW5nJGNvcmUkQXJyYXkkYXBwZW5kID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0FycmF5LmFwcGVuZDtcbnZhciBfZWxtX2xhbmckY29yZSRBcnJheSRsZW5ndGggPSBfZWxtX2xhbmckY29yZSROYXRpdmVfQXJyYXkubGVuZ3RoO1xudmFyIF9lbG1fbGFuZyRjb3JlJEFycmF5JGlzRW1wdHkgPSBmdW5jdGlvbiAoYXJyYXkpIHtcblx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy5lcShcblx0XHRfZWxtX2xhbmckY29yZSRBcnJheSRsZW5ndGgoYXJyYXkpLFxuXHRcdDApO1xufTtcbnZhciBfZWxtX2xhbmckY29yZSRBcnJheSRzbGljZSA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9BcnJheS5zbGljZTtcbnZhciBfZWxtX2xhbmckY29yZSRBcnJheSRzZXQgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfQXJyYXkuc2V0O1xudmFyIF9lbG1fbGFuZyRjb3JlJEFycmF5JGdldCA9IEYyKFxuXHRmdW5jdGlvbiAoaSwgYXJyYXkpIHtcblx0XHRyZXR1cm4gKChfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuY21wKDAsIGkpIDwgMSkgJiYgKF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy5jbXAoXG5cdFx0XHRpLFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX0FycmF5Lmxlbmd0aChhcnJheSkpIDwgMCkpID8gX2VsbV9sYW5nJGNvcmUkTWF5YmUkSnVzdChcblx0XHRcdEEyKF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9BcnJheS5nZXQsIGksIGFycmF5KSkgOiBfZWxtX2xhbmckY29yZSRNYXliZSROb3RoaW5nO1xuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSRBcnJheSRwdXNoID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0FycmF5LnB1c2g7XG52YXIgX2VsbV9sYW5nJGNvcmUkQXJyYXkkZW1wdHkgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfQXJyYXkuZW1wdHk7XG52YXIgX2VsbV9sYW5nJGNvcmUkQXJyYXkkZmlsdGVyID0gRjIoXG5cdGZ1bmN0aW9uIChpc09rYXksIGFycikge1xuXHRcdHZhciB1cGRhdGUgPSBGMihcblx0XHRcdGZ1bmN0aW9uICh4LCB4cykge1xuXHRcdFx0XHRyZXR1cm4gaXNPa2F5KHgpID8gQTIoX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0FycmF5LnB1c2gsIHgsIHhzKSA6IHhzO1xuXHRcdFx0fSk7XG5cdFx0cmV0dXJuIEEzKF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9BcnJheS5mb2xkbCwgdXBkYXRlLCBfZWxtX2xhbmckY29yZSROYXRpdmVfQXJyYXkuZW1wdHksIGFycik7XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJEFycmF5JGZvbGRyID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0FycmF5LmZvbGRyO1xudmFyIF9lbG1fbGFuZyRjb3JlJEFycmF5JGZvbGRsID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0FycmF5LmZvbGRsO1xudmFyIF9lbG1fbGFuZyRjb3JlJEFycmF5JGluZGV4ZWRNYXAgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfQXJyYXkuaW5kZXhlZE1hcDtcbnZhciBfZWxtX2xhbmckY29yZSRBcnJheSRtYXAgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfQXJyYXkubWFwO1xudmFyIF9lbG1fbGFuZyRjb3JlJEFycmF5JHRvSW5kZXhlZExpc3QgPSBmdW5jdGlvbiAoYXJyYXkpIHtcblx0cmV0dXJuIEEzKFxuXHRcdF9lbG1fbGFuZyRjb3JlJExpc3QkbWFwMixcblx0XHRGMihcblx0XHRcdGZ1bmN0aW9uICh2MCwgdjEpIHtcblx0XHRcdFx0cmV0dXJuIHtjdG9yOiAnX1R1cGxlMicsIF8wOiB2MCwgXzE6IHYxfTtcblx0XHRcdH0pLFxuXHRcdEEyKFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkTGlzdCRyYW5nZSxcblx0XHRcdDAsXG5cdFx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfQXJyYXkubGVuZ3RoKGFycmF5KSAtIDEpLFxuXHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9BcnJheS50b0xpc3QoYXJyYXkpKTtcbn07XG52YXIgX2VsbV9sYW5nJGNvcmUkQXJyYXkkdG9MaXN0ID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0FycmF5LnRvTGlzdDtcbnZhciBfZWxtX2xhbmckY29yZSRBcnJheSRmcm9tTGlzdCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9BcnJheS5mcm9tTGlzdDtcbnZhciBfZWxtX2xhbmckY29yZSRBcnJheSRpbml0aWFsaXplID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0FycmF5LmluaXRpYWxpemU7XG52YXIgX2VsbV9sYW5nJGNvcmUkQXJyYXkkcmVwZWF0ID0gRjIoXG5cdGZ1bmN0aW9uIChuLCBlKSB7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkQXJyYXkkaW5pdGlhbGl6ZSxcblx0XHRcdG4sXG5cdFx0XHRfZWxtX2xhbmckY29yZSRCYXNpY3MkYWx3YXlzKGUpKTtcblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkQXJyYXkkQXJyYXkgPSB7Y3RvcjogJ0FycmF5J307XG5cbi8vaW1wb3J0IE5hdGl2ZS5VdGlscyAvL1xuXG52YXIgX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0NoYXIgPSBmdW5jdGlvbigpIHtcblxucmV0dXJuIHtcblx0ZnJvbUNvZGU6IGZ1bmN0aW9uKGMpIHsgcmV0dXJuIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy5jaHIoU3RyaW5nLmZyb21DaGFyQ29kZShjKSk7IH0sXG5cdHRvQ29kZTogZnVuY3Rpb24oYykgeyByZXR1cm4gYy5jaGFyQ29kZUF0KDApOyB9LFxuXHR0b1VwcGVyOiBmdW5jdGlvbihjKSB7IHJldHVybiBfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuY2hyKGMudG9VcHBlckNhc2UoKSk7IH0sXG5cdHRvTG93ZXI6IGZ1bmN0aW9uKGMpIHsgcmV0dXJuIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy5jaHIoYy50b0xvd2VyQ2FzZSgpKTsgfSxcblx0dG9Mb2NhbGVVcHBlcjogZnVuY3Rpb24oYykgeyByZXR1cm4gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLmNocihjLnRvTG9jYWxlVXBwZXJDYXNlKCkpOyB9LFxuXHR0b0xvY2FsZUxvd2VyOiBmdW5jdGlvbihjKSB7IHJldHVybiBfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuY2hyKGMudG9Mb2NhbGVMb3dlckNhc2UoKSk7IH1cbn07XG5cbn0oKTtcbnZhciBfZWxtX2xhbmckY29yZSRDaGFyJGZyb21Db2RlID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0NoYXIuZnJvbUNvZGU7XG52YXIgX2VsbV9sYW5nJGNvcmUkQ2hhciR0b0NvZGUgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfQ2hhci50b0NvZGU7XG52YXIgX2VsbV9sYW5nJGNvcmUkQ2hhciR0b0xvY2FsZUxvd2VyID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0NoYXIudG9Mb2NhbGVMb3dlcjtcbnZhciBfZWxtX2xhbmckY29yZSRDaGFyJHRvTG9jYWxlVXBwZXIgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfQ2hhci50b0xvY2FsZVVwcGVyO1xudmFyIF9lbG1fbGFuZyRjb3JlJENoYXIkdG9Mb3dlciA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9DaGFyLnRvTG93ZXI7XG52YXIgX2VsbV9sYW5nJGNvcmUkQ2hhciR0b1VwcGVyID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0NoYXIudG9VcHBlcjtcbnZhciBfZWxtX2xhbmckY29yZSRDaGFyJGlzQmV0d2VlbiA9IEYzKFxuXHRmdW5jdGlvbiAobG93LCBoaWdoLCAkY2hhcikge1xuXHRcdHZhciBjb2RlID0gX2VsbV9sYW5nJGNvcmUkQ2hhciR0b0NvZGUoJGNoYXIpO1xuXHRcdHJldHVybiAoX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLmNtcChcblx0XHRcdGNvZGUsXG5cdFx0XHRfZWxtX2xhbmckY29yZSRDaGFyJHRvQ29kZShsb3cpKSA+IC0xKSAmJiAoX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLmNtcChcblx0XHRcdGNvZGUsXG5cdFx0XHRfZWxtX2xhbmckY29yZSRDaGFyJHRvQ29kZShoaWdoKSkgPCAxKTtcblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkQ2hhciRpc1VwcGVyID0gQTIoXG5cdF9lbG1fbGFuZyRjb3JlJENoYXIkaXNCZXR3ZWVuLFxuXHRfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuY2hyKCdBJyksXG5cdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy5jaHIoJ1onKSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkQ2hhciRpc0xvd2VyID0gQTIoXG5cdF9lbG1fbGFuZyRjb3JlJENoYXIkaXNCZXR3ZWVuLFxuXHRfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuY2hyKCdhJyksXG5cdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy5jaHIoJ3onKSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkQ2hhciRpc0RpZ2l0ID0gQTIoXG5cdF9lbG1fbGFuZyRjb3JlJENoYXIkaXNCZXR3ZWVuLFxuXHRfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuY2hyKCcwJyksXG5cdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy5jaHIoJzknKSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkQ2hhciRpc09jdERpZ2l0ID0gQTIoXG5cdF9lbG1fbGFuZyRjb3JlJENoYXIkaXNCZXR3ZWVuLFxuXHRfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuY2hyKCcwJyksXG5cdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy5jaHIoJzcnKSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkQ2hhciRpc0hleERpZ2l0ID0gZnVuY3Rpb24gKCRjaGFyKSB7XG5cdHJldHVybiBfZWxtX2xhbmckY29yZSRDaGFyJGlzRGlnaXQoJGNoYXIpIHx8IChBMyhcblx0XHRfZWxtX2xhbmckY29yZSRDaGFyJGlzQmV0d2Vlbixcblx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuY2hyKCdhJyksXG5cdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLmNocignZicpLFxuXHRcdCRjaGFyKSB8fCBBMyhcblx0XHRfZWxtX2xhbmckY29yZSRDaGFyJGlzQmV0d2Vlbixcblx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuY2hyKCdBJyksXG5cdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLmNocignRicpLFxuXHRcdCRjaGFyKSk7XG59O1xuXG4vL2ltcG9ydCBOYXRpdmUuVXRpbHMgLy9cblxudmFyIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TY2hlZHVsZXIgPSBmdW5jdGlvbigpIHtcblxudmFyIE1BWF9TVEVQUyA9IDEwMDAwO1xuXG5cbi8vIFRBU0tTXG5cbmZ1bmN0aW9uIHN1Y2NlZWQodmFsdWUpXG57XG5cdHJldHVybiB7XG5cdFx0Y3RvcjogJ19UYXNrX3N1Y2NlZWQnLFxuXHRcdHZhbHVlOiB2YWx1ZVxuXHR9O1xufVxuXG5mdW5jdGlvbiBmYWlsKGVycm9yKVxue1xuXHRyZXR1cm4ge1xuXHRcdGN0b3I6ICdfVGFza19mYWlsJyxcblx0XHR2YWx1ZTogZXJyb3Jcblx0fTtcbn1cblxuZnVuY3Rpb24gbmF0aXZlQmluZGluZyhjYWxsYmFjaylcbntcblx0cmV0dXJuIHtcblx0XHRjdG9yOiAnX1Rhc2tfbmF0aXZlQmluZGluZycsXG5cdFx0Y2FsbGJhY2s6IGNhbGxiYWNrLFxuXHRcdGNhbmNlbDogbnVsbFxuXHR9O1xufVxuXG5mdW5jdGlvbiBhbmRUaGVuKGNhbGxiYWNrLCB0YXNrKVxue1xuXHRyZXR1cm4ge1xuXHRcdGN0b3I6ICdfVGFza19hbmRUaGVuJyxcblx0XHRjYWxsYmFjazogY2FsbGJhY2ssXG5cdFx0dGFzazogdGFza1xuXHR9O1xufVxuXG5mdW5jdGlvbiBvbkVycm9yKGNhbGxiYWNrLCB0YXNrKVxue1xuXHRyZXR1cm4ge1xuXHRcdGN0b3I6ICdfVGFza19vbkVycm9yJyxcblx0XHRjYWxsYmFjazogY2FsbGJhY2ssXG5cdFx0dGFzazogdGFza1xuXHR9O1xufVxuXG5mdW5jdGlvbiByZWNlaXZlKGNhbGxiYWNrKVxue1xuXHRyZXR1cm4ge1xuXHRcdGN0b3I6ICdfVGFza19yZWNlaXZlJyxcblx0XHRjYWxsYmFjazogY2FsbGJhY2tcblx0fTtcbn1cblxuXG4vLyBQUk9DRVNTRVNcblxuZnVuY3Rpb24gcmF3U3Bhd24odGFzaylcbntcblx0dmFyIHByb2Nlc3MgPSB7XG5cdFx0Y3RvcjogJ19Qcm9jZXNzJyxcblx0XHRpZDogX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLmd1aWQoKSxcblx0XHRyb290OiB0YXNrLFxuXHRcdHN0YWNrOiBudWxsLFxuXHRcdG1haWxib3g6IFtdXG5cdH07XG5cblx0ZW5xdWV1ZShwcm9jZXNzKTtcblxuXHRyZXR1cm4gcHJvY2Vzcztcbn1cblxuZnVuY3Rpb24gc3Bhd24odGFzaylcbntcblx0cmV0dXJuIG5hdGl2ZUJpbmRpbmcoZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHR2YXIgcHJvY2VzcyA9IHJhd1NwYXduKHRhc2spO1xuXHRcdGNhbGxiYWNrKHN1Y2NlZWQocHJvY2VzcykpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gcmF3U2VuZChwcm9jZXNzLCBtc2cpXG57XG5cdHByb2Nlc3MubWFpbGJveC5wdXNoKG1zZyk7XG5cdGVucXVldWUocHJvY2Vzcyk7XG59XG5cbmZ1bmN0aW9uIHNlbmQocHJvY2VzcywgbXNnKVxue1xuXHRyZXR1cm4gbmF0aXZlQmluZGluZyhmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdHJhd1NlbmQocHJvY2VzcywgbXNnKTtcblx0XHRjYWxsYmFjayhzdWNjZWVkKF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy5UdXBsZTApKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGtpbGwocHJvY2Vzcylcbntcblx0cmV0dXJuIG5hdGl2ZUJpbmRpbmcoZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHR2YXIgcm9vdCA9IHByb2Nlc3Mucm9vdDtcblx0XHRpZiAocm9vdC5jdG9yID09PSAnX1Rhc2tfbmF0aXZlQmluZGluZycgJiYgcm9vdC5jYW5jZWwpXG5cdFx0e1xuXHRcdFx0cm9vdC5jYW5jZWwoKTtcblx0XHR9XG5cblx0XHRwcm9jZXNzLnJvb3QgPSBudWxsO1xuXG5cdFx0Y2FsbGJhY2soc3VjY2VlZChfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuVHVwbGUwKSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBzbGVlcCh0aW1lKVxue1xuXHRyZXR1cm4gbmF0aXZlQmluZGluZyhmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdHZhciBpZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRjYWxsYmFjayhzdWNjZWVkKF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy5UdXBsZTApKTtcblx0XHR9LCB0aW1lKTtcblxuXHRcdHJldHVybiBmdW5jdGlvbigpIHsgY2xlYXJUaW1lb3V0KGlkKTsgfTtcblx0fSk7XG59XG5cblxuLy8gU1RFUCBQUk9DRVNTRVNcblxuZnVuY3Rpb24gc3RlcChudW1TdGVwcywgcHJvY2Vzcylcbntcblx0d2hpbGUgKG51bVN0ZXBzIDwgTUFYX1NURVBTKVxuXHR7XG5cdFx0dmFyIGN0b3IgPSBwcm9jZXNzLnJvb3QuY3RvcjtcblxuXHRcdGlmIChjdG9yID09PSAnX1Rhc2tfc3VjY2VlZCcpXG5cdFx0e1xuXHRcdFx0d2hpbGUgKHByb2Nlc3Muc3RhY2sgJiYgcHJvY2Vzcy5zdGFjay5jdG9yID09PSAnX1Rhc2tfb25FcnJvcicpXG5cdFx0XHR7XG5cdFx0XHRcdHByb2Nlc3Muc3RhY2sgPSBwcm9jZXNzLnN0YWNrLnJlc3Q7XG5cdFx0XHR9XG5cdFx0XHRpZiAocHJvY2Vzcy5zdGFjayA9PT0gbnVsbClcblx0XHRcdHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRwcm9jZXNzLnJvb3QgPSBwcm9jZXNzLnN0YWNrLmNhbGxiYWNrKHByb2Nlc3Mucm9vdC52YWx1ZSk7XG5cdFx0XHRwcm9jZXNzLnN0YWNrID0gcHJvY2Vzcy5zdGFjay5yZXN0O1xuXHRcdFx0KytudW1TdGVwcztcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmIChjdG9yID09PSAnX1Rhc2tfZmFpbCcpXG5cdFx0e1xuXHRcdFx0d2hpbGUgKHByb2Nlc3Muc3RhY2sgJiYgcHJvY2Vzcy5zdGFjay5jdG9yID09PSAnX1Rhc2tfYW5kVGhlbicpXG5cdFx0XHR7XG5cdFx0XHRcdHByb2Nlc3Muc3RhY2sgPSBwcm9jZXNzLnN0YWNrLnJlc3Q7XG5cdFx0XHR9XG5cdFx0XHRpZiAocHJvY2Vzcy5zdGFjayA9PT0gbnVsbClcblx0XHRcdHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRwcm9jZXNzLnJvb3QgPSBwcm9jZXNzLnN0YWNrLmNhbGxiYWNrKHByb2Nlc3Mucm9vdC52YWx1ZSk7XG5cdFx0XHRwcm9jZXNzLnN0YWNrID0gcHJvY2Vzcy5zdGFjay5yZXN0O1xuXHRcdFx0KytudW1TdGVwcztcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmIChjdG9yID09PSAnX1Rhc2tfYW5kVGhlbicpXG5cdFx0e1xuXHRcdFx0cHJvY2Vzcy5zdGFjayA9IHtcblx0XHRcdFx0Y3RvcjogJ19UYXNrX2FuZFRoZW4nLFxuXHRcdFx0XHRjYWxsYmFjazogcHJvY2Vzcy5yb290LmNhbGxiYWNrLFxuXHRcdFx0XHRyZXN0OiBwcm9jZXNzLnN0YWNrXG5cdFx0XHR9O1xuXHRcdFx0cHJvY2Vzcy5yb290ID0gcHJvY2Vzcy5yb290LnRhc2s7XG5cdFx0XHQrK251bVN0ZXBzO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKGN0b3IgPT09ICdfVGFza19vbkVycm9yJylcblx0XHR7XG5cdFx0XHRwcm9jZXNzLnN0YWNrID0ge1xuXHRcdFx0XHRjdG9yOiAnX1Rhc2tfb25FcnJvcicsXG5cdFx0XHRcdGNhbGxiYWNrOiBwcm9jZXNzLnJvb3QuY2FsbGJhY2ssXG5cdFx0XHRcdHJlc3Q6IHByb2Nlc3Muc3RhY2tcblx0XHRcdH07XG5cdFx0XHRwcm9jZXNzLnJvb3QgPSBwcm9jZXNzLnJvb3QudGFzaztcblx0XHRcdCsrbnVtU3RlcHM7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAoY3RvciA9PT0gJ19UYXNrX25hdGl2ZUJpbmRpbmcnKVxuXHRcdHtcblx0XHRcdHByb2Nlc3Mucm9vdC5jYW5jZWwgPSBwcm9jZXNzLnJvb3QuY2FsbGJhY2soZnVuY3Rpb24obmV3Um9vdCkge1xuXHRcdFx0XHRwcm9jZXNzLnJvb3QgPSBuZXdSb290O1xuXHRcdFx0XHRlbnF1ZXVlKHByb2Nlc3MpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGJyZWFrO1xuXHRcdH1cblxuXHRcdGlmIChjdG9yID09PSAnX1Rhc2tfcmVjZWl2ZScpXG5cdFx0e1xuXHRcdFx0dmFyIG1haWxib3ggPSBwcm9jZXNzLm1haWxib3g7XG5cdFx0XHRpZiAobWFpbGJveC5sZW5ndGggPT09IDApXG5cdFx0XHR7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRwcm9jZXNzLnJvb3QgPSBwcm9jZXNzLnJvb3QuY2FsbGJhY2sobWFpbGJveC5zaGlmdCgpKTtcblx0XHRcdCsrbnVtU3RlcHM7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHR0aHJvdyBuZXcgRXJyb3IoY3Rvcik7XG5cdH1cblxuXHRpZiAobnVtU3RlcHMgPCBNQVhfU1RFUFMpXG5cdHtcblx0XHRyZXR1cm4gbnVtU3RlcHMgKyAxO1xuXHR9XG5cdGVucXVldWUocHJvY2Vzcyk7XG5cblx0cmV0dXJuIG51bVN0ZXBzO1xufVxuXG5cbi8vIFdPUksgUVVFVUVcblxudmFyIHdvcmtpbmcgPSBmYWxzZTtcbnZhciB3b3JrUXVldWUgPSBbXTtcblxuZnVuY3Rpb24gZW5xdWV1ZShwcm9jZXNzKVxue1xuXHR3b3JrUXVldWUucHVzaChwcm9jZXNzKTtcblxuXHRpZiAoIXdvcmtpbmcpXG5cdHtcblx0XHRzZXRUaW1lb3V0KHdvcmssIDApO1xuXHRcdHdvcmtpbmcgPSB0cnVlO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHdvcmsoKVxue1xuXHR2YXIgbnVtU3RlcHMgPSAwO1xuXHR2YXIgcHJvY2Vzcztcblx0d2hpbGUgKG51bVN0ZXBzIDwgTUFYX1NURVBTICYmIChwcm9jZXNzID0gd29ya1F1ZXVlLnNoaWZ0KCkpKVxuXHR7XG5cdFx0aWYgKHByb2Nlc3Mucm9vdClcblx0XHR7XG5cdFx0XHRudW1TdGVwcyA9IHN0ZXAobnVtU3RlcHMsIHByb2Nlc3MpO1xuXHRcdH1cblx0fVxuXHRpZiAoIXByb2Nlc3MpXG5cdHtcblx0XHR3b3JraW5nID0gZmFsc2U7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHNldFRpbWVvdXQod29yaywgMCk7XG59XG5cblxucmV0dXJuIHtcblx0c3VjY2VlZDogc3VjY2VlZCxcblx0ZmFpbDogZmFpbCxcblx0bmF0aXZlQmluZGluZzogbmF0aXZlQmluZGluZyxcblx0YW5kVGhlbjogRjIoYW5kVGhlbiksXG5cdG9uRXJyb3I6IEYyKG9uRXJyb3IpLFxuXHRyZWNlaXZlOiByZWNlaXZlLFxuXG5cdHNwYXduOiBzcGF3bixcblx0a2lsbDoga2lsbCxcblx0c2xlZXA6IHNsZWVwLFxuXHRzZW5kOiBGMihzZW5kKSxcblxuXHRyYXdTcGF3bjogcmF3U3Bhd24sXG5cdHJhd1NlbmQ6IHJhd1NlbmRcbn07XG5cbn0oKTtcbi8vaW1wb3J0IC8vXG5cbnZhciBfZWxtX2xhbmckY29yZSROYXRpdmVfUGxhdGZvcm0gPSBmdW5jdGlvbigpIHtcblxuXG4vLyBQUk9HUkFNU1xuXG5mdW5jdGlvbiBwcm9ncmFtKGltcGwpXG57XG5cdHJldHVybiBmdW5jdGlvbihmbGFnRGVjb2Rlcilcblx0e1xuXHRcdHJldHVybiBmdW5jdGlvbihvYmplY3QsIG1vZHVsZU5hbWUpXG5cdFx0e1xuXHRcdFx0b2JqZWN0Wyd3b3JrZXInXSA9IGZ1bmN0aW9uIHdvcmtlcihmbGFncylcblx0XHRcdHtcblx0XHRcdFx0aWYgKHR5cGVvZiBmbGFncyAhPT0gJ3VuZGVmaW5lZCcpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHQnVGhlIGAnICsgbW9kdWxlTmFtZSArICdgIG1vZHVsZSBkb2VzIG5vdCBuZWVkIGZsYWdzLlxcbidcblx0XHRcdFx0XHRcdCsgJ0NhbGwgJyArIG1vZHVsZU5hbWUgKyAnLndvcmtlcigpIHdpdGggbm8gYXJndW1lbnRzIGFuZCB5b3Ugc2hvdWxkIGJlIGFsbCBzZXQhJ1xuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gaW5pdGlhbGl6ZShcblx0XHRcdFx0XHRpbXBsLmluaXQsXG5cdFx0XHRcdFx0aW1wbC51cGRhdGUsXG5cdFx0XHRcdFx0aW1wbC5zdWJzY3JpcHRpb25zLFxuXHRcdFx0XHRcdHJlbmRlcmVyXG5cdFx0XHRcdCk7XG5cdFx0XHR9O1xuXHRcdH07XG5cdH07XG59XG5cbmZ1bmN0aW9uIHByb2dyYW1XaXRoRmxhZ3MoaW1wbClcbntcblx0cmV0dXJuIGZ1bmN0aW9uKGZsYWdEZWNvZGVyKVxuXHR7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKG9iamVjdCwgbW9kdWxlTmFtZSlcblx0XHR7XG5cdFx0XHRvYmplY3RbJ3dvcmtlciddID0gZnVuY3Rpb24gd29ya2VyKGZsYWdzKVxuXHRcdFx0e1xuXHRcdFx0XHRpZiAodHlwZW9mIGZsYWdEZWNvZGVyID09PSAndW5kZWZpbmVkJylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdCdBcmUgeW91IHRyeWluZyB0byBzbmVhayBhIE5ldmVyIHZhbHVlIGludG8gRWxtPyBUcmlja3N0ZXIhXFxuJ1xuXHRcdFx0XHRcdFx0KyAnSXQgbG9va3MgbGlrZSAnICsgbW9kdWxlTmFtZSArICcubWFpbiBpcyBkZWZpbmVkIHdpdGggYHByb2dyYW1XaXRoRmxhZ3NgIGJ1dCBoYXMgdHlwZSBgUHJvZ3JhbSBOZXZlcmAuXFxuJ1xuXHRcdFx0XHRcdFx0KyAnVXNlIGBwcm9ncmFtYCBpbnN0ZWFkIGlmIHlvdSBkbyBub3Qgd2FudCBmbGFncy4nXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciByZXN1bHQgPSBBMihfZWxtX2xhbmckY29yZSROYXRpdmVfSnNvbi5ydW4sIGZsYWdEZWNvZGVyLCBmbGFncyk7XG5cdFx0XHRcdGlmIChyZXN1bHQuY3RvciA9PT0gJ0VycicpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRtb2R1bGVOYW1lICsgJy53b3JrZXIoLi4uKSB3YXMgY2FsbGVkIHdpdGggYW4gdW5leHBlY3RlZCBhcmd1bWVudC5cXG4nXG5cdFx0XHRcdFx0XHQrICdJIHRyaWVkIHRvIGNvbnZlcnQgaXQgdG8gYW4gRWxtIHZhbHVlLCBidXQgcmFuIGludG8gdGhpcyBwcm9ibGVtOlxcblxcbidcblx0XHRcdFx0XHRcdCsgcmVzdWx0Ll8wXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBpbml0aWFsaXplKFxuXHRcdFx0XHRcdGltcGwuaW5pdChyZXN1bHQuXzApLFxuXHRcdFx0XHRcdGltcGwudXBkYXRlLFxuXHRcdFx0XHRcdGltcGwuc3Vic2NyaXB0aW9ucyxcblx0XHRcdFx0XHRyZW5kZXJlclxuXHRcdFx0XHQpO1xuXHRcdFx0fTtcblx0XHR9O1xuXHR9O1xufVxuXG5mdW5jdGlvbiByZW5kZXJlcihlbnF1ZXVlLCBfKVxue1xuXHRyZXR1cm4gZnVuY3Rpb24oXykge307XG59XG5cblxuLy8gSFRNTCBUTyBQUk9HUkFNXG5cbmZ1bmN0aW9uIGh0bWxUb1Byb2dyYW0odm5vZGUpXG57XG5cdHZhciBlbXB0eUJhZyA9IGJhdGNoKF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0Lk5pbCk7XG5cdHZhciBub0NoYW5nZSA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy5UdXBsZTIoXG5cdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLlR1cGxlMCxcblx0XHRlbXB0eUJhZ1xuXHQpO1xuXG5cdHJldHVybiBfZWxtX2xhbmckdmlydHVhbF9kb20kVmlydHVhbERvbSRwcm9ncmFtKHtcblx0XHRpbml0OiBub0NoYW5nZSxcblx0XHR2aWV3OiBmdW5jdGlvbihtb2RlbCkgeyByZXR1cm4gbWFpbjsgfSxcblx0XHR1cGRhdGU6IEYyKGZ1bmN0aW9uKG1zZywgbW9kZWwpIHsgcmV0dXJuIG5vQ2hhbmdlOyB9KSxcblx0XHRzdWJzY3JpcHRpb25zOiBmdW5jdGlvbiAobW9kZWwpIHsgcmV0dXJuIGVtcHR5QmFnOyB9XG5cdH0pO1xufVxuXG5cbi8vIElOSVRJQUxJWkUgQSBQUk9HUkFNXG5cbmZ1bmN0aW9uIGluaXRpYWxpemUoaW5pdCwgdXBkYXRlLCBzdWJzY3JpcHRpb25zLCByZW5kZXJlcilcbntcblx0Ly8gYW1iaWVudCBzdGF0ZVxuXHR2YXIgbWFuYWdlcnMgPSB7fTtcblx0dmFyIHVwZGF0ZVZpZXc7XG5cblx0Ly8gaW5pdCBhbmQgdXBkYXRlIHN0YXRlIGluIG1haW4gcHJvY2Vzc1xuXHR2YXIgaW5pdEFwcCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TY2hlZHVsZXIubmF0aXZlQmluZGluZyhmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdHZhciBtb2RlbCA9IGluaXQuXzA7XG5cdFx0dXBkYXRlVmlldyA9IHJlbmRlcmVyKGVucXVldWUsIG1vZGVsKTtcblx0XHR2YXIgY21kcyA9IGluaXQuXzE7XG5cdFx0dmFyIHN1YnMgPSBzdWJzY3JpcHRpb25zKG1vZGVsKTtcblx0XHRkaXNwYXRjaEVmZmVjdHMobWFuYWdlcnMsIGNtZHMsIHN1YnMpO1xuXHRcdGNhbGxiYWNrKF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TY2hlZHVsZXIuc3VjY2VlZChtb2RlbCkpO1xuXHR9KTtcblxuXHRmdW5jdGlvbiBvbk1lc3NhZ2UobXNnLCBtb2RlbClcblx0e1xuXHRcdHJldHVybiBfZWxtX2xhbmckY29yZSROYXRpdmVfU2NoZWR1bGVyLm5hdGl2ZUJpbmRpbmcoZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHRcdHZhciByZXN1bHRzID0gQTIodXBkYXRlLCBtc2csIG1vZGVsKTtcblx0XHRcdG1vZGVsID0gcmVzdWx0cy5fMDtcblx0XHRcdHVwZGF0ZVZpZXcobW9kZWwpO1xuXHRcdFx0dmFyIGNtZHMgPSByZXN1bHRzLl8xO1xuXHRcdFx0dmFyIHN1YnMgPSBzdWJzY3JpcHRpb25zKG1vZGVsKTtcblx0XHRcdGRpc3BhdGNoRWZmZWN0cyhtYW5hZ2VycywgY21kcywgc3Vicyk7XG5cdFx0XHRjYWxsYmFjayhfZWxtX2xhbmckY29yZSROYXRpdmVfU2NoZWR1bGVyLnN1Y2NlZWQobW9kZWwpKTtcblx0XHR9KTtcblx0fVxuXG5cdHZhciBtYWluUHJvY2VzcyA9IHNwYXduTG9vcChpbml0QXBwLCBvbk1lc3NhZ2UpO1xuXG5cdGZ1bmN0aW9uIGVucXVldWUobXNnKVxuXHR7XG5cdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX1NjaGVkdWxlci5yYXdTZW5kKG1haW5Qcm9jZXNzLCBtc2cpO1xuXHR9XG5cblx0dmFyIHBvcnRzID0gc2V0dXBFZmZlY3RzKG1hbmFnZXJzLCBlbnF1ZXVlKTtcblxuXHRyZXR1cm4gcG9ydHMgPyB7IHBvcnRzOiBwb3J0cyB9IDoge307XG59XG5cblxuLy8gRUZGRUNUIE1BTkFHRVJTXG5cbnZhciBlZmZlY3RNYW5hZ2VycyA9IHt9O1xuXG5mdW5jdGlvbiBzZXR1cEVmZmVjdHMobWFuYWdlcnMsIGNhbGxiYWNrKVxue1xuXHR2YXIgcG9ydHM7XG5cblx0Ly8gc2V0dXAgYWxsIG5lY2Vzc2FyeSBlZmZlY3QgbWFuYWdlcnNcblx0Zm9yICh2YXIga2V5IGluIGVmZmVjdE1hbmFnZXJzKVxuXHR7XG5cdFx0dmFyIG1hbmFnZXIgPSBlZmZlY3RNYW5hZ2Vyc1trZXldO1xuXG5cdFx0aWYgKG1hbmFnZXIuaXNGb3JlaWduKVxuXHRcdHtcblx0XHRcdHBvcnRzID0gcG9ydHMgfHwge307XG5cdFx0XHRwb3J0c1trZXldID0gbWFuYWdlci50YWcgPT09ICdjbWQnXG5cdFx0XHRcdD8gc2V0dXBPdXRnb2luZ1BvcnQoa2V5KVxuXHRcdFx0XHQ6IHNldHVwSW5jb21pbmdQb3J0KGtleSwgY2FsbGJhY2spO1xuXHRcdH1cblxuXHRcdG1hbmFnZXJzW2tleV0gPSBtYWtlTWFuYWdlcihtYW5hZ2VyLCBjYWxsYmFjayk7XG5cdH1cblxuXHRyZXR1cm4gcG9ydHM7XG59XG5cbmZ1bmN0aW9uIG1ha2VNYW5hZ2VyKGluZm8sIGNhbGxiYWNrKVxue1xuXHR2YXIgcm91dGVyID0ge1xuXHRcdG1haW46IGNhbGxiYWNrLFxuXHRcdHNlbGY6IHVuZGVmaW5lZFxuXHR9O1xuXG5cdHZhciB0YWcgPSBpbmZvLnRhZztcblx0dmFyIG9uRWZmZWN0cyA9IGluZm8ub25FZmZlY3RzO1xuXHR2YXIgb25TZWxmTXNnID0gaW5mby5vblNlbGZNc2c7XG5cblx0ZnVuY3Rpb24gb25NZXNzYWdlKG1zZywgc3RhdGUpXG5cdHtcblx0XHRpZiAobXNnLmN0b3IgPT09ICdzZWxmJylcblx0XHR7XG5cdFx0XHRyZXR1cm4gQTMob25TZWxmTXNnLCByb3V0ZXIsIG1zZy5fMCwgc3RhdGUpO1xuXHRcdH1cblxuXHRcdHZhciBmeCA9IG1zZy5fMDtcblx0XHRzd2l0Y2ggKHRhZylcblx0XHR7XG5cdFx0XHRjYXNlICdjbWQnOlxuXHRcdFx0XHRyZXR1cm4gQTMob25FZmZlY3RzLCByb3V0ZXIsIGZ4LmNtZHMsIHN0YXRlKTtcblxuXHRcdFx0Y2FzZSAnc3ViJzpcblx0XHRcdFx0cmV0dXJuIEEzKG9uRWZmZWN0cywgcm91dGVyLCBmeC5zdWJzLCBzdGF0ZSk7XG5cblx0XHRcdGNhc2UgJ2Z4Jzpcblx0XHRcdFx0cmV0dXJuIEE0KG9uRWZmZWN0cywgcm91dGVyLCBmeC5jbWRzLCBmeC5zdWJzLCBzdGF0ZSk7XG5cdFx0fVxuXHR9XG5cblx0dmFyIHByb2Nlc3MgPSBzcGF3bkxvb3AoaW5mby5pbml0LCBvbk1lc3NhZ2UpO1xuXHRyb3V0ZXIuc2VsZiA9IHByb2Nlc3M7XG5cdHJldHVybiBwcm9jZXNzO1xufVxuXG5mdW5jdGlvbiBzZW5kVG9BcHAocm91dGVyLCBtc2cpXG57XG5cdHJldHVybiBfZWxtX2xhbmckY29yZSROYXRpdmVfU2NoZWR1bGVyLm5hdGl2ZUJpbmRpbmcoZnVuY3Rpb24oY2FsbGJhY2spXG5cdHtcblx0XHRyb3V0ZXIubWFpbihtc2cpO1xuXHRcdGNhbGxiYWNrKF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TY2hlZHVsZXIuc3VjY2VlZChfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuVHVwbGUwKSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBzZW5kVG9TZWxmKHJvdXRlciwgbXNnKVxue1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1NjaGVkdWxlci5zZW5kLCByb3V0ZXIuc2VsZiwge1xuXHRcdGN0b3I6ICdzZWxmJyxcblx0XHRfMDogbXNnXG5cdH0pO1xufVxuXG5cbi8vIEhFTFBFUiBmb3IgU1RBVEVGVUwgTE9PUFNcblxuZnVuY3Rpb24gc3Bhd25Mb29wKGluaXQsIG9uTWVzc2FnZSlcbntcblx0dmFyIGFuZFRoZW4gPSBfZWxtX2xhbmckY29yZSROYXRpdmVfU2NoZWR1bGVyLmFuZFRoZW47XG5cblx0ZnVuY3Rpb24gbG9vcChzdGF0ZSlcblx0e1xuXHRcdHZhciBoYW5kbGVNc2cgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfU2NoZWR1bGVyLnJlY2VpdmUoZnVuY3Rpb24obXNnKSB7XG5cdFx0XHRyZXR1cm4gb25NZXNzYWdlKG1zZywgc3RhdGUpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBBMihhbmRUaGVuLCBsb29wLCBoYW5kbGVNc2cpO1xuXHR9XG5cblx0dmFyIHRhc2sgPSBBMihhbmRUaGVuLCBsb29wLCBpbml0KTtcblxuXHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1NjaGVkdWxlci5yYXdTcGF3bih0YXNrKTtcbn1cblxuXG4vLyBCQUdTXG5cbmZ1bmN0aW9uIGxlYWYoaG9tZSlcbntcblx0cmV0dXJuIGZ1bmN0aW9uKHZhbHVlKVxuXHR7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6ICdsZWFmJyxcblx0XHRcdGhvbWU6IGhvbWUsXG5cdFx0XHR2YWx1ZTogdmFsdWVcblx0XHR9O1xuXHR9O1xufVxuXG5mdW5jdGlvbiBiYXRjaChsaXN0KVxue1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICdub2RlJyxcblx0XHRicmFuY2hlczogbGlzdFxuXHR9O1xufVxuXG5mdW5jdGlvbiBtYXAodGFnZ2VyLCBiYWcpXG57XG5cdHJldHVybiB7XG5cdFx0dHlwZTogJ21hcCcsXG5cdFx0dGFnZ2VyOiB0YWdnZXIsXG5cdFx0dHJlZTogYmFnXG5cdH1cbn1cblxuXG4vLyBQSVBFIEJBR1MgSU5UTyBFRkZFQ1QgTUFOQUdFUlNcblxuZnVuY3Rpb24gZGlzcGF0Y2hFZmZlY3RzKG1hbmFnZXJzLCBjbWRCYWcsIHN1YkJhZylcbntcblx0dmFyIGVmZmVjdHNEaWN0ID0ge307XG5cdGdhdGhlckVmZmVjdHModHJ1ZSwgY21kQmFnLCBlZmZlY3RzRGljdCwgbnVsbCk7XG5cdGdhdGhlckVmZmVjdHMoZmFsc2UsIHN1YkJhZywgZWZmZWN0c0RpY3QsIG51bGwpO1xuXG5cdGZvciAodmFyIGhvbWUgaW4gbWFuYWdlcnMpXG5cdHtcblx0XHR2YXIgZnggPSBob21lIGluIGVmZmVjdHNEaWN0XG5cdFx0XHQ/IGVmZmVjdHNEaWN0W2hvbWVdXG5cdFx0XHQ6IHtcblx0XHRcdFx0Y21kczogX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuTmlsLFxuXHRcdFx0XHRzdWJzOiBfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5OaWxcblx0XHRcdH07XG5cblx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfU2NoZWR1bGVyLnJhd1NlbmQobWFuYWdlcnNbaG9tZV0sIHsgY3RvcjogJ2Z4JywgXzA6IGZ4IH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGdhdGhlckVmZmVjdHMoaXNDbWQsIGJhZywgZWZmZWN0c0RpY3QsIHRhZ2dlcnMpXG57XG5cdHN3aXRjaCAoYmFnLnR5cGUpXG5cdHtcblx0XHRjYXNlICdsZWFmJzpcblx0XHRcdHZhciBob21lID0gYmFnLmhvbWU7XG5cdFx0XHR2YXIgZWZmZWN0ID0gdG9FZmZlY3QoaXNDbWQsIGhvbWUsIHRhZ2dlcnMsIGJhZy52YWx1ZSk7XG5cdFx0XHRlZmZlY3RzRGljdFtob21lXSA9IGluc2VydChpc0NtZCwgZWZmZWN0LCBlZmZlY3RzRGljdFtob21lXSk7XG5cdFx0XHRyZXR1cm47XG5cblx0XHRjYXNlICdub2RlJzpcblx0XHRcdHZhciBsaXN0ID0gYmFnLmJyYW5jaGVzO1xuXHRcdFx0d2hpbGUgKGxpc3QuY3RvciAhPT0gJ1tdJylcblx0XHRcdHtcblx0XHRcdFx0Z2F0aGVyRWZmZWN0cyhpc0NtZCwgbGlzdC5fMCwgZWZmZWN0c0RpY3QsIHRhZ2dlcnMpO1xuXHRcdFx0XHRsaXN0ID0gbGlzdC5fMTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblxuXHRcdGNhc2UgJ21hcCc6XG5cdFx0XHRnYXRoZXJFZmZlY3RzKGlzQ21kLCBiYWcudHJlZSwgZWZmZWN0c0RpY3QsIHtcblx0XHRcdFx0dGFnZ2VyOiBiYWcudGFnZ2VyLFxuXHRcdFx0XHRyZXN0OiB0YWdnZXJzXG5cdFx0XHR9KTtcblx0XHRcdHJldHVybjtcblx0fVxufVxuXG5mdW5jdGlvbiB0b0VmZmVjdChpc0NtZCwgaG9tZSwgdGFnZ2VycywgdmFsdWUpXG57XG5cdGZ1bmN0aW9uIGFwcGx5VGFnZ2Vycyh4KVxuXHR7XG5cdFx0dmFyIHRlbXAgPSB0YWdnZXJzO1xuXHRcdHdoaWxlICh0ZW1wKVxuXHRcdHtcblx0XHRcdHggPSB0ZW1wLnRhZ2dlcih4KTtcblx0XHRcdHRlbXAgPSB0ZW1wLnJlc3Q7XG5cdFx0fVxuXHRcdHJldHVybiB4O1xuXHR9XG5cblx0dmFyIG1hcCA9IGlzQ21kXG5cdFx0PyBlZmZlY3RNYW5hZ2Vyc1tob21lXS5jbWRNYXBcblx0XHQ6IGVmZmVjdE1hbmFnZXJzW2hvbWVdLnN1Yk1hcDtcblxuXHRyZXR1cm4gQTIobWFwLCBhcHBseVRhZ2dlcnMsIHZhbHVlKVxufVxuXG5mdW5jdGlvbiBpbnNlcnQoaXNDbWQsIG5ld0VmZmVjdCwgZWZmZWN0cylcbntcblx0ZWZmZWN0cyA9IGVmZmVjdHMgfHwge1xuXHRcdGNtZHM6IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0Lk5pbCxcblx0XHRzdWJzOiBfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5OaWxcblx0fTtcblx0aWYgKGlzQ21kKVxuXHR7XG5cdFx0ZWZmZWN0cy5jbWRzID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuQ29ucyhuZXdFZmZlY3QsIGVmZmVjdHMuY21kcyk7XG5cdFx0cmV0dXJuIGVmZmVjdHM7XG5cdH1cblx0ZWZmZWN0cy5zdWJzID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0xpc3QuQ29ucyhuZXdFZmZlY3QsIGVmZmVjdHMuc3Vicyk7XG5cdHJldHVybiBlZmZlY3RzO1xufVxuXG5cbi8vIFBPUlRTXG5cbmZ1bmN0aW9uIGNoZWNrUG9ydE5hbWUobmFtZSlcbntcblx0aWYgKG5hbWUgaW4gZWZmZWN0TWFuYWdlcnMpXG5cdHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RoZXJlIGNhbiBvbmx5IGJlIG9uZSBwb3J0IG5hbWVkIGAnICsgbmFtZSArICdgLCBidXQgeW91ciBwcm9ncmFtIGhhcyBtdWx0aXBsZS4nKTtcblx0fVxufVxuXG5cbi8vIE9VVEdPSU5HIFBPUlRTXG5cbmZ1bmN0aW9uIG91dGdvaW5nUG9ydChuYW1lLCBjb252ZXJ0ZXIpXG57XG5cdGNoZWNrUG9ydE5hbWUobmFtZSk7XG5cdGVmZmVjdE1hbmFnZXJzW25hbWVdID0ge1xuXHRcdHRhZzogJ2NtZCcsXG5cdFx0Y21kTWFwOiBvdXRnb2luZ1BvcnRNYXAsXG5cdFx0Y29udmVydGVyOiBjb252ZXJ0ZXIsXG5cdFx0aXNGb3JlaWduOiB0cnVlXG5cdH07XG5cdHJldHVybiBsZWFmKG5hbWUpO1xufVxuXG52YXIgb3V0Z29pbmdQb3J0TWFwID0gRjIoZnVuY3Rpb24gY21kTWFwKHRhZ2dlciwgdmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlO1xufSk7XG5cbmZ1bmN0aW9uIHNldHVwT3V0Z29pbmdQb3J0KG5hbWUpXG57XG5cdHZhciBzdWJzID0gW107XG5cdHZhciBjb252ZXJ0ZXIgPSBlZmZlY3RNYW5hZ2Vyc1tuYW1lXS5jb252ZXJ0ZXI7XG5cblx0Ly8gQ1JFQVRFIE1BTkFHRVJcblxuXHR2YXIgaW5pdCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TY2hlZHVsZXIuc3VjY2VlZChudWxsKTtcblxuXHRmdW5jdGlvbiBvbkVmZmVjdHMocm91dGVyLCBjbWRMaXN0LCBzdGF0ZSlcblx0e1xuXHRcdHdoaWxlIChjbWRMaXN0LmN0b3IgIT09ICdbXScpXG5cdFx0e1xuXHRcdFx0Ly8gZ3JhYiBhIHNlcGFyYXRlIHJlZmVyZW5jZSB0byBzdWJzIGluIGNhc2UgdW5zdWJzY3JpYmUgaXMgY2FsbGVkXG5cdFx0XHR2YXIgY3VycmVudFN1YnMgPSBzdWJzO1xuXHRcdFx0dmFyIHZhbHVlID0gY29udmVydGVyKGNtZExpc3QuXzApO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjdXJyZW50U3Vicy5sZW5ndGg7IGkrKylcblx0XHRcdHtcblx0XHRcdFx0Y3VycmVudFN1YnNbaV0odmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0Y21kTGlzdCA9IGNtZExpc3QuXzE7XG5cdFx0fVxuXHRcdHJldHVybiBpbml0O1xuXHR9XG5cblx0ZWZmZWN0TWFuYWdlcnNbbmFtZV0uaW5pdCA9IGluaXQ7XG5cdGVmZmVjdE1hbmFnZXJzW25hbWVdLm9uRWZmZWN0cyA9IEYzKG9uRWZmZWN0cyk7XG5cblx0Ly8gUFVCTElDIEFQSVxuXG5cdGZ1bmN0aW9uIHN1YnNjcmliZShjYWxsYmFjaylcblx0e1xuXHRcdHN1YnMucHVzaChjYWxsYmFjayk7XG5cdH1cblxuXHRmdW5jdGlvbiB1bnN1YnNjcmliZShjYWxsYmFjaylcblx0e1xuXHRcdC8vIGNvcHkgc3VicyBpbnRvIGEgbmV3IGFycmF5IGluIGNhc2UgdW5zdWJzY3JpYmUgaXMgY2FsbGVkIHdpdGhpbiBhXG5cdFx0Ly8gc3Vic2NyaWJlZCBjYWxsYmFja1xuXHRcdHN1YnMgPSBzdWJzLnNsaWNlKCk7XG5cdFx0dmFyIGluZGV4ID0gc3Vicy5pbmRleE9mKGNhbGxiYWNrKTtcblx0XHRpZiAoaW5kZXggPj0gMClcblx0XHR7XG5cdFx0XHRzdWJzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRzdWJzY3JpYmU6IHN1YnNjcmliZSxcblx0XHR1bnN1YnNjcmliZTogdW5zdWJzY3JpYmVcblx0fTtcbn1cblxuXG4vLyBJTkNPTUlORyBQT1JUU1xuXG5mdW5jdGlvbiBpbmNvbWluZ1BvcnQobmFtZSwgY29udmVydGVyKVxue1xuXHRjaGVja1BvcnROYW1lKG5hbWUpO1xuXHRlZmZlY3RNYW5hZ2Vyc1tuYW1lXSA9IHtcblx0XHR0YWc6ICdzdWInLFxuXHRcdHN1Yk1hcDogaW5jb21pbmdQb3J0TWFwLFxuXHRcdGNvbnZlcnRlcjogY29udmVydGVyLFxuXHRcdGlzRm9yZWlnbjogdHJ1ZVxuXHR9O1xuXHRyZXR1cm4gbGVhZihuYW1lKTtcbn1cblxudmFyIGluY29taW5nUG9ydE1hcCA9IEYyKGZ1bmN0aW9uIHN1Yk1hcCh0YWdnZXIsIGZpbmFsVGFnZ2VyKVxue1xuXHRyZXR1cm4gZnVuY3Rpb24odmFsdWUpXG5cdHtcblx0XHRyZXR1cm4gdGFnZ2VyKGZpbmFsVGFnZ2VyKHZhbHVlKSk7XG5cdH07XG59KTtcblxuZnVuY3Rpb24gc2V0dXBJbmNvbWluZ1BvcnQobmFtZSwgY2FsbGJhY2spXG57XG5cdHZhciBzZW50QmVmb3JlSW5pdCA9IFtdO1xuXHR2YXIgc3VicyA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0Lk5pbDtcblx0dmFyIGNvbnZlcnRlciA9IGVmZmVjdE1hbmFnZXJzW25hbWVdLmNvbnZlcnRlcjtcblx0dmFyIGN1cnJlbnRPbkVmZmVjdHMgPSBwcmVJbml0T25FZmZlY3RzO1xuXHR2YXIgY3VycmVudFNlbmQgPSBwcmVJbml0U2VuZDtcblxuXHQvLyBDUkVBVEUgTUFOQUdFUlxuXG5cdHZhciBpbml0ID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1NjaGVkdWxlci5zdWNjZWVkKG51bGwpO1xuXG5cdGZ1bmN0aW9uIHByZUluaXRPbkVmZmVjdHMocm91dGVyLCBzdWJMaXN0LCBzdGF0ZSlcblx0e1xuXHRcdHZhciBwb3N0SW5pdFJlc3VsdCA9IHBvc3RJbml0T25FZmZlY3RzKHJvdXRlciwgc3ViTGlzdCwgc3RhdGUpO1xuXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNlbnRCZWZvcmVJbml0Lmxlbmd0aDsgaSsrKVxuXHRcdHtcblx0XHRcdHBvc3RJbml0U2VuZChzZW50QmVmb3JlSW5pdFtpXSk7XG5cdFx0fVxuXG5cdFx0c2VudEJlZm9yZUluaXQgPSBudWxsOyAvLyB0byByZWxlYXNlIG9iamVjdHMgaGVsZCBpbiBxdWV1ZVxuXHRcdGN1cnJlbnRTZW5kID0gcG9zdEluaXRTZW5kO1xuXHRcdGN1cnJlbnRPbkVmZmVjdHMgPSBwb3N0SW5pdE9uRWZmZWN0cztcblx0XHRyZXR1cm4gcG9zdEluaXRSZXN1bHQ7XG5cdH1cblxuXHRmdW5jdGlvbiBwb3N0SW5pdE9uRWZmZWN0cyhyb3V0ZXIsIHN1Ykxpc3QsIHN0YXRlKVxuXHR7XG5cdFx0c3VicyA9IHN1Ykxpc3Q7XG5cdFx0cmV0dXJuIGluaXQ7XG5cdH1cblxuXHRmdW5jdGlvbiBvbkVmZmVjdHMocm91dGVyLCBzdWJMaXN0LCBzdGF0ZSlcblx0e1xuXHRcdHJldHVybiBjdXJyZW50T25FZmZlY3RzKHJvdXRlciwgc3ViTGlzdCwgc3RhdGUpO1xuXHR9XG5cblx0ZWZmZWN0TWFuYWdlcnNbbmFtZV0uaW5pdCA9IGluaXQ7XG5cdGVmZmVjdE1hbmFnZXJzW25hbWVdLm9uRWZmZWN0cyA9IEYzKG9uRWZmZWN0cyk7XG5cblx0Ly8gUFVCTElDIEFQSVxuXG5cdGZ1bmN0aW9uIHByZUluaXRTZW5kKHZhbHVlKVxuXHR7XG5cdFx0c2VudEJlZm9yZUluaXQucHVzaCh2YWx1ZSk7XG5cdH1cblxuXHRmdW5jdGlvbiBwb3N0SW5pdFNlbmQodmFsdWUpXG5cdHtcblx0XHR2YXIgdGVtcCA9IHN1YnM7XG5cdFx0d2hpbGUgKHRlbXAuY3RvciAhPT0gJ1tdJylcblx0XHR7XG5cdFx0XHRjYWxsYmFjayh0ZW1wLl8wKHZhbHVlKSk7XG5cdFx0XHR0ZW1wID0gdGVtcC5fMTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBzZW5kKGluY29taW5nVmFsdWUpXG5cdHtcblx0XHR2YXIgcmVzdWx0ID0gQTIoX2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkZGVjb2RlVmFsdWUsIGNvbnZlcnRlciwgaW5jb21pbmdWYWx1ZSk7XG5cdFx0aWYgKHJlc3VsdC5jdG9yID09PSAnRXJyJylcblx0XHR7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RyeWluZyB0byBzZW5kIGFuIHVuZXhwZWN0ZWQgdHlwZSBvZiB2YWx1ZSB0aHJvdWdoIHBvcnQgYCcgKyBuYW1lICsgJ2A6XFxuJyArIHJlc3VsdC5fMCk7XG5cdFx0fVxuXG5cdFx0Y3VycmVudFNlbmQocmVzdWx0Ll8wKTtcblx0fVxuXG5cdHJldHVybiB7IHNlbmQ6IHNlbmQgfTtcbn1cblxucmV0dXJuIHtcblx0Ly8gcm91dGVyc1xuXHRzZW5kVG9BcHA6IEYyKHNlbmRUb0FwcCksXG5cdHNlbmRUb1NlbGY6IEYyKHNlbmRUb1NlbGYpLFxuXG5cdC8vIGdsb2JhbCBzZXR1cFxuXHRlZmZlY3RNYW5hZ2VyczogZWZmZWN0TWFuYWdlcnMsXG5cdG91dGdvaW5nUG9ydDogb3V0Z29pbmdQb3J0LFxuXHRpbmNvbWluZ1BvcnQ6IGluY29taW5nUG9ydCxcblxuXHRodG1sVG9Qcm9ncmFtOiBodG1sVG9Qcm9ncmFtLFxuXHRwcm9ncmFtOiBwcm9ncmFtLFxuXHRwcm9ncmFtV2l0aEZsYWdzOiBwcm9ncmFtV2l0aEZsYWdzLFxuXHRpbml0aWFsaXplOiBpbml0aWFsaXplLFxuXG5cdC8vIGVmZmVjdCBiYWdzXG5cdGxlYWY6IGxlYWYsXG5cdGJhdGNoOiBiYXRjaCxcblx0bWFwOiBGMihtYXApXG59O1xuXG59KCk7XG5cbnZhciBfZWxtX2xhbmckY29yZSRQbGF0Zm9ybV9DbWQkYmF0Y2ggPSBfZWxtX2xhbmckY29yZSROYXRpdmVfUGxhdGZvcm0uYmF0Y2g7XG52YXIgX2VsbV9sYW5nJGNvcmUkUGxhdGZvcm1fQ21kJG5vbmUgPSBfZWxtX2xhbmckY29yZSRQbGF0Zm9ybV9DbWQkYmF0Y2goXG5cdHtjdG9yOiAnW10nfSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkUGxhdGZvcm1fQ21kX29wcyA9IF9lbG1fbGFuZyRjb3JlJFBsYXRmb3JtX0NtZF9vcHMgfHwge307XG5fZWxtX2xhbmckY29yZSRQbGF0Zm9ybV9DbWRfb3BzWychJ10gPSBGMihcblx0ZnVuY3Rpb24gKG1vZGVsLCBjb21tYW5kcykge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjdG9yOiAnX1R1cGxlMicsXG5cdFx0XHRfMDogbW9kZWwsXG5cdFx0XHRfMTogX2VsbV9sYW5nJGNvcmUkUGxhdGZvcm1fQ21kJGJhdGNoKGNvbW1hbmRzKVxuXHRcdH07XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJFBsYXRmb3JtX0NtZCRtYXAgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfUGxhdGZvcm0ubWFwO1xudmFyIF9lbG1fbGFuZyRjb3JlJFBsYXRmb3JtX0NtZCRDbWQgPSB7Y3RvcjogJ0NtZCd9O1xuXG52YXIgX2VsbV9sYW5nJGNvcmUkUGxhdGZvcm1fU3ViJGJhdGNoID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1BsYXRmb3JtLmJhdGNoO1xudmFyIF9lbG1fbGFuZyRjb3JlJFBsYXRmb3JtX1N1YiRub25lID0gX2VsbV9sYW5nJGNvcmUkUGxhdGZvcm1fU3ViJGJhdGNoKFxuXHR7Y3RvcjogJ1tdJ30pO1xudmFyIF9lbG1fbGFuZyRjb3JlJFBsYXRmb3JtX1N1YiRtYXAgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfUGxhdGZvcm0ubWFwO1xudmFyIF9lbG1fbGFuZyRjb3JlJFBsYXRmb3JtX1N1YiRTdWIgPSB7Y3RvcjogJ1N1Yid9O1xuXG52YXIgX2VsbV9sYW5nJGNvcmUkUGxhdGZvcm0kaGFjayA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TY2hlZHVsZXIuc3VjY2VlZDtcbnZhciBfZWxtX2xhbmckY29yZSRQbGF0Zm9ybSRzZW5kVG9TZWxmID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1BsYXRmb3JtLnNlbmRUb1NlbGY7XG52YXIgX2VsbV9sYW5nJGNvcmUkUGxhdGZvcm0kc2VuZFRvQXBwID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1BsYXRmb3JtLnNlbmRUb0FwcDtcbnZhciBfZWxtX2xhbmckY29yZSRQbGF0Zm9ybSRwcm9ncmFtV2l0aEZsYWdzID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1BsYXRmb3JtLnByb2dyYW1XaXRoRmxhZ3M7XG52YXIgX2VsbV9sYW5nJGNvcmUkUGxhdGZvcm0kcHJvZ3JhbSA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9QbGF0Zm9ybS5wcm9ncmFtO1xudmFyIF9lbG1fbGFuZyRjb3JlJFBsYXRmb3JtJFByb2dyYW0gPSB7Y3RvcjogJ1Byb2dyYW0nfTtcbnZhciBfZWxtX2xhbmckY29yZSRQbGF0Zm9ybSRUYXNrID0ge2N0b3I6ICdUYXNrJ307XG52YXIgX2VsbV9sYW5nJGNvcmUkUGxhdGZvcm0kUHJvY2Vzc0lkID0ge2N0b3I6ICdQcm9jZXNzSWQnfTtcbnZhciBfZWxtX2xhbmckY29yZSRQbGF0Zm9ybSRSb3V0ZXIgPSB7Y3RvcjogJ1JvdXRlcid9O1xuXG52YXIgX2VsbV9sYW5nJGNvcmUkUmVzdWx0JHRvTWF5YmUgPSBmdW5jdGlvbiAocmVzdWx0KSB7XG5cdHZhciBfcDAgPSByZXN1bHQ7XG5cdGlmIChfcDAuY3RvciA9PT0gJ09rJykge1xuXHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRNYXliZSRKdXN0KF9wMC5fMCk7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE1heWJlJE5vdGhpbmc7XG5cdH1cbn07XG52YXIgX2VsbV9sYW5nJGNvcmUkUmVzdWx0JHdpdGhEZWZhdWx0ID0gRjIoXG5cdGZ1bmN0aW9uIChkZWYsIHJlc3VsdCkge1xuXHRcdHZhciBfcDEgPSByZXN1bHQ7XG5cdFx0aWYgKF9wMS5jdG9yID09PSAnT2snKSB7XG5cdFx0XHRyZXR1cm4gX3AxLl8wO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZGVmO1xuXHRcdH1cblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkUmVzdWx0JEVyciA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7Y3RvcjogJ0VycicsIF8wOiBhfTtcbn07XG52YXIgX2VsbV9sYW5nJGNvcmUkUmVzdWx0JGFuZFRoZW4gPSBGMihcblx0ZnVuY3Rpb24gKGNhbGxiYWNrLCByZXN1bHQpIHtcblx0XHR2YXIgX3AyID0gcmVzdWx0O1xuXHRcdGlmIChfcDIuY3RvciA9PT0gJ09rJykge1xuXHRcdFx0cmV0dXJuIGNhbGxiYWNrKF9wMi5fMCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRSZXN1bHQkRXJyKF9wMi5fMCk7XG5cdFx0fVxuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSRSZXN1bHQkT2sgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4ge2N0b3I6ICdPaycsIF8wOiBhfTtcbn07XG52YXIgX2VsbV9sYW5nJGNvcmUkUmVzdWx0JG1hcCA9IEYyKFxuXHRmdW5jdGlvbiAoZnVuYywgcmEpIHtcblx0XHR2YXIgX3AzID0gcmE7XG5cdFx0aWYgKF9wMy5jdG9yID09PSAnT2snKSB7XG5cdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkUmVzdWx0JE9rKFxuXHRcdFx0XHRmdW5jKF9wMy5fMCkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkUmVzdWx0JEVycihfcDMuXzApO1xuXHRcdH1cblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkUmVzdWx0JG1hcDIgPSBGMyhcblx0ZnVuY3Rpb24gKGZ1bmMsIHJhLCByYikge1xuXHRcdHZhciBfcDQgPSB7Y3RvcjogJ19UdXBsZTInLCBfMDogcmEsIF8xOiByYn07XG5cdFx0aWYgKF9wNC5fMC5jdG9yID09PSAnT2snKSB7XG5cdFx0XHRpZiAoX3A0Ll8xLmN0b3IgPT09ICdPaycpIHtcblx0XHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJFJlc3VsdCRPayhcblx0XHRcdFx0XHRBMihmdW5jLCBfcDQuXzAuXzAsIF9wNC5fMS5fMCkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJFJlc3VsdCRFcnIoX3A0Ll8xLl8wKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJFJlc3VsdCRFcnIoX3A0Ll8wLl8wKTtcblx0XHR9XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJFJlc3VsdCRtYXAzID0gRjQoXG5cdGZ1bmN0aW9uIChmdW5jLCByYSwgcmIsIHJjKSB7XG5cdFx0dmFyIF9wNSA9IHtjdG9yOiAnX1R1cGxlMycsIF8wOiByYSwgXzE6IHJiLCBfMjogcmN9O1xuXHRcdGlmIChfcDUuXzAuY3RvciA9PT0gJ09rJykge1xuXHRcdFx0aWYgKF9wNS5fMS5jdG9yID09PSAnT2snKSB7XG5cdFx0XHRcdGlmIChfcDUuXzIuY3RvciA9PT0gJ09rJykge1xuXHRcdFx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRSZXN1bHQkT2soXG5cdFx0XHRcdFx0XHRBMyhmdW5jLCBfcDUuXzAuXzAsIF9wNS5fMS5fMCwgX3A1Ll8yLl8wKSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJFJlc3VsdCRFcnIoX3A1Ll8yLl8wKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJFJlc3VsdCRFcnIoX3A1Ll8xLl8wKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJFJlc3VsdCRFcnIoX3A1Ll8wLl8wKTtcblx0XHR9XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJFJlc3VsdCRtYXA0ID0gRjUoXG5cdGZ1bmN0aW9uIChmdW5jLCByYSwgcmIsIHJjLCByZCkge1xuXHRcdHZhciBfcDYgPSB7Y3RvcjogJ19UdXBsZTQnLCBfMDogcmEsIF8xOiByYiwgXzI6IHJjLCBfMzogcmR9O1xuXHRcdGlmIChfcDYuXzAuY3RvciA9PT0gJ09rJykge1xuXHRcdFx0aWYgKF9wNi5fMS5jdG9yID09PSAnT2snKSB7XG5cdFx0XHRcdGlmIChfcDYuXzIuY3RvciA9PT0gJ09rJykge1xuXHRcdFx0XHRcdGlmIChfcDYuXzMuY3RvciA9PT0gJ09rJykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJFJlc3VsdCRPayhcblx0XHRcdFx0XHRcdFx0QTQoZnVuYywgX3A2Ll8wLl8wLCBfcDYuXzEuXzAsIF9wNi5fMi5fMCwgX3A2Ll8zLl8wKSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRSZXN1bHQkRXJyKF9wNi5fMy5fMCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRSZXN1bHQkRXJyKF9wNi5fMi5fMCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRSZXN1bHQkRXJyKF9wNi5fMS5fMCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRSZXN1bHQkRXJyKF9wNi5fMC5fMCk7XG5cdFx0fVxuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSRSZXN1bHQkbWFwNSA9IEY2KFxuXHRmdW5jdGlvbiAoZnVuYywgcmEsIHJiLCByYywgcmQsIHJlKSB7XG5cdFx0dmFyIF9wNyA9IHtjdG9yOiAnX1R1cGxlNScsIF8wOiByYSwgXzE6IHJiLCBfMjogcmMsIF8zOiByZCwgXzQ6IHJlfTtcblx0XHRpZiAoX3A3Ll8wLmN0b3IgPT09ICdPaycpIHtcblx0XHRcdGlmIChfcDcuXzEuY3RvciA9PT0gJ09rJykge1xuXHRcdFx0XHRpZiAoX3A3Ll8yLmN0b3IgPT09ICdPaycpIHtcblx0XHRcdFx0XHRpZiAoX3A3Ll8zLmN0b3IgPT09ICdPaycpIHtcblx0XHRcdFx0XHRcdGlmIChfcDcuXzQuY3RvciA9PT0gJ09rJykge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkUmVzdWx0JE9rKFxuXHRcdFx0XHRcdFx0XHRcdEE1KGZ1bmMsIF9wNy5fMC5fMCwgX3A3Ll8xLl8wLCBfcDcuXzIuXzAsIF9wNy5fMy5fMCwgX3A3Ll80Ll8wKSk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkUmVzdWx0JEVycihfcDcuXzQuXzApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkUmVzdWx0JEVycihfcDcuXzMuXzApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkUmVzdWx0JEVycihfcDcuXzIuXzApO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkUmVzdWx0JEVycihfcDcuXzEuXzApO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkUmVzdWx0JEVycihfcDcuXzAuXzApO1xuXHRcdH1cblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkUmVzdWx0JG1hcEVycm9yID0gRjIoXG5cdGZ1bmN0aW9uIChmLCByZXN1bHQpIHtcblx0XHR2YXIgX3A4ID0gcmVzdWx0O1xuXHRcdGlmIChfcDguY3RvciA9PT0gJ09rJykge1xuXHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJFJlc3VsdCRPayhfcDguXzApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkUmVzdWx0JEVycihcblx0XHRcdFx0ZihfcDguXzApKTtcblx0XHR9XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJFJlc3VsdCRmcm9tTWF5YmUgPSBGMihcblx0ZnVuY3Rpb24gKGVyciwgbWF5YmUpIHtcblx0XHR2YXIgX3A5ID0gbWF5YmU7XG5cdFx0aWYgKF9wOS5jdG9yID09PSAnSnVzdCcpIHtcblx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRSZXN1bHQkT2soX3A5Ll8wKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJFJlc3VsdCRFcnIoZXJyKTtcblx0XHR9XG5cdH0pO1xuXG52YXIgX2VsbV9sYW5nJGNvcmUkVGFzayRvbkVycm9yID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1NjaGVkdWxlci5vbkVycm9yO1xudmFyIF9lbG1fbGFuZyRjb3JlJFRhc2skYW5kVGhlbiA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TY2hlZHVsZXIuYW5kVGhlbjtcbnZhciBfZWxtX2xhbmckY29yZSRUYXNrJHNwYXduQ21kID0gRjIoXG5cdGZ1bmN0aW9uIChyb3V0ZXIsIF9wMCkge1xuXHRcdHZhciBfcDEgPSBfcDA7XG5cdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TY2hlZHVsZXIuc3Bhd24oXG5cdFx0XHRBMihcblx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkVGFzayRhbmRUaGVuLFxuXHRcdFx0XHRfZWxtX2xhbmckY29yZSRQbGF0Zm9ybSRzZW5kVG9BcHAocm91dGVyKSxcblx0XHRcdFx0X3AxLl8wKSk7XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJFRhc2skZmFpbCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TY2hlZHVsZXIuZmFpbDtcbnZhciBfZWxtX2xhbmckY29yZSRUYXNrJG1hcEVycm9yID0gRjIoXG5cdGZ1bmN0aW9uIChjb252ZXJ0LCB0YXNrKSB7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkVGFzayRvbkVycm9yLFxuXHRcdFx0ZnVuY3Rpb24gKF9wMikge1xuXHRcdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkVGFzayRmYWlsKFxuXHRcdFx0XHRcdGNvbnZlcnQoX3AyKSk7XG5cdFx0XHR9LFxuXHRcdFx0dGFzayk7XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJFRhc2skc3VjY2VlZCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TY2hlZHVsZXIuc3VjY2VlZDtcbnZhciBfZWxtX2xhbmckY29yZSRUYXNrJG1hcCA9IEYyKFxuXHRmdW5jdGlvbiAoZnVuYywgdGFza0EpIHtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRfZWxtX2xhbmckY29yZSRUYXNrJGFuZFRoZW4sXG5cdFx0XHRmdW5jdGlvbiAoYSkge1xuXHRcdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkVGFzayRzdWNjZWVkKFxuXHRcdFx0XHRcdGZ1bmMoYSkpO1xuXHRcdFx0fSxcblx0XHRcdHRhc2tBKTtcblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkVGFzayRtYXAyID0gRjMoXG5cdGZ1bmN0aW9uIChmdW5jLCB0YXNrQSwgdGFza0IpIHtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRfZWxtX2xhbmckY29yZSRUYXNrJGFuZFRoZW4sXG5cdFx0XHRmdW5jdGlvbiAoYSkge1xuXHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkVGFzayRhbmRUaGVuLFxuXHRcdFx0XHRcdGZ1bmN0aW9uIChiKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkVGFzayRzdWNjZWVkKFxuXHRcdFx0XHRcdFx0XHRBMihmdW5jLCBhLCBiKSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR0YXNrQik7XG5cdFx0XHR9LFxuXHRcdFx0dGFza0EpO1xuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSRUYXNrJG1hcDMgPSBGNChcblx0ZnVuY3Rpb24gKGZ1bmMsIHRhc2tBLCB0YXNrQiwgdGFza0MpIHtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRfZWxtX2xhbmckY29yZSRUYXNrJGFuZFRoZW4sXG5cdFx0XHRmdW5jdGlvbiAoYSkge1xuXHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkVGFzayRhbmRUaGVuLFxuXHRcdFx0XHRcdGZ1bmN0aW9uIChiKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJFRhc2skYW5kVGhlbixcblx0XHRcdFx0XHRcdFx0ZnVuY3Rpb24gKGMpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkVGFzayRzdWNjZWVkKFxuXHRcdFx0XHRcdFx0XHRcdFx0QTMoZnVuYywgYSwgYiwgYykpO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR0YXNrQyk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR0YXNrQik7XG5cdFx0XHR9LFxuXHRcdFx0dGFza0EpO1xuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSRUYXNrJG1hcDQgPSBGNShcblx0ZnVuY3Rpb24gKGZ1bmMsIHRhc2tBLCB0YXNrQiwgdGFza0MsIHRhc2tEKSB7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkVGFzayRhbmRUaGVuLFxuXHRcdFx0ZnVuY3Rpb24gKGEpIHtcblx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJFRhc2skYW5kVGhlbixcblx0XHRcdFx0XHRmdW5jdGlvbiAoYikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSRUYXNrJGFuZFRoZW4sXG5cdFx0XHRcdFx0XHRcdGZ1bmN0aW9uIChjKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkVGFzayRhbmRUaGVuLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJFRhc2skc3VjY2VlZChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBNChmdW5jLCBhLCBiLCBjLCBkKSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0dGFza0QpO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR0YXNrQyk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR0YXNrQik7XG5cdFx0XHR9LFxuXHRcdFx0dGFza0EpO1xuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSRUYXNrJG1hcDUgPSBGNihcblx0ZnVuY3Rpb24gKGZ1bmMsIHRhc2tBLCB0YXNrQiwgdGFza0MsIHRhc2tELCB0YXNrRSkge1xuXHRcdHJldHVybiBBMihcblx0XHRcdF9lbG1fbGFuZyRjb3JlJFRhc2skYW5kVGhlbixcblx0XHRcdGZ1bmN0aW9uIChhKSB7XG5cdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSRUYXNrJGFuZFRoZW4sXG5cdFx0XHRcdFx0ZnVuY3Rpb24gKGIpIHtcblx0XHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkVGFzayRhbmRUaGVuLFxuXHRcdFx0XHRcdFx0XHRmdW5jdGlvbiAoYykge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJFRhc2skYW5kVGhlbixcblx0XHRcdFx0XHRcdFx0XHRcdGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSRUYXNrJGFuZFRoZW4sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRUYXNrJHN1Y2NlZWQoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEE1KGZ1bmMsIGEsIGIsIGMsIGQsIGUpKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRhc2tFKTtcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHR0YXNrRCk7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdHRhc2tDKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHRhc2tCKTtcblx0XHRcdH0sXG5cdFx0XHR0YXNrQSk7XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJFRhc2skc2VxdWVuY2UgPSBmdW5jdGlvbiAodGFza3MpIHtcblx0dmFyIF9wMyA9IHRhc2tzO1xuXHRpZiAoX3AzLmN0b3IgPT09ICdbXScpIHtcblx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkVGFzayRzdWNjZWVkKFxuXHRcdFx0e2N0b3I6ICdbXSd9KTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gQTMoXG5cdFx0XHRfZWxtX2xhbmckY29yZSRUYXNrJG1hcDIsXG5cdFx0XHRGMihcblx0XHRcdFx0ZnVuY3Rpb24gKHgsIHkpIHtcblx0XHRcdFx0XHRyZXR1cm4ge2N0b3I6ICc6OicsIF8wOiB4LCBfMTogeX07XG5cdFx0XHRcdH0pLFxuXHRcdFx0X3AzLl8wLFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkVGFzayRzZXF1ZW5jZShfcDMuXzEpKTtcblx0fVxufTtcbnZhciBfZWxtX2xhbmckY29yZSRUYXNrJG9uRWZmZWN0cyA9IEYzKFxuXHRmdW5jdGlvbiAocm91dGVyLCBjb21tYW5kcywgc3RhdGUpIHtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRfZWxtX2xhbmckY29yZSRUYXNrJG1hcCxcblx0XHRcdGZ1bmN0aW9uIChfcDQpIHtcblx0XHRcdFx0cmV0dXJuIHtjdG9yOiAnX1R1cGxlMCd9O1xuXHRcdFx0fSxcblx0XHRcdF9lbG1fbGFuZyRjb3JlJFRhc2skc2VxdWVuY2UoXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJExpc3QkbWFwLFxuXHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJFRhc2skc3Bhd25DbWQocm91dGVyKSxcblx0XHRcdFx0XHRjb21tYW5kcykpKTtcblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkVGFzayRpbml0ID0gX2VsbV9sYW5nJGNvcmUkVGFzayRzdWNjZWVkKFxuXHR7Y3RvcjogJ19UdXBsZTAnfSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkVGFzayRvblNlbGZNc2cgPSBGMyhcblx0ZnVuY3Rpb24gKF9wNywgX3A2LCBfcDUpIHtcblx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkVGFzayRzdWNjZWVkKFxuXHRcdFx0e2N0b3I6ICdfVHVwbGUwJ30pO1xuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSRUYXNrJGNvbW1hbmQgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfUGxhdGZvcm0ubGVhZignVGFzaycpO1xudmFyIF9lbG1fbGFuZyRjb3JlJFRhc2skUGVyZm9ybSA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7Y3RvcjogJ1BlcmZvcm0nLCBfMDogYX07XG59O1xudmFyIF9lbG1fbGFuZyRjb3JlJFRhc2skcGVyZm9ybSA9IEYyKFxuXHRmdW5jdGlvbiAodG9NZXNzYWdlLCB0YXNrKSB7XG5cdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJFRhc2skY29tbWFuZChcblx0XHRcdF9lbG1fbGFuZyRjb3JlJFRhc2skUGVyZm9ybShcblx0XHRcdFx0QTIoX2VsbV9sYW5nJGNvcmUkVGFzayRtYXAsIHRvTWVzc2FnZSwgdGFzaykpKTtcblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkVGFzayRhdHRlbXB0ID0gRjIoXG5cdGZ1bmN0aW9uIChyZXN1bHRUb01lc3NhZ2UsIHRhc2spIHtcblx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkVGFzayRjb21tYW5kKFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkVGFzayRQZXJmb3JtKFxuXHRcdFx0XHRBMihcblx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSRUYXNrJG9uRXJyb3IsXG5cdFx0XHRcdFx0ZnVuY3Rpb24gKF9wOCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJFRhc2skc3VjY2VlZChcblx0XHRcdFx0XHRcdFx0cmVzdWx0VG9NZXNzYWdlKFxuXHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJFJlc3VsdCRFcnIoX3A4KSkpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSRUYXNrJGFuZFRoZW4sXG5cdFx0XHRcdFx0XHRmdW5jdGlvbiAoX3A5KSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRUYXNrJHN1Y2NlZWQoXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0VG9NZXNzYWdlKFxuXHRcdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkUmVzdWx0JE9rKF9wOSkpKTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR0YXNrKSkpKTtcblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkVGFzayRjbWRNYXAgPSBGMihcblx0ZnVuY3Rpb24gKHRhZ2dlciwgX3AxMCkge1xuXHRcdHZhciBfcDExID0gX3AxMDtcblx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkVGFzayRQZXJmb3JtKFxuXHRcdFx0QTIoX2VsbV9sYW5nJGNvcmUkVGFzayRtYXAsIHRhZ2dlciwgX3AxMS5fMCkpO1xuXHR9KTtcbl9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9QbGF0Zm9ybS5lZmZlY3RNYW5hZ2Vyc1snVGFzayddID0ge3BrZzogJ2VsbS1sYW5nL2NvcmUnLCBpbml0OiBfZWxtX2xhbmckY29yZSRUYXNrJGluaXQsIG9uRWZmZWN0czogX2VsbV9sYW5nJGNvcmUkVGFzayRvbkVmZmVjdHMsIG9uU2VsZk1zZzogX2VsbV9sYW5nJGNvcmUkVGFzayRvblNlbGZNc2csIHRhZzogJ2NtZCcsIGNtZE1hcDogX2VsbV9sYW5nJGNvcmUkVGFzayRjbWRNYXB9O1xuXG4vL2ltcG9ydCBOYXRpdmUuVXRpbHMgLy9cblxudmFyIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9EZWJ1ZyA9IGZ1bmN0aW9uKCkge1xuXG5mdW5jdGlvbiBsb2codGFnLCB2YWx1ZSlcbntcblx0dmFyIG1zZyA9IHRhZyArICc6ICcgKyBfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMudG9TdHJpbmcodmFsdWUpO1xuXHR2YXIgcHJvY2VzcyA9IHByb2Nlc3MgfHwge307XG5cdGlmIChwcm9jZXNzLnN0ZG91dClcblx0e1xuXHRcdHByb2Nlc3Muc3Rkb3V0LndyaXRlKG1zZyk7XG5cdH1cblx0ZWxzZVxuXHR7XG5cdFx0Y29uc29sZS5sb2cobXNnKTtcblx0fVxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGNyYXNoKG1lc3NhZ2UpXG57XG5cdHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbn1cblxucmV0dXJuIHtcblx0Y3Jhc2g6IGNyYXNoLFxuXHRsb2c6IEYyKGxvZylcbn07XG5cbn0oKTtcbi8vaW1wb3J0IE1heWJlLCBOYXRpdmUuTGlzdCwgTmF0aXZlLlV0aWxzLCBSZXN1bHQgLy9cblxudmFyIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TdHJpbmcgPSBmdW5jdGlvbigpIHtcblxuZnVuY3Rpb24gaXNFbXB0eShzdHIpXG57XG5cdHJldHVybiBzdHIubGVuZ3RoID09PSAwO1xufVxuZnVuY3Rpb24gY29ucyhjaHIsIHN0cilcbntcblx0cmV0dXJuIGNociArIHN0cjtcbn1cbmZ1bmN0aW9uIHVuY29ucyhzdHIpXG57XG5cdHZhciBoZCA9IHN0clswXTtcblx0aWYgKGhkKVxuXHR7XG5cdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE1heWJlJEp1c3QoX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLlR1cGxlMihfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuY2hyKGhkKSwgc3RyLnNsaWNlKDEpKSk7XG5cdH1cblx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE1heWJlJE5vdGhpbmc7XG59XG5mdW5jdGlvbiBhcHBlbmQoYSwgYilcbntcblx0cmV0dXJuIGEgKyBiO1xufVxuZnVuY3Rpb24gY29uY2F0KHN0cnMpXG57XG5cdHJldHVybiBfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC50b0FycmF5KHN0cnMpLmpvaW4oJycpO1xufVxuZnVuY3Rpb24gbGVuZ3RoKHN0cilcbntcblx0cmV0dXJuIHN0ci5sZW5ndGg7XG59XG5mdW5jdGlvbiBtYXAoZiwgc3RyKVxue1xuXHR2YXIgb3V0ID0gc3RyLnNwbGl0KCcnKTtcblx0Zm9yICh2YXIgaSA9IG91dC5sZW5ndGg7IGktLTsgKVxuXHR7XG5cdFx0b3V0W2ldID0gZihfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuY2hyKG91dFtpXSkpO1xuXHR9XG5cdHJldHVybiBvdXQuam9pbignJyk7XG59XG5mdW5jdGlvbiBmaWx0ZXIocHJlZCwgc3RyKVxue1xuXHRyZXR1cm4gc3RyLnNwbGl0KCcnKS5tYXAoX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLmNocikuZmlsdGVyKHByZWQpLmpvaW4oJycpO1xufVxuZnVuY3Rpb24gcmV2ZXJzZShzdHIpXG57XG5cdHJldHVybiBzdHIuc3BsaXQoJycpLnJldmVyc2UoKS5qb2luKCcnKTtcbn1cbmZ1bmN0aW9uIGZvbGRsKGYsIGIsIHN0cilcbntcblx0dmFyIGxlbiA9IHN0ci5sZW5ndGg7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpXG5cdHtcblx0XHRiID0gQTIoZiwgX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLmNocihzdHJbaV0pLCBiKTtcblx0fVxuXHRyZXR1cm4gYjtcbn1cbmZ1bmN0aW9uIGZvbGRyKGYsIGIsIHN0cilcbntcblx0Zm9yICh2YXIgaSA9IHN0ci5sZW5ndGg7IGktLTsgKVxuXHR7XG5cdFx0YiA9IEEyKGYsIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy5jaHIoc3RyW2ldKSwgYik7XG5cdH1cblx0cmV0dXJuIGI7XG59XG5mdW5jdGlvbiBzcGxpdChzZXAsIHN0cilcbntcblx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShzdHIuc3BsaXQoc2VwKSk7XG59XG5mdW5jdGlvbiBqb2luKHNlcCwgc3Rycylcbntcblx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LnRvQXJyYXkoc3Rycykuam9pbihzZXApO1xufVxuZnVuY3Rpb24gcmVwZWF0KG4sIHN0cilcbntcblx0dmFyIHJlc3VsdCA9ICcnO1xuXHR3aGlsZSAobiA+IDApXG5cdHtcblx0XHRpZiAobiAmIDEpXG5cdFx0e1xuXHRcdFx0cmVzdWx0ICs9IHN0cjtcblx0XHR9XG5cdFx0biA+Pj0gMSwgc3RyICs9IHN0cjtcblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gc2xpY2Uoc3RhcnQsIGVuZCwgc3RyKVxue1xuXHRyZXR1cm4gc3RyLnNsaWNlKHN0YXJ0LCBlbmQpO1xufVxuZnVuY3Rpb24gbGVmdChuLCBzdHIpXG57XG5cdHJldHVybiBuIDwgMSA/ICcnIDogc3RyLnNsaWNlKDAsIG4pO1xufVxuZnVuY3Rpb24gcmlnaHQobiwgc3RyKVxue1xuXHRyZXR1cm4gbiA8IDEgPyAnJyA6IHN0ci5zbGljZSgtbik7XG59XG5mdW5jdGlvbiBkcm9wTGVmdChuLCBzdHIpXG57XG5cdHJldHVybiBuIDwgMSA/IHN0ciA6IHN0ci5zbGljZShuKTtcbn1cbmZ1bmN0aW9uIGRyb3BSaWdodChuLCBzdHIpXG57XG5cdHJldHVybiBuIDwgMSA/IHN0ciA6IHN0ci5zbGljZSgwLCAtbik7XG59XG5mdW5jdGlvbiBwYWQobiwgY2hyLCBzdHIpXG57XG5cdHZhciBoYWxmID0gKG4gLSBzdHIubGVuZ3RoKSAvIDI7XG5cdHJldHVybiByZXBlYXQoTWF0aC5jZWlsKGhhbGYpLCBjaHIpICsgc3RyICsgcmVwZWF0KGhhbGYgfCAwLCBjaHIpO1xufVxuZnVuY3Rpb24gcGFkUmlnaHQobiwgY2hyLCBzdHIpXG57XG5cdHJldHVybiBzdHIgKyByZXBlYXQobiAtIHN0ci5sZW5ndGgsIGNocik7XG59XG5mdW5jdGlvbiBwYWRMZWZ0KG4sIGNociwgc3RyKVxue1xuXHRyZXR1cm4gcmVwZWF0KG4gLSBzdHIubGVuZ3RoLCBjaHIpICsgc3RyO1xufVxuXG5mdW5jdGlvbiB0cmltKHN0cilcbntcblx0cmV0dXJuIHN0ci50cmltKCk7XG59XG5mdW5jdGlvbiB0cmltTGVmdChzdHIpXG57XG5cdHJldHVybiBzdHIucmVwbGFjZSgvXlxccysvLCAnJyk7XG59XG5mdW5jdGlvbiB0cmltUmlnaHQoc3RyKVxue1xuXHRyZXR1cm4gc3RyLnJlcGxhY2UoL1xccyskLywgJycpO1xufVxuXG5mdW5jdGlvbiB3b3JkcyhzdHIpXG57XG5cdHJldHVybiBfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoc3RyLnRyaW0oKS5zcGxpdCgvXFxzKy9nKSk7XG59XG5mdW5jdGlvbiBsaW5lcyhzdHIpXG57XG5cdHJldHVybiBfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5mcm9tQXJyYXkoc3RyLnNwbGl0KC9cXHJcXG58XFxyfFxcbi9nKSk7XG59XG5cbmZ1bmN0aW9uIHRvVXBwZXIoc3RyKVxue1xuXHRyZXR1cm4gc3RyLnRvVXBwZXJDYXNlKCk7XG59XG5mdW5jdGlvbiB0b0xvd2VyKHN0cilcbntcblx0cmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBhbnkocHJlZCwgc3RyKVxue1xuXHRmb3IgKHZhciBpID0gc3RyLmxlbmd0aDsgaS0tOyApXG5cdHtcblx0XHRpZiAocHJlZChfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuY2hyKHN0cltpXSkpKVxuXHRcdHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBhbGwocHJlZCwgc3RyKVxue1xuXHRmb3IgKHZhciBpID0gc3RyLmxlbmd0aDsgaS0tOyApXG5cdHtcblx0XHRpZiAoIXByZWQoX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLmNocihzdHJbaV0pKSlcblx0XHR7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBjb250YWlucyhzdWIsIHN0cilcbntcblx0cmV0dXJuIHN0ci5pbmRleE9mKHN1YikgPiAtMTtcbn1cbmZ1bmN0aW9uIHN0YXJ0c1dpdGgoc3ViLCBzdHIpXG57XG5cdHJldHVybiBzdHIuaW5kZXhPZihzdWIpID09PSAwO1xufVxuZnVuY3Rpb24gZW5kc1dpdGgoc3ViLCBzdHIpXG57XG5cdHJldHVybiBzdHIubGVuZ3RoID49IHN1Yi5sZW5ndGggJiZcblx0XHRzdHIubGFzdEluZGV4T2Yoc3ViKSA9PT0gc3RyLmxlbmd0aCAtIHN1Yi5sZW5ndGg7XG59XG5mdW5jdGlvbiBpbmRleGVzKHN1Yiwgc3RyKVxue1xuXHR2YXIgc3ViTGVuID0gc3ViLmxlbmd0aDtcblxuXHRpZiAoc3ViTGVuIDwgMSlcblx0e1xuXHRcdHJldHVybiBfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5OaWw7XG5cdH1cblxuXHR2YXIgaSA9IDA7XG5cdHZhciBpcyA9IFtdO1xuXG5cdHdoaWxlICgoaSA9IHN0ci5pbmRleE9mKHN1YiwgaSkpID4gLTEpXG5cdHtcblx0XHRpcy5wdXNoKGkpO1xuXHRcdGkgPSBpICsgc3ViTGVuO1xuXHR9XG5cblx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShpcyk7XG59XG5cblxuZnVuY3Rpb24gdG9JbnQocylcbntcblx0dmFyIGxlbiA9IHMubGVuZ3RoO1xuXG5cdC8vIGlmIGVtcHR5XG5cdGlmIChsZW4gPT09IDApXG5cdHtcblx0XHRyZXR1cm4gaW50RXJyKHMpO1xuXHR9XG5cblx0Ly8gaWYgaGV4XG5cdHZhciBjID0gc1swXTtcblx0aWYgKGMgPT09ICcwJyAmJiBzWzFdID09PSAneCcpXG5cdHtcblx0XHRmb3IgKHZhciBpID0gMjsgaSA8IGxlbjsgKytpKVxuXHRcdHtcblx0XHRcdHZhciBjID0gc1tpXTtcblx0XHRcdGlmICgoJzAnIDw9IGMgJiYgYyA8PSAnOScpIHx8ICgnQScgPD0gYyAmJiBjIDw9ICdGJykgfHwgKCdhJyA8PSBjICYmIGMgPD0gJ2YnKSlcblx0XHRcdHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gaW50RXJyKHMpO1xuXHRcdH1cblx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkUmVzdWx0JE9rKHBhcnNlSW50KHMsIDE2KSk7XG5cdH1cblxuXHQvLyBpcyBkZWNpbWFsXG5cdGlmIChjID4gJzknIHx8IChjIDwgJzAnICYmIGMgIT09ICctJyAmJiBjICE9PSAnKycpKVxuXHR7XG5cdFx0cmV0dXJuIGludEVycihzKTtcblx0fVxuXHRmb3IgKHZhciBpID0gMTsgaSA8IGxlbjsgKytpKVxuXHR7XG5cdFx0dmFyIGMgPSBzW2ldO1xuXHRcdGlmIChjIDwgJzAnIHx8ICc5JyA8IGMpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIGludEVycihzKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkUmVzdWx0JE9rKHBhcnNlSW50KHMsIDEwKSk7XG59XG5cbmZ1bmN0aW9uIGludEVycihzKVxue1xuXHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkUmVzdWx0JEVycihcImNvdWxkIG5vdCBjb252ZXJ0IHN0cmluZyAnXCIgKyBzICsgXCInIHRvIGFuIEludFwiKTtcbn1cblxuXG5mdW5jdGlvbiB0b0Zsb2F0KHMpXG57XG5cdC8vIGNoZWNrIGlmIGl0IGlzIGEgaGV4LCBvY3RhbCwgb3IgYmluYXJ5IG51bWJlclxuXHRpZiAocy5sZW5ndGggPT09IDAgfHwgL1tcXHN4Ym9dLy50ZXN0KHMpKVxuXHR7XG5cdFx0cmV0dXJuIGZsb2F0RXJyKHMpO1xuXHR9XG5cdHZhciBuID0gK3M7XG5cdC8vIGZhc3RlciBpc05hTiBjaGVja1xuXHRyZXR1cm4gbiA9PT0gbiA/IF9lbG1fbGFuZyRjb3JlJFJlc3VsdCRPayhuKSA6IGZsb2F0RXJyKHMpO1xufVxuXG5mdW5jdGlvbiBmbG9hdEVycihzKVxue1xuXHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkUmVzdWx0JEVycihcImNvdWxkIG5vdCBjb252ZXJ0IHN0cmluZyAnXCIgKyBzICsgXCInIHRvIGEgRmxvYXRcIik7XG59XG5cblxuZnVuY3Rpb24gdG9MaXN0KHN0cilcbntcblx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LmZyb21BcnJheShzdHIuc3BsaXQoJycpLm1hcChfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuY2hyKSk7XG59XG5mdW5jdGlvbiBmcm9tTGlzdChjaGFycylcbntcblx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LnRvQXJyYXkoY2hhcnMpLmpvaW4oJycpO1xufVxuXG5yZXR1cm4ge1xuXHRpc0VtcHR5OiBpc0VtcHR5LFxuXHRjb25zOiBGMihjb25zKSxcblx0dW5jb25zOiB1bmNvbnMsXG5cdGFwcGVuZDogRjIoYXBwZW5kKSxcblx0Y29uY2F0OiBjb25jYXQsXG5cdGxlbmd0aDogbGVuZ3RoLFxuXHRtYXA6IEYyKG1hcCksXG5cdGZpbHRlcjogRjIoZmlsdGVyKSxcblx0cmV2ZXJzZTogcmV2ZXJzZSxcblx0Zm9sZGw6IEYzKGZvbGRsKSxcblx0Zm9sZHI6IEYzKGZvbGRyKSxcblxuXHRzcGxpdDogRjIoc3BsaXQpLFxuXHRqb2luOiBGMihqb2luKSxcblx0cmVwZWF0OiBGMihyZXBlYXQpLFxuXG5cdHNsaWNlOiBGMyhzbGljZSksXG5cdGxlZnQ6IEYyKGxlZnQpLFxuXHRyaWdodDogRjIocmlnaHQpLFxuXHRkcm9wTGVmdDogRjIoZHJvcExlZnQpLFxuXHRkcm9wUmlnaHQ6IEYyKGRyb3BSaWdodCksXG5cblx0cGFkOiBGMyhwYWQpLFxuXHRwYWRMZWZ0OiBGMyhwYWRMZWZ0KSxcblx0cGFkUmlnaHQ6IEYzKHBhZFJpZ2h0KSxcblxuXHR0cmltOiB0cmltLFxuXHR0cmltTGVmdDogdHJpbUxlZnQsXG5cdHRyaW1SaWdodDogdHJpbVJpZ2h0LFxuXG5cdHdvcmRzOiB3b3Jkcyxcblx0bGluZXM6IGxpbmVzLFxuXG5cdHRvVXBwZXI6IHRvVXBwZXIsXG5cdHRvTG93ZXI6IHRvTG93ZXIsXG5cblx0YW55OiBGMihhbnkpLFxuXHRhbGw6IEYyKGFsbCksXG5cblx0Y29udGFpbnM6IEYyKGNvbnRhaW5zKSxcblx0c3RhcnRzV2l0aDogRjIoc3RhcnRzV2l0aCksXG5cdGVuZHNXaXRoOiBGMihlbmRzV2l0aCksXG5cdGluZGV4ZXM6IEYyKGluZGV4ZXMpLFxuXG5cdHRvSW50OiB0b0ludCxcblx0dG9GbG9hdDogdG9GbG9hdCxcblx0dG9MaXN0OiB0b0xpc3QsXG5cdGZyb21MaXN0OiBmcm9tTGlzdFxufTtcblxufSgpO1xuXG52YXIgX2VsbV9sYW5nJGNvcmUkU3RyaW5nJGZyb21MaXN0ID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1N0cmluZy5mcm9tTGlzdDtcbnZhciBfZWxtX2xhbmckY29yZSRTdHJpbmckdG9MaXN0ID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1N0cmluZy50b0xpc3Q7XG52YXIgX2VsbV9sYW5nJGNvcmUkU3RyaW5nJHRvRmxvYXQgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfU3RyaW5nLnRvRmxvYXQ7XG52YXIgX2VsbV9sYW5nJGNvcmUkU3RyaW5nJHRvSW50ID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1N0cmluZy50b0ludDtcbnZhciBfZWxtX2xhbmckY29yZSRTdHJpbmckaW5kaWNlcyA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TdHJpbmcuaW5kZXhlcztcbnZhciBfZWxtX2xhbmckY29yZSRTdHJpbmckaW5kZXhlcyA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TdHJpbmcuaW5kZXhlcztcbnZhciBfZWxtX2xhbmckY29yZSRTdHJpbmckZW5kc1dpdGggPSBfZWxtX2xhbmckY29yZSROYXRpdmVfU3RyaW5nLmVuZHNXaXRoO1xudmFyIF9lbG1fbGFuZyRjb3JlJFN0cmluZyRzdGFydHNXaXRoID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1N0cmluZy5zdGFydHNXaXRoO1xudmFyIF9lbG1fbGFuZyRjb3JlJFN0cmluZyRjb250YWlucyA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TdHJpbmcuY29udGFpbnM7XG52YXIgX2VsbV9sYW5nJGNvcmUkU3RyaW5nJGFsbCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TdHJpbmcuYWxsO1xudmFyIF9lbG1fbGFuZyRjb3JlJFN0cmluZyRhbnkgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfU3RyaW5nLmFueTtcbnZhciBfZWxtX2xhbmckY29yZSRTdHJpbmckdG9Mb3dlciA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TdHJpbmcudG9Mb3dlcjtcbnZhciBfZWxtX2xhbmckY29yZSRTdHJpbmckdG9VcHBlciA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TdHJpbmcudG9VcHBlcjtcbnZhciBfZWxtX2xhbmckY29yZSRTdHJpbmckbGluZXMgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfU3RyaW5nLmxpbmVzO1xudmFyIF9lbG1fbGFuZyRjb3JlJFN0cmluZyR3b3JkcyA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TdHJpbmcud29yZHM7XG52YXIgX2VsbV9sYW5nJGNvcmUkU3RyaW5nJHRyaW1SaWdodCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TdHJpbmcudHJpbVJpZ2h0O1xudmFyIF9lbG1fbGFuZyRjb3JlJFN0cmluZyR0cmltTGVmdCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TdHJpbmcudHJpbUxlZnQ7XG52YXIgX2VsbV9sYW5nJGNvcmUkU3RyaW5nJHRyaW0gPSBfZWxtX2xhbmckY29yZSROYXRpdmVfU3RyaW5nLnRyaW07XG52YXIgX2VsbV9sYW5nJGNvcmUkU3RyaW5nJHBhZFJpZ2h0ID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1N0cmluZy5wYWRSaWdodDtcbnZhciBfZWxtX2xhbmckY29yZSRTdHJpbmckcGFkTGVmdCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TdHJpbmcucGFkTGVmdDtcbnZhciBfZWxtX2xhbmckY29yZSRTdHJpbmckcGFkID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1N0cmluZy5wYWQ7XG52YXIgX2VsbV9sYW5nJGNvcmUkU3RyaW5nJGRyb3BSaWdodCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TdHJpbmcuZHJvcFJpZ2h0O1xudmFyIF9lbG1fbGFuZyRjb3JlJFN0cmluZyRkcm9wTGVmdCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TdHJpbmcuZHJvcExlZnQ7XG52YXIgX2VsbV9sYW5nJGNvcmUkU3RyaW5nJHJpZ2h0ID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1N0cmluZy5yaWdodDtcbnZhciBfZWxtX2xhbmckY29yZSRTdHJpbmckbGVmdCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TdHJpbmcubGVmdDtcbnZhciBfZWxtX2xhbmckY29yZSRTdHJpbmckc2xpY2UgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfU3RyaW5nLnNsaWNlO1xudmFyIF9lbG1fbGFuZyRjb3JlJFN0cmluZyRyZXBlYXQgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfU3RyaW5nLnJlcGVhdDtcbnZhciBfZWxtX2xhbmckY29yZSRTdHJpbmckam9pbiA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TdHJpbmcuam9pbjtcbnZhciBfZWxtX2xhbmckY29yZSRTdHJpbmckc3BsaXQgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfU3RyaW5nLnNwbGl0O1xudmFyIF9lbG1fbGFuZyRjb3JlJFN0cmluZyRmb2xkciA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TdHJpbmcuZm9sZHI7XG52YXIgX2VsbV9sYW5nJGNvcmUkU3RyaW5nJGZvbGRsID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1N0cmluZy5mb2xkbDtcbnZhciBfZWxtX2xhbmckY29yZSRTdHJpbmckcmV2ZXJzZSA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TdHJpbmcucmV2ZXJzZTtcbnZhciBfZWxtX2xhbmckY29yZSRTdHJpbmckZmlsdGVyID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1N0cmluZy5maWx0ZXI7XG52YXIgX2VsbV9sYW5nJGNvcmUkU3RyaW5nJG1hcCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TdHJpbmcubWFwO1xudmFyIF9lbG1fbGFuZyRjb3JlJFN0cmluZyRsZW5ndGggPSBfZWxtX2xhbmckY29yZSROYXRpdmVfU3RyaW5nLmxlbmd0aDtcbnZhciBfZWxtX2xhbmckY29yZSRTdHJpbmckY29uY2F0ID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1N0cmluZy5jb25jYXQ7XG52YXIgX2VsbV9sYW5nJGNvcmUkU3RyaW5nJGFwcGVuZCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TdHJpbmcuYXBwZW5kO1xudmFyIF9lbG1fbGFuZyRjb3JlJFN0cmluZyR1bmNvbnMgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfU3RyaW5nLnVuY29ucztcbnZhciBfZWxtX2xhbmckY29yZSRTdHJpbmckY29ucyA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TdHJpbmcuY29ucztcbnZhciBfZWxtX2xhbmckY29yZSRTdHJpbmckZnJvbUNoYXIgPSBmdW5jdGlvbiAoJGNoYXIpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRjb3JlJFN0cmluZyRjb25zLCAkY2hhciwgJycpO1xufTtcbnZhciBfZWxtX2xhbmckY29yZSRTdHJpbmckaXNFbXB0eSA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TdHJpbmcuaXNFbXB0eTtcblxudmFyIF9lbG1fbGFuZyRjb3JlJERpY3QkZm9sZHIgPSBGMyhcblx0ZnVuY3Rpb24gKGYsIGFjYywgdCkge1xuXHRcdGZvbGRyOlxuXHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHR2YXIgX3AwID0gdDtcblx0XHRcdGlmIChfcDAuY3RvciA9PT0gJ1JCRW1wdHlfZWxtX2J1aWx0aW4nKSB7XG5cdFx0XHRcdHJldHVybiBhY2M7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgX3YxID0gZixcblx0XHRcdFx0XHRfdjIgPSBBMyhcblx0XHRcdFx0XHRmLFxuXHRcdFx0XHRcdF9wMC5fMSxcblx0XHRcdFx0XHRfcDAuXzIsXG5cdFx0XHRcdFx0QTMoX2VsbV9sYW5nJGNvcmUkRGljdCRmb2xkciwgZiwgYWNjLCBfcDAuXzQpKSxcblx0XHRcdFx0XHRfdjMgPSBfcDAuXzM7XG5cdFx0XHRcdGYgPSBfdjE7XG5cdFx0XHRcdGFjYyA9IF92Mjtcblx0XHRcdFx0dCA9IF92Mztcblx0XHRcdFx0Y29udGludWUgZm9sZHI7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSREaWN0JGtleXMgPSBmdW5jdGlvbiAoZGljdCkge1xuXHRyZXR1cm4gQTMoXG5cdFx0X2VsbV9sYW5nJGNvcmUkRGljdCRmb2xkcixcblx0XHRGMyhcblx0XHRcdGZ1bmN0aW9uIChrZXksIHZhbHVlLCBrZXlMaXN0KSB7XG5cdFx0XHRcdHJldHVybiB7Y3RvcjogJzo6JywgXzA6IGtleSwgXzE6IGtleUxpc3R9O1xuXHRcdFx0fSksXG5cdFx0e2N0b3I6ICdbXSd9LFxuXHRcdGRpY3QpO1xufTtcbnZhciBfZWxtX2xhbmckY29yZSREaWN0JHZhbHVlcyA9IGZ1bmN0aW9uIChkaWN0KSB7XG5cdHJldHVybiBBMyhcblx0XHRfZWxtX2xhbmckY29yZSREaWN0JGZvbGRyLFxuXHRcdEYzKFxuXHRcdFx0ZnVuY3Rpb24gKGtleSwgdmFsdWUsIHZhbHVlTGlzdCkge1xuXHRcdFx0XHRyZXR1cm4ge2N0b3I6ICc6OicsIF8wOiB2YWx1ZSwgXzE6IHZhbHVlTGlzdH07XG5cdFx0XHR9KSxcblx0XHR7Y3RvcjogJ1tdJ30sXG5cdFx0ZGljdCk7XG59O1xudmFyIF9lbG1fbGFuZyRjb3JlJERpY3QkdG9MaXN0ID0gZnVuY3Rpb24gKGRpY3QpIHtcblx0cmV0dXJuIEEzKFxuXHRcdF9lbG1fbGFuZyRjb3JlJERpY3QkZm9sZHIsXG5cdFx0RjMoXG5cdFx0XHRmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgbGlzdCkge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGN0b3I6ICc6OicsXG5cdFx0XHRcdFx0XzA6IHtjdG9yOiAnX1R1cGxlMicsIF8wOiBrZXksIF8xOiB2YWx1ZX0sXG5cdFx0XHRcdFx0XzE6IGxpc3Rcblx0XHRcdFx0fTtcblx0XHRcdH0pLFxuXHRcdHtjdG9yOiAnW10nfSxcblx0XHRkaWN0KTtcbn07XG52YXIgX2VsbV9sYW5nJGNvcmUkRGljdCRmb2xkbCA9IEYzKFxuXHRmdW5jdGlvbiAoZiwgYWNjLCBkaWN0KSB7XG5cdFx0Zm9sZGw6XG5cdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdHZhciBfcDEgPSBkaWN0O1xuXHRcdFx0aWYgKF9wMS5jdG9yID09PSAnUkJFbXB0eV9lbG1fYnVpbHRpbicpIHtcblx0XHRcdFx0cmV0dXJuIGFjYztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBfdjUgPSBmLFxuXHRcdFx0XHRcdF92NiA9IEEzKFxuXHRcdFx0XHRcdGYsXG5cdFx0XHRcdFx0X3AxLl8xLFxuXHRcdFx0XHRcdF9wMS5fMixcblx0XHRcdFx0XHRBMyhfZWxtX2xhbmckY29yZSREaWN0JGZvbGRsLCBmLCBhY2MsIF9wMS5fMykpLFxuXHRcdFx0XHRcdF92NyA9IF9wMS5fNDtcblx0XHRcdFx0ZiA9IF92NTtcblx0XHRcdFx0YWNjID0gX3Y2O1xuXHRcdFx0XHRkaWN0ID0gX3Y3O1xuXHRcdFx0XHRjb250aW51ZSBmb2xkbDtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJERpY3QkbWVyZ2UgPSBGNihcblx0ZnVuY3Rpb24gKGxlZnRTdGVwLCBib3RoU3RlcCwgcmlnaHRTdGVwLCBsZWZ0RGljdCwgcmlnaHREaWN0LCBpbml0aWFsUmVzdWx0KSB7XG5cdFx0dmFyIHN0ZXBTdGF0ZSA9IEYzKFxuXHRcdFx0ZnVuY3Rpb24gKHJLZXksIHJWYWx1ZSwgX3AyKSB7XG5cdFx0XHRcdHN0ZXBTdGF0ZTpcblx0XHRcdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdFx0XHR2YXIgX3AzID0gX3AyO1xuXHRcdFx0XHRcdHZhciBfcDkgPSBfcDMuXzE7XG5cdFx0XHRcdFx0dmFyIF9wOCA9IF9wMy5fMDtcblx0XHRcdFx0XHR2YXIgX3A0ID0gX3A4O1xuXHRcdFx0XHRcdGlmIChfcDQuY3RvciA9PT0gJ1tdJykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0Y3RvcjogJ19UdXBsZTInLFxuXHRcdFx0XHRcdFx0XHRfMDogX3A4LFxuXHRcdFx0XHRcdFx0XHRfMTogQTMocmlnaHRTdGVwLCByS2V5LCByVmFsdWUsIF9wOSlcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHZhciBfcDcgPSBfcDQuXzE7XG5cdFx0XHRcdFx0XHR2YXIgX3A2ID0gX3A0Ll8wLl8xO1xuXHRcdFx0XHRcdFx0dmFyIF9wNSA9IF9wNC5fMC5fMDtcblx0XHRcdFx0XHRcdGlmIChfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuY21wKF9wNSwgcktleSkgPCAwKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBfdjEwID0gcktleSxcblx0XHRcdFx0XHRcdFx0XHRfdjExID0gclZhbHVlLFxuXHRcdFx0XHRcdFx0XHRcdF92MTIgPSB7XG5cdFx0XHRcdFx0XHRcdFx0Y3RvcjogJ19UdXBsZTInLFxuXHRcdFx0XHRcdFx0XHRcdF8wOiBfcDcsXG5cdFx0XHRcdFx0XHRcdFx0XzE6IEEzKGxlZnRTdGVwLCBfcDUsIF9wNiwgX3A5KVxuXHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRyS2V5ID0gX3YxMDtcblx0XHRcdFx0XHRcdFx0clZhbHVlID0gX3YxMTtcblx0XHRcdFx0XHRcdFx0X3AyID0gX3YxMjtcblx0XHRcdFx0XHRcdFx0Y29udGludWUgc3RlcFN0YXRlO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0aWYgKF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy5jbXAoX3A1LCByS2V5KSA+IDApIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y3RvcjogJ19UdXBsZTInLFxuXHRcdFx0XHRcdFx0XHRcdFx0XzA6IF9wOCxcblx0XHRcdFx0XHRcdFx0XHRcdF8xOiBBMyhyaWdodFN0ZXAsIHJLZXksIHJWYWx1ZSwgX3A5KVxuXHRcdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0XHRcdGN0b3I6ICdfVHVwbGUyJyxcblx0XHRcdFx0XHRcdFx0XHRcdF8wOiBfcDcsXG5cdFx0XHRcdFx0XHRcdFx0XHRfMTogQTQoYm90aFN0ZXAsIF9wNSwgX3A2LCByVmFsdWUsIF9wOSlcblx0XHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR2YXIgX3AxMCA9IEEzKFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkRGljdCRmb2xkbCxcblx0XHRcdHN0ZXBTdGF0ZSxcblx0XHRcdHtcblx0XHRcdFx0Y3RvcjogJ19UdXBsZTInLFxuXHRcdFx0XHRfMDogX2VsbV9sYW5nJGNvcmUkRGljdCR0b0xpc3QobGVmdERpY3QpLFxuXHRcdFx0XHRfMTogaW5pdGlhbFJlc3VsdFxuXHRcdFx0fSxcblx0XHRcdHJpZ2h0RGljdCk7XG5cdFx0dmFyIGxlZnRvdmVycyA9IF9wMTAuXzA7XG5cdFx0dmFyIGludGVybWVkaWF0ZVJlc3VsdCA9IF9wMTAuXzE7XG5cdFx0cmV0dXJuIEEzKFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkTGlzdCRmb2xkbCxcblx0XHRcdEYyKFxuXHRcdFx0XHRmdW5jdGlvbiAoX3AxMSwgcmVzdWx0KSB7XG5cdFx0XHRcdFx0dmFyIF9wMTIgPSBfcDExO1xuXHRcdFx0XHRcdHJldHVybiBBMyhsZWZ0U3RlcCwgX3AxMi5fMCwgX3AxMi5fMSwgcmVzdWx0KTtcblx0XHRcdFx0fSksXG5cdFx0XHRpbnRlcm1lZGlhdGVSZXN1bHQsXG5cdFx0XHRsZWZ0b3ZlcnMpO1xuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSREaWN0JHJlcG9ydFJlbUJ1ZyA9IEY0KFxuXHRmdW5jdGlvbiAobXNnLCBjLCBsZ290LCByZ290KSB7XG5cdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9EZWJ1Zy5jcmFzaChcblx0XHRcdF9lbG1fbGFuZyRjb3JlJFN0cmluZyRjb25jYXQoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRjdG9yOiAnOjonLFxuXHRcdFx0XHRcdF8wOiAnSW50ZXJuYWwgcmVkLWJsYWNrIHRyZWUgaW52YXJpYW50IHZpb2xhdGVkLCBleHBlY3RlZCAnLFxuXHRcdFx0XHRcdF8xOiB7XG5cdFx0XHRcdFx0XHRjdG9yOiAnOjonLFxuXHRcdFx0XHRcdFx0XzA6IG1zZyxcblx0XHRcdFx0XHRcdF8xOiB7XG5cdFx0XHRcdFx0XHRcdGN0b3I6ICc6OicsXG5cdFx0XHRcdFx0XHRcdF8wOiAnIGFuZCBnb3QgJyxcblx0XHRcdFx0XHRcdFx0XzE6IHtcblx0XHRcdFx0XHRcdFx0XHRjdG9yOiAnOjonLFxuXHRcdFx0XHRcdFx0XHRcdF8wOiBfZWxtX2xhbmckY29yZSRCYXNpY3MkdG9TdHJpbmcoYyksXG5cdFx0XHRcdFx0XHRcdFx0XzE6IHtcblx0XHRcdFx0XHRcdFx0XHRcdGN0b3I6ICc6OicsXG5cdFx0XHRcdFx0XHRcdFx0XHRfMDogJy8nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XzE6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3RvcjogJzo6Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XzA6IGxnb3QsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF8xOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y3RvcjogJzo6Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfMDogJy8nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdF8xOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjdG9yOiAnOjonLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XzA6IHJnb3QsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfMToge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjdG9yOiAnOjonLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfMDogJ1xcblBsZWFzZSByZXBvcnQgdGhpcyBidWcgdG8gPGh0dHBzOi8vZ2l0aHViLmNvbS9lbG0tbGFuZy9jb3JlL2lzc3Vlcz4nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfMToge2N0b3I6ICdbXSd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KSk7XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJERpY3QkaXNCQmxhY2sgPSBmdW5jdGlvbiAoZGljdCkge1xuXHR2YXIgX3AxMyA9IGRpY3Q7XG5cdF92MTRfMjpcblx0ZG8ge1xuXHRcdGlmIChfcDEzLmN0b3IgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSB7XG5cdFx0XHRpZiAoX3AxMy5fMC5jdG9yID09PSAnQkJsYWNrJykge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGJyZWFrIF92MTRfMjtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKF9wMTMuXzAuY3RvciA9PT0gJ0xCQmxhY2snKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YnJlYWsgX3YxNF8yO1xuXHRcdFx0fVxuXHRcdH1cblx0fSB3aGlsZShmYWxzZSk7XG5cdHJldHVybiBmYWxzZTtcbn07XG52YXIgX2VsbV9sYW5nJGNvcmUkRGljdCRzaXplSGVscCA9IEYyKFxuXHRmdW5jdGlvbiAobiwgZGljdCkge1xuXHRcdHNpemVIZWxwOlxuXHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHR2YXIgX3AxNCA9IGRpY3Q7XG5cdFx0XHRpZiAoX3AxNC5jdG9yID09PSAnUkJFbXB0eV9lbG1fYnVpbHRpbicpIHtcblx0XHRcdFx0cmV0dXJuIG47XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgX3YxNiA9IEEyKF9lbG1fbGFuZyRjb3JlJERpY3Qkc2l6ZUhlbHAsIG4gKyAxLCBfcDE0Ll80KSxcblx0XHRcdFx0XHRfdjE3ID0gX3AxNC5fMztcblx0XHRcdFx0biA9IF92MTY7XG5cdFx0XHRcdGRpY3QgPSBfdjE3O1xuXHRcdFx0XHRjb250aW51ZSBzaXplSGVscDtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJERpY3Qkc2l6ZSA9IGZ1bmN0aW9uIChkaWN0KSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckY29yZSREaWN0JHNpemVIZWxwLCAwLCBkaWN0KTtcbn07XG52YXIgX2VsbV9sYW5nJGNvcmUkRGljdCRnZXQgPSBGMihcblx0ZnVuY3Rpb24gKHRhcmdldEtleSwgZGljdCkge1xuXHRcdGdldDpcblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0dmFyIF9wMTUgPSBkaWN0O1xuXHRcdFx0aWYgKF9wMTUuY3RvciA9PT0gJ1JCRW1wdHlfZWxtX2J1aWx0aW4nKSB7XG5cdFx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRNYXliZSROb3RoaW5nO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIF9wMTYgPSBBMihfZWxtX2xhbmckY29yZSRCYXNpY3MkY29tcGFyZSwgdGFyZ2V0S2V5LCBfcDE1Ll8xKTtcblx0XHRcdFx0c3dpdGNoIChfcDE2LmN0b3IpIHtcblx0XHRcdFx0XHRjYXNlICdMVCc6XG5cdFx0XHRcdFx0XHR2YXIgX3YyMCA9IHRhcmdldEtleSxcblx0XHRcdFx0XHRcdFx0X3YyMSA9IF9wMTUuXzM7XG5cdFx0XHRcdFx0XHR0YXJnZXRLZXkgPSBfdjIwO1xuXHRcdFx0XHRcdFx0ZGljdCA9IF92MjE7XG5cdFx0XHRcdFx0XHRjb250aW51ZSBnZXQ7XG5cdFx0XHRcdFx0Y2FzZSAnRVEnOlxuXHRcdFx0XHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE1heWJlJEp1c3QoX3AxNS5fMik7XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdHZhciBfdjIyID0gdGFyZ2V0S2V5LFxuXHRcdFx0XHRcdFx0XHRfdjIzID0gX3AxNS5fNDtcblx0XHRcdFx0XHRcdHRhcmdldEtleSA9IF92MjI7XG5cdFx0XHRcdFx0XHRkaWN0ID0gX3YyMztcblx0XHRcdFx0XHRcdGNvbnRpbnVlIGdldDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkRGljdCRtZW1iZXIgPSBGMihcblx0ZnVuY3Rpb24gKGtleSwgZGljdCkge1xuXHRcdHZhciBfcDE3ID0gQTIoX2VsbV9sYW5nJGNvcmUkRGljdCRnZXQsIGtleSwgZGljdCk7XG5cdFx0aWYgKF9wMTcuY3RvciA9PT0gJ0p1c3QnKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkRGljdCRtYXhXaXRoRGVmYXVsdCA9IEYzKFxuXHRmdW5jdGlvbiAoaywgdiwgcikge1xuXHRcdG1heFdpdGhEZWZhdWx0OlxuXHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHR2YXIgX3AxOCA9IHI7XG5cdFx0XHRpZiAoX3AxOC5jdG9yID09PSAnUkJFbXB0eV9lbG1fYnVpbHRpbicpIHtcblx0XHRcdFx0cmV0dXJuIHtjdG9yOiAnX1R1cGxlMicsIF8wOiBrLCBfMTogdn07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgX3YyNiA9IF9wMTguXzEsXG5cdFx0XHRcdFx0X3YyNyA9IF9wMTguXzIsXG5cdFx0XHRcdFx0X3YyOCA9IF9wMTguXzQ7XG5cdFx0XHRcdGsgPSBfdjI2O1xuXHRcdFx0XHR2ID0gX3YyNztcblx0XHRcdFx0ciA9IF92Mjg7XG5cdFx0XHRcdGNvbnRpbnVlIG1heFdpdGhEZWZhdWx0O1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkRGljdCROQmxhY2sgPSB7Y3RvcjogJ05CbGFjayd9O1xudmFyIF9lbG1fbGFuZyRjb3JlJERpY3QkQkJsYWNrID0ge2N0b3I6ICdCQmxhY2snfTtcbnZhciBfZWxtX2xhbmckY29yZSREaWN0JEJsYWNrID0ge2N0b3I6ICdCbGFjayd9O1xudmFyIF9lbG1fbGFuZyRjb3JlJERpY3QkYmxhY2tpc2ggPSBmdW5jdGlvbiAodCkge1xuXHR2YXIgX3AxOSA9IHQ7XG5cdGlmIChfcDE5LmN0b3IgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSB7XG5cdFx0dmFyIF9wMjAgPSBfcDE5Ll8wO1xuXHRcdHJldHVybiBfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuZXEoX3AyMCwgX2VsbV9sYW5nJGNvcmUkRGljdCRCbGFjaykgfHwgX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLmVxKF9wMjAsIF9lbG1fbGFuZyRjb3JlJERpY3QkQkJsYWNrKTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufTtcbnZhciBfZWxtX2xhbmckY29yZSREaWN0JFJlZCA9IHtjdG9yOiAnUmVkJ307XG52YXIgX2VsbV9sYW5nJGNvcmUkRGljdCRtb3JlQmxhY2sgPSBmdW5jdGlvbiAoY29sb3IpIHtcblx0dmFyIF9wMjEgPSBjb2xvcjtcblx0c3dpdGNoIChfcDIxLmN0b3IpIHtcblx0XHRjYXNlICdCbGFjayc6XG5cdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkRGljdCRCQmxhY2s7XG5cdFx0Y2FzZSAnUmVkJzpcblx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSREaWN0JEJsYWNrO1xuXHRcdGNhc2UgJ05CbGFjayc6XG5cdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkRGljdCRSZWQ7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSROYXRpdmVfRGVidWcuY3Jhc2goJ0NhblxcJ3QgbWFrZSBhIGRvdWJsZSBibGFjayBub2RlIG1vcmUgYmxhY2shJyk7XG5cdH1cbn07XG52YXIgX2VsbV9sYW5nJGNvcmUkRGljdCRsZXNzQmxhY2sgPSBmdW5jdGlvbiAoY29sb3IpIHtcblx0dmFyIF9wMjIgPSBjb2xvcjtcblx0c3dpdGNoIChfcDIyLmN0b3IpIHtcblx0XHRjYXNlICdCQmxhY2snOlxuXHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJERpY3QkQmxhY2s7XG5cdFx0Y2FzZSAnQmxhY2snOlxuXHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJERpY3QkUmVkO1xuXHRcdGNhc2UgJ1JlZCc6XG5cdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkRGljdCROQmxhY2s7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSROYXRpdmVfRGVidWcuY3Jhc2goJ0NhblxcJ3QgbWFrZSBhIG5lZ2F0aXZlIGJsYWNrIG5vZGUgbGVzcyBibGFjayEnKTtcblx0fVxufTtcbnZhciBfZWxtX2xhbmckY29yZSREaWN0JExCQmxhY2sgPSB7Y3RvcjogJ0xCQmxhY2snfTtcbnZhciBfZWxtX2xhbmckY29yZSREaWN0JExCbGFjayA9IHtjdG9yOiAnTEJsYWNrJ307XG52YXIgX2VsbV9sYW5nJGNvcmUkRGljdCRSQkVtcHR5X2VsbV9idWlsdGluID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHtjdG9yOiAnUkJFbXB0eV9lbG1fYnVpbHRpbicsIF8wOiBhfTtcbn07XG52YXIgX2VsbV9sYW5nJGNvcmUkRGljdCRlbXB0eSA9IF9lbG1fbGFuZyRjb3JlJERpY3QkUkJFbXB0eV9lbG1fYnVpbHRpbihfZWxtX2xhbmckY29yZSREaWN0JExCbGFjayk7XG52YXIgX2VsbV9sYW5nJGNvcmUkRGljdCRpc0VtcHR5ID0gZnVuY3Rpb24gKGRpY3QpIHtcblx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy5lcShkaWN0LCBfZWxtX2xhbmckY29yZSREaWN0JGVtcHR5KTtcbn07XG52YXIgX2VsbV9sYW5nJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4gPSBGNShcblx0ZnVuY3Rpb24gKGEsIGIsIGMsIGQsIGUpIHtcblx0XHRyZXR1cm4ge2N0b3I6ICdSQk5vZGVfZWxtX2J1aWx0aW4nLCBfMDogYSwgXzE6IGIsIF8yOiBjLCBfMzogZCwgXzQ6IGV9O1xuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSREaWN0JGVuc3VyZUJsYWNrUm9vdCA9IGZ1bmN0aW9uIChkaWN0KSB7XG5cdHZhciBfcDIzID0gZGljdDtcblx0aWYgKChfcDIzLmN0b3IgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSAmJiAoX3AyMy5fMC5jdG9yID09PSAnUmVkJykpIHtcblx0XHRyZXR1cm4gQTUoX2VsbV9sYW5nJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sIF9lbG1fbGFuZyRjb3JlJERpY3QkQmxhY2ssIF9wMjMuXzEsIF9wMjMuXzIsIF9wMjMuXzMsIF9wMjMuXzQpO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBkaWN0O1xuXHR9XG59O1xudmFyIF9lbG1fbGFuZyRjb3JlJERpY3QkbGVzc0JsYWNrVHJlZSA9IGZ1bmN0aW9uIChkaWN0KSB7XG5cdHZhciBfcDI0ID0gZGljdDtcblx0aWYgKF9wMjQuY3RvciA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpIHtcblx0XHRyZXR1cm4gQTUoXG5cdFx0XHRfZWxtX2xhbmckY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbixcblx0XHRcdF9lbG1fbGFuZyRjb3JlJERpY3QkbGVzc0JsYWNrKF9wMjQuXzApLFxuXHRcdFx0X3AyNC5fMSxcblx0XHRcdF9wMjQuXzIsXG5cdFx0XHRfcDI0Ll8zLFxuXHRcdFx0X3AyNC5fNCk7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJERpY3QkUkJFbXB0eV9lbG1fYnVpbHRpbihfZWxtX2xhbmckY29yZSREaWN0JExCbGFjayk7XG5cdH1cbn07XG52YXIgX2VsbV9sYW5nJGNvcmUkRGljdCRiYWxhbmNlZFRyZWUgPSBmdW5jdGlvbiAoY29sKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoeGspIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKHh2KSB7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKHlrKSB7XG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbiAoeXYpIHtcblx0XHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24gKHprKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24gKHp2KSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmdW5jdGlvbiAoYSkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBmdW5jdGlvbiAoYikge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChjKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBmdW5jdGlvbiAoZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBBNShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkRGljdCRsZXNzQmxhY2soY29sKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHlrLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eXYsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBNShfZWxtX2xhbmckY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiwgX2VsbV9sYW5nJGNvcmUkRGljdCRCbGFjaywgeGssIHh2LCBhLCBiKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEE1KF9lbG1fbGFuZyRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLCBfZWxtX2xhbmckY29yZSREaWN0JEJsYWNrLCB6aywgenYsIGMsIGQpKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fTtcblx0XHRcdH07XG5cdFx0fTtcblx0fTtcbn07XG52YXIgX2VsbV9sYW5nJGNvcmUkRGljdCRibGFja2VuID0gZnVuY3Rpb24gKHQpIHtcblx0dmFyIF9wMjUgPSB0O1xuXHRpZiAoX3AyNS5jdG9yID09PSAnUkJFbXB0eV9lbG1fYnVpbHRpbicpIHtcblx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkRGljdCRSQkVtcHR5X2VsbV9idWlsdGluKF9lbG1fbGFuZyRjb3JlJERpY3QkTEJsYWNrKTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gQTUoX2VsbV9sYW5nJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sIF9lbG1fbGFuZyRjb3JlJERpY3QkQmxhY2ssIF9wMjUuXzEsIF9wMjUuXzIsIF9wMjUuXzMsIF9wMjUuXzQpO1xuXHR9XG59O1xudmFyIF9lbG1fbGFuZyRjb3JlJERpY3QkcmVkZGVuID0gZnVuY3Rpb24gKHQpIHtcblx0dmFyIF9wMjYgPSB0O1xuXHRpZiAoX3AyNi5jdG9yID09PSAnUkJFbXB0eV9lbG1fYnVpbHRpbicpIHtcblx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0RlYnVnLmNyYXNoKCdjYW5cXCd0IG1ha2UgYSBMZWFmIHJlZCcpO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBBNShfZWxtX2xhbmckY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiwgX2VsbV9sYW5nJGNvcmUkRGljdCRSZWQsIF9wMjYuXzEsIF9wMjYuXzIsIF9wMjYuXzMsIF9wMjYuXzQpO1xuXHR9XG59O1xudmFyIF9lbG1fbGFuZyRjb3JlJERpY3QkYmFsYW5jZUhlbHAgPSBmdW5jdGlvbiAodHJlZSkge1xuXHR2YXIgX3AyNyA9IHRyZWU7XG5cdF92MzZfNjpcblx0ZG8ge1xuXHRcdF92MzZfNTpcblx0XHRkbyB7XG5cdFx0XHRfdjM2XzQ6XG5cdFx0XHRkbyB7XG5cdFx0XHRcdF92MzZfMzpcblx0XHRcdFx0ZG8ge1xuXHRcdFx0XHRcdF92MzZfMjpcblx0XHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0XHRfdjM2XzE6XG5cdFx0XHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0XHRcdF92MzZfMDpcblx0XHRcdFx0XHRcdFx0ZG8ge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChfcDI3LmN0b3IgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoX3AyNy5fMy5jdG9yID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoX3AyNy5fNC5jdG9yID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN3aXRjaCAoX3AyNy5fMy5fMC5jdG9yKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYXNlICdSZWQnOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzd2l0Y2ggKF9wMjcuXzQuXzAuY3Rvcikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgJ1JlZCc6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoKF9wMjcuXzMuXzMuY3RvciA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpICYmIChfcDI3Ll8zLl8zLl8wLmN0b3IgPT09ICdSZWQnKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhayBfdjM2XzA7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoKF9wMjcuXzMuXzQuY3RvciA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpICYmIChfcDI3Ll8zLl80Ll8wLmN0b3IgPT09ICdSZWQnKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrIF92MzZfMTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoKF9wMjcuXzQuXzMuY3RvciA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpICYmIChfcDI3Ll80Ll8zLl8wLmN0b3IgPT09ICdSZWQnKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWsgX3YzNl8yO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoKF9wMjcuXzQuXzQuY3RvciA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpICYmIChfcDI3Ll80Ll80Ll8wLmN0b3IgPT09ICdSZWQnKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhayBfdjM2XzM7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhayBfdjM2XzY7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSAnTkJsYWNrJzpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmICgoX3AyNy5fMy5fMy5jdG9yID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykgJiYgKF9wMjcuXzMuXzMuXzAuY3RvciA9PT0gJ1JlZCcpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrIF92MzZfMDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmICgoX3AyNy5fMy5fNC5jdG9yID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykgJiYgKF9wMjcuXzMuXzQuXzAuY3RvciA9PT0gJ1JlZCcpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWsgX3YzNl8xO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmICgoKCgoX3AyNy5fMC5jdG9yID09PSAnQkJsYWNrJykgJiYgKF9wMjcuXzQuXzMuY3RvciA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpKSAmJiAoX3AyNy5fNC5fMy5fMC5jdG9yID09PSAnQmxhY2snKSkgJiYgKF9wMjcuXzQuXzQuY3RvciA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpKSAmJiAoX3AyNy5fNC5fNC5fMC5jdG9yID09PSAnQmxhY2snKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWsgX3YzNl80O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhayBfdjM2XzY7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmICgoX3AyNy5fMy5fMy5jdG9yID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykgJiYgKF9wMjcuXzMuXzMuXzAuY3RvciA9PT0gJ1JlZCcpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrIF92MzZfMDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmICgoX3AyNy5fMy5fNC5jdG9yID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykgJiYgKF9wMjcuXzMuXzQuXzAuY3RvciA9PT0gJ1JlZCcpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWsgX3YzNl8xO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrIF92MzZfNjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYXNlICdOQmxhY2snOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzd2l0Y2ggKF9wMjcuXzQuXzAuY3Rvcikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgJ1JlZCc6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoKF9wMjcuXzQuXzMuY3RvciA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpICYmIChfcDI3Ll80Ll8zLl8wLmN0b3IgPT09ICdSZWQnKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhayBfdjM2XzI7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoKF9wMjcuXzQuXzQuY3RvciA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpICYmIChfcDI3Ll80Ll80Ll8wLmN0b3IgPT09ICdSZWQnKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrIF92MzZfMztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoKCgoKF9wMjcuXzAuY3RvciA9PT0gJ0JCbGFjaycpICYmIChfcDI3Ll8zLl8zLmN0b3IgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSkgJiYgKF9wMjcuXzMuXzMuXzAuY3RvciA9PT0gJ0JsYWNrJykpICYmIChfcDI3Ll8zLl80LmN0b3IgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSkgJiYgKF9wMjcuXzMuXzQuXzAuY3RvciA9PT0gJ0JsYWNrJykpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrIF92MzZfNTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWsgX3YzNl82O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgJ05CbGFjayc6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoX3AyNy5fMC5jdG9yID09PSAnQkJsYWNrJykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoKCgoX3AyNy5fNC5fMy5jdG9yID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykgJiYgKF9wMjcuXzQuXzMuXzAuY3RvciA9PT0gJ0JsYWNrJykpICYmIChfcDI3Ll80Ll80LmN0b3IgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSkgJiYgKF9wMjcuXzQuXzQuXzAuY3RvciA9PT0gJ0JsYWNrJykpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhayBfdjM2XzQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCgoKF9wMjcuXzMuXzMuY3RvciA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpICYmIChfcDI3Ll8zLl8zLl8wLmN0b3IgPT09ICdCbGFjaycpKSAmJiAoX3AyNy5fMy5fNC5jdG9yID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykpICYmIChfcDI3Ll8zLl80Ll8wLmN0b3IgPT09ICdCbGFjaycpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhayBfdjM2XzU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrIF92MzZfNjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrIF92MzZfNjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCgoKChfcDI3Ll8wLmN0b3IgPT09ICdCQmxhY2snKSAmJiAoX3AyNy5fMy5fMy5jdG9yID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykpICYmIChfcDI3Ll8zLl8zLl8wLmN0b3IgPT09ICdCbGFjaycpKSAmJiAoX3AyNy5fMy5fNC5jdG9yID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykpICYmIChfcDI3Ll8zLl80Ll8wLmN0b3IgPT09ICdCbGFjaycpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrIF92MzZfNTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrIF92MzZfNjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3dpdGNoIChfcDI3Ll80Ll8wLmN0b3IpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYXNlICdSZWQnOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKChfcDI3Ll80Ll8zLmN0b3IgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSAmJiAoX3AyNy5fNC5fMy5fMC5jdG9yID09PSAnUmVkJykpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWsgX3YzNl8yO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKChfcDI3Ll80Ll80LmN0b3IgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSAmJiAoX3AyNy5fNC5fNC5fMC5jdG9yID09PSAnUmVkJykpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhayBfdjM2XzM7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWsgX3YzNl82O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSAnTkJsYWNrJzpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmICgoKCgoX3AyNy5fMC5jdG9yID09PSAnQkJsYWNrJykgJiYgKF9wMjcuXzQuXzMuY3RvciA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpKSAmJiAoX3AyNy5fNC5fMy5fMC5jdG9yID09PSAnQmxhY2snKSkgJiYgKF9wMjcuXzQuXzQuY3RvciA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpKSAmJiAoX3AyNy5fNC5fNC5fMC5jdG9yID09PSAnQmxhY2snKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhayBfdjM2XzQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhayBfdjM2XzY7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrIF92MzZfNjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzd2l0Y2ggKF9wMjcuXzMuXzAuY3Rvcikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSAnUmVkJzpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKChfcDI3Ll8zLl8zLmN0b3IgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSAmJiAoX3AyNy5fMy5fMy5fMC5jdG9yID09PSAnUmVkJykpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhayBfdjM2XzA7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKChfcDI3Ll8zLl80LmN0b3IgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSAmJiAoX3AyNy5fMy5fNC5fMC5jdG9yID09PSAnUmVkJykpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrIF92MzZfMTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWsgX3YzNl82O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSAnTkJsYWNrJzpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCgoKChfcDI3Ll8wLmN0b3IgPT09ICdCQmxhY2snKSAmJiAoX3AyNy5fMy5fMy5jdG9yID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykpICYmIChfcDI3Ll8zLl8zLl8wLmN0b3IgPT09ICdCbGFjaycpKSAmJiAoX3AyNy5fMy5fNC5jdG9yID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykpICYmIChfcDI3Ll8zLl80Ll8wLmN0b3IgPT09ICdCbGFjaycpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWsgX3YzNl81O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrIF92MzZfNjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWsgX3YzNl82O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKF9wMjcuXzQuY3RvciA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzd2l0Y2ggKF9wMjcuXzQuXzAuY3Rvcikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSAnUmVkJzpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKChfcDI3Ll80Ll8zLmN0b3IgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSAmJiAoX3AyNy5fNC5fMy5fMC5jdG9yID09PSAnUmVkJykpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhayBfdjM2XzI7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKChfcDI3Ll80Ll80LmN0b3IgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSAmJiAoX3AyNy5fNC5fNC5fMC5jdG9yID09PSAnUmVkJykpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrIF92MzZfMztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWsgX3YzNl82O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSAnTkJsYWNrJzpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCgoKChfcDI3Ll8wLmN0b3IgPT09ICdCQmxhY2snKSAmJiAoX3AyNy5fNC5fMy5jdG9yID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykpICYmIChfcDI3Ll80Ll8zLl8wLmN0b3IgPT09ICdCbGFjaycpKSAmJiAoX3AyNy5fNC5fNC5jdG9yID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykpICYmIChfcDI3Ll80Ll80Ll8wLmN0b3IgPT09ICdCbGFjaycpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWsgX3YzNl80O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrIF92MzZfNjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWsgX3YzNl82O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhayBfdjM2XzY7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWsgX3YzNl82O1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSB3aGlsZShmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSREaWN0JGJhbGFuY2VkVHJlZShfcDI3Ll8wKShfcDI3Ll8zLl8zLl8xKShfcDI3Ll8zLl8zLl8yKShfcDI3Ll8zLl8xKShfcDI3Ll8zLl8yKShfcDI3Ll8xKShfcDI3Ll8yKShfcDI3Ll8zLl8zLl8zKShfcDI3Ll8zLl8zLl80KShfcDI3Ll8zLl80KShfcDI3Ll80KTtcblx0XHRcdFx0XHRcdH0gd2hpbGUoZmFsc2UpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJERpY3QkYmFsYW5jZWRUcmVlKF9wMjcuXzApKF9wMjcuXzMuXzEpKF9wMjcuXzMuXzIpKF9wMjcuXzMuXzQuXzEpKF9wMjcuXzMuXzQuXzIpKF9wMjcuXzEpKF9wMjcuXzIpKF9wMjcuXzMuXzMpKF9wMjcuXzMuXzQuXzMpKF9wMjcuXzMuXzQuXzQpKF9wMjcuXzQpO1xuXHRcdFx0XHRcdH0gd2hpbGUoZmFsc2UpO1xuXHRcdFx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSREaWN0JGJhbGFuY2VkVHJlZShfcDI3Ll8wKShfcDI3Ll8xKShfcDI3Ll8yKShfcDI3Ll80Ll8zLl8xKShfcDI3Ll80Ll8zLl8yKShfcDI3Ll80Ll8xKShfcDI3Ll80Ll8yKShfcDI3Ll8zKShfcDI3Ll80Ll8zLl8zKShfcDI3Ll80Ll8zLl80KShfcDI3Ll80Ll80KTtcblx0XHRcdFx0fSB3aGlsZShmYWxzZSk7XG5cdFx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSREaWN0JGJhbGFuY2VkVHJlZShfcDI3Ll8wKShfcDI3Ll8xKShfcDI3Ll8yKShfcDI3Ll80Ll8xKShfcDI3Ll80Ll8yKShfcDI3Ll80Ll80Ll8xKShfcDI3Ll80Ll80Ll8yKShfcDI3Ll8zKShfcDI3Ll80Ll8zKShfcDI3Ll80Ll80Ll8zKShfcDI3Ll80Ll80Ll80KTtcblx0XHRcdH0gd2hpbGUoZmFsc2UpO1xuXHRcdFx0cmV0dXJuIEE1KFxuXHRcdFx0XHRfZWxtX2xhbmckY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbixcblx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkRGljdCRCbGFjayxcblx0XHRcdFx0X3AyNy5fNC5fMy5fMSxcblx0XHRcdFx0X3AyNy5fNC5fMy5fMixcblx0XHRcdFx0QTUoX2VsbV9sYW5nJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sIF9lbG1fbGFuZyRjb3JlJERpY3QkQmxhY2ssIF9wMjcuXzEsIF9wMjcuXzIsIF9wMjcuXzMsIF9wMjcuXzQuXzMuXzMpLFxuXHRcdFx0XHRBNShcblx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSREaWN0JGJhbGFuY2UsXG5cdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkRGljdCRCbGFjayxcblx0XHRcdFx0XHRfcDI3Ll80Ll8xLFxuXHRcdFx0XHRcdF9wMjcuXzQuXzIsXG5cdFx0XHRcdFx0X3AyNy5fNC5fMy5fNCxcblx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSREaWN0JHJlZGRlbihfcDI3Ll80Ll80KSkpO1xuXHRcdH0gd2hpbGUoZmFsc2UpO1xuXHRcdHJldHVybiBBNShcblx0XHRcdF9lbG1fbGFuZyRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkRGljdCRCbGFjayxcblx0XHRcdF9wMjcuXzMuXzQuXzEsXG5cdFx0XHRfcDI3Ll8zLl80Ll8yLFxuXHRcdFx0QTUoXG5cdFx0XHRcdF9lbG1fbGFuZyRjb3JlJERpY3QkYmFsYW5jZSxcblx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkRGljdCRCbGFjayxcblx0XHRcdFx0X3AyNy5fMy5fMSxcblx0XHRcdFx0X3AyNy5fMy5fMixcblx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkRGljdCRyZWRkZW4oX3AyNy5fMy5fMyksXG5cdFx0XHRcdF9wMjcuXzMuXzQuXzMpLFxuXHRcdFx0QTUoX2VsbV9sYW5nJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sIF9lbG1fbGFuZyRjb3JlJERpY3QkQmxhY2ssIF9wMjcuXzEsIF9wMjcuXzIsIF9wMjcuXzMuXzQuXzQsIF9wMjcuXzQpKTtcblx0fSB3aGlsZShmYWxzZSk7XG5cdHJldHVybiB0cmVlO1xufTtcbnZhciBfZWxtX2xhbmckY29yZSREaWN0JGJhbGFuY2UgPSBGNShcblx0ZnVuY3Rpb24gKGMsIGssIHYsIGwsIHIpIHtcblx0XHR2YXIgdHJlZSA9IEE1KF9lbG1fbGFuZyRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLCBjLCBrLCB2LCBsLCByKTtcblx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkRGljdCRibGFja2lzaCh0cmVlKSA/IF9lbG1fbGFuZyRjb3JlJERpY3QkYmFsYW5jZUhlbHAodHJlZSkgOiB0cmVlO1xuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSREaWN0JGJ1YmJsZSA9IEY1KFxuXHRmdW5jdGlvbiAoYywgaywgdiwgbCwgcikge1xuXHRcdHJldHVybiAoX2VsbV9sYW5nJGNvcmUkRGljdCRpc0JCbGFjayhsKSB8fCBfZWxtX2xhbmckY29yZSREaWN0JGlzQkJsYWNrKHIpKSA/IEE1KFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkRGljdCRiYWxhbmNlLFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkRGljdCRtb3JlQmxhY2soYyksXG5cdFx0XHRrLFxuXHRcdFx0dixcblx0XHRcdF9lbG1fbGFuZyRjb3JlJERpY3QkbGVzc0JsYWNrVHJlZShsKSxcblx0XHRcdF9lbG1fbGFuZyRjb3JlJERpY3QkbGVzc0JsYWNrVHJlZShyKSkgOiBBNShfZWxtX2xhbmckY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiwgYywgaywgdiwgbCwgcik7XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJERpY3QkcmVtb3ZlTWF4ID0gRjUoXG5cdGZ1bmN0aW9uIChjLCBrLCB2LCBsLCByKSB7XG5cdFx0dmFyIF9wMjggPSByO1xuXHRcdGlmIChfcDI4LmN0b3IgPT09ICdSQkVtcHR5X2VsbV9idWlsdGluJykge1xuXHRcdFx0cmV0dXJuIEEzKF9lbG1fbGFuZyRjb3JlJERpY3QkcmVtLCBjLCBsLCByKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIEE1KFxuXHRcdFx0XHRfZWxtX2xhbmckY29yZSREaWN0JGJ1YmJsZSxcblx0XHRcdFx0Yyxcblx0XHRcdFx0ayxcblx0XHRcdFx0dixcblx0XHRcdFx0bCxcblx0XHRcdFx0QTUoX2VsbV9sYW5nJGNvcmUkRGljdCRyZW1vdmVNYXgsIF9wMjguXzAsIF9wMjguXzEsIF9wMjguXzIsIF9wMjguXzMsIF9wMjguXzQpKTtcblx0XHR9XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJERpY3QkcmVtID0gRjMoXG5cdGZ1bmN0aW9uIChjb2xvciwgbGVmdCwgcmlnaHQpIHtcblx0XHR2YXIgX3AyOSA9IHtjdG9yOiAnX1R1cGxlMicsIF8wOiBsZWZ0LCBfMTogcmlnaHR9O1xuXHRcdGlmIChfcDI5Ll8wLmN0b3IgPT09ICdSQkVtcHR5X2VsbV9idWlsdGluJykge1xuXHRcdFx0aWYgKF9wMjkuXzEuY3RvciA9PT0gJ1JCRW1wdHlfZWxtX2J1aWx0aW4nKSB7XG5cdFx0XHRcdHZhciBfcDMwID0gY29sb3I7XG5cdFx0XHRcdHN3aXRjaCAoX3AzMC5jdG9yKSB7XG5cdFx0XHRcdFx0Y2FzZSAnUmVkJzpcblx0XHRcdFx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSREaWN0JFJCRW1wdHlfZWxtX2J1aWx0aW4oX2VsbV9sYW5nJGNvcmUkRGljdCRMQmxhY2spO1xuXHRcdFx0XHRcdGNhc2UgJ0JsYWNrJzpcblx0XHRcdFx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSREaWN0JFJCRW1wdHlfZWxtX2J1aWx0aW4oX2VsbV9sYW5nJGNvcmUkRGljdCRMQkJsYWNrKTtcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9EZWJ1Zy5jcmFzaCgnY2Fubm90IGhhdmUgYmJsYWNrIG9yIG5ibGFjayBub2RlcyBhdCB0aGlzIHBvaW50Jyk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBfcDMzID0gX3AyOS5fMS5fMDtcblx0XHRcdFx0dmFyIF9wMzIgPSBfcDI5Ll8wLl8wO1xuXHRcdFx0XHR2YXIgX3AzMSA9IHtjdG9yOiAnX1R1cGxlMycsIF8wOiBjb2xvciwgXzE6IF9wMzIsIF8yOiBfcDMzfTtcblx0XHRcdFx0aWYgKCgoKF9wMzEuY3RvciA9PT0gJ19UdXBsZTMnKSAmJiAoX3AzMS5fMC5jdG9yID09PSAnQmxhY2snKSkgJiYgKF9wMzEuXzEuY3RvciA9PT0gJ0xCbGFjaycpKSAmJiAoX3AzMS5fMi5jdG9yID09PSAnUmVkJykpIHtcblx0XHRcdFx0XHRyZXR1cm4gQTUoX2VsbV9sYW5nJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sIF9lbG1fbGFuZyRjb3JlJERpY3QkQmxhY2ssIF9wMjkuXzEuXzEsIF9wMjkuXzEuXzIsIF9wMjkuXzEuXzMsIF9wMjkuXzEuXzQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBBNChcblx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJERpY3QkcmVwb3J0UmVtQnVnLFxuXHRcdFx0XHRcdFx0J0JsYWNrL0xCbGFjay9SZWQnLFxuXHRcdFx0XHRcdFx0Y29sb3IsXG5cdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSRCYXNpY3MkdG9TdHJpbmcoX3AzMiksXG5cdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSRCYXNpY3MkdG9TdHJpbmcoX3AzMykpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChfcDI5Ll8xLmN0b3IgPT09ICdSQkVtcHR5X2VsbV9idWlsdGluJykge1xuXHRcdFx0XHR2YXIgX3AzNiA9IF9wMjkuXzEuXzA7XG5cdFx0XHRcdHZhciBfcDM1ID0gX3AyOS5fMC5fMDtcblx0XHRcdFx0dmFyIF9wMzQgPSB7Y3RvcjogJ19UdXBsZTMnLCBfMDogY29sb3IsIF8xOiBfcDM1LCBfMjogX3AzNn07XG5cdFx0XHRcdGlmICgoKChfcDM0LmN0b3IgPT09ICdfVHVwbGUzJykgJiYgKF9wMzQuXzAuY3RvciA9PT0gJ0JsYWNrJykpICYmIChfcDM0Ll8xLmN0b3IgPT09ICdSZWQnKSkgJiYgKF9wMzQuXzIuY3RvciA9PT0gJ0xCbGFjaycpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIEE1KF9lbG1fbGFuZyRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLCBfZWxtX2xhbmckY29yZSREaWN0JEJsYWNrLCBfcDI5Ll8wLl8xLCBfcDI5Ll8wLl8yLCBfcDI5Ll8wLl8zLCBfcDI5Ll8wLl80KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gQTQoXG5cdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSREaWN0JHJlcG9ydFJlbUJ1Zyxcblx0XHRcdFx0XHRcdCdCbGFjay9SZWQvTEJsYWNrJyxcblx0XHRcdFx0XHRcdGNvbG9yLFxuXHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkQmFzaWNzJHRvU3RyaW5nKF9wMzUpLFxuXHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkQmFzaWNzJHRvU3RyaW5nKF9wMzYpKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIF9wNDAgPSBfcDI5Ll8wLl8yO1xuXHRcdFx0XHR2YXIgX3AzOSA9IF9wMjkuXzAuXzQ7XG5cdFx0XHRcdHZhciBfcDM4ID0gX3AyOS5fMC5fMTtcblx0XHRcdFx0dmFyIG5ld0xlZnQgPSBBNShfZWxtX2xhbmckY29yZSREaWN0JHJlbW92ZU1heCwgX3AyOS5fMC5fMCwgX3AzOCwgX3A0MCwgX3AyOS5fMC5fMywgX3AzOSk7XG5cdFx0XHRcdHZhciBfcDM3ID0gQTMoX2VsbV9sYW5nJGNvcmUkRGljdCRtYXhXaXRoRGVmYXVsdCwgX3AzOCwgX3A0MCwgX3AzOSk7XG5cdFx0XHRcdHZhciBrID0gX3AzNy5fMDtcblx0XHRcdFx0dmFyIHYgPSBfcDM3Ll8xO1xuXHRcdFx0XHRyZXR1cm4gQTUoX2VsbV9sYW5nJGNvcmUkRGljdCRidWJibGUsIGNvbG9yLCBrLCB2LCBuZXdMZWZ0LCByaWdodCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSREaWN0JG1hcCA9IEYyKFxuXHRmdW5jdGlvbiAoZiwgZGljdCkge1xuXHRcdHZhciBfcDQxID0gZGljdDtcblx0XHRpZiAoX3A0MS5jdG9yID09PSAnUkJFbXB0eV9lbG1fYnVpbHRpbicpIHtcblx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSREaWN0JFJCRW1wdHlfZWxtX2J1aWx0aW4oX2VsbV9sYW5nJGNvcmUkRGljdCRMQmxhY2spO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgX3A0MiA9IF9wNDEuXzE7XG5cdFx0XHRyZXR1cm4gQTUoXG5cdFx0XHRcdF9lbG1fbGFuZyRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLFxuXHRcdFx0XHRfcDQxLl8wLFxuXHRcdFx0XHRfcDQyLFxuXHRcdFx0XHRBMihmLCBfcDQyLCBfcDQxLl8yKSxcblx0XHRcdFx0QTIoX2VsbV9sYW5nJGNvcmUkRGljdCRtYXAsIGYsIF9wNDEuXzMpLFxuXHRcdFx0XHRBMihfZWxtX2xhbmckY29yZSREaWN0JG1hcCwgZiwgX3A0MS5fNCkpO1xuXHRcdH1cblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkRGljdCRTYW1lID0ge2N0b3I6ICdTYW1lJ307XG52YXIgX2VsbV9sYW5nJGNvcmUkRGljdCRSZW1vdmUgPSB7Y3RvcjogJ1JlbW92ZSd9O1xudmFyIF9lbG1fbGFuZyRjb3JlJERpY3QkSW5zZXJ0ID0ge2N0b3I6ICdJbnNlcnQnfTtcbnZhciBfZWxtX2xhbmckY29yZSREaWN0JHVwZGF0ZSA9IEYzKFxuXHRmdW5jdGlvbiAoaywgYWx0ZXIsIGRpY3QpIHtcblx0XHR2YXIgdXAgPSBmdW5jdGlvbiAoZGljdCkge1xuXHRcdFx0dmFyIF9wNDMgPSBkaWN0O1xuXHRcdFx0aWYgKF9wNDMuY3RvciA9PT0gJ1JCRW1wdHlfZWxtX2J1aWx0aW4nKSB7XG5cdFx0XHRcdHZhciBfcDQ0ID0gYWx0ZXIoX2VsbV9sYW5nJGNvcmUkTWF5YmUkTm90aGluZyk7XG5cdFx0XHRcdGlmIChfcDQ0LmN0b3IgPT09ICdOb3RoaW5nJykge1xuXHRcdFx0XHRcdHJldHVybiB7Y3RvcjogJ19UdXBsZTInLCBfMDogX2VsbV9sYW5nJGNvcmUkRGljdCRTYW1lLCBfMTogX2VsbV9sYW5nJGNvcmUkRGljdCRlbXB0eX07XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdGN0b3I6ICdfVHVwbGUyJyxcblx0XHRcdFx0XHRcdF8wOiBfZWxtX2xhbmckY29yZSREaWN0JEluc2VydCxcblx0XHRcdFx0XHRcdF8xOiBBNShfZWxtX2xhbmckY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiwgX2VsbV9sYW5nJGNvcmUkRGljdCRSZWQsIGssIF9wNDQuXzAsIF9lbG1fbGFuZyRjb3JlJERpY3QkZW1wdHksIF9lbG1fbGFuZyRjb3JlJERpY3QkZW1wdHkpXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIF9wNTUgPSBfcDQzLl8yO1xuXHRcdFx0XHR2YXIgX3A1NCA9IF9wNDMuXzQ7XG5cdFx0XHRcdHZhciBfcDUzID0gX3A0My5fMztcblx0XHRcdFx0dmFyIF9wNTIgPSBfcDQzLl8xO1xuXHRcdFx0XHR2YXIgX3A1MSA9IF9wNDMuXzA7XG5cdFx0XHRcdHZhciBfcDQ1ID0gQTIoX2VsbV9sYW5nJGNvcmUkQmFzaWNzJGNvbXBhcmUsIGssIF9wNTIpO1xuXHRcdFx0XHRzd2l0Y2ggKF9wNDUuY3Rvcikge1xuXHRcdFx0XHRcdGNhc2UgJ0VRJzpcblx0XHRcdFx0XHRcdHZhciBfcDQ2ID0gYWx0ZXIoXG5cdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJE1heWJlJEp1c3QoX3A1NSkpO1xuXHRcdFx0XHRcdFx0aWYgKF9wNDYuY3RvciA9PT0gJ05vdGhpbmcnKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRcdFx0Y3RvcjogJ19UdXBsZTInLFxuXHRcdFx0XHRcdFx0XHRcdF8wOiBfZWxtX2xhbmckY29yZSREaWN0JFJlbW92ZSxcblx0XHRcdFx0XHRcdFx0XHRfMTogQTMoX2VsbV9sYW5nJGNvcmUkRGljdCRyZW0sIF9wNTEsIF9wNTMsIF9wNTQpXG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHRcdGN0b3I6ICdfVHVwbGUyJyxcblx0XHRcdFx0XHRcdFx0XHRfMDogX2VsbV9sYW5nJGNvcmUkRGljdCRTYW1lLFxuXHRcdFx0XHRcdFx0XHRcdF8xOiBBNShfZWxtX2xhbmckY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiwgX3A1MSwgX3A1MiwgX3A0Ni5fMCwgX3A1MywgX3A1NClcblx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjYXNlICdMVCc6XG5cdFx0XHRcdFx0XHR2YXIgX3A0NyA9IHVwKF9wNTMpO1xuXHRcdFx0XHRcdFx0dmFyIGZsYWcgPSBfcDQ3Ll8wO1xuXHRcdFx0XHRcdFx0dmFyIG5ld0xlZnQgPSBfcDQ3Ll8xO1xuXHRcdFx0XHRcdFx0dmFyIF9wNDggPSBmbGFnO1xuXHRcdFx0XHRcdFx0c3dpdGNoIChfcDQ4LmN0b3IpIHtcblx0XHRcdFx0XHRcdFx0Y2FzZSAnU2FtZSc6XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0XHRcdGN0b3I6ICdfVHVwbGUyJyxcblx0XHRcdFx0XHRcdFx0XHRcdF8wOiBfZWxtX2xhbmckY29yZSREaWN0JFNhbWUsXG5cdFx0XHRcdFx0XHRcdFx0XHRfMTogQTUoX2VsbV9sYW5nJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sIF9wNTEsIF9wNTIsIF9wNTUsIG5ld0xlZnQsIF9wNTQpXG5cdFx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0Y2FzZSAnSW5zZXJ0Jzpcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y3RvcjogJ19UdXBsZTInLFxuXHRcdFx0XHRcdFx0XHRcdFx0XzA6IF9lbG1fbGFuZyRjb3JlJERpY3QkSW5zZXJ0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XzE6IEE1KF9lbG1fbGFuZyRjb3JlJERpY3QkYmFsYW5jZSwgX3A1MSwgX3A1MiwgX3A1NSwgbmV3TGVmdCwgX3A1NClcblx0XHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjdG9yOiAnX1R1cGxlMicsXG5cdFx0XHRcdFx0XHRcdFx0XHRfMDogX2VsbV9sYW5nJGNvcmUkRGljdCRSZW1vdmUsXG5cdFx0XHRcdFx0XHRcdFx0XHRfMTogQTUoX2VsbV9sYW5nJGNvcmUkRGljdCRidWJibGUsIF9wNTEsIF9wNTIsIF9wNTUsIG5ld0xlZnQsIF9wNTQpXG5cdFx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0dmFyIF9wNDkgPSB1cChfcDU0KTtcblx0XHRcdFx0XHRcdHZhciBmbGFnID0gX3A0OS5fMDtcblx0XHRcdFx0XHRcdHZhciBuZXdSaWdodCA9IF9wNDkuXzE7XG5cdFx0XHRcdFx0XHR2YXIgX3A1MCA9IGZsYWc7XG5cdFx0XHRcdFx0XHRzd2l0Y2ggKF9wNTAuY3Rvcikge1xuXHRcdFx0XHRcdFx0XHRjYXNlICdTYW1lJzpcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y3RvcjogJ19UdXBsZTInLFxuXHRcdFx0XHRcdFx0XHRcdFx0XzA6IF9lbG1fbGFuZyRjb3JlJERpY3QkU2FtZSxcblx0XHRcdFx0XHRcdFx0XHRcdF8xOiBBNShfZWxtX2xhbmckY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiwgX3A1MSwgX3A1MiwgX3A1NSwgX3A1MywgbmV3UmlnaHQpXG5cdFx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0Y2FzZSAnSW5zZXJ0Jzpcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y3RvcjogJ19UdXBsZTInLFxuXHRcdFx0XHRcdFx0XHRcdFx0XzA6IF9lbG1fbGFuZyRjb3JlJERpY3QkSW5zZXJ0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XzE6IEE1KF9lbG1fbGFuZyRjb3JlJERpY3QkYmFsYW5jZSwgX3A1MSwgX3A1MiwgX3A1NSwgX3A1MywgbmV3UmlnaHQpXG5cdFx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y3RvcjogJ19UdXBsZTInLFxuXHRcdFx0XHRcdFx0XHRcdFx0XzA6IF9lbG1fbGFuZyRjb3JlJERpY3QkUmVtb3ZlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XzE6IEE1KF9lbG1fbGFuZyRjb3JlJERpY3QkYnViYmxlLCBfcDUxLCBfcDUyLCBfcDU1LCBfcDUzLCBuZXdSaWdodClcblx0XHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblx0XHR2YXIgX3A1NiA9IHVwKGRpY3QpO1xuXHRcdHZhciBmbGFnID0gX3A1Ni5fMDtcblx0XHR2YXIgdXBkYXRlZERpY3QgPSBfcDU2Ll8xO1xuXHRcdHZhciBfcDU3ID0gZmxhZztcblx0XHRzd2l0Y2ggKF9wNTcuY3Rvcikge1xuXHRcdFx0Y2FzZSAnU2FtZSc6XG5cdFx0XHRcdHJldHVybiB1cGRhdGVkRGljdDtcblx0XHRcdGNhc2UgJ0luc2VydCc6XG5cdFx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSREaWN0JGVuc3VyZUJsYWNrUm9vdCh1cGRhdGVkRGljdCk7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkRGljdCRibGFja2VuKHVwZGF0ZWREaWN0KTtcblx0XHR9XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJERpY3QkaW5zZXJ0ID0gRjMoXG5cdGZ1bmN0aW9uIChrZXksIHZhbHVlLCBkaWN0KSB7XG5cdFx0cmV0dXJuIEEzKFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkRGljdCR1cGRhdGUsXG5cdFx0XHRrZXksXG5cdFx0XHRfZWxtX2xhbmckY29yZSRCYXNpY3MkYWx3YXlzKFxuXHRcdFx0XHRfZWxtX2xhbmckY29yZSRNYXliZSRKdXN0KHZhbHVlKSksXG5cdFx0XHRkaWN0KTtcblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkRGljdCRzaW5nbGV0b24gPSBGMihcblx0ZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblx0XHRyZXR1cm4gQTMoX2VsbV9sYW5nJGNvcmUkRGljdCRpbnNlcnQsIGtleSwgdmFsdWUsIF9lbG1fbGFuZyRjb3JlJERpY3QkZW1wdHkpO1xuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSREaWN0JHVuaW9uID0gRjIoXG5cdGZ1bmN0aW9uICh0MSwgdDIpIHtcblx0XHRyZXR1cm4gQTMoX2VsbV9sYW5nJGNvcmUkRGljdCRmb2xkbCwgX2VsbV9sYW5nJGNvcmUkRGljdCRpbnNlcnQsIHQyLCB0MSk7XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJERpY3QkZmlsdGVyID0gRjIoXG5cdGZ1bmN0aW9uIChwcmVkaWNhdGUsIGRpY3Rpb25hcnkpIHtcblx0XHR2YXIgYWRkID0gRjMoXG5cdFx0XHRmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgZGljdCkge1xuXHRcdFx0XHRyZXR1cm4gQTIocHJlZGljYXRlLCBrZXksIHZhbHVlKSA/IEEzKF9lbG1fbGFuZyRjb3JlJERpY3QkaW5zZXJ0LCBrZXksIHZhbHVlLCBkaWN0KSA6IGRpY3Q7XG5cdFx0XHR9KTtcblx0XHRyZXR1cm4gQTMoX2VsbV9sYW5nJGNvcmUkRGljdCRmb2xkbCwgYWRkLCBfZWxtX2xhbmckY29yZSREaWN0JGVtcHR5LCBkaWN0aW9uYXJ5KTtcblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkRGljdCRpbnRlcnNlY3QgPSBGMihcblx0ZnVuY3Rpb24gKHQxLCB0Mikge1xuXHRcdHJldHVybiBBMihcblx0XHRcdF9lbG1fbGFuZyRjb3JlJERpY3QkZmlsdGVyLFxuXHRcdFx0RjIoXG5cdFx0XHRcdGZ1bmN0aW9uIChrLCBfcDU4KSB7XG5cdFx0XHRcdFx0cmV0dXJuIEEyKF9lbG1fbGFuZyRjb3JlJERpY3QkbWVtYmVyLCBrLCB0Mik7XG5cdFx0XHRcdH0pLFxuXHRcdFx0dDEpO1xuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSREaWN0JHBhcnRpdGlvbiA9IEYyKFxuXHRmdW5jdGlvbiAocHJlZGljYXRlLCBkaWN0KSB7XG5cdFx0dmFyIGFkZCA9IEYzKFxuXHRcdFx0ZnVuY3Rpb24gKGtleSwgdmFsdWUsIF9wNTkpIHtcblx0XHRcdFx0dmFyIF9wNjAgPSBfcDU5O1xuXHRcdFx0XHR2YXIgX3A2MiA9IF9wNjAuXzE7XG5cdFx0XHRcdHZhciBfcDYxID0gX3A2MC5fMDtcblx0XHRcdFx0cmV0dXJuIEEyKHByZWRpY2F0ZSwga2V5LCB2YWx1ZSkgPyB7XG5cdFx0XHRcdFx0Y3RvcjogJ19UdXBsZTInLFxuXHRcdFx0XHRcdF8wOiBBMyhfZWxtX2xhbmckY29yZSREaWN0JGluc2VydCwga2V5LCB2YWx1ZSwgX3A2MSksXG5cdFx0XHRcdFx0XzE6IF9wNjJcblx0XHRcdFx0fSA6IHtcblx0XHRcdFx0XHRjdG9yOiAnX1R1cGxlMicsXG5cdFx0XHRcdFx0XzA6IF9wNjEsXG5cdFx0XHRcdFx0XzE6IEEzKF9lbG1fbGFuZyRjb3JlJERpY3QkaW5zZXJ0LCBrZXksIHZhbHVlLCBfcDYyKVxuXHRcdFx0XHR9O1xuXHRcdFx0fSk7XG5cdFx0cmV0dXJuIEEzKFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkRGljdCRmb2xkbCxcblx0XHRcdGFkZCxcblx0XHRcdHtjdG9yOiAnX1R1cGxlMicsIF8wOiBfZWxtX2xhbmckY29yZSREaWN0JGVtcHR5LCBfMTogX2VsbV9sYW5nJGNvcmUkRGljdCRlbXB0eX0sXG5cdFx0XHRkaWN0KTtcblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkRGljdCRmcm9tTGlzdCA9IGZ1bmN0aW9uIChhc3NvY3MpIHtcblx0cmV0dXJuIEEzKFxuXHRcdF9lbG1fbGFuZyRjb3JlJExpc3QkZm9sZGwsXG5cdFx0RjIoXG5cdFx0XHRmdW5jdGlvbiAoX3A2MywgZGljdCkge1xuXHRcdFx0XHR2YXIgX3A2NCA9IF9wNjM7XG5cdFx0XHRcdHJldHVybiBBMyhfZWxtX2xhbmckY29yZSREaWN0JGluc2VydCwgX3A2NC5fMCwgX3A2NC5fMSwgZGljdCk7XG5cdFx0XHR9KSxcblx0XHRfZWxtX2xhbmckY29yZSREaWN0JGVtcHR5LFxuXHRcdGFzc29jcyk7XG59O1xudmFyIF9lbG1fbGFuZyRjb3JlJERpY3QkcmVtb3ZlID0gRjIoXG5cdGZ1bmN0aW9uIChrZXksIGRpY3QpIHtcblx0XHRyZXR1cm4gQTMoXG5cdFx0XHRfZWxtX2xhbmckY29yZSREaWN0JHVwZGF0ZSxcblx0XHRcdGtleSxcblx0XHRcdF9lbG1fbGFuZyRjb3JlJEJhc2ljcyRhbHdheXMoX2VsbV9sYW5nJGNvcmUkTWF5YmUkTm90aGluZyksXG5cdFx0XHRkaWN0KTtcblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkRGljdCRkaWZmID0gRjIoXG5cdGZ1bmN0aW9uICh0MSwgdDIpIHtcblx0XHRyZXR1cm4gQTMoXG5cdFx0XHRfZWxtX2xhbmckY29yZSREaWN0JGZvbGRsLFxuXHRcdFx0RjMoXG5cdFx0XHRcdGZ1bmN0aW9uIChrLCB2LCB0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIEEyKF9lbG1fbGFuZyRjb3JlJERpY3QkcmVtb3ZlLCBrLCB0KTtcblx0XHRcdFx0fSksXG5cdFx0XHR0MSxcblx0XHRcdHQyKTtcblx0fSk7XG5cbi8vaW1wb3J0IE5hdGl2ZS5TY2hlZHVsZXIgLy9cblxudmFyIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9UaW1lID0gZnVuY3Rpb24oKSB7XG5cbnZhciBub3cgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfU2NoZWR1bGVyLm5hdGl2ZUJpbmRpbmcoZnVuY3Rpb24oY2FsbGJhY2spXG57XG5cdGNhbGxiYWNrKF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TY2hlZHVsZXIuc3VjY2VlZChEYXRlLm5vdygpKSk7XG59KTtcblxuZnVuY3Rpb24gc2V0SW50ZXJ2YWxfKGludGVydmFsLCB0YXNrKVxue1xuXHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1NjaGVkdWxlci5uYXRpdmVCaW5kaW5nKGZ1bmN0aW9uKGNhbGxiYWNrKVxuXHR7XG5cdFx0dmFyIGlkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG5cdFx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfU2NoZWR1bGVyLnJhd1NwYXduKHRhc2spO1xuXHRcdH0sIGludGVydmFsKTtcblxuXHRcdHJldHVybiBmdW5jdGlvbigpIHsgY2xlYXJJbnRlcnZhbChpZCk7IH07XG5cdH0pO1xufVxuXG5yZXR1cm4ge1xuXHRub3c6IG5vdyxcblx0c2V0SW50ZXJ2YWxfOiBGMihzZXRJbnRlcnZhbF8pXG59O1xuXG59KCk7XG52YXIgX2VsbV9sYW5nJGNvcmUkVGltZSRzZXRJbnRlcnZhbCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9UaW1lLnNldEludGVydmFsXztcbnZhciBfZWxtX2xhbmckY29yZSRUaW1lJHNwYXduSGVscCA9IEYzKFxuXHRmdW5jdGlvbiAocm91dGVyLCBpbnRlcnZhbHMsIHByb2Nlc3Nlcykge1xuXHRcdHZhciBfcDAgPSBpbnRlcnZhbHM7XG5cdFx0aWYgKF9wMC5jdG9yID09PSAnW10nKSB7XG5cdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkVGFzayRzdWNjZWVkKHByb2Nlc3Nlcyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBfcDEgPSBfcDAuXzA7XG5cdFx0XHR2YXIgc3Bhd25SZXN0ID0gZnVuY3Rpb24gKGlkKSB7XG5cdFx0XHRcdHJldHVybiBBMyhcblx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSRUaW1lJHNwYXduSGVscCxcblx0XHRcdFx0XHRyb3V0ZXIsXG5cdFx0XHRcdFx0X3AwLl8xLFxuXHRcdFx0XHRcdEEzKF9lbG1fbGFuZyRjb3JlJERpY3QkaW5zZXJ0LCBfcDEsIGlkLCBwcm9jZXNzZXMpKTtcblx0XHRcdH07XG5cdFx0XHR2YXIgc3Bhd25UaW1lciA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TY2hlZHVsZXIuc3Bhd24oXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJFRpbWUkc2V0SW50ZXJ2YWwsXG5cdFx0XHRcdFx0X3AxLFxuXHRcdFx0XHRcdEEyKF9lbG1fbGFuZyRjb3JlJFBsYXRmb3JtJHNlbmRUb1NlbGYsIHJvdXRlciwgX3AxKSkpO1xuXHRcdFx0cmV0dXJuIEEyKF9lbG1fbGFuZyRjb3JlJFRhc2skYW5kVGhlbiwgc3Bhd25SZXN0LCBzcGF3blRpbWVyKTtcblx0XHR9XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJFRpbWUkYWRkTXlTdWIgPSBGMihcblx0ZnVuY3Rpb24gKF9wMiwgc3RhdGUpIHtcblx0XHR2YXIgX3AzID0gX3AyO1xuXHRcdHZhciBfcDYgPSBfcDMuXzE7XG5cdFx0dmFyIF9wNSA9IF9wMy5fMDtcblx0XHR2YXIgX3A0ID0gQTIoX2VsbV9sYW5nJGNvcmUkRGljdCRnZXQsIF9wNSwgc3RhdGUpO1xuXHRcdGlmIChfcDQuY3RvciA9PT0gJ05vdGhpbmcnKSB7XG5cdFx0XHRyZXR1cm4gQTMoXG5cdFx0XHRcdF9lbG1fbGFuZyRjb3JlJERpY3QkaW5zZXJ0LFxuXHRcdFx0XHRfcDUsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRjdG9yOiAnOjonLFxuXHRcdFx0XHRcdF8wOiBfcDYsXG5cdFx0XHRcdFx0XzE6IHtjdG9yOiAnW10nfVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzdGF0ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBBMyhcblx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkRGljdCRpbnNlcnQsXG5cdFx0XHRcdF9wNSxcblx0XHRcdFx0e2N0b3I6ICc6OicsIF8wOiBfcDYsIF8xOiBfcDQuXzB9LFxuXHRcdFx0XHRzdGF0ZSk7XG5cdFx0fVxuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSRUaW1lJGluTWlsbGlzZWNvbmRzID0gZnVuY3Rpb24gKHQpIHtcblx0cmV0dXJuIHQ7XG59O1xudmFyIF9lbG1fbGFuZyRjb3JlJFRpbWUkbWlsbGlzZWNvbmQgPSAxO1xudmFyIF9lbG1fbGFuZyRjb3JlJFRpbWUkc2Vjb25kID0gMTAwMCAqIF9lbG1fbGFuZyRjb3JlJFRpbWUkbWlsbGlzZWNvbmQ7XG52YXIgX2VsbV9sYW5nJGNvcmUkVGltZSRtaW51dGUgPSA2MCAqIF9lbG1fbGFuZyRjb3JlJFRpbWUkc2Vjb25kO1xudmFyIF9lbG1fbGFuZyRjb3JlJFRpbWUkaG91ciA9IDYwICogX2VsbV9sYW5nJGNvcmUkVGltZSRtaW51dGU7XG52YXIgX2VsbV9sYW5nJGNvcmUkVGltZSRpbkhvdXJzID0gZnVuY3Rpb24gKHQpIHtcblx0cmV0dXJuIHQgLyBfZWxtX2xhbmckY29yZSRUaW1lJGhvdXI7XG59O1xudmFyIF9lbG1fbGFuZyRjb3JlJFRpbWUkaW5NaW51dGVzID0gZnVuY3Rpb24gKHQpIHtcblx0cmV0dXJuIHQgLyBfZWxtX2xhbmckY29yZSRUaW1lJG1pbnV0ZTtcbn07XG52YXIgX2VsbV9sYW5nJGNvcmUkVGltZSRpblNlY29uZHMgPSBmdW5jdGlvbiAodCkge1xuXHRyZXR1cm4gdCAvIF9lbG1fbGFuZyRjb3JlJFRpbWUkc2Vjb25kO1xufTtcbnZhciBfZWxtX2xhbmckY29yZSRUaW1lJG5vdyA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9UaW1lLm5vdztcbnZhciBfZWxtX2xhbmckY29yZSRUaW1lJG9uU2VsZk1zZyA9IEYzKFxuXHRmdW5jdGlvbiAocm91dGVyLCBpbnRlcnZhbCwgc3RhdGUpIHtcblx0XHR2YXIgX3A3ID0gQTIoX2VsbV9sYW5nJGNvcmUkRGljdCRnZXQsIGludGVydmFsLCBzdGF0ZS50YWdnZXJzKTtcblx0XHRpZiAoX3A3LmN0b3IgPT09ICdOb3RoaW5nJykge1xuXHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJFRhc2skc3VjY2VlZChzdGF0ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciB0ZWxsVGFnZ2VycyA9IGZ1bmN0aW9uICh0aW1lKSB7XG5cdFx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRUYXNrJHNlcXVlbmNlKFxuXHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTGlzdCRtYXAsXG5cdFx0XHRcdFx0XHRmdW5jdGlvbiAodGFnZ2VyKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSRQbGF0Zm9ybSRzZW5kVG9BcHAsXG5cdFx0XHRcdFx0XHRcdFx0cm91dGVyLFxuXHRcdFx0XHRcdFx0XHRcdHRhZ2dlcih0aW1lKSk7XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0X3A3Ll8wKSk7XG5cdFx0XHR9O1xuXHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRfZWxtX2xhbmckY29yZSRUYXNrJGFuZFRoZW4sXG5cdFx0XHRcdGZ1bmN0aW9uIChfcDgpIHtcblx0XHRcdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkVGFzayRzdWNjZWVkKHN0YXRlKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0QTIoX2VsbV9sYW5nJGNvcmUkVGFzayRhbmRUaGVuLCB0ZWxsVGFnZ2VycywgX2VsbV9sYW5nJGNvcmUkVGltZSRub3cpKTtcblx0XHR9XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRjb3JlJFRpbWUkc3Vic2NyaXB0aW9uID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1BsYXRmb3JtLmxlYWYoJ1RpbWUnKTtcbnZhciBfZWxtX2xhbmckY29yZSRUaW1lJFN0YXRlID0gRjIoXG5cdGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0cmV0dXJuIHt0YWdnZXJzOiBhLCBwcm9jZXNzZXM6IGJ9O1xuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSRUaW1lJGluaXQgPSBfZWxtX2xhbmckY29yZSRUYXNrJHN1Y2NlZWQoXG5cdEEyKF9lbG1fbGFuZyRjb3JlJFRpbWUkU3RhdGUsIF9lbG1fbGFuZyRjb3JlJERpY3QkZW1wdHksIF9lbG1fbGFuZyRjb3JlJERpY3QkZW1wdHkpKTtcbnZhciBfZWxtX2xhbmckY29yZSRUaW1lJG9uRWZmZWN0cyA9IEYzKFxuXHRmdW5jdGlvbiAocm91dGVyLCBzdWJzLCBfcDkpIHtcblx0XHR2YXIgX3AxMCA9IF9wOTtcblx0XHR2YXIgcmlnaHRTdGVwID0gRjMoXG5cdFx0XHRmdW5jdGlvbiAoX3AxMiwgaWQsIF9wMTEpIHtcblx0XHRcdFx0dmFyIF9wMTMgPSBfcDExO1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGN0b3I6ICdfVHVwbGUzJyxcblx0XHRcdFx0XHRfMDogX3AxMy5fMCxcblx0XHRcdFx0XHRfMTogX3AxMy5fMSxcblx0XHRcdFx0XHRfMjogQTIoXG5cdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSRUYXNrJGFuZFRoZW4sXG5cdFx0XHRcdFx0XHRmdW5jdGlvbiAoX3AxNCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gX3AxMy5fMjtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSROYXRpdmVfU2NoZWR1bGVyLmtpbGwoaWQpKVxuXHRcdFx0XHR9O1xuXHRcdFx0fSk7XG5cdFx0dmFyIGJvdGhTdGVwID0gRjQoXG5cdFx0XHRmdW5jdGlvbiAoaW50ZXJ2YWwsIHRhZ2dlcnMsIGlkLCBfcDE1KSB7XG5cdFx0XHRcdHZhciBfcDE2ID0gX3AxNTtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRjdG9yOiAnX1R1cGxlMycsXG5cdFx0XHRcdFx0XzA6IF9wMTYuXzAsXG5cdFx0XHRcdFx0XzE6IEEzKF9lbG1fbGFuZyRjb3JlJERpY3QkaW5zZXJ0LCBpbnRlcnZhbCwgaWQsIF9wMTYuXzEpLFxuXHRcdFx0XHRcdF8yOiBfcDE2Ll8yXG5cdFx0XHRcdH07XG5cdFx0XHR9KTtcblx0XHR2YXIgbGVmdFN0ZXAgPSBGMyhcblx0XHRcdGZ1bmN0aW9uIChpbnRlcnZhbCwgdGFnZ2VycywgX3AxNykge1xuXHRcdFx0XHR2YXIgX3AxOCA9IF9wMTc7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0Y3RvcjogJ19UdXBsZTMnLFxuXHRcdFx0XHRcdF8wOiB7Y3RvcjogJzo6JywgXzA6IGludGVydmFsLCBfMTogX3AxOC5fMH0sXG5cdFx0XHRcdFx0XzE6IF9wMTguXzEsXG5cdFx0XHRcdFx0XzI6IF9wMTguXzJcblx0XHRcdFx0fTtcblx0XHRcdH0pO1xuXHRcdHZhciBuZXdUYWdnZXJzID0gQTMoX2VsbV9sYW5nJGNvcmUkTGlzdCRmb2xkbCwgX2VsbV9sYW5nJGNvcmUkVGltZSRhZGRNeVN1YiwgX2VsbV9sYW5nJGNvcmUkRGljdCRlbXB0eSwgc3Vicyk7XG5cdFx0dmFyIF9wMTkgPSBBNihcblx0XHRcdF9lbG1fbGFuZyRjb3JlJERpY3QkbWVyZ2UsXG5cdFx0XHRsZWZ0U3RlcCxcblx0XHRcdGJvdGhTdGVwLFxuXHRcdFx0cmlnaHRTdGVwLFxuXHRcdFx0bmV3VGFnZ2Vycyxcblx0XHRcdF9wMTAucHJvY2Vzc2VzLFxuXHRcdFx0e1xuXHRcdFx0XHRjdG9yOiAnX1R1cGxlMycsXG5cdFx0XHRcdF8wOiB7Y3RvcjogJ1tdJ30sXG5cdFx0XHRcdF8xOiBfZWxtX2xhbmckY29yZSREaWN0JGVtcHR5LFxuXHRcdFx0XHRfMjogX2VsbV9sYW5nJGNvcmUkVGFzayRzdWNjZWVkKFxuXHRcdFx0XHRcdHtjdG9yOiAnX1R1cGxlMCd9KVxuXHRcdFx0fSk7XG5cdFx0dmFyIHNwYXduTGlzdCA9IF9wMTkuXzA7XG5cdFx0dmFyIGV4aXN0aW5nRGljdCA9IF9wMTkuXzE7XG5cdFx0dmFyIGtpbGxUYXNrID0gX3AxOS5fMjtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRfZWxtX2xhbmckY29yZSRUYXNrJGFuZFRoZW4sXG5cdFx0XHRmdW5jdGlvbiAobmV3UHJvY2Vzc2VzKSB7XG5cdFx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRUYXNrJHN1Y2NlZWQoXG5cdFx0XHRcdFx0QTIoX2VsbV9sYW5nJGNvcmUkVGltZSRTdGF0ZSwgbmV3VGFnZ2VycywgbmV3UHJvY2Vzc2VzKSk7XG5cdFx0XHR9LFxuXHRcdFx0QTIoXG5cdFx0XHRcdF9lbG1fbGFuZyRjb3JlJFRhc2skYW5kVGhlbixcblx0XHRcdFx0ZnVuY3Rpb24gKF9wMjApIHtcblx0XHRcdFx0XHRyZXR1cm4gQTMoX2VsbV9sYW5nJGNvcmUkVGltZSRzcGF3bkhlbHAsIHJvdXRlciwgc3Bhd25MaXN0LCBleGlzdGluZ0RpY3QpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRraWxsVGFzaykpO1xuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSRUaW1lJEV2ZXJ5ID0gRjIoXG5cdGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0cmV0dXJuIHtjdG9yOiAnRXZlcnknLCBfMDogYSwgXzE6IGJ9O1xuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSRUaW1lJGV2ZXJ5ID0gRjIoXG5cdGZ1bmN0aW9uIChpbnRlcnZhbCwgdGFnZ2VyKSB7XG5cdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJFRpbWUkc3Vic2NyaXB0aW9uKFxuXHRcdFx0QTIoX2VsbV9sYW5nJGNvcmUkVGltZSRFdmVyeSwgaW50ZXJ2YWwsIHRhZ2dlcikpO1xuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSRUaW1lJHN1Yk1hcCA9IEYyKFxuXHRmdW5jdGlvbiAoZiwgX3AyMSkge1xuXHRcdHZhciBfcDIyID0gX3AyMTtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRfZWxtX2xhbmckY29yZSRUaW1lJEV2ZXJ5LFxuXHRcdFx0X3AyMi5fMCxcblx0XHRcdGZ1bmN0aW9uIChfcDIzKSB7XG5cdFx0XHRcdHJldHVybiBmKFxuXHRcdFx0XHRcdF9wMjIuXzEoX3AyMykpO1xuXHRcdFx0fSk7XG5cdH0pO1xuX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1BsYXRmb3JtLmVmZmVjdE1hbmFnZXJzWydUaW1lJ10gPSB7cGtnOiAnZWxtLWxhbmcvY29yZScsIGluaXQ6IF9lbG1fbGFuZyRjb3JlJFRpbWUkaW5pdCwgb25FZmZlY3RzOiBfZWxtX2xhbmckY29yZSRUaW1lJG9uRWZmZWN0cywgb25TZWxmTXNnOiBfZWxtX2xhbmckY29yZSRUaW1lJG9uU2VsZk1zZywgdGFnOiAnc3ViJywgc3ViTWFwOiBfZWxtX2xhbmckY29yZSRUaW1lJHN1Yk1hcH07XG5cbnZhciBfZWxtX2xhbmckY29yZSREZWJ1ZyRjcmFzaCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9EZWJ1Zy5jcmFzaDtcbnZhciBfZWxtX2xhbmckY29yZSREZWJ1ZyRsb2cgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfRGVidWcubG9nO1xuXG4vL2ltcG9ydCBNYXliZSwgTmF0aXZlLkFycmF5LCBOYXRpdmUuTGlzdCwgTmF0aXZlLlV0aWxzLCBSZXN1bHQgLy9cblxudmFyIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9Kc29uID0gZnVuY3Rpb24oKSB7XG5cblxuLy8gQ09SRSBERUNPREVSU1xuXG5mdW5jdGlvbiBzdWNjZWVkKG1zZylcbntcblx0cmV0dXJuIHtcblx0XHRjdG9yOiAnPGRlY29kZXI+Jyxcblx0XHR0YWc6ICdzdWNjZWVkJyxcblx0XHRtc2c6IG1zZ1xuXHR9O1xufVxuXG5mdW5jdGlvbiBmYWlsKG1zZylcbntcblx0cmV0dXJuIHtcblx0XHRjdG9yOiAnPGRlY29kZXI+Jyxcblx0XHR0YWc6ICdmYWlsJyxcblx0XHRtc2c6IG1zZ1xuXHR9O1xufVxuXG5mdW5jdGlvbiBkZWNvZGVQcmltaXRpdmUodGFnKVxue1xuXHRyZXR1cm4ge1xuXHRcdGN0b3I6ICc8ZGVjb2Rlcj4nLFxuXHRcdHRhZzogdGFnXG5cdH07XG59XG5cbmZ1bmN0aW9uIGRlY29kZUNvbnRhaW5lcih0YWcsIGRlY29kZXIpXG57XG5cdHJldHVybiB7XG5cdFx0Y3RvcjogJzxkZWNvZGVyPicsXG5cdFx0dGFnOiB0YWcsXG5cdFx0ZGVjb2RlcjogZGVjb2RlclxuXHR9O1xufVxuXG5mdW5jdGlvbiBkZWNvZGVOdWxsKHZhbHVlKVxue1xuXHRyZXR1cm4ge1xuXHRcdGN0b3I6ICc8ZGVjb2Rlcj4nLFxuXHRcdHRhZzogJ251bGwnLFxuXHRcdHZhbHVlOiB2YWx1ZVxuXHR9O1xufVxuXG5mdW5jdGlvbiBkZWNvZGVGaWVsZChmaWVsZCwgZGVjb2Rlcilcbntcblx0cmV0dXJuIHtcblx0XHRjdG9yOiAnPGRlY29kZXI+Jyxcblx0XHR0YWc6ICdmaWVsZCcsXG5cdFx0ZmllbGQ6IGZpZWxkLFxuXHRcdGRlY29kZXI6IGRlY29kZXJcblx0fTtcbn1cblxuZnVuY3Rpb24gZGVjb2RlSW5kZXgoaW5kZXgsIGRlY29kZXIpXG57XG5cdHJldHVybiB7XG5cdFx0Y3RvcjogJzxkZWNvZGVyPicsXG5cdFx0dGFnOiAnaW5kZXgnLFxuXHRcdGluZGV4OiBpbmRleCxcblx0XHRkZWNvZGVyOiBkZWNvZGVyXG5cdH07XG59XG5cbmZ1bmN0aW9uIGRlY29kZUtleVZhbHVlUGFpcnMoZGVjb2Rlcilcbntcblx0cmV0dXJuIHtcblx0XHRjdG9yOiAnPGRlY29kZXI+Jyxcblx0XHR0YWc6ICdrZXktdmFsdWUnLFxuXHRcdGRlY29kZXI6IGRlY29kZXJcblx0fTtcbn1cblxuZnVuY3Rpb24gbWFwTWFueShmLCBkZWNvZGVycylcbntcblx0cmV0dXJuIHtcblx0XHRjdG9yOiAnPGRlY29kZXI+Jyxcblx0XHR0YWc6ICdtYXAtbWFueScsXG5cdFx0ZnVuYzogZixcblx0XHRkZWNvZGVyczogZGVjb2RlcnNcblx0fTtcbn1cblxuZnVuY3Rpb24gYW5kVGhlbihjYWxsYmFjaywgZGVjb2Rlcilcbntcblx0cmV0dXJuIHtcblx0XHRjdG9yOiAnPGRlY29kZXI+Jyxcblx0XHR0YWc6ICdhbmRUaGVuJyxcblx0XHRkZWNvZGVyOiBkZWNvZGVyLFxuXHRcdGNhbGxiYWNrOiBjYWxsYmFja1xuXHR9O1xufVxuXG5mdW5jdGlvbiBvbmVPZihkZWNvZGVycylcbntcblx0cmV0dXJuIHtcblx0XHRjdG9yOiAnPGRlY29kZXI+Jyxcblx0XHR0YWc6ICdvbmVPZicsXG5cdFx0ZGVjb2RlcnM6IGRlY29kZXJzXG5cdH07XG59XG5cblxuLy8gREVDT0RJTkcgT0JKRUNUU1xuXG5mdW5jdGlvbiBtYXAxKGYsIGQxKVxue1xuXHRyZXR1cm4gbWFwTWFueShmLCBbZDFdKTtcbn1cblxuZnVuY3Rpb24gbWFwMihmLCBkMSwgZDIpXG57XG5cdHJldHVybiBtYXBNYW55KGYsIFtkMSwgZDJdKTtcbn1cblxuZnVuY3Rpb24gbWFwMyhmLCBkMSwgZDIsIGQzKVxue1xuXHRyZXR1cm4gbWFwTWFueShmLCBbZDEsIGQyLCBkM10pO1xufVxuXG5mdW5jdGlvbiBtYXA0KGYsIGQxLCBkMiwgZDMsIGQ0KVxue1xuXHRyZXR1cm4gbWFwTWFueShmLCBbZDEsIGQyLCBkMywgZDRdKTtcbn1cblxuZnVuY3Rpb24gbWFwNShmLCBkMSwgZDIsIGQzLCBkNCwgZDUpXG57XG5cdHJldHVybiBtYXBNYW55KGYsIFtkMSwgZDIsIGQzLCBkNCwgZDVdKTtcbn1cblxuZnVuY3Rpb24gbWFwNihmLCBkMSwgZDIsIGQzLCBkNCwgZDUsIGQ2KVxue1xuXHRyZXR1cm4gbWFwTWFueShmLCBbZDEsIGQyLCBkMywgZDQsIGQ1LCBkNl0pO1xufVxuXG5mdW5jdGlvbiBtYXA3KGYsIGQxLCBkMiwgZDMsIGQ0LCBkNSwgZDYsIGQ3KVxue1xuXHRyZXR1cm4gbWFwTWFueShmLCBbZDEsIGQyLCBkMywgZDQsIGQ1LCBkNiwgZDddKTtcbn1cblxuZnVuY3Rpb24gbWFwOChmLCBkMSwgZDIsIGQzLCBkNCwgZDUsIGQ2LCBkNywgZDgpXG57XG5cdHJldHVybiBtYXBNYW55KGYsIFtkMSwgZDIsIGQzLCBkNCwgZDUsIGQ2LCBkNywgZDhdKTtcbn1cblxuXG4vLyBERUNPREUgSEVMUEVSU1xuXG5mdW5jdGlvbiBvayh2YWx1ZSlcbntcblx0cmV0dXJuIHsgdGFnOiAnb2snLCB2YWx1ZTogdmFsdWUgfTtcbn1cblxuZnVuY3Rpb24gYmFkUHJpbWl0aXZlKHR5cGUsIHZhbHVlKVxue1xuXHRyZXR1cm4geyB0YWc6ICdwcmltaXRpdmUnLCB0eXBlOiB0eXBlLCB2YWx1ZTogdmFsdWUgfTtcbn1cblxuZnVuY3Rpb24gYmFkSW5kZXgoaW5kZXgsIG5lc3RlZFByb2JsZW1zKVxue1xuXHRyZXR1cm4geyB0YWc6ICdpbmRleCcsIGluZGV4OiBpbmRleCwgcmVzdDogbmVzdGVkUHJvYmxlbXMgfTtcbn1cblxuZnVuY3Rpb24gYmFkRmllbGQoZmllbGQsIG5lc3RlZFByb2JsZW1zKVxue1xuXHRyZXR1cm4geyB0YWc6ICdmaWVsZCcsIGZpZWxkOiBmaWVsZCwgcmVzdDogbmVzdGVkUHJvYmxlbXMgfTtcbn1cblxuZnVuY3Rpb24gYmFkSW5kZXgoaW5kZXgsIG5lc3RlZFByb2JsZW1zKVxue1xuXHRyZXR1cm4geyB0YWc6ICdpbmRleCcsIGluZGV4OiBpbmRleCwgcmVzdDogbmVzdGVkUHJvYmxlbXMgfTtcbn1cblxuZnVuY3Rpb24gYmFkT25lT2YocHJvYmxlbXMpXG57XG5cdHJldHVybiB7IHRhZzogJ29uZU9mJywgcHJvYmxlbXM6IHByb2JsZW1zIH07XG59XG5cbmZ1bmN0aW9uIGJhZChtc2cpXG57XG5cdHJldHVybiB7IHRhZzogJ2ZhaWwnLCBtc2c6IG1zZyB9O1xufVxuXG5mdW5jdGlvbiBiYWRUb1N0cmluZyhwcm9ibGVtKVxue1xuXHR2YXIgY29udGV4dCA9ICdfJztcblx0d2hpbGUgKHByb2JsZW0pXG5cdHtcblx0XHRzd2l0Y2ggKHByb2JsZW0udGFnKVxuXHRcdHtcblx0XHRcdGNhc2UgJ3ByaW1pdGl2ZSc6XG5cdFx0XHRcdHJldHVybiAnRXhwZWN0aW5nICcgKyBwcm9ibGVtLnR5cGVcblx0XHRcdFx0XHQrIChjb250ZXh0ID09PSAnXycgPyAnJyA6ICcgYXQgJyArIGNvbnRleHQpXG5cdFx0XHRcdFx0KyAnIGJ1dCBpbnN0ZWFkIGdvdDogJyArIGpzVG9TdHJpbmcocHJvYmxlbS52YWx1ZSk7XG5cblx0XHRcdGNhc2UgJ2luZGV4Jzpcblx0XHRcdFx0Y29udGV4dCArPSAnWycgKyBwcm9ibGVtLmluZGV4ICsgJ10nO1xuXHRcdFx0XHRwcm9ibGVtID0gcHJvYmxlbS5yZXN0O1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnZmllbGQnOlxuXHRcdFx0XHRjb250ZXh0ICs9ICcuJyArIHByb2JsZW0uZmllbGQ7XG5cdFx0XHRcdHByb2JsZW0gPSBwcm9ibGVtLnJlc3Q7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdvbmVPZic6XG5cdFx0XHRcdHZhciBwcm9ibGVtcyA9IHByb2JsZW0ucHJvYmxlbXM7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcHJvYmxlbXMubGVuZ3RoOyBpKyspXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwcm9ibGVtc1tpXSA9IGJhZFRvU3RyaW5nKHByb2JsZW1zW2ldKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gJ0kgcmFuIGludG8gdGhlIGZvbGxvd2luZyBwcm9ibGVtcydcblx0XHRcdFx0XHQrIChjb250ZXh0ID09PSAnXycgPyAnJyA6ICcgYXQgJyArIGNvbnRleHQpXG5cdFx0XHRcdFx0KyAnOlxcblxcbicgKyBwcm9ibGVtcy5qb2luKCdcXG4nKTtcblxuXHRcdFx0Y2FzZSAnZmFpbCc6XG5cdFx0XHRcdHJldHVybiAnSSByYW4gaW50byBhIGBmYWlsYCBkZWNvZGVyJ1xuXHRcdFx0XHRcdCsgKGNvbnRleHQgPT09ICdfJyA/ICcnIDogJyBhdCAnICsgY29udGV4dClcblx0XHRcdFx0XHQrICc6ICcgKyBwcm9ibGVtLm1zZztcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24ganNUb1N0cmluZyh2YWx1ZSlcbntcblx0cmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWRcblx0XHQ/ICd1bmRlZmluZWQnXG5cdFx0OiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG59XG5cblxuLy8gREVDT0RFXG5cbmZ1bmN0aW9uIHJ1bk9uU3RyaW5nKGRlY29kZXIsIHN0cmluZylcbntcblx0dmFyIGpzb247XG5cdHRyeVxuXHR7XG5cdFx0anNvbiA9IEpTT04ucGFyc2Uoc3RyaW5nKTtcblx0fVxuXHRjYXRjaCAoZSlcblx0e1xuXHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRSZXN1bHQkRXJyKCdHaXZlbiBhbiBpbnZhbGlkIEpTT046ICcgKyBlLm1lc3NhZ2UpO1xuXHR9XG5cdHJldHVybiBydW4oZGVjb2RlciwganNvbik7XG59XG5cbmZ1bmN0aW9uIHJ1bihkZWNvZGVyLCB2YWx1ZSlcbntcblx0dmFyIHJlc3VsdCA9IHJ1bkhlbHAoZGVjb2RlciwgdmFsdWUpO1xuXHRyZXR1cm4gKHJlc3VsdC50YWcgPT09ICdvaycpXG5cdFx0PyBfZWxtX2xhbmckY29yZSRSZXN1bHQkT2socmVzdWx0LnZhbHVlKVxuXHRcdDogX2VsbV9sYW5nJGNvcmUkUmVzdWx0JEVycihiYWRUb1N0cmluZyhyZXN1bHQpKTtcbn1cblxuZnVuY3Rpb24gcnVuSGVscChkZWNvZGVyLCB2YWx1ZSlcbntcblx0c3dpdGNoIChkZWNvZGVyLnRhZylcblx0e1xuXHRcdGNhc2UgJ2Jvb2wnOlxuXHRcdFx0cmV0dXJuICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJylcblx0XHRcdFx0PyBvayh2YWx1ZSlcblx0XHRcdFx0OiBiYWRQcmltaXRpdmUoJ2EgQm9vbCcsIHZhbHVlKTtcblxuXHRcdGNhc2UgJ2ludCc6XG5cdFx0XHRpZiAodHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJykge1xuXHRcdFx0XHRyZXR1cm4gYmFkUHJpbWl0aXZlKCdhbiBJbnQnLCB2YWx1ZSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICgtMjE0NzQ4MzY0NyA8IHZhbHVlICYmIHZhbHVlIDwgMjE0NzQ4MzY0NyAmJiAodmFsdWUgfCAwKSA9PT0gdmFsdWUpIHtcblx0XHRcdFx0cmV0dXJuIG9rKHZhbHVlKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGlzRmluaXRlKHZhbHVlKSAmJiAhKHZhbHVlICUgMSkpIHtcblx0XHRcdFx0cmV0dXJuIG9rKHZhbHVlKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGJhZFByaW1pdGl2ZSgnYW4gSW50JywgdmFsdWUpO1xuXG5cdFx0Y2FzZSAnZmxvYXQnOlxuXHRcdFx0cmV0dXJuICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKVxuXHRcdFx0XHQ/IG9rKHZhbHVlKVxuXHRcdFx0XHQ6IGJhZFByaW1pdGl2ZSgnYSBGbG9hdCcsIHZhbHVlKTtcblxuXHRcdGNhc2UgJ3N0cmluZyc6XG5cdFx0XHRyZXR1cm4gKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpXG5cdFx0XHRcdD8gb2sodmFsdWUpXG5cdFx0XHRcdDogKHZhbHVlIGluc3RhbmNlb2YgU3RyaW5nKVxuXHRcdFx0XHRcdD8gb2sodmFsdWUgKyAnJylcblx0XHRcdFx0XHQ6IGJhZFByaW1pdGl2ZSgnYSBTdHJpbmcnLCB2YWx1ZSk7XG5cblx0XHRjYXNlICdudWxsJzpcblx0XHRcdHJldHVybiAodmFsdWUgPT09IG51bGwpXG5cdFx0XHRcdD8gb2soZGVjb2Rlci52YWx1ZSlcblx0XHRcdFx0OiBiYWRQcmltaXRpdmUoJ251bGwnLCB2YWx1ZSk7XG5cblx0XHRjYXNlICd2YWx1ZSc6XG5cdFx0XHRyZXR1cm4gb2sodmFsdWUpO1xuXG5cdFx0Y2FzZSAnbGlzdCc6XG5cdFx0XHRpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSlcblx0XHRcdHtcblx0XHRcdFx0cmV0dXJuIGJhZFByaW1pdGl2ZSgnYSBMaXN0JywgdmFsdWUpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgbGlzdCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0Lk5pbDtcblx0XHRcdGZvciAodmFyIGkgPSB2YWx1ZS5sZW5ndGg7IGktLTsgKVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgcmVzdWx0ID0gcnVuSGVscChkZWNvZGVyLmRlY29kZXIsIHZhbHVlW2ldKTtcblx0XHRcdFx0aWYgKHJlc3VsdC50YWcgIT09ICdvaycpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRyZXR1cm4gYmFkSW5kZXgoaSwgcmVzdWx0KVxuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5Db25zKHJlc3VsdC52YWx1ZSwgbGlzdCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gb2sobGlzdCk7XG5cblx0XHRjYXNlICdhcnJheSc6XG5cdFx0XHRpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSlcblx0XHRcdHtcblx0XHRcdFx0cmV0dXJuIGJhZFByaW1pdGl2ZSgnYW4gQXJyYXknLCB2YWx1ZSk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBsZW4gPSB2YWx1ZS5sZW5ndGg7XG5cdFx0XHR2YXIgYXJyYXkgPSBuZXcgQXJyYXkobGVuKTtcblx0XHRcdGZvciAodmFyIGkgPSBsZW47IGktLTsgKVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgcmVzdWx0ID0gcnVuSGVscChkZWNvZGVyLmRlY29kZXIsIHZhbHVlW2ldKTtcblx0XHRcdFx0aWYgKHJlc3VsdC50YWcgIT09ICdvaycpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRyZXR1cm4gYmFkSW5kZXgoaSwgcmVzdWx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRhcnJheVtpXSA9IHJlc3VsdC52YWx1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBvayhfZWxtX2xhbmckY29yZSROYXRpdmVfQXJyYXkuZnJvbUpTQXJyYXkoYXJyYXkpKTtcblxuXHRcdGNhc2UgJ21heWJlJzpcblx0XHRcdHZhciByZXN1bHQgPSBydW5IZWxwKGRlY29kZXIuZGVjb2RlciwgdmFsdWUpO1xuXHRcdFx0cmV0dXJuIChyZXN1bHQudGFnID09PSAnb2snKVxuXHRcdFx0XHQ/IG9rKF9lbG1fbGFuZyRjb3JlJE1heWJlJEp1c3QocmVzdWx0LnZhbHVlKSlcblx0XHRcdFx0OiBvayhfZWxtX2xhbmckY29yZSRNYXliZSROb3RoaW5nKTtcblxuXHRcdGNhc2UgJ2ZpZWxkJzpcblx0XHRcdHZhciBmaWVsZCA9IGRlY29kZXIuZmllbGQ7XG5cdFx0XHRpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCB8fCAhKGZpZWxkIGluIHZhbHVlKSlcblx0XHRcdHtcblx0XHRcdFx0cmV0dXJuIGJhZFByaW1pdGl2ZSgnYW4gb2JqZWN0IHdpdGggYSBmaWVsZCBuYW1lZCBgJyArIGZpZWxkICsgJ2AnLCB2YWx1ZSk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciByZXN1bHQgPSBydW5IZWxwKGRlY29kZXIuZGVjb2RlciwgdmFsdWVbZmllbGRdKTtcblx0XHRcdHJldHVybiAocmVzdWx0LnRhZyA9PT0gJ29rJykgPyByZXN1bHQgOiBiYWRGaWVsZChmaWVsZCwgcmVzdWx0KTtcblxuXHRcdGNhc2UgJ2luZGV4Jzpcblx0XHRcdHZhciBpbmRleCA9IGRlY29kZXIuaW5kZXg7XG5cdFx0XHRpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSlcblx0XHRcdHtcblx0XHRcdFx0cmV0dXJuIGJhZFByaW1pdGl2ZSgnYW4gYXJyYXknLCB2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoaW5kZXggPj0gdmFsdWUubGVuZ3RoKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXR1cm4gYmFkUHJpbWl0aXZlKCdhIGxvbmdlciBhcnJheS4gTmVlZCBpbmRleCAnICsgaW5kZXggKyAnIGJ1dCB0aGVyZSBhcmUgb25seSAnICsgdmFsdWUubGVuZ3RoICsgJyBlbnRyaWVzJywgdmFsdWUpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgcmVzdWx0ID0gcnVuSGVscChkZWNvZGVyLmRlY29kZXIsIHZhbHVlW2luZGV4XSk7XG5cdFx0XHRyZXR1cm4gKHJlc3VsdC50YWcgPT09ICdvaycpID8gcmVzdWx0IDogYmFkSW5kZXgoaW5kZXgsIHJlc3VsdCk7XG5cblx0XHRjYXNlICdrZXktdmFsdWUnOlxuXHRcdFx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcgfHwgdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgaW5zdGFuY2VvZiBBcnJheSlcblx0XHRcdHtcblx0XHRcdFx0cmV0dXJuIGJhZFByaW1pdGl2ZSgnYW4gb2JqZWN0JywgdmFsdWUpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIga2V5VmFsdWVQYWlycyA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0Lk5pbDtcblx0XHRcdGZvciAodmFyIGtleSBpbiB2YWx1ZSlcblx0XHRcdHtcblx0XHRcdFx0dmFyIHJlc3VsdCA9IHJ1bkhlbHAoZGVjb2Rlci5kZWNvZGVyLCB2YWx1ZVtrZXldKTtcblx0XHRcdFx0aWYgKHJlc3VsdC50YWcgIT09ICdvaycpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRyZXR1cm4gYmFkRmllbGQoa2V5LCByZXN1bHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciBwYWlyID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLlR1cGxlMihrZXksIHJlc3VsdC52YWx1ZSk7XG5cdFx0XHRcdGtleVZhbHVlUGFpcnMgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfTGlzdC5Db25zKHBhaXIsIGtleVZhbHVlUGFpcnMpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG9rKGtleVZhbHVlUGFpcnMpO1xuXG5cdFx0Y2FzZSAnbWFwLW1hbnknOlxuXHRcdFx0dmFyIGFuc3dlciA9IGRlY29kZXIuZnVuYztcblx0XHRcdHZhciBkZWNvZGVycyA9IGRlY29kZXIuZGVjb2RlcnM7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlY29kZXJzLmxlbmd0aDsgaSsrKVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgcmVzdWx0ID0gcnVuSGVscChkZWNvZGVyc1tpXSwgdmFsdWUpO1xuXHRcdFx0XHRpZiAocmVzdWx0LnRhZyAhPT0gJ29rJylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0YW5zd2VyID0gYW5zd2VyKHJlc3VsdC52YWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gb2soYW5zd2VyKTtcblxuXHRcdGNhc2UgJ2FuZFRoZW4nOlxuXHRcdFx0dmFyIHJlc3VsdCA9IHJ1bkhlbHAoZGVjb2Rlci5kZWNvZGVyLCB2YWx1ZSk7XG5cdFx0XHRyZXR1cm4gKHJlc3VsdC50YWcgIT09ICdvaycpXG5cdFx0XHRcdD8gcmVzdWx0XG5cdFx0XHRcdDogcnVuSGVscChkZWNvZGVyLmNhbGxiYWNrKHJlc3VsdC52YWx1ZSksIHZhbHVlKTtcblxuXHRcdGNhc2UgJ29uZU9mJzpcblx0XHRcdHZhciBlcnJvcnMgPSBbXTtcblx0XHRcdHZhciB0ZW1wID0gZGVjb2Rlci5kZWNvZGVycztcblx0XHRcdHdoaWxlICh0ZW1wLmN0b3IgIT09ICdbXScpXG5cdFx0XHR7XG5cdFx0XHRcdHZhciByZXN1bHQgPSBydW5IZWxwKHRlbXAuXzAsIHZhbHVlKTtcblxuXHRcdFx0XHRpZiAocmVzdWx0LnRhZyA9PT0gJ29rJylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRlcnJvcnMucHVzaChyZXN1bHQpO1xuXG5cdFx0XHRcdHRlbXAgPSB0ZW1wLl8xO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGJhZE9uZU9mKGVycm9ycyk7XG5cblx0XHRjYXNlICdmYWlsJzpcblx0XHRcdHJldHVybiBiYWQoZGVjb2Rlci5tc2cpO1xuXG5cdFx0Y2FzZSAnc3VjY2VlZCc6XG5cdFx0XHRyZXR1cm4gb2soZGVjb2Rlci5tc2cpO1xuXHR9XG59XG5cblxuLy8gRVFVQUxJVFlcblxuZnVuY3Rpb24gZXF1YWxpdHkoYSwgYilcbntcblx0aWYgKGEgPT09IGIpXG5cdHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGlmIChhLnRhZyAhPT0gYi50YWcpXG5cdHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRzd2l0Y2ggKGEudGFnKVxuXHR7XG5cdFx0Y2FzZSAnc3VjY2VlZCc6XG5cdFx0Y2FzZSAnZmFpbCc6XG5cdFx0XHRyZXR1cm4gYS5tc2cgPT09IGIubXNnO1xuXG5cdFx0Y2FzZSAnYm9vbCc6XG5cdFx0Y2FzZSAnaW50Jzpcblx0XHRjYXNlICdmbG9hdCc6XG5cdFx0Y2FzZSAnc3RyaW5nJzpcblx0XHRjYXNlICd2YWx1ZSc6XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblxuXHRcdGNhc2UgJ251bGwnOlxuXHRcdFx0cmV0dXJuIGEudmFsdWUgPT09IGIudmFsdWU7XG5cblx0XHRjYXNlICdsaXN0Jzpcblx0XHRjYXNlICdhcnJheSc6XG5cdFx0Y2FzZSAnbWF5YmUnOlxuXHRcdGNhc2UgJ2tleS12YWx1ZSc6XG5cdFx0XHRyZXR1cm4gZXF1YWxpdHkoYS5kZWNvZGVyLCBiLmRlY29kZXIpO1xuXG5cdFx0Y2FzZSAnZmllbGQnOlxuXHRcdFx0cmV0dXJuIGEuZmllbGQgPT09IGIuZmllbGQgJiYgZXF1YWxpdHkoYS5kZWNvZGVyLCBiLmRlY29kZXIpO1xuXG5cdFx0Y2FzZSAnaW5kZXgnOlxuXHRcdFx0cmV0dXJuIGEuaW5kZXggPT09IGIuaW5kZXggJiYgZXF1YWxpdHkoYS5kZWNvZGVyLCBiLmRlY29kZXIpO1xuXG5cdFx0Y2FzZSAnbWFwLW1hbnknOlxuXHRcdFx0aWYgKGEuZnVuYyAhPT0gYi5mdW5jKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbGlzdEVxdWFsaXR5KGEuZGVjb2RlcnMsIGIuZGVjb2RlcnMpO1xuXG5cdFx0Y2FzZSAnYW5kVGhlbic6XG5cdFx0XHRyZXR1cm4gYS5jYWxsYmFjayA9PT0gYi5jYWxsYmFjayAmJiBlcXVhbGl0eShhLmRlY29kZXIsIGIuZGVjb2Rlcik7XG5cblx0XHRjYXNlICdvbmVPZic6XG5cdFx0XHRyZXR1cm4gbGlzdEVxdWFsaXR5KGEuZGVjb2RlcnMsIGIuZGVjb2RlcnMpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RFcXVhbGl0eShhRGVjb2RlcnMsIGJEZWNvZGVycylcbntcblx0dmFyIGxlbiA9IGFEZWNvZGVycy5sZW5ndGg7XG5cdGlmIChsZW4gIT09IGJEZWNvZGVycy5sZW5ndGgpXG5cdHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKylcblx0e1xuXHRcdGlmICghZXF1YWxpdHkoYURlY29kZXJzW2ldLCBiRGVjb2RlcnNbaV0pKVxuXHRcdHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRydWU7XG59XG5cblxuLy8gRU5DT0RFXG5cbmZ1bmN0aW9uIGVuY29kZShpbmRlbnRMZXZlbCwgdmFsdWUpXG57XG5cdHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSwgbnVsbCwgaW5kZW50TGV2ZWwpO1xufVxuXG5mdW5jdGlvbiBpZGVudGl0eSh2YWx1ZSlcbntcblx0cmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBlbmNvZGVPYmplY3Qoa2V5VmFsdWVQYWlycylcbntcblx0dmFyIG9iaiA9IHt9O1xuXHR3aGlsZSAoa2V5VmFsdWVQYWlycy5jdG9yICE9PSAnW10nKVxuXHR7XG5cdFx0dmFyIHBhaXIgPSBrZXlWYWx1ZVBhaXJzLl8wO1xuXHRcdG9ialtwYWlyLl8wXSA9IHBhaXIuXzE7XG5cdFx0a2V5VmFsdWVQYWlycyA9IGtleVZhbHVlUGFpcnMuXzE7XG5cdH1cblx0cmV0dXJuIG9iajtcbn1cblxucmV0dXJuIHtcblx0ZW5jb2RlOiBGMihlbmNvZGUpLFxuXHRydW5PblN0cmluZzogRjIocnVuT25TdHJpbmcpLFxuXHRydW46IEYyKHJ1biksXG5cblx0ZGVjb2RlTnVsbDogZGVjb2RlTnVsbCxcblx0ZGVjb2RlUHJpbWl0aXZlOiBkZWNvZGVQcmltaXRpdmUsXG5cdGRlY29kZUNvbnRhaW5lcjogRjIoZGVjb2RlQ29udGFpbmVyKSxcblxuXHRkZWNvZGVGaWVsZDogRjIoZGVjb2RlRmllbGQpLFxuXHRkZWNvZGVJbmRleDogRjIoZGVjb2RlSW5kZXgpLFxuXG5cdG1hcDE6IEYyKG1hcDEpLFxuXHRtYXAyOiBGMyhtYXAyKSxcblx0bWFwMzogRjQobWFwMyksXG5cdG1hcDQ6IEY1KG1hcDQpLFxuXHRtYXA1OiBGNihtYXA1KSxcblx0bWFwNjogRjcobWFwNiksXG5cdG1hcDc6IEY4KG1hcDcpLFxuXHRtYXA4OiBGOShtYXA4KSxcblx0ZGVjb2RlS2V5VmFsdWVQYWlyczogZGVjb2RlS2V5VmFsdWVQYWlycyxcblxuXHRhbmRUaGVuOiBGMihhbmRUaGVuKSxcblx0ZmFpbDogZmFpbCxcblx0c3VjY2VlZDogc3VjY2VlZCxcblx0b25lT2Y6IG9uZU9mLFxuXG5cdGlkZW50aXR5OiBpZGVudGl0eSxcblx0ZW5jb2RlTnVsbDogbnVsbCxcblx0ZW5jb2RlQXJyYXk6IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9BcnJheS50b0pTQXJyYXksXG5cdGVuY29kZUxpc3Q6IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9MaXN0LnRvQXJyYXksXG5cdGVuY29kZU9iamVjdDogZW5jb2RlT2JqZWN0LFxuXG5cdGVxdWFsaXR5OiBlcXVhbGl0eVxufTtcblxufSgpO1xuXG52YXIgX2VsbV9sYW5nJGNvcmUkSnNvbl9FbmNvZGUkbGlzdCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9Kc29uLmVuY29kZUxpc3Q7XG52YXIgX2VsbV9sYW5nJGNvcmUkSnNvbl9FbmNvZGUkYXJyYXkgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfSnNvbi5lbmNvZGVBcnJheTtcbnZhciBfZWxtX2xhbmckY29yZSRKc29uX0VuY29kZSRvYmplY3QgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfSnNvbi5lbmNvZGVPYmplY3Q7XG52YXIgX2VsbV9sYW5nJGNvcmUkSnNvbl9FbmNvZGUkbnVsbCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9Kc29uLmVuY29kZU51bGw7XG52YXIgX2VsbV9sYW5nJGNvcmUkSnNvbl9FbmNvZGUkYm9vbCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9Kc29uLmlkZW50aXR5O1xudmFyIF9lbG1fbGFuZyRjb3JlJEpzb25fRW5jb2RlJGZsb2F0ID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0pzb24uaWRlbnRpdHk7XG52YXIgX2VsbV9sYW5nJGNvcmUkSnNvbl9FbmNvZGUkaW50ID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0pzb24uaWRlbnRpdHk7XG52YXIgX2VsbV9sYW5nJGNvcmUkSnNvbl9FbmNvZGUkc3RyaW5nID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0pzb24uaWRlbnRpdHk7XG52YXIgX2VsbV9sYW5nJGNvcmUkSnNvbl9FbmNvZGUkZW5jb2RlID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0pzb24uZW5jb2RlO1xudmFyIF9lbG1fbGFuZyRjb3JlJEpzb25fRW5jb2RlJFZhbHVlID0ge2N0b3I6ICdWYWx1ZSd9O1xuXG52YXIgX2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkbnVsbCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9Kc29uLmRlY29kZU51bGw7XG52YXIgX2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkdmFsdWUgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfSnNvbi5kZWNvZGVQcmltaXRpdmUoJ3ZhbHVlJyk7XG52YXIgX2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkYW5kVGhlbiA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9Kc29uLmFuZFRoZW47XG52YXIgX2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkZmFpbCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9Kc29uLmZhaWw7XG52YXIgX2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkc3VjY2VlZCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9Kc29uLnN1Y2NlZWQ7XG52YXIgX2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkbGF6eSA9IGZ1bmN0aW9uICh0aHVuaykge1xuXHRyZXR1cm4gQTIoXG5cdFx0X2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkYW5kVGhlbixcblx0XHR0aHVuayxcblx0XHRfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZSRzdWNjZWVkKFxuXHRcdFx0e2N0b3I6ICdfVHVwbGUwJ30pKTtcbn07XG52YXIgX2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkZGVjb2RlVmFsdWUgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfSnNvbi5ydW47XG52YXIgX2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkZGVjb2RlU3RyaW5nID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0pzb24ucnVuT25TdHJpbmc7XG52YXIgX2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkbWFwOCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9Kc29uLm1hcDg7XG52YXIgX2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkbWFwNyA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9Kc29uLm1hcDc7XG52YXIgX2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkbWFwNiA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9Kc29uLm1hcDY7XG52YXIgX2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkbWFwNSA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9Kc29uLm1hcDU7XG52YXIgX2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkbWFwNCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9Kc29uLm1hcDQ7XG52YXIgX2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkbWFwMyA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9Kc29uLm1hcDM7XG52YXIgX2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkbWFwMiA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9Kc29uLm1hcDI7XG52YXIgX2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkbWFwID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0pzb24ubWFwMTtcbnZhciBfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZSRvbmVPZiA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9Kc29uLm9uZU9mO1xudmFyIF9lbG1fbGFuZyRjb3JlJEpzb25fRGVjb2RlJG1heWJlID0gZnVuY3Rpb24gKGRlY29kZXIpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9Kc29uLmRlY29kZUNvbnRhaW5lciwgJ21heWJlJywgZGVjb2Rlcik7XG59O1xudmFyIF9lbG1fbGFuZyRjb3JlJEpzb25fRGVjb2RlJGluZGV4ID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0pzb24uZGVjb2RlSW5kZXg7XG52YXIgX2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkZmllbGQgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfSnNvbi5kZWNvZGVGaWVsZDtcbnZhciBfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZSRhdCA9IEYyKFxuXHRmdW5jdGlvbiAoZmllbGRzLCBkZWNvZGVyKSB7XG5cdFx0cmV0dXJuIEEzKF9lbG1fbGFuZyRjb3JlJExpc3QkZm9sZHIsIF9lbG1fbGFuZyRjb3JlJEpzb25fRGVjb2RlJGZpZWxkLCBkZWNvZGVyLCBmaWVsZHMpO1xuXHR9KTtcbnZhciBfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZSRrZXlWYWx1ZVBhaXJzID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0pzb24uZGVjb2RlS2V5VmFsdWVQYWlycztcbnZhciBfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZSRkaWN0ID0gZnVuY3Rpb24gKGRlY29kZXIpIHtcblx0cmV0dXJuIEEyKFxuXHRcdF9lbG1fbGFuZyRjb3JlJEpzb25fRGVjb2RlJG1hcCxcblx0XHRfZWxtX2xhbmckY29yZSREaWN0JGZyb21MaXN0LFxuXHRcdF9lbG1fbGFuZyRjb3JlJEpzb25fRGVjb2RlJGtleVZhbHVlUGFpcnMoZGVjb2RlcikpO1xufTtcbnZhciBfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZSRhcnJheSA9IGZ1bmN0aW9uIChkZWNvZGVyKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckY29yZSROYXRpdmVfSnNvbi5kZWNvZGVDb250YWluZXIsICdhcnJheScsIGRlY29kZXIpO1xufTtcbnZhciBfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZSRsaXN0ID0gZnVuY3Rpb24gKGRlY29kZXIpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9Kc29uLmRlY29kZUNvbnRhaW5lciwgJ2xpc3QnLCBkZWNvZGVyKTtcbn07XG52YXIgX2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkbnVsbGFibGUgPSBmdW5jdGlvbiAoZGVjb2Rlcikge1xuXHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkb25lT2YoXG5cdFx0e1xuXHRcdFx0Y3RvcjogJzo6Jyxcblx0XHRcdF8wOiBfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZSRudWxsKF9lbG1fbGFuZyRjb3JlJE1heWJlJE5vdGhpbmcpLFxuXHRcdFx0XzE6IHtcblx0XHRcdFx0Y3RvcjogJzo6Jyxcblx0XHRcdFx0XzA6IEEyKF9lbG1fbGFuZyRjb3JlJEpzb25fRGVjb2RlJG1hcCwgX2VsbV9sYW5nJGNvcmUkTWF5YmUkSnVzdCwgZGVjb2RlciksXG5cdFx0XHRcdF8xOiB7Y3RvcjogJ1tdJ31cblx0XHRcdH1cblx0XHR9KTtcbn07XG52YXIgX2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkZmxvYXQgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfSnNvbi5kZWNvZGVQcmltaXRpdmUoJ2Zsb2F0Jyk7XG52YXIgX2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkaW50ID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0pzb24uZGVjb2RlUHJpbWl0aXZlKCdpbnQnKTtcbnZhciBfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZSRib29sID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0pzb24uZGVjb2RlUHJpbWl0aXZlKCdib29sJyk7XG52YXIgX2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkc3RyaW5nID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0pzb24uZGVjb2RlUHJpbWl0aXZlKCdzdHJpbmcnKTtcbnZhciBfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZSREZWNvZGVyID0ge2N0b3I6ICdEZWNvZGVyJ307XG5cbnZhciBfZWxtX2xhbmckY29yZSRQcm9jZXNzJGtpbGwgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfU2NoZWR1bGVyLmtpbGw7XG52YXIgX2VsbV9sYW5nJGNvcmUkUHJvY2VzcyRzbGVlcCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TY2hlZHVsZXIuc2xlZXA7XG52YXIgX2VsbV9sYW5nJGNvcmUkUHJvY2VzcyRzcGF3biA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TY2hlZHVsZXIuc3Bhd247XG5cbnZhciBfZWxtX2xhbmckY29yZSRUdXBsZSRtYXBTZWNvbmQgPSBGMihcblx0ZnVuY3Rpb24gKGZ1bmMsIF9wMCkge1xuXHRcdHZhciBfcDEgPSBfcDA7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGN0b3I6ICdfVHVwbGUyJyxcblx0XHRcdF8wOiBfcDEuXzAsXG5cdFx0XHRfMTogZnVuYyhfcDEuXzEpXG5cdFx0fTtcblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkVHVwbGUkbWFwRmlyc3QgPSBGMihcblx0ZnVuY3Rpb24gKGZ1bmMsIF9wMikge1xuXHRcdHZhciBfcDMgPSBfcDI7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGN0b3I6ICdfVHVwbGUyJyxcblx0XHRcdF8wOiBmdW5jKF9wMy5fMCksXG5cdFx0XHRfMTogX3AzLl8xXG5cdFx0fTtcblx0fSk7XG52YXIgX2VsbV9sYW5nJGNvcmUkVHVwbGUkc2Vjb25kID0gZnVuY3Rpb24gKF9wNCkge1xuXHR2YXIgX3A1ID0gX3A0O1xuXHRyZXR1cm4gX3A1Ll8xO1xufTtcbnZhciBfZWxtX2xhbmckY29yZSRUdXBsZSRmaXJzdCA9IGZ1bmN0aW9uIChfcDYpIHtcblx0dmFyIF9wNyA9IF9wNjtcblx0cmV0dXJuIF9wNy5fMDtcbn07XG5cbnZhciBfZWxtX2xhbmckZG9tJE5hdGl2ZV9Eb20gPSBmdW5jdGlvbigpIHtcblxudmFyIGZha2VOb2RlID0ge1xuXHRhZGRFdmVudExpc3RlbmVyOiBmdW5jdGlvbigpIHt9LFxuXHRyZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbigpIHt9XG59O1xuXG52YXIgb25Eb2N1bWVudCA9IG9uKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgPyBkb2N1bWVudCA6IGZha2VOb2RlKTtcbnZhciBvbldpbmRvdyA9IG9uKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZmFrZU5vZGUpO1xuXG5mdW5jdGlvbiBvbihub2RlKVxue1xuXHRyZXR1cm4gZnVuY3Rpb24oZXZlbnROYW1lLCBkZWNvZGVyLCB0b1Rhc2spXG5cdHtcblx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1NjaGVkdWxlci5uYXRpdmVCaW5kaW5nKGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cblx0XHRcdGZ1bmN0aW9uIHBlcmZvcm1UYXNrKGV2ZW50KVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgcmVzdWx0ID0gQTIoX2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkZGVjb2RlVmFsdWUsIGRlY29kZXIsIGV2ZW50KTtcblx0XHRcdFx0aWYgKHJlc3VsdC5jdG9yID09PSAnT2snKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX1NjaGVkdWxlci5yYXdTcGF3bih0b1Rhc2socmVzdWx0Ll8wKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgcGVyZm9ybVRhc2spO1xuXG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oKVxuXHRcdFx0e1xuXHRcdFx0XHRub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBwZXJmb3JtVGFzayk7XG5cdFx0XHR9O1xuXHRcdH0pO1xuXHR9O1xufVxuXG52YXIgckFGID0gdHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSAhPT0gJ3VuZGVmaW5lZCdcblx0PyByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcblx0OiBmdW5jdGlvbihjYWxsYmFjaykgeyBjYWxsYmFjaygpOyB9O1xuXG5mdW5jdGlvbiB3aXRoTm9kZShpZCwgZG9TdHVmZilcbntcblx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TY2hlZHVsZXIubmF0aXZlQmluZGluZyhmdW5jdGlvbihjYWxsYmFjaylcblx0e1xuXHRcdHJBRihmdW5jdGlvbigpXG5cdFx0e1xuXHRcdFx0dmFyIG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG5cdFx0XHRpZiAobm9kZSA9PT0gbnVsbClcblx0XHRcdHtcblx0XHRcdFx0Y2FsbGJhY2soX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1NjaGVkdWxlci5mYWlsKHsgY3RvcjogJ05vdEZvdW5kJywgXzA6IGlkIH0pKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y2FsbGJhY2soX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1NjaGVkdWxlci5zdWNjZWVkKGRvU3R1ZmYobm9kZSkpKTtcblx0XHR9KTtcblx0fSk7XG59XG5cblxuLy8gRk9DVVNcblxuZnVuY3Rpb24gZm9jdXMoaWQpXG57XG5cdHJldHVybiB3aXRoTm9kZShpZCwgZnVuY3Rpb24obm9kZSkge1xuXHRcdG5vZGUuZm9jdXMoKTtcblx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLlR1cGxlMDtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGJsdXIoaWQpXG57XG5cdHJldHVybiB3aXRoTm9kZShpZCwgZnVuY3Rpb24obm9kZSkge1xuXHRcdG5vZGUuYmx1cigpO1xuXHRcdHJldHVybiBfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuVHVwbGUwO1xuXHR9KTtcbn1cblxuXG4vLyBTQ1JPTExJTkdcblxuZnVuY3Rpb24gZ2V0U2Nyb2xsVG9wKGlkKVxue1xuXHRyZXR1cm4gd2l0aE5vZGUoaWQsIGZ1bmN0aW9uKG5vZGUpIHtcblx0XHRyZXR1cm4gbm9kZS5zY3JvbGxUb3A7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBzZXRTY3JvbGxUb3AoaWQsIGRlc2lyZWRTY3JvbGxUb3ApXG57XG5cdHJldHVybiB3aXRoTm9kZShpZCwgZnVuY3Rpb24obm9kZSkge1xuXHRcdG5vZGUuc2Nyb2xsVG9wID0gZGVzaXJlZFNjcm9sbFRvcDtcblx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLlR1cGxlMDtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIHRvQm90dG9tKGlkKVxue1xuXHRyZXR1cm4gd2l0aE5vZGUoaWQsIGZ1bmN0aW9uKG5vZGUpIHtcblx0XHRub2RlLnNjcm9sbFRvcCA9IG5vZGUuc2Nyb2xsSGVpZ2h0O1xuXHRcdHJldHVybiBfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuVHVwbGUwO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsTGVmdChpZClcbntcblx0cmV0dXJuIHdpdGhOb2RlKGlkLCBmdW5jdGlvbihub2RlKSB7XG5cdFx0cmV0dXJuIG5vZGUuc2Nyb2xsTGVmdDtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIHNldFNjcm9sbExlZnQoaWQsIGRlc2lyZWRTY3JvbGxMZWZ0KVxue1xuXHRyZXR1cm4gd2l0aE5vZGUoaWQsIGZ1bmN0aW9uKG5vZGUpIHtcblx0XHRub2RlLnNjcm9sbExlZnQgPSBkZXNpcmVkU2Nyb2xsTGVmdDtcblx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLlR1cGxlMDtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIHRvUmlnaHQoaWQpXG57XG5cdHJldHVybiB3aXRoTm9kZShpZCwgZnVuY3Rpb24obm9kZSkge1xuXHRcdG5vZGUuc2Nyb2xsTGVmdCA9IG5vZGUuc2Nyb2xsV2lkdGg7XG5cdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy5UdXBsZTA7XG5cdH0pO1xufVxuXG5cbi8vIFNJWkVcblxuZnVuY3Rpb24gd2lkdGgob3B0aW9ucywgaWQpXG57XG5cdHJldHVybiB3aXRoTm9kZShpZCwgZnVuY3Rpb24obm9kZSkge1xuXHRcdHN3aXRjaCAob3B0aW9ucy5jdG9yKVxuXHRcdHtcblx0XHRcdGNhc2UgJ0NvbnRlbnQnOlxuXHRcdFx0XHRyZXR1cm4gbm9kZS5zY3JvbGxXaWR0aDtcblx0XHRcdGNhc2UgJ1Zpc2libGVDb250ZW50Jzpcblx0XHRcdFx0cmV0dXJuIG5vZGUuY2xpZW50V2lkdGg7XG5cdFx0XHRjYXNlICdWaXNpYmxlQ29udGVudFdpdGhCb3JkZXJzJzpcblx0XHRcdFx0cmV0dXJuIG5vZGUub2Zmc2V0V2lkdGg7XG5cdFx0XHRjYXNlICdWaXNpYmxlQ29udGVudFdpdGhCb3JkZXJzQW5kTWFyZ2lucyc6XG5cdFx0XHRcdHZhciByZWN0ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdFx0cmV0dXJuIHJlY3QucmlnaHQgLSByZWN0LmxlZnQ7XG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gaGVpZ2h0KG9wdGlvbnMsIGlkKVxue1xuXHRyZXR1cm4gd2l0aE5vZGUoaWQsIGZ1bmN0aW9uKG5vZGUpIHtcblx0XHRzd2l0Y2ggKG9wdGlvbnMuY3Rvcilcblx0XHR7XG5cdFx0XHRjYXNlICdDb250ZW50Jzpcblx0XHRcdFx0cmV0dXJuIG5vZGUuc2Nyb2xsSGVpZ2h0O1xuXHRcdFx0Y2FzZSAnVmlzaWJsZUNvbnRlbnQnOlxuXHRcdFx0XHRyZXR1cm4gbm9kZS5jbGllbnRIZWlnaHQ7XG5cdFx0XHRjYXNlICdWaXNpYmxlQ29udGVudFdpdGhCb3JkZXJzJzpcblx0XHRcdFx0cmV0dXJuIG5vZGUub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0Y2FzZSAnVmlzaWJsZUNvbnRlbnRXaXRoQm9yZGVyc0FuZE1hcmdpbnMnOlxuXHRcdFx0XHR2YXIgcmVjdCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRcdHJldHVybiByZWN0LmJvdHRvbSAtIHJlY3QudG9wO1xuXHRcdH1cblx0fSk7XG59XG5cbnJldHVybiB7XG5cdG9uRG9jdW1lbnQ6IEYzKG9uRG9jdW1lbnQpLFxuXHRvbldpbmRvdzogRjMob25XaW5kb3cpLFxuXG5cdGZvY3VzOiBmb2N1cyxcblx0Ymx1cjogYmx1cixcblxuXHRnZXRTY3JvbGxUb3A6IGdldFNjcm9sbFRvcCxcblx0c2V0U2Nyb2xsVG9wOiBGMihzZXRTY3JvbGxUb3ApLFxuXHRnZXRTY3JvbGxMZWZ0OiBnZXRTY3JvbGxMZWZ0LFxuXHRzZXRTY3JvbGxMZWZ0OiBGMihzZXRTY3JvbGxMZWZ0KSxcblx0dG9Cb3R0b206IHRvQm90dG9tLFxuXHR0b1JpZ2h0OiB0b1JpZ2h0LFxuXG5cdGhlaWdodDogRjIoaGVpZ2h0KSxcblx0d2lkdGg6IEYyKHdpZHRoKVxufTtcblxufSgpO1xuXG52YXIgX2VsbV9sYW5nJGRvbSREb21fTG93TGV2ZWwkb25XaW5kb3cgPSBfZWxtX2xhbmckZG9tJE5hdGl2ZV9Eb20ub25XaW5kb3c7XG52YXIgX2VsbV9sYW5nJGRvbSREb21fTG93TGV2ZWwkb25Eb2N1bWVudCA9IF9lbG1fbGFuZyRkb20kTmF0aXZlX0RvbS5vbkRvY3VtZW50O1xuXG52YXIgX2VsbV9sYW5nJHZpcnR1YWxfZG9tJFZpcnR1YWxEb21fRGVidWckd3JhcDtcbnZhciBfZWxtX2xhbmckdmlydHVhbF9kb20kVmlydHVhbERvbV9EZWJ1ZyR3cmFwV2l0aEZsYWdzO1xuXG52YXIgX2VsbV9sYW5nJHZpcnR1YWxfZG9tJE5hdGl2ZV9WaXJ0dWFsRG9tID0gZnVuY3Rpb24oKSB7XG5cbnZhciBTVFlMRV9LRVkgPSAnU1RZTEUnO1xudmFyIEVWRU5UX0tFWSA9ICdFVkVOVCc7XG52YXIgQVRUUl9LRVkgPSAnQVRUUic7XG52YXIgQVRUUl9OU19LRVkgPSAnQVRUUl9OUyc7XG5cbnZhciBsb2NhbERvYyA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgPyBkb2N1bWVudCA6IHt9O1xuXG5cbi8vLy8vLy8vLy8vLyAgVklSVFVBTCBET00gTk9ERVMgIC8vLy8vLy8vLy8vL1xuXG5cbmZ1bmN0aW9uIHRleHQoc3RyaW5nKVxue1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHR0ZXh0OiBzdHJpbmdcblx0fTtcbn1cblxuXG5mdW5jdGlvbiBub2RlKHRhZylcbntcblx0cmV0dXJuIEYyKGZ1bmN0aW9uKGZhY3RMaXN0LCBraWRMaXN0KSB7XG5cdFx0cmV0dXJuIG5vZGVIZWxwKHRhZywgZmFjdExpc3QsIGtpZExpc3QpO1xuXHR9KTtcbn1cblxuXG5mdW5jdGlvbiBub2RlSGVscCh0YWcsIGZhY3RMaXN0LCBraWRMaXN0KVxue1xuXHR2YXIgb3JnYW5pemVkID0gb3JnYW5pemVGYWN0cyhmYWN0TGlzdCk7XG5cdHZhciBuYW1lc3BhY2UgPSBvcmdhbml6ZWQubmFtZXNwYWNlO1xuXHR2YXIgZmFjdHMgPSBvcmdhbml6ZWQuZmFjdHM7XG5cblx0dmFyIGNoaWxkcmVuID0gW107XG5cdHZhciBkZXNjZW5kYW50c0NvdW50ID0gMDtcblx0d2hpbGUgKGtpZExpc3QuY3RvciAhPT0gJ1tdJylcblx0e1xuXHRcdHZhciBraWQgPSBraWRMaXN0Ll8wO1xuXHRcdGRlc2NlbmRhbnRzQ291bnQgKz0gKGtpZC5kZXNjZW5kYW50c0NvdW50IHx8IDApO1xuXHRcdGNoaWxkcmVuLnB1c2goa2lkKTtcblx0XHRraWRMaXN0ID0ga2lkTGlzdC5fMTtcblx0fVxuXHRkZXNjZW5kYW50c0NvdW50ICs9IGNoaWxkcmVuLmxlbmd0aDtcblxuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICdub2RlJyxcblx0XHR0YWc6IHRhZyxcblx0XHRmYWN0czogZmFjdHMsXG5cdFx0Y2hpbGRyZW46IGNoaWxkcmVuLFxuXHRcdG5hbWVzcGFjZTogbmFtZXNwYWNlLFxuXHRcdGRlc2NlbmRhbnRzQ291bnQ6IGRlc2NlbmRhbnRzQ291bnRcblx0fTtcbn1cblxuXG5mdW5jdGlvbiBrZXllZE5vZGUodGFnLCBmYWN0TGlzdCwga2lkTGlzdClcbntcblx0dmFyIG9yZ2FuaXplZCA9IG9yZ2FuaXplRmFjdHMoZmFjdExpc3QpO1xuXHR2YXIgbmFtZXNwYWNlID0gb3JnYW5pemVkLm5hbWVzcGFjZTtcblx0dmFyIGZhY3RzID0gb3JnYW5pemVkLmZhY3RzO1xuXG5cdHZhciBjaGlsZHJlbiA9IFtdO1xuXHR2YXIgZGVzY2VuZGFudHNDb3VudCA9IDA7XG5cdHdoaWxlIChraWRMaXN0LmN0b3IgIT09ICdbXScpXG5cdHtcblx0XHR2YXIga2lkID0ga2lkTGlzdC5fMDtcblx0XHRkZXNjZW5kYW50c0NvdW50ICs9IChraWQuXzEuZGVzY2VuZGFudHNDb3VudCB8fCAwKTtcblx0XHRjaGlsZHJlbi5wdXNoKGtpZCk7XG5cdFx0a2lkTGlzdCA9IGtpZExpc3QuXzE7XG5cdH1cblx0ZGVzY2VuZGFudHNDb3VudCArPSBjaGlsZHJlbi5sZW5ndGg7XG5cblx0cmV0dXJuIHtcblx0XHR0eXBlOiAna2V5ZWQtbm9kZScsXG5cdFx0dGFnOiB0YWcsXG5cdFx0ZmFjdHM6IGZhY3RzLFxuXHRcdGNoaWxkcmVuOiBjaGlsZHJlbixcblx0XHRuYW1lc3BhY2U6IG5hbWVzcGFjZSxcblx0XHRkZXNjZW5kYW50c0NvdW50OiBkZXNjZW5kYW50c0NvdW50XG5cdH07XG59XG5cblxuZnVuY3Rpb24gY3VzdG9tKGZhY3RMaXN0LCBtb2RlbCwgaW1wbClcbntcblx0dmFyIGZhY3RzID0gb3JnYW5pemVGYWN0cyhmYWN0TGlzdCkuZmFjdHM7XG5cblx0cmV0dXJuIHtcblx0XHR0eXBlOiAnY3VzdG9tJyxcblx0XHRmYWN0czogZmFjdHMsXG5cdFx0bW9kZWw6IG1vZGVsLFxuXHRcdGltcGw6IGltcGxcblx0fTtcbn1cblxuXG5mdW5jdGlvbiBtYXAodGFnZ2VyLCBub2RlKVxue1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICd0YWdnZXInLFxuXHRcdHRhZ2dlcjogdGFnZ2VyLFxuXHRcdG5vZGU6IG5vZGUsXG5cdFx0ZGVzY2VuZGFudHNDb3VudDogMSArIChub2RlLmRlc2NlbmRhbnRzQ291bnQgfHwgMClcblx0fTtcbn1cblxuXG5mdW5jdGlvbiB0aHVuayhmdW5jLCBhcmdzLCB0aHVuaylcbntcblx0cmV0dXJuIHtcblx0XHR0eXBlOiAndGh1bmsnLFxuXHRcdGZ1bmM6IGZ1bmMsXG5cdFx0YXJnczogYXJncyxcblx0XHR0aHVuazogdGh1bmssXG5cdFx0bm9kZTogdW5kZWZpbmVkXG5cdH07XG59XG5cbmZ1bmN0aW9uIGxhenkoZm4sIGEpXG57XG5cdHJldHVybiB0aHVuayhmbiwgW2FdLCBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gZm4oYSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBsYXp5MihmbiwgYSwgYilcbntcblx0cmV0dXJuIHRodW5rKGZuLCBbYSxiXSwgZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIEEyKGZuLCBhLCBiKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGxhenkzKGZuLCBhLCBiLCBjKVxue1xuXHRyZXR1cm4gdGh1bmsoZm4sIFthLGIsY10sIGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBBMyhmbiwgYSwgYiwgYyk7XG5cdH0pO1xufVxuXG5cblxuLy8gRkFDVFNcblxuXG5mdW5jdGlvbiBvcmdhbml6ZUZhY3RzKGZhY3RMaXN0KVxue1xuXHR2YXIgbmFtZXNwYWNlLCBmYWN0cyA9IHt9O1xuXG5cdHdoaWxlIChmYWN0TGlzdC5jdG9yICE9PSAnW10nKVxuXHR7XG5cdFx0dmFyIGVudHJ5ID0gZmFjdExpc3QuXzA7XG5cdFx0dmFyIGtleSA9IGVudHJ5LmtleTtcblxuXHRcdGlmIChrZXkgPT09IEFUVFJfS0VZIHx8IGtleSA9PT0gQVRUUl9OU19LRVkgfHwga2V5ID09PSBFVkVOVF9LRVkpXG5cdFx0e1xuXHRcdFx0dmFyIHN1YkZhY3RzID0gZmFjdHNba2V5XSB8fCB7fTtcblx0XHRcdHN1YkZhY3RzW2VudHJ5LnJlYWxLZXldID0gZW50cnkudmFsdWU7XG5cdFx0XHRmYWN0c1trZXldID0gc3ViRmFjdHM7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKGtleSA9PT0gU1RZTEVfS0VZKVxuXHRcdHtcblx0XHRcdHZhciBzdHlsZXMgPSBmYWN0c1trZXldIHx8IHt9O1xuXHRcdFx0dmFyIHN0eWxlTGlzdCA9IGVudHJ5LnZhbHVlO1xuXHRcdFx0d2hpbGUgKHN0eWxlTGlzdC5jdG9yICE9PSAnW10nKVxuXHRcdFx0e1xuXHRcdFx0XHR2YXIgc3R5bGUgPSBzdHlsZUxpc3QuXzA7XG5cdFx0XHRcdHN0eWxlc1tzdHlsZS5fMF0gPSBzdHlsZS5fMTtcblx0XHRcdFx0c3R5bGVMaXN0ID0gc3R5bGVMaXN0Ll8xO1xuXHRcdFx0fVxuXHRcdFx0ZmFjdHNba2V5XSA9IHN0eWxlcztcblx0XHR9XG5cdFx0ZWxzZSBpZiAoa2V5ID09PSAnbmFtZXNwYWNlJylcblx0XHR7XG5cdFx0XHRuYW1lc3BhY2UgPSBlbnRyeS52YWx1ZTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoa2V5ID09PSAnY2xhc3NOYW1lJylcblx0XHR7XG5cdFx0XHR2YXIgY2xhc3NlcyA9IGZhY3RzW2tleV07XG5cdFx0XHRmYWN0c1trZXldID0gdHlwZW9mIGNsYXNzZXMgPT09ICd1bmRlZmluZWQnXG5cdFx0XHRcdD8gZW50cnkudmFsdWVcblx0XHRcdFx0OiBjbGFzc2VzICsgJyAnICsgZW50cnkudmFsdWU7XG5cdFx0fVxuIFx0XHRlbHNlXG5cdFx0e1xuXHRcdFx0ZmFjdHNba2V5XSA9IGVudHJ5LnZhbHVlO1xuXHRcdH1cblx0XHRmYWN0TGlzdCA9IGZhY3RMaXN0Ll8xO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRmYWN0czogZmFjdHMsXG5cdFx0bmFtZXNwYWNlOiBuYW1lc3BhY2Vcblx0fTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLyAgUFJPUEVSVElFUyBBTkQgQVRUUklCVVRFUyAgLy8vLy8vLy8vLy8vXG5cblxuZnVuY3Rpb24gc3R5bGUodmFsdWUpXG57XG5cdHJldHVybiB7XG5cdFx0a2V5OiBTVFlMRV9LRVksXG5cdFx0dmFsdWU6IHZhbHVlXG5cdH07XG59XG5cblxuZnVuY3Rpb24gcHJvcGVydHkoa2V5LCB2YWx1ZSlcbntcblx0cmV0dXJuIHtcblx0XHRrZXk6IGtleSxcblx0XHR2YWx1ZTogdmFsdWVcblx0fTtcbn1cblxuXG5mdW5jdGlvbiBhdHRyaWJ1dGUoa2V5LCB2YWx1ZSlcbntcblx0cmV0dXJuIHtcblx0XHRrZXk6IEFUVFJfS0VZLFxuXHRcdHJlYWxLZXk6IGtleSxcblx0XHR2YWx1ZTogdmFsdWVcblx0fTtcbn1cblxuXG5mdW5jdGlvbiBhdHRyaWJ1dGVOUyhuYW1lc3BhY2UsIGtleSwgdmFsdWUpXG57XG5cdHJldHVybiB7XG5cdFx0a2V5OiBBVFRSX05TX0tFWSxcblx0XHRyZWFsS2V5OiBrZXksXG5cdFx0dmFsdWU6IHtcblx0XHRcdHZhbHVlOiB2YWx1ZSxcblx0XHRcdG5hbWVzcGFjZTogbmFtZXNwYWNlXG5cdFx0fVxuXHR9O1xufVxuXG5cbmZ1bmN0aW9uIG9uKG5hbWUsIG9wdGlvbnMsIGRlY29kZXIpXG57XG5cdHJldHVybiB7XG5cdFx0a2V5OiBFVkVOVF9LRVksXG5cdFx0cmVhbEtleTogbmFtZSxcblx0XHR2YWx1ZToge1xuXHRcdFx0b3B0aW9uczogb3B0aW9ucyxcblx0XHRcdGRlY29kZXI6IGRlY29kZXJcblx0XHR9XG5cdH07XG59XG5cblxuZnVuY3Rpb24gZXF1YWxFdmVudHMoYSwgYilcbntcblx0aWYgKGEub3B0aW9ucyAhPT0gYi5vcHRpb25zKVxuXHR7XG5cdFx0aWYgKGEub3B0aW9ucy5zdG9wUHJvcGFnYXRpb24gIT09IGIub3B0aW9ucy5zdG9wUHJvcGFnYXRpb24gfHwgYS5vcHRpb25zLnByZXZlbnREZWZhdWx0ICE9PSBiLm9wdGlvbnMucHJldmVudERlZmF1bHQpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX0pzb24uZXF1YWxpdHkoYS5kZWNvZGVyLCBiLmRlY29kZXIpO1xufVxuXG5cbmZ1bmN0aW9uIG1hcFByb3BlcnR5KGZ1bmMsIHByb3BlcnR5KVxue1xuXHRpZiAocHJvcGVydHkua2V5ICE9PSBFVkVOVF9LRVkpXG5cdHtcblx0XHRyZXR1cm4gcHJvcGVydHk7XG5cdH1cblx0cmV0dXJuIG9uKFxuXHRcdHByb3BlcnR5LnJlYWxLZXksXG5cdFx0cHJvcGVydHkudmFsdWUub3B0aW9ucyxcblx0XHRBMihfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZSRtYXAsIGZ1bmMsIHByb3BlcnR5LnZhbHVlLmRlY29kZXIpXG5cdCk7XG59XG5cblxuLy8vLy8vLy8vLy8vICBSRU5ERVIgIC8vLy8vLy8vLy8vL1xuXG5cbmZ1bmN0aW9uIHJlbmRlcih2Tm9kZSwgZXZlbnROb2RlKVxue1xuXHRzd2l0Y2ggKHZOb2RlLnR5cGUpXG5cdHtcblx0XHRjYXNlICd0aHVuayc6XG5cdFx0XHRpZiAoIXZOb2RlLm5vZGUpXG5cdFx0XHR7XG5cdFx0XHRcdHZOb2RlLm5vZGUgPSB2Tm9kZS50aHVuaygpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlbmRlcih2Tm9kZS5ub2RlLCBldmVudE5vZGUpO1xuXG5cdFx0Y2FzZSAndGFnZ2VyJzpcblx0XHRcdHZhciBzdWJOb2RlID0gdk5vZGUubm9kZTtcblx0XHRcdHZhciB0YWdnZXIgPSB2Tm9kZS50YWdnZXI7XG5cblx0XHRcdHdoaWxlIChzdWJOb2RlLnR5cGUgPT09ICd0YWdnZXInKVxuXHRcdFx0e1xuXHRcdFx0XHR0eXBlb2YgdGFnZ2VyICE9PSAnb2JqZWN0J1xuXHRcdFx0XHRcdD8gdGFnZ2VyID0gW3RhZ2dlciwgc3ViTm9kZS50YWdnZXJdXG5cdFx0XHRcdFx0OiB0YWdnZXIucHVzaChzdWJOb2RlLnRhZ2dlcik7XG5cblx0XHRcdFx0c3ViTm9kZSA9IHN1Yk5vZGUubm9kZTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHN1YkV2ZW50Um9vdCA9IHsgdGFnZ2VyOiB0YWdnZXIsIHBhcmVudDogZXZlbnROb2RlIH07XG5cdFx0XHR2YXIgZG9tTm9kZSA9IHJlbmRlcihzdWJOb2RlLCBzdWJFdmVudFJvb3QpO1xuXHRcdFx0ZG9tTm9kZS5lbG1fZXZlbnRfbm9kZV9yZWYgPSBzdWJFdmVudFJvb3Q7XG5cdFx0XHRyZXR1cm4gZG9tTm9kZTtcblxuXHRcdGNhc2UgJ3RleHQnOlxuXHRcdFx0cmV0dXJuIGxvY2FsRG9jLmNyZWF0ZVRleHROb2RlKHZOb2RlLnRleHQpO1xuXG5cdFx0Y2FzZSAnbm9kZSc6XG5cdFx0XHR2YXIgZG9tTm9kZSA9IHZOb2RlLm5hbWVzcGFjZVxuXHRcdFx0XHQ/IGxvY2FsRG9jLmNyZWF0ZUVsZW1lbnROUyh2Tm9kZS5uYW1lc3BhY2UsIHZOb2RlLnRhZylcblx0XHRcdFx0OiBsb2NhbERvYy5jcmVhdGVFbGVtZW50KHZOb2RlLnRhZyk7XG5cblx0XHRcdGFwcGx5RmFjdHMoZG9tTm9kZSwgZXZlbnROb2RlLCB2Tm9kZS5mYWN0cyk7XG5cblx0XHRcdHZhciBjaGlsZHJlbiA9IHZOb2RlLmNoaWxkcmVuO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKVxuXHRcdFx0e1xuXHRcdFx0XHRkb21Ob2RlLmFwcGVuZENoaWxkKHJlbmRlcihjaGlsZHJlbltpXSwgZXZlbnROb2RlKSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBkb21Ob2RlO1xuXG5cdFx0Y2FzZSAna2V5ZWQtbm9kZSc6XG5cdFx0XHR2YXIgZG9tTm9kZSA9IHZOb2RlLm5hbWVzcGFjZVxuXHRcdFx0XHQ/IGxvY2FsRG9jLmNyZWF0ZUVsZW1lbnROUyh2Tm9kZS5uYW1lc3BhY2UsIHZOb2RlLnRhZylcblx0XHRcdFx0OiBsb2NhbERvYy5jcmVhdGVFbGVtZW50KHZOb2RlLnRhZyk7XG5cblx0XHRcdGFwcGx5RmFjdHMoZG9tTm9kZSwgZXZlbnROb2RlLCB2Tm9kZS5mYWN0cyk7XG5cblx0XHRcdHZhciBjaGlsZHJlbiA9IHZOb2RlLmNoaWxkcmVuO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKVxuXHRcdFx0e1xuXHRcdFx0XHRkb21Ob2RlLmFwcGVuZENoaWxkKHJlbmRlcihjaGlsZHJlbltpXS5fMSwgZXZlbnROb2RlKSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBkb21Ob2RlO1xuXG5cdFx0Y2FzZSAnY3VzdG9tJzpcblx0XHRcdHZhciBkb21Ob2RlID0gdk5vZGUuaW1wbC5yZW5kZXIodk5vZGUubW9kZWwpO1xuXHRcdFx0YXBwbHlGYWN0cyhkb21Ob2RlLCBldmVudE5vZGUsIHZOb2RlLmZhY3RzKTtcblx0XHRcdHJldHVybiBkb21Ob2RlO1xuXHR9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8gIEFQUExZIEZBQ1RTICAvLy8vLy8vLy8vLy9cblxuXG5mdW5jdGlvbiBhcHBseUZhY3RzKGRvbU5vZGUsIGV2ZW50Tm9kZSwgZmFjdHMpXG57XG5cdGZvciAodmFyIGtleSBpbiBmYWN0cylcblx0e1xuXHRcdHZhciB2YWx1ZSA9IGZhY3RzW2tleV07XG5cblx0XHRzd2l0Y2ggKGtleSlcblx0XHR7XG5cdFx0XHRjYXNlIFNUWUxFX0tFWTpcblx0XHRcdFx0YXBwbHlTdHlsZXMoZG9tTm9kZSwgdmFsdWUpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBFVkVOVF9LRVk6XG5cdFx0XHRcdGFwcGx5RXZlbnRzKGRvbU5vZGUsIGV2ZW50Tm9kZSwgdmFsdWUpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBBVFRSX0tFWTpcblx0XHRcdFx0YXBwbHlBdHRycyhkb21Ob2RlLCB2YWx1ZSk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIEFUVFJfTlNfS0VZOlxuXHRcdFx0XHRhcHBseUF0dHJzTlMoZG9tTm9kZSwgdmFsdWUpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAndmFsdWUnOlxuXHRcdFx0XHRpZiAoZG9tTm9kZVtrZXldICE9PSB2YWx1ZSlcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGRvbU5vZGVba2V5XSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRkb21Ob2RlW2tleV0gPSB2YWx1ZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5U3R5bGVzKGRvbU5vZGUsIHN0eWxlcylcbntcblx0dmFyIGRvbU5vZGVTdHlsZSA9IGRvbU5vZGUuc3R5bGU7XG5cblx0Zm9yICh2YXIga2V5IGluIHN0eWxlcylcblx0e1xuXHRcdGRvbU5vZGVTdHlsZVtrZXldID0gc3R5bGVzW2tleV07XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlFdmVudHMoZG9tTm9kZSwgZXZlbnROb2RlLCBldmVudHMpXG57XG5cdHZhciBhbGxIYW5kbGVycyA9IGRvbU5vZGUuZWxtX2hhbmRsZXJzIHx8IHt9O1xuXG5cdGZvciAodmFyIGtleSBpbiBldmVudHMpXG5cdHtcblx0XHR2YXIgaGFuZGxlciA9IGFsbEhhbmRsZXJzW2tleV07XG5cdFx0dmFyIHZhbHVlID0gZXZlbnRzW2tleV07XG5cblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJylcblx0XHR7XG5cdFx0XHRkb21Ob2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoa2V5LCBoYW5kbGVyKTtcblx0XHRcdGFsbEhhbmRsZXJzW2tleV0gPSB1bmRlZmluZWQ7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAndW5kZWZpbmVkJylcblx0XHR7XG5cdFx0XHR2YXIgaGFuZGxlciA9IG1ha2VFdmVudEhhbmRsZXIoZXZlbnROb2RlLCB2YWx1ZSk7XG5cdFx0XHRkb21Ob2RlLmFkZEV2ZW50TGlzdGVuZXIoa2V5LCBoYW5kbGVyKTtcblx0XHRcdGFsbEhhbmRsZXJzW2tleV0gPSBoYW5kbGVyO1xuXHRcdH1cblx0XHRlbHNlXG5cdFx0e1xuXHRcdFx0aGFuZGxlci5pbmZvID0gdmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0ZG9tTm9kZS5lbG1faGFuZGxlcnMgPSBhbGxIYW5kbGVycztcbn1cblxuZnVuY3Rpb24gbWFrZUV2ZW50SGFuZGxlcihldmVudE5vZGUsIGluZm8pXG57XG5cdGZ1bmN0aW9uIGV2ZW50SGFuZGxlcihldmVudClcblx0e1xuXHRcdHZhciBpbmZvID0gZXZlbnRIYW5kbGVyLmluZm87XG5cblx0XHR2YXIgdmFsdWUgPSBBMihfZWxtX2xhbmckY29yZSROYXRpdmVfSnNvbi5ydW4sIGluZm8uZGVjb2RlciwgZXZlbnQpO1xuXG5cdFx0aWYgKHZhbHVlLmN0b3IgPT09ICdPaycpXG5cdFx0e1xuXHRcdFx0dmFyIG9wdGlvbnMgPSBpbmZvLm9wdGlvbnM7XG5cdFx0XHRpZiAob3B0aW9ucy5zdG9wUHJvcGFnYXRpb24pXG5cdFx0XHR7XG5cdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKG9wdGlvbnMucHJldmVudERlZmF1bHQpXG5cdFx0XHR7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBtZXNzYWdlID0gdmFsdWUuXzA7XG5cblx0XHRcdHZhciBjdXJyZW50RXZlbnROb2RlID0gZXZlbnROb2RlO1xuXHRcdFx0d2hpbGUgKGN1cnJlbnRFdmVudE5vZGUpXG5cdFx0XHR7XG5cdFx0XHRcdHZhciB0YWdnZXIgPSBjdXJyZW50RXZlbnROb2RlLnRhZ2dlcjtcblx0XHRcdFx0aWYgKHR5cGVvZiB0YWdnZXIgPT09ICdmdW5jdGlvbicpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRtZXNzYWdlID0gdGFnZ2VyKG1lc3NhZ2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGZvciAodmFyIGkgPSB0YWdnZXIubGVuZ3RoOyBpLS07IClcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRtZXNzYWdlID0gdGFnZ2VyW2ldKG1lc3NhZ2UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRjdXJyZW50RXZlbnROb2RlID0gY3VycmVudEV2ZW50Tm9kZS5wYXJlbnQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdGV2ZW50SGFuZGxlci5pbmZvID0gaW5mbztcblxuXHRyZXR1cm4gZXZlbnRIYW5kbGVyO1xufVxuXG5mdW5jdGlvbiBhcHBseUF0dHJzKGRvbU5vZGUsIGF0dHJzKVxue1xuXHRmb3IgKHZhciBrZXkgaW4gYXR0cnMpXG5cdHtcblx0XHR2YXIgdmFsdWUgPSBhdHRyc1trZXldO1xuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKVxuXHRcdHtcblx0XHRcdGRvbU5vZGUucmVtb3ZlQXR0cmlidXRlKGtleSk7XG5cdFx0fVxuXHRcdGVsc2Vcblx0XHR7XG5cdFx0XHRkb21Ob2RlLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlBdHRyc05TKGRvbU5vZGUsIG5zQXR0cnMpXG57XG5cdGZvciAodmFyIGtleSBpbiBuc0F0dHJzKVxuXHR7XG5cdFx0dmFyIHBhaXIgPSBuc0F0dHJzW2tleV07XG5cdFx0dmFyIG5hbWVzcGFjZSA9IHBhaXIubmFtZXNwYWNlO1xuXHRcdHZhciB2YWx1ZSA9IHBhaXIudmFsdWU7XG5cblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJylcblx0XHR7XG5cdFx0XHRkb21Ob2RlLnJlbW92ZUF0dHJpYnV0ZU5TKG5hbWVzcGFjZSwga2V5KTtcblx0XHR9XG5cdFx0ZWxzZVxuXHRcdHtcblx0XHRcdGRvbU5vZGUuc2V0QXR0cmlidXRlTlMobmFtZXNwYWNlLCBrZXksIHZhbHVlKTtcblx0XHR9XG5cdH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLyAgRElGRiAgLy8vLy8vLy8vLy8vXG5cblxuZnVuY3Rpb24gZGlmZihhLCBiKVxue1xuXHR2YXIgcGF0Y2hlcyA9IFtdO1xuXHRkaWZmSGVscChhLCBiLCBwYXRjaGVzLCAwKTtcblx0cmV0dXJuIHBhdGNoZXM7XG59XG5cblxuZnVuY3Rpb24gbWFrZVBhdGNoKHR5cGUsIGluZGV4LCBkYXRhKVxue1xuXHRyZXR1cm4ge1xuXHRcdGluZGV4OiBpbmRleCxcblx0XHR0eXBlOiB0eXBlLFxuXHRcdGRhdGE6IGRhdGEsXG5cdFx0ZG9tTm9kZTogdW5kZWZpbmVkLFxuXHRcdGV2ZW50Tm9kZTogdW5kZWZpbmVkXG5cdH07XG59XG5cblxuZnVuY3Rpb24gZGlmZkhlbHAoYSwgYiwgcGF0Y2hlcywgaW5kZXgpXG57XG5cdGlmIChhID09PSBiKVxuXHR7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dmFyIGFUeXBlID0gYS50eXBlO1xuXHR2YXIgYlR5cGUgPSBiLnR5cGU7XG5cblx0Ly8gQmFpbCBpZiB5b3UgcnVuIGludG8gZGlmZmVyZW50IHR5cGVzIG9mIG5vZGVzLiBJbXBsaWVzIHRoYXQgdGhlXG5cdC8vIHN0cnVjdHVyZSBoYXMgY2hhbmdlZCBzaWduaWZpY2FudGx5IGFuZCBpdCdzIG5vdCB3b3J0aCBhIGRpZmYuXG5cdGlmIChhVHlwZSAhPT0gYlR5cGUpXG5cdHtcblx0XHRwYXRjaGVzLnB1c2gobWFrZVBhdGNoKCdwLXJlZHJhdycsIGluZGV4LCBiKSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gTm93IHdlIGtub3cgdGhhdCBib3RoIG5vZGVzIGFyZSB0aGUgc2FtZSB0eXBlLlxuXHRzd2l0Y2ggKGJUeXBlKVxuXHR7XG5cdFx0Y2FzZSAndGh1bmsnOlxuXHRcdFx0dmFyIGFBcmdzID0gYS5hcmdzO1xuXHRcdFx0dmFyIGJBcmdzID0gYi5hcmdzO1xuXHRcdFx0dmFyIGkgPSBhQXJncy5sZW5ndGg7XG5cdFx0XHR2YXIgc2FtZSA9IGEuZnVuYyA9PT0gYi5mdW5jICYmIGkgPT09IGJBcmdzLmxlbmd0aDtcblx0XHRcdHdoaWxlIChzYW1lICYmIGktLSlcblx0XHRcdHtcblx0XHRcdFx0c2FtZSA9IGFBcmdzW2ldID09PSBiQXJnc1tpXTtcblx0XHRcdH1cblx0XHRcdGlmIChzYW1lKVxuXHRcdFx0e1xuXHRcdFx0XHRiLm5vZGUgPSBhLm5vZGU7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGIubm9kZSA9IGIudGh1bmsoKTtcblx0XHRcdHZhciBzdWJQYXRjaGVzID0gW107XG5cdFx0XHRkaWZmSGVscChhLm5vZGUsIGIubm9kZSwgc3ViUGF0Y2hlcywgMCk7XG5cdFx0XHRpZiAoc3ViUGF0Y2hlcy5sZW5ndGggPiAwKVxuXHRcdFx0e1xuXHRcdFx0XHRwYXRjaGVzLnB1c2gobWFrZVBhdGNoKCdwLXRodW5rJywgaW5kZXgsIHN1YlBhdGNoZXMpKTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblxuXHRcdGNhc2UgJ3RhZ2dlcic6XG5cdFx0XHQvLyBnYXRoZXIgbmVzdGVkIHRhZ2dlcnNcblx0XHRcdHZhciBhVGFnZ2VycyA9IGEudGFnZ2VyO1xuXHRcdFx0dmFyIGJUYWdnZXJzID0gYi50YWdnZXI7XG5cdFx0XHR2YXIgbmVzdGluZyA9IGZhbHNlO1xuXG5cdFx0XHR2YXIgYVN1Yk5vZGUgPSBhLm5vZGU7XG5cdFx0XHR3aGlsZSAoYVN1Yk5vZGUudHlwZSA9PT0gJ3RhZ2dlcicpXG5cdFx0XHR7XG5cdFx0XHRcdG5lc3RpbmcgPSB0cnVlO1xuXG5cdFx0XHRcdHR5cGVvZiBhVGFnZ2VycyAhPT0gJ29iamVjdCdcblx0XHRcdFx0XHQ/IGFUYWdnZXJzID0gW2FUYWdnZXJzLCBhU3ViTm9kZS50YWdnZXJdXG5cdFx0XHRcdFx0OiBhVGFnZ2Vycy5wdXNoKGFTdWJOb2RlLnRhZ2dlcik7XG5cblx0XHRcdFx0YVN1Yk5vZGUgPSBhU3ViTm9kZS5ub2RlO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgYlN1Yk5vZGUgPSBiLm5vZGU7XG5cdFx0XHR3aGlsZSAoYlN1Yk5vZGUudHlwZSA9PT0gJ3RhZ2dlcicpXG5cdFx0XHR7XG5cdFx0XHRcdG5lc3RpbmcgPSB0cnVlO1xuXG5cdFx0XHRcdHR5cGVvZiBiVGFnZ2VycyAhPT0gJ29iamVjdCdcblx0XHRcdFx0XHQ/IGJUYWdnZXJzID0gW2JUYWdnZXJzLCBiU3ViTm9kZS50YWdnZXJdXG5cdFx0XHRcdFx0OiBiVGFnZ2Vycy5wdXNoKGJTdWJOb2RlLnRhZ2dlcik7XG5cblx0XHRcdFx0YlN1Yk5vZGUgPSBiU3ViTm9kZS5ub2RlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBKdXN0IGJhaWwgaWYgZGlmZmVyZW50IG51bWJlcnMgb2YgdGFnZ2Vycy4gVGhpcyBpbXBsaWVzIHRoZVxuXHRcdFx0Ly8gc3RydWN0dXJlIG9mIHRoZSB2aXJ0dWFsIERPTSBoYXMgY2hhbmdlZC5cblx0XHRcdGlmIChuZXN0aW5nICYmIGFUYWdnZXJzLmxlbmd0aCAhPT0gYlRhZ2dlcnMubGVuZ3RoKVxuXHRcdFx0e1xuXHRcdFx0XHRwYXRjaGVzLnB1c2gobWFrZVBhdGNoKCdwLXJlZHJhdycsIGluZGV4LCBiKSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gY2hlY2sgaWYgdGFnZ2VycyBhcmUgXCJ0aGUgc2FtZVwiXG5cdFx0XHRpZiAobmVzdGluZyA/ICFwYWlyd2lzZVJlZkVxdWFsKGFUYWdnZXJzLCBiVGFnZ2VycykgOiBhVGFnZ2VycyAhPT0gYlRhZ2dlcnMpXG5cdFx0XHR7XG5cdFx0XHRcdHBhdGNoZXMucHVzaChtYWtlUGF0Y2goJ3AtdGFnZ2VyJywgaW5kZXgsIGJUYWdnZXJzKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGRpZmYgZXZlcnl0aGluZyBiZWxvdyB0aGUgdGFnZ2Vyc1xuXHRcdFx0ZGlmZkhlbHAoYVN1Yk5vZGUsIGJTdWJOb2RlLCBwYXRjaGVzLCBpbmRleCArIDEpO1xuXHRcdFx0cmV0dXJuO1xuXG5cdFx0Y2FzZSAndGV4dCc6XG5cdFx0XHRpZiAoYS50ZXh0ICE9PSBiLnRleHQpXG5cdFx0XHR7XG5cdFx0XHRcdHBhdGNoZXMucHVzaChtYWtlUGF0Y2goJ3AtdGV4dCcsIGluZGV4LCBiLnRleHQpKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm47XG5cblx0XHRjYXNlICdub2RlJzpcblx0XHRcdC8vIEJhaWwgaWYgb2J2aW91cyBpbmRpY2F0b3JzIGhhdmUgY2hhbmdlZC4gSW1wbGllcyBtb3JlIHNlcmlvdXNcblx0XHRcdC8vIHN0cnVjdHVyYWwgY2hhbmdlcyBzdWNoIHRoYXQgaXQncyBub3Qgd29ydGggaXQgdG8gZGlmZi5cblx0XHRcdGlmIChhLnRhZyAhPT0gYi50YWcgfHwgYS5uYW1lc3BhY2UgIT09IGIubmFtZXNwYWNlKVxuXHRcdFx0e1xuXHRcdFx0XHRwYXRjaGVzLnB1c2gobWFrZVBhdGNoKCdwLXJlZHJhdycsIGluZGV4LCBiKSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGZhY3RzRGlmZiA9IGRpZmZGYWN0cyhhLmZhY3RzLCBiLmZhY3RzKTtcblxuXHRcdFx0aWYgKHR5cGVvZiBmYWN0c0RpZmYgIT09ICd1bmRlZmluZWQnKVxuXHRcdFx0e1xuXHRcdFx0XHRwYXRjaGVzLnB1c2gobWFrZVBhdGNoKCdwLWZhY3RzJywgaW5kZXgsIGZhY3RzRGlmZikpO1xuXHRcdFx0fVxuXG5cdFx0XHRkaWZmQ2hpbGRyZW4oYSwgYiwgcGF0Y2hlcywgaW5kZXgpO1xuXHRcdFx0cmV0dXJuO1xuXG5cdFx0Y2FzZSAna2V5ZWQtbm9kZSc6XG5cdFx0XHQvLyBCYWlsIGlmIG9idmlvdXMgaW5kaWNhdG9ycyBoYXZlIGNoYW5nZWQuIEltcGxpZXMgbW9yZSBzZXJpb3VzXG5cdFx0XHQvLyBzdHJ1Y3R1cmFsIGNoYW5nZXMgc3VjaCB0aGF0IGl0J3Mgbm90IHdvcnRoIGl0IHRvIGRpZmYuXG5cdFx0XHRpZiAoYS50YWcgIT09IGIudGFnIHx8IGEubmFtZXNwYWNlICE9PSBiLm5hbWVzcGFjZSlcblx0XHRcdHtcblx0XHRcdFx0cGF0Y2hlcy5wdXNoKG1ha2VQYXRjaCgncC1yZWRyYXcnLCBpbmRleCwgYikpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHZhciBmYWN0c0RpZmYgPSBkaWZmRmFjdHMoYS5mYWN0cywgYi5mYWN0cyk7XG5cblx0XHRcdGlmICh0eXBlb2YgZmFjdHNEaWZmICE9PSAndW5kZWZpbmVkJylcblx0XHRcdHtcblx0XHRcdFx0cGF0Y2hlcy5wdXNoKG1ha2VQYXRjaCgncC1mYWN0cycsIGluZGV4LCBmYWN0c0RpZmYpKTtcblx0XHRcdH1cblxuXHRcdFx0ZGlmZktleWVkQ2hpbGRyZW4oYSwgYiwgcGF0Y2hlcywgaW5kZXgpO1xuXHRcdFx0cmV0dXJuO1xuXG5cdFx0Y2FzZSAnY3VzdG9tJzpcblx0XHRcdGlmIChhLmltcGwgIT09IGIuaW1wbClcblx0XHRcdHtcblx0XHRcdFx0cGF0Y2hlcy5wdXNoKG1ha2VQYXRjaCgncC1yZWRyYXcnLCBpbmRleCwgYikpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHZhciBmYWN0c0RpZmYgPSBkaWZmRmFjdHMoYS5mYWN0cywgYi5mYWN0cyk7XG5cdFx0XHRpZiAodHlwZW9mIGZhY3RzRGlmZiAhPT0gJ3VuZGVmaW5lZCcpXG5cdFx0XHR7XG5cdFx0XHRcdHBhdGNoZXMucHVzaChtYWtlUGF0Y2goJ3AtZmFjdHMnLCBpbmRleCwgZmFjdHNEaWZmKSk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBwYXRjaCA9IGIuaW1wbC5kaWZmKGEsYik7XG5cdFx0XHRpZiAocGF0Y2gpXG5cdFx0XHR7XG5cdFx0XHRcdHBhdGNoZXMucHVzaChtYWtlUGF0Y2goJ3AtY3VzdG9tJywgaW5kZXgsIHBhdGNoKSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuO1xuXHR9XG59XG5cblxuLy8gYXNzdW1lcyB0aGUgaW5jb21pbmcgYXJyYXlzIGFyZSB0aGUgc2FtZSBsZW5ndGhcbmZ1bmN0aW9uIHBhaXJ3aXNlUmVmRXF1YWwoYXMsIGJzKVxue1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGFzLmxlbmd0aDsgaSsrKVxuXHR7XG5cdFx0aWYgKGFzW2ldICE9PSBic1tpXSlcblx0XHR7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRydWU7XG59XG5cblxuLy8gVE9ETyBJbnN0ZWFkIG9mIGNyZWF0aW5nIGEgbmV3IGRpZmYgb2JqZWN0LCBpdCdzIHBvc3NpYmxlIHRvIGp1c3QgdGVzdCBpZlxuLy8gdGhlcmUgKmlzKiBhIGRpZmYuIER1cmluZyB0aGUgYWN0dWFsIHBhdGNoLCBkbyB0aGUgZGlmZiBhZ2FpbiBhbmQgbWFrZSB0aGVcbi8vIG1vZGlmaWNhdGlvbnMgZGlyZWN0bHkuIFRoaXMgd2F5LCB0aGVyZSdzIG5vIG5ldyBhbGxvY2F0aW9ucy4gV29ydGggaXQ/XG5mdW5jdGlvbiBkaWZmRmFjdHMoYSwgYiwgY2F0ZWdvcnkpXG57XG5cdHZhciBkaWZmO1xuXG5cdC8vIGxvb2sgZm9yIGNoYW5nZXMgYW5kIHJlbW92YWxzXG5cdGZvciAodmFyIGFLZXkgaW4gYSlcblx0e1xuXHRcdGlmIChhS2V5ID09PSBTVFlMRV9LRVkgfHwgYUtleSA9PT0gRVZFTlRfS0VZIHx8IGFLZXkgPT09IEFUVFJfS0VZIHx8IGFLZXkgPT09IEFUVFJfTlNfS0VZKVxuXHRcdHtcblx0XHRcdHZhciBzdWJEaWZmID0gZGlmZkZhY3RzKGFbYUtleV0sIGJbYUtleV0gfHwge30sIGFLZXkpO1xuXHRcdFx0aWYgKHN1YkRpZmYpXG5cdFx0XHR7XG5cdFx0XHRcdGRpZmYgPSBkaWZmIHx8IHt9O1xuXHRcdFx0XHRkaWZmW2FLZXldID0gc3ViRGlmZjtcblx0XHRcdH1cblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIHJlbW92ZSBpZiBub3QgaW4gdGhlIG5ldyBmYWN0c1xuXHRcdGlmICghKGFLZXkgaW4gYikpXG5cdFx0e1xuXHRcdFx0ZGlmZiA9IGRpZmYgfHwge307XG5cdFx0XHRkaWZmW2FLZXldID1cblx0XHRcdFx0KHR5cGVvZiBjYXRlZ29yeSA9PT0gJ3VuZGVmaW5lZCcpXG5cdFx0XHRcdFx0PyAodHlwZW9mIGFbYUtleV0gPT09ICdzdHJpbmcnID8gJycgOiBudWxsKVxuXHRcdFx0XHRcdDpcblx0XHRcdFx0KGNhdGVnb3J5ID09PSBTVFlMRV9LRVkpXG5cdFx0XHRcdFx0PyAnJ1xuXHRcdFx0XHRcdDpcblx0XHRcdFx0KGNhdGVnb3J5ID09PSBFVkVOVF9LRVkgfHwgY2F0ZWdvcnkgPT09IEFUVFJfS0VZKVxuXHRcdFx0XHRcdD8gdW5kZWZpbmVkXG5cdFx0XHRcdFx0OlxuXHRcdFx0XHR7IG5hbWVzcGFjZTogYVthS2V5XS5uYW1lc3BhY2UsIHZhbHVlOiB1bmRlZmluZWQgfTtcblxuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0dmFyIGFWYWx1ZSA9IGFbYUtleV07XG5cdFx0dmFyIGJWYWx1ZSA9IGJbYUtleV07XG5cblx0XHQvLyByZWZlcmVuY2UgZXF1YWwsIHNvIGRvbid0IHdvcnJ5IGFib3V0IGl0XG5cdFx0aWYgKGFWYWx1ZSA9PT0gYlZhbHVlICYmIGFLZXkgIT09ICd2YWx1ZSdcblx0XHRcdHx8IGNhdGVnb3J5ID09PSBFVkVOVF9LRVkgJiYgZXF1YWxFdmVudHMoYVZhbHVlLCBiVmFsdWUpKVxuXHRcdHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGRpZmYgPSBkaWZmIHx8IHt9O1xuXHRcdGRpZmZbYUtleV0gPSBiVmFsdWU7XG5cdH1cblxuXHQvLyBhZGQgbmV3IHN0dWZmXG5cdGZvciAodmFyIGJLZXkgaW4gYilcblx0e1xuXHRcdGlmICghKGJLZXkgaW4gYSkpXG5cdFx0e1xuXHRcdFx0ZGlmZiA9IGRpZmYgfHwge307XG5cdFx0XHRkaWZmW2JLZXldID0gYltiS2V5XTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZGlmZjtcbn1cblxuXG5mdW5jdGlvbiBkaWZmQ2hpbGRyZW4oYVBhcmVudCwgYlBhcmVudCwgcGF0Y2hlcywgcm9vdEluZGV4KVxue1xuXHR2YXIgYUNoaWxkcmVuID0gYVBhcmVudC5jaGlsZHJlbjtcblx0dmFyIGJDaGlsZHJlbiA9IGJQYXJlbnQuY2hpbGRyZW47XG5cblx0dmFyIGFMZW4gPSBhQ2hpbGRyZW4ubGVuZ3RoO1xuXHR2YXIgYkxlbiA9IGJDaGlsZHJlbi5sZW5ndGg7XG5cblx0Ly8gRklHVVJFIE9VVCBJRiBUSEVSRSBBUkUgSU5TRVJUUyBPUiBSRU1PVkFMU1xuXG5cdGlmIChhTGVuID4gYkxlbilcblx0e1xuXHRcdHBhdGNoZXMucHVzaChtYWtlUGF0Y2goJ3AtcmVtb3ZlLWxhc3QnLCByb290SW5kZXgsIGFMZW4gLSBiTGVuKSk7XG5cdH1cblx0ZWxzZSBpZiAoYUxlbiA8IGJMZW4pXG5cdHtcblx0XHRwYXRjaGVzLnB1c2gobWFrZVBhdGNoKCdwLWFwcGVuZCcsIHJvb3RJbmRleCwgYkNoaWxkcmVuLnNsaWNlKGFMZW4pKSk7XG5cdH1cblxuXHQvLyBQQUlSV0lTRSBESUZGIEVWRVJZVEhJTkcgRUxTRVxuXG5cdHZhciBpbmRleCA9IHJvb3RJbmRleDtcblx0dmFyIG1pbkxlbiA9IGFMZW4gPCBiTGVuID8gYUxlbiA6IGJMZW47XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbWluTGVuOyBpKyspXG5cdHtcblx0XHRpbmRleCsrO1xuXHRcdHZhciBhQ2hpbGQgPSBhQ2hpbGRyZW5baV07XG5cdFx0ZGlmZkhlbHAoYUNoaWxkLCBiQ2hpbGRyZW5baV0sIHBhdGNoZXMsIGluZGV4KTtcblx0XHRpbmRleCArPSBhQ2hpbGQuZGVzY2VuZGFudHNDb3VudCB8fCAwO1xuXHR9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8gIEtFWUVEIERJRkYgIC8vLy8vLy8vLy8vL1xuXG5cbmZ1bmN0aW9uIGRpZmZLZXllZENoaWxkcmVuKGFQYXJlbnQsIGJQYXJlbnQsIHBhdGNoZXMsIHJvb3RJbmRleClcbntcblx0dmFyIGxvY2FsUGF0Y2hlcyA9IFtdO1xuXG5cdHZhciBjaGFuZ2VzID0ge307IC8vIERpY3QgU3RyaW5nIEVudHJ5XG5cdHZhciBpbnNlcnRzID0gW107IC8vIEFycmF5IHsgaW5kZXggOiBJbnQsIGVudHJ5IDogRW50cnkgfVxuXHQvLyB0eXBlIEVudHJ5ID0geyB0YWcgOiBTdHJpbmcsIHZub2RlIDogVk5vZGUsIGluZGV4IDogSW50LCBkYXRhIDogXyB9XG5cblx0dmFyIGFDaGlsZHJlbiA9IGFQYXJlbnQuY2hpbGRyZW47XG5cdHZhciBiQ2hpbGRyZW4gPSBiUGFyZW50LmNoaWxkcmVuO1xuXHR2YXIgYUxlbiA9IGFDaGlsZHJlbi5sZW5ndGg7XG5cdHZhciBiTGVuID0gYkNoaWxkcmVuLmxlbmd0aDtcblx0dmFyIGFJbmRleCA9IDA7XG5cdHZhciBiSW5kZXggPSAwO1xuXG5cdHZhciBpbmRleCA9IHJvb3RJbmRleDtcblxuXHR3aGlsZSAoYUluZGV4IDwgYUxlbiAmJiBiSW5kZXggPCBiTGVuKVxuXHR7XG5cdFx0dmFyIGEgPSBhQ2hpbGRyZW5bYUluZGV4XTtcblx0XHR2YXIgYiA9IGJDaGlsZHJlbltiSW5kZXhdO1xuXG5cdFx0dmFyIGFLZXkgPSBhLl8wO1xuXHRcdHZhciBiS2V5ID0gYi5fMDtcblx0XHR2YXIgYU5vZGUgPSBhLl8xO1xuXHRcdHZhciBiTm9kZSA9IGIuXzE7XG5cblx0XHQvLyBjaGVjayBpZiBrZXlzIG1hdGNoXG5cblx0XHRpZiAoYUtleSA9PT0gYktleSlcblx0XHR7XG5cdFx0XHRpbmRleCsrO1xuXHRcdFx0ZGlmZkhlbHAoYU5vZGUsIGJOb2RlLCBsb2NhbFBhdGNoZXMsIGluZGV4KTtcblx0XHRcdGluZGV4ICs9IGFOb2RlLmRlc2NlbmRhbnRzQ291bnQgfHwgMDtcblxuXHRcdFx0YUluZGV4Kys7XG5cdFx0XHRiSW5kZXgrKztcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIGxvb2sgYWhlYWQgMSB0byBkZXRlY3QgaW5zZXJ0aW9ucyBhbmQgcmVtb3ZhbHMuXG5cblx0XHR2YXIgYUxvb2tBaGVhZCA9IGFJbmRleCArIDEgPCBhTGVuO1xuXHRcdHZhciBiTG9va0FoZWFkID0gYkluZGV4ICsgMSA8IGJMZW47XG5cblx0XHRpZiAoYUxvb2tBaGVhZClcblx0XHR7XG5cdFx0XHR2YXIgYU5leHQgPSBhQ2hpbGRyZW5bYUluZGV4ICsgMV07XG5cdFx0XHR2YXIgYU5leHRLZXkgPSBhTmV4dC5fMDtcblx0XHRcdHZhciBhTmV4dE5vZGUgPSBhTmV4dC5fMTtcblx0XHRcdHZhciBvbGRNYXRjaCA9IGJLZXkgPT09IGFOZXh0S2V5O1xuXHRcdH1cblxuXHRcdGlmIChiTG9va0FoZWFkKVxuXHRcdHtcblx0XHRcdHZhciBiTmV4dCA9IGJDaGlsZHJlbltiSW5kZXggKyAxXTtcblx0XHRcdHZhciBiTmV4dEtleSA9IGJOZXh0Ll8wO1xuXHRcdFx0dmFyIGJOZXh0Tm9kZSA9IGJOZXh0Ll8xO1xuXHRcdFx0dmFyIG5ld01hdGNoID0gYUtleSA9PT0gYk5leHRLZXk7XG5cdFx0fVxuXG5cblx0XHQvLyBzd2FwIGEgYW5kIGJcblx0XHRpZiAoYUxvb2tBaGVhZCAmJiBiTG9va0FoZWFkICYmIG5ld01hdGNoICYmIG9sZE1hdGNoKVxuXHRcdHtcblx0XHRcdGluZGV4Kys7XG5cdFx0XHRkaWZmSGVscChhTm9kZSwgYk5leHROb2RlLCBsb2NhbFBhdGNoZXMsIGluZGV4KTtcblx0XHRcdGluc2VydE5vZGUoY2hhbmdlcywgbG9jYWxQYXRjaGVzLCBhS2V5LCBiTm9kZSwgYkluZGV4LCBpbnNlcnRzKTtcblx0XHRcdGluZGV4ICs9IGFOb2RlLmRlc2NlbmRhbnRzQ291bnQgfHwgMDtcblxuXHRcdFx0aW5kZXgrKztcblx0XHRcdHJlbW92ZU5vZGUoY2hhbmdlcywgbG9jYWxQYXRjaGVzLCBhS2V5LCBhTmV4dE5vZGUsIGluZGV4KTtcblx0XHRcdGluZGV4ICs9IGFOZXh0Tm9kZS5kZXNjZW5kYW50c0NvdW50IHx8IDA7XG5cblx0XHRcdGFJbmRleCArPSAyO1xuXHRcdFx0YkluZGV4ICs9IDI7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyBpbnNlcnQgYlxuXHRcdGlmIChiTG9va0FoZWFkICYmIG5ld01hdGNoKVxuXHRcdHtcblx0XHRcdGluZGV4Kys7XG5cdFx0XHRpbnNlcnROb2RlKGNoYW5nZXMsIGxvY2FsUGF0Y2hlcywgYktleSwgYk5vZGUsIGJJbmRleCwgaW5zZXJ0cyk7XG5cdFx0XHRkaWZmSGVscChhTm9kZSwgYk5leHROb2RlLCBsb2NhbFBhdGNoZXMsIGluZGV4KTtcblx0XHRcdGluZGV4ICs9IGFOb2RlLmRlc2NlbmRhbnRzQ291bnQgfHwgMDtcblxuXHRcdFx0YUluZGV4ICs9IDE7XG5cdFx0XHRiSW5kZXggKz0gMjtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIHJlbW92ZSBhXG5cdFx0aWYgKGFMb29rQWhlYWQgJiYgb2xkTWF0Y2gpXG5cdFx0e1xuXHRcdFx0aW5kZXgrKztcblx0XHRcdHJlbW92ZU5vZGUoY2hhbmdlcywgbG9jYWxQYXRjaGVzLCBhS2V5LCBhTm9kZSwgaW5kZXgpO1xuXHRcdFx0aW5kZXggKz0gYU5vZGUuZGVzY2VuZGFudHNDb3VudCB8fCAwO1xuXG5cdFx0XHRpbmRleCsrO1xuXHRcdFx0ZGlmZkhlbHAoYU5leHROb2RlLCBiTm9kZSwgbG9jYWxQYXRjaGVzLCBpbmRleCk7XG5cdFx0XHRpbmRleCArPSBhTmV4dE5vZGUuZGVzY2VuZGFudHNDb3VudCB8fCAwO1xuXG5cdFx0XHRhSW5kZXggKz0gMjtcblx0XHRcdGJJbmRleCArPSAxO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gcmVtb3ZlIGEsIGluc2VydCBiXG5cdFx0aWYgKGFMb29rQWhlYWQgJiYgYkxvb2tBaGVhZCAmJiBhTmV4dEtleSA9PT0gYk5leHRLZXkpXG5cdFx0e1xuXHRcdFx0aW5kZXgrKztcblx0XHRcdHJlbW92ZU5vZGUoY2hhbmdlcywgbG9jYWxQYXRjaGVzLCBhS2V5LCBhTm9kZSwgaW5kZXgpO1xuXHRcdFx0aW5zZXJ0Tm9kZShjaGFuZ2VzLCBsb2NhbFBhdGNoZXMsIGJLZXksIGJOb2RlLCBiSW5kZXgsIGluc2VydHMpO1xuXHRcdFx0aW5kZXggKz0gYU5vZGUuZGVzY2VuZGFudHNDb3VudCB8fCAwO1xuXG5cdFx0XHRpbmRleCsrO1xuXHRcdFx0ZGlmZkhlbHAoYU5leHROb2RlLCBiTmV4dE5vZGUsIGxvY2FsUGF0Y2hlcywgaW5kZXgpO1xuXHRcdFx0aW5kZXggKz0gYU5leHROb2RlLmRlc2NlbmRhbnRzQ291bnQgfHwgMDtcblxuXHRcdFx0YUluZGV4ICs9IDI7XG5cdFx0XHRiSW5kZXggKz0gMjtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGJyZWFrO1xuXHR9XG5cblx0Ly8gZWF0IHVwIGFueSByZW1haW5pbmcgbm9kZXMgd2l0aCByZW1vdmVOb2RlIGFuZCBpbnNlcnROb2RlXG5cblx0d2hpbGUgKGFJbmRleCA8IGFMZW4pXG5cdHtcblx0XHRpbmRleCsrO1xuXHRcdHZhciBhID0gYUNoaWxkcmVuW2FJbmRleF07XG5cdFx0dmFyIGFOb2RlID0gYS5fMTtcblx0XHRyZW1vdmVOb2RlKGNoYW5nZXMsIGxvY2FsUGF0Y2hlcywgYS5fMCwgYU5vZGUsIGluZGV4KTtcblx0XHRpbmRleCArPSBhTm9kZS5kZXNjZW5kYW50c0NvdW50IHx8IDA7XG5cdFx0YUluZGV4Kys7XG5cdH1cblxuXHR2YXIgZW5kSW5zZXJ0cztcblx0d2hpbGUgKGJJbmRleCA8IGJMZW4pXG5cdHtcblx0XHRlbmRJbnNlcnRzID0gZW5kSW5zZXJ0cyB8fCBbXTtcblx0XHR2YXIgYiA9IGJDaGlsZHJlbltiSW5kZXhdO1xuXHRcdGluc2VydE5vZGUoY2hhbmdlcywgbG9jYWxQYXRjaGVzLCBiLl8wLCBiLl8xLCB1bmRlZmluZWQsIGVuZEluc2VydHMpO1xuXHRcdGJJbmRleCsrO1xuXHR9XG5cblx0aWYgKGxvY2FsUGF0Y2hlcy5sZW5ndGggPiAwIHx8IGluc2VydHMubGVuZ3RoID4gMCB8fCB0eXBlb2YgZW5kSW5zZXJ0cyAhPT0gJ3VuZGVmaW5lZCcpXG5cdHtcblx0XHRwYXRjaGVzLnB1c2gobWFrZVBhdGNoKCdwLXJlb3JkZXInLCByb290SW5kZXgsIHtcblx0XHRcdHBhdGNoZXM6IGxvY2FsUGF0Y2hlcyxcblx0XHRcdGluc2VydHM6IGluc2VydHMsXG5cdFx0XHRlbmRJbnNlcnRzOiBlbmRJbnNlcnRzXG5cdFx0fSkpO1xuXHR9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8gIENIQU5HRVMgRlJPTSBLRVlFRCBESUZGICAvLy8vLy8vLy8vLy9cblxuXG52YXIgUE9TVEZJWCA9ICdfZWxtVzZCTCc7XG5cblxuZnVuY3Rpb24gaW5zZXJ0Tm9kZShjaGFuZ2VzLCBsb2NhbFBhdGNoZXMsIGtleSwgdm5vZGUsIGJJbmRleCwgaW5zZXJ0cylcbntcblx0dmFyIGVudHJ5ID0gY2hhbmdlc1trZXldO1xuXG5cdC8vIG5ldmVyIHNlZW4gdGhpcyBrZXkgYmVmb3JlXG5cdGlmICh0eXBlb2YgZW50cnkgPT09ICd1bmRlZmluZWQnKVxuXHR7XG5cdFx0ZW50cnkgPSB7XG5cdFx0XHR0YWc6ICdpbnNlcnQnLFxuXHRcdFx0dm5vZGU6IHZub2RlLFxuXHRcdFx0aW5kZXg6IGJJbmRleCxcblx0XHRcdGRhdGE6IHVuZGVmaW5lZFxuXHRcdH07XG5cblx0XHRpbnNlcnRzLnB1c2goeyBpbmRleDogYkluZGV4LCBlbnRyeTogZW50cnkgfSk7XG5cdFx0Y2hhbmdlc1trZXldID0gZW50cnk7XG5cblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyB0aGlzIGtleSB3YXMgcmVtb3ZlZCBlYXJsaWVyLCBhIG1hdGNoIVxuXHRpZiAoZW50cnkudGFnID09PSAncmVtb3ZlJylcblx0e1xuXHRcdGluc2VydHMucHVzaCh7IGluZGV4OiBiSW5kZXgsIGVudHJ5OiBlbnRyeSB9KTtcblxuXHRcdGVudHJ5LnRhZyA9ICdtb3ZlJztcblx0XHR2YXIgc3ViUGF0Y2hlcyA9IFtdO1xuXHRcdGRpZmZIZWxwKGVudHJ5LnZub2RlLCB2bm9kZSwgc3ViUGF0Y2hlcywgZW50cnkuaW5kZXgpO1xuXHRcdGVudHJ5LmluZGV4ID0gYkluZGV4O1xuXHRcdGVudHJ5LmRhdGEuZGF0YSA9IHtcblx0XHRcdHBhdGNoZXM6IHN1YlBhdGNoZXMsXG5cdFx0XHRlbnRyeTogZW50cnlcblx0XHR9O1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gdGhpcyBrZXkgaGFzIGFscmVhZHkgYmVlbiBpbnNlcnRlZCBvciBtb3ZlZCwgYSBkdXBsaWNhdGUhXG5cdGluc2VydE5vZGUoY2hhbmdlcywgbG9jYWxQYXRjaGVzLCBrZXkgKyBQT1NURklYLCB2bm9kZSwgYkluZGV4LCBpbnNlcnRzKTtcbn1cblxuXG5mdW5jdGlvbiByZW1vdmVOb2RlKGNoYW5nZXMsIGxvY2FsUGF0Y2hlcywga2V5LCB2bm9kZSwgaW5kZXgpXG57XG5cdHZhciBlbnRyeSA9IGNoYW5nZXNba2V5XTtcblxuXHQvLyBuZXZlciBzZWVuIHRoaXMga2V5IGJlZm9yZVxuXHRpZiAodHlwZW9mIGVudHJ5ID09PSAndW5kZWZpbmVkJylcblx0e1xuXHRcdHZhciBwYXRjaCA9IG1ha2VQYXRjaCgncC1yZW1vdmUnLCBpbmRleCwgdW5kZWZpbmVkKTtcblx0XHRsb2NhbFBhdGNoZXMucHVzaChwYXRjaCk7XG5cblx0XHRjaGFuZ2VzW2tleV0gPSB7XG5cdFx0XHR0YWc6ICdyZW1vdmUnLFxuXHRcdFx0dm5vZGU6IHZub2RlLFxuXHRcdFx0aW5kZXg6IGluZGV4LFxuXHRcdFx0ZGF0YTogcGF0Y2hcblx0XHR9O1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gdGhpcyBrZXkgd2FzIGluc2VydGVkIGVhcmxpZXIsIGEgbWF0Y2ghXG5cdGlmIChlbnRyeS50YWcgPT09ICdpbnNlcnQnKVxuXHR7XG5cdFx0ZW50cnkudGFnID0gJ21vdmUnO1xuXHRcdHZhciBzdWJQYXRjaGVzID0gW107XG5cdFx0ZGlmZkhlbHAodm5vZGUsIGVudHJ5LnZub2RlLCBzdWJQYXRjaGVzLCBpbmRleCk7XG5cblx0XHR2YXIgcGF0Y2ggPSBtYWtlUGF0Y2goJ3AtcmVtb3ZlJywgaW5kZXgsIHtcblx0XHRcdHBhdGNoZXM6IHN1YlBhdGNoZXMsXG5cdFx0XHRlbnRyeTogZW50cnlcblx0XHR9KTtcblx0XHRsb2NhbFBhdGNoZXMucHVzaChwYXRjaCk7XG5cblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyB0aGlzIGtleSBoYXMgYWxyZWFkeSBiZWVuIHJlbW92ZWQgb3IgbW92ZWQsIGEgZHVwbGljYXRlIVxuXHRyZW1vdmVOb2RlKGNoYW5nZXMsIGxvY2FsUGF0Y2hlcywga2V5ICsgUE9TVEZJWCwgdm5vZGUsIGluZGV4KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLyAgQUREIERPTSBOT0RFUyAgLy8vLy8vLy8vLy8vXG4vL1xuLy8gRWFjaCBET00gbm9kZSBoYXMgYW4gXCJpbmRleFwiIGFzc2lnbmVkIGluIG9yZGVyIG9mIHRyYXZlcnNhbC4gSXQgaXMgaW1wb3J0YW50XG4vLyB0byBtaW5pbWl6ZSBvdXIgY3Jhd2wgb3ZlciB0aGUgYWN0dWFsIERPTSwgc28gdGhlc2UgaW5kZXhlcyAoYWxvbmcgd2l0aCB0aGVcbi8vIGRlc2NlbmRhbnRzQ291bnQgb2YgdmlydHVhbCBub2RlcykgbGV0IHVzIHNraXAgdG91Y2hpbmcgZW50aXJlIHN1YnRyZWVzIG9mXG4vLyB0aGUgRE9NIGlmIHdlIGtub3cgdGhlcmUgYXJlIG5vIHBhdGNoZXMgdGhlcmUuXG5cblxuZnVuY3Rpb24gYWRkRG9tTm9kZXMoZG9tTm9kZSwgdk5vZGUsIHBhdGNoZXMsIGV2ZW50Tm9kZSlcbntcblx0YWRkRG9tTm9kZXNIZWxwKGRvbU5vZGUsIHZOb2RlLCBwYXRjaGVzLCAwLCAwLCB2Tm9kZS5kZXNjZW5kYW50c0NvdW50LCBldmVudE5vZGUpO1xufVxuXG5cbi8vIGFzc3VtZXMgYHBhdGNoZXNgIGlzIG5vbi1lbXB0eSBhbmQgaW5kZXhlcyBpbmNyZWFzZSBtb25vdG9uaWNhbGx5LlxuZnVuY3Rpb24gYWRkRG9tTm9kZXNIZWxwKGRvbU5vZGUsIHZOb2RlLCBwYXRjaGVzLCBpLCBsb3csIGhpZ2gsIGV2ZW50Tm9kZSlcbntcblx0dmFyIHBhdGNoID0gcGF0Y2hlc1tpXTtcblx0dmFyIGluZGV4ID0gcGF0Y2guaW5kZXg7XG5cblx0d2hpbGUgKGluZGV4ID09PSBsb3cpXG5cdHtcblx0XHR2YXIgcGF0Y2hUeXBlID0gcGF0Y2gudHlwZTtcblxuXHRcdGlmIChwYXRjaFR5cGUgPT09ICdwLXRodW5rJylcblx0XHR7XG5cdFx0XHRhZGREb21Ob2Rlcyhkb21Ob2RlLCB2Tm9kZS5ub2RlLCBwYXRjaC5kYXRhLCBldmVudE5vZGUpO1xuXHRcdH1cblx0XHRlbHNlIGlmIChwYXRjaFR5cGUgPT09ICdwLXJlb3JkZXInKVxuXHRcdHtcblx0XHRcdHBhdGNoLmRvbU5vZGUgPSBkb21Ob2RlO1xuXHRcdFx0cGF0Y2guZXZlbnROb2RlID0gZXZlbnROb2RlO1xuXG5cdFx0XHR2YXIgc3ViUGF0Y2hlcyA9IHBhdGNoLmRhdGEucGF0Y2hlcztcblx0XHRcdGlmIChzdWJQYXRjaGVzLmxlbmd0aCA+IDApXG5cdFx0XHR7XG5cdFx0XHRcdGFkZERvbU5vZGVzSGVscChkb21Ob2RlLCB2Tm9kZSwgc3ViUGF0Y2hlcywgMCwgbG93LCBoaWdoLCBldmVudE5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlIGlmIChwYXRjaFR5cGUgPT09ICdwLXJlbW92ZScpXG5cdFx0e1xuXHRcdFx0cGF0Y2guZG9tTm9kZSA9IGRvbU5vZGU7XG5cdFx0XHRwYXRjaC5ldmVudE5vZGUgPSBldmVudE5vZGU7XG5cblx0XHRcdHZhciBkYXRhID0gcGF0Y2guZGF0YTtcblx0XHRcdGlmICh0eXBlb2YgZGF0YSAhPT0gJ3VuZGVmaW5lZCcpXG5cdFx0XHR7XG5cdFx0XHRcdGRhdGEuZW50cnkuZGF0YSA9IGRvbU5vZGU7XG5cdFx0XHRcdHZhciBzdWJQYXRjaGVzID0gZGF0YS5wYXRjaGVzO1xuXHRcdFx0XHRpZiAoc3ViUGF0Y2hlcy5sZW5ndGggPiAwKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0YWRkRG9tTm9kZXNIZWxwKGRvbU5vZGUsIHZOb2RlLCBzdWJQYXRjaGVzLCAwLCBsb3csIGhpZ2gsIGV2ZW50Tm9kZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZVxuXHRcdHtcblx0XHRcdHBhdGNoLmRvbU5vZGUgPSBkb21Ob2RlO1xuXHRcdFx0cGF0Y2guZXZlbnROb2RlID0gZXZlbnROb2RlO1xuXHRcdH1cblxuXHRcdGkrKztcblxuXHRcdGlmICghKHBhdGNoID0gcGF0Y2hlc1tpXSkgfHwgKGluZGV4ID0gcGF0Y2guaW5kZXgpID4gaGlnaClcblx0XHR7XG5cdFx0XHRyZXR1cm4gaTtcblx0XHR9XG5cdH1cblxuXHRzd2l0Y2ggKHZOb2RlLnR5cGUpXG5cdHtcblx0XHRjYXNlICd0YWdnZXInOlxuXHRcdFx0dmFyIHN1Yk5vZGUgPSB2Tm9kZS5ub2RlO1xuXG5cdFx0XHR3aGlsZSAoc3ViTm9kZS50eXBlID09PSBcInRhZ2dlclwiKVxuXHRcdFx0e1xuXHRcdFx0XHRzdWJOb2RlID0gc3ViTm9kZS5ub2RlO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gYWRkRG9tTm9kZXNIZWxwKGRvbU5vZGUsIHN1Yk5vZGUsIHBhdGNoZXMsIGksIGxvdyArIDEsIGhpZ2gsIGRvbU5vZGUuZWxtX2V2ZW50X25vZGVfcmVmKTtcblxuXHRcdGNhc2UgJ25vZGUnOlxuXHRcdFx0dmFyIHZDaGlsZHJlbiA9IHZOb2RlLmNoaWxkcmVuO1xuXHRcdFx0dmFyIGNoaWxkTm9kZXMgPSBkb21Ob2RlLmNoaWxkTm9kZXM7XG5cdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IHZDaGlsZHJlbi5sZW5ndGg7IGorKylcblx0XHRcdHtcblx0XHRcdFx0bG93Kys7XG5cdFx0XHRcdHZhciB2Q2hpbGQgPSB2Q2hpbGRyZW5bal07XG5cdFx0XHRcdHZhciBuZXh0TG93ID0gbG93ICsgKHZDaGlsZC5kZXNjZW5kYW50c0NvdW50IHx8IDApO1xuXHRcdFx0XHRpZiAobG93IDw9IGluZGV4ICYmIGluZGV4IDw9IG5leHRMb3cpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpID0gYWRkRG9tTm9kZXNIZWxwKGNoaWxkTm9kZXNbal0sIHZDaGlsZCwgcGF0Y2hlcywgaSwgbG93LCBuZXh0TG93LCBldmVudE5vZGUpO1xuXHRcdFx0XHRcdGlmICghKHBhdGNoID0gcGF0Y2hlc1tpXSkgfHwgKGluZGV4ID0gcGF0Y2guaW5kZXgpID4gaGlnaClcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRyZXR1cm4gaTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0bG93ID0gbmV4dExvdztcblx0XHRcdH1cblx0XHRcdHJldHVybiBpO1xuXG5cdFx0Y2FzZSAna2V5ZWQtbm9kZSc6XG5cdFx0XHR2YXIgdkNoaWxkcmVuID0gdk5vZGUuY2hpbGRyZW47XG5cdFx0XHR2YXIgY2hpbGROb2RlcyA9IGRvbU5vZGUuY2hpbGROb2Rlcztcblx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgdkNoaWxkcmVuLmxlbmd0aDsgaisrKVxuXHRcdFx0e1xuXHRcdFx0XHRsb3crKztcblx0XHRcdFx0dmFyIHZDaGlsZCA9IHZDaGlsZHJlbltqXS5fMTtcblx0XHRcdFx0dmFyIG5leHRMb3cgPSBsb3cgKyAodkNoaWxkLmRlc2NlbmRhbnRzQ291bnQgfHwgMCk7XG5cdFx0XHRcdGlmIChsb3cgPD0gaW5kZXggJiYgaW5kZXggPD0gbmV4dExvdylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGkgPSBhZGREb21Ob2Rlc0hlbHAoY2hpbGROb2Rlc1tqXSwgdkNoaWxkLCBwYXRjaGVzLCBpLCBsb3csIG5leHRMb3csIGV2ZW50Tm9kZSk7XG5cdFx0XHRcdFx0aWYgKCEocGF0Y2ggPSBwYXRjaGVzW2ldKSB8fCAoaW5kZXggPSBwYXRjaC5pbmRleCkgPiBoaWdoKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHJldHVybiBpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRsb3cgPSBuZXh0TG93O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGk7XG5cblx0XHRjYXNlICd0ZXh0Jzpcblx0XHRjYXNlICd0aHVuayc6XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ3Nob3VsZCBuZXZlciB0cmF2ZXJzZSBgdGV4dGAgb3IgYHRodW5rYCBub2RlcyBsaWtlIHRoaXMnKTtcblx0fVxufVxuXG5cblxuLy8vLy8vLy8vLy8vICBBUFBMWSBQQVRDSEVTICAvLy8vLy8vLy8vLy9cblxuXG5mdW5jdGlvbiBhcHBseVBhdGNoZXMocm9vdERvbU5vZGUsIG9sZFZpcnR1YWxOb2RlLCBwYXRjaGVzLCBldmVudE5vZGUpXG57XG5cdGlmIChwYXRjaGVzLmxlbmd0aCA9PT0gMClcblx0e1xuXHRcdHJldHVybiByb290RG9tTm9kZTtcblx0fVxuXG5cdGFkZERvbU5vZGVzKHJvb3REb21Ob2RlLCBvbGRWaXJ0dWFsTm9kZSwgcGF0Y2hlcywgZXZlbnROb2RlKTtcblx0cmV0dXJuIGFwcGx5UGF0Y2hlc0hlbHAocm9vdERvbU5vZGUsIHBhdGNoZXMpO1xufVxuXG5mdW5jdGlvbiBhcHBseVBhdGNoZXNIZWxwKHJvb3REb21Ob2RlLCBwYXRjaGVzKVxue1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHBhdGNoZXMubGVuZ3RoOyBpKyspXG5cdHtcblx0XHR2YXIgcGF0Y2ggPSBwYXRjaGVzW2ldO1xuXHRcdHZhciBsb2NhbERvbU5vZGUgPSBwYXRjaC5kb21Ob2RlXG5cdFx0dmFyIG5ld05vZGUgPSBhcHBseVBhdGNoKGxvY2FsRG9tTm9kZSwgcGF0Y2gpO1xuXHRcdGlmIChsb2NhbERvbU5vZGUgPT09IHJvb3REb21Ob2RlKVxuXHRcdHtcblx0XHRcdHJvb3REb21Ob2RlID0gbmV3Tm9kZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJvb3REb21Ob2RlO1xufVxuXG5mdW5jdGlvbiBhcHBseVBhdGNoKGRvbU5vZGUsIHBhdGNoKVxue1xuXHRzd2l0Y2ggKHBhdGNoLnR5cGUpXG5cdHtcblx0XHRjYXNlICdwLXJlZHJhdyc6XG5cdFx0XHRyZXR1cm4gYXBwbHlQYXRjaFJlZHJhdyhkb21Ob2RlLCBwYXRjaC5kYXRhLCBwYXRjaC5ldmVudE5vZGUpO1xuXG5cdFx0Y2FzZSAncC1mYWN0cyc6XG5cdFx0XHRhcHBseUZhY3RzKGRvbU5vZGUsIHBhdGNoLmV2ZW50Tm9kZSwgcGF0Y2guZGF0YSk7XG5cdFx0XHRyZXR1cm4gZG9tTm9kZTtcblxuXHRcdGNhc2UgJ3AtdGV4dCc6XG5cdFx0XHRkb21Ob2RlLnJlcGxhY2VEYXRhKDAsIGRvbU5vZGUubGVuZ3RoLCBwYXRjaC5kYXRhKTtcblx0XHRcdHJldHVybiBkb21Ob2RlO1xuXG5cdFx0Y2FzZSAncC10aHVuayc6XG5cdFx0XHRyZXR1cm4gYXBwbHlQYXRjaGVzSGVscChkb21Ob2RlLCBwYXRjaC5kYXRhKTtcblxuXHRcdGNhc2UgJ3AtdGFnZ2VyJzpcblx0XHRcdGlmICh0eXBlb2YgZG9tTm9kZS5lbG1fZXZlbnRfbm9kZV9yZWYgIT09ICd1bmRlZmluZWQnKVxuXHRcdFx0e1xuXHRcdFx0XHRkb21Ob2RlLmVsbV9ldmVudF9ub2RlX3JlZi50YWdnZXIgPSBwYXRjaC5kYXRhO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZVxuXHRcdFx0e1xuXHRcdFx0XHRkb21Ob2RlLmVsbV9ldmVudF9ub2RlX3JlZiA9IHsgdGFnZ2VyOiBwYXRjaC5kYXRhLCBwYXJlbnQ6IHBhdGNoLmV2ZW50Tm9kZSB9O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGRvbU5vZGU7XG5cblx0XHRjYXNlICdwLXJlbW92ZS1sYXN0Jzpcblx0XHRcdHZhciBpID0gcGF0Y2guZGF0YTtcblx0XHRcdHdoaWxlIChpLS0pXG5cdFx0XHR7XG5cdFx0XHRcdGRvbU5vZGUucmVtb3ZlQ2hpbGQoZG9tTm9kZS5sYXN0Q2hpbGQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGRvbU5vZGU7XG5cblx0XHRjYXNlICdwLWFwcGVuZCc6XG5cdFx0XHR2YXIgbmV3Tm9kZXMgPSBwYXRjaC5kYXRhO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBuZXdOb2Rlcy5sZW5ndGg7IGkrKylcblx0XHRcdHtcblx0XHRcdFx0ZG9tTm9kZS5hcHBlbmRDaGlsZChyZW5kZXIobmV3Tm9kZXNbaV0sIHBhdGNoLmV2ZW50Tm9kZSkpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGRvbU5vZGU7XG5cblx0XHRjYXNlICdwLXJlbW92ZSc6XG5cdFx0XHR2YXIgZGF0YSA9IHBhdGNoLmRhdGE7XG5cdFx0XHRpZiAodHlwZW9mIGRhdGEgPT09ICd1bmRlZmluZWQnKVxuXHRcdFx0e1xuXHRcdFx0XHRkb21Ob2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9tTm9kZSk7XG5cdFx0XHRcdHJldHVybiBkb21Ob2RlO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGVudHJ5ID0gZGF0YS5lbnRyeTtcblx0XHRcdGlmICh0eXBlb2YgZW50cnkuaW5kZXggIT09ICd1bmRlZmluZWQnKVxuXHRcdFx0e1xuXHRcdFx0XHRkb21Ob2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9tTm9kZSk7XG5cdFx0XHR9XG5cdFx0XHRlbnRyeS5kYXRhID0gYXBwbHlQYXRjaGVzSGVscChkb21Ob2RlLCBkYXRhLnBhdGNoZXMpO1xuXHRcdFx0cmV0dXJuIGRvbU5vZGU7XG5cblx0XHRjYXNlICdwLXJlb3JkZXInOlxuXHRcdFx0cmV0dXJuIGFwcGx5UGF0Y2hSZW9yZGVyKGRvbU5vZGUsIHBhdGNoKTtcblxuXHRcdGNhc2UgJ3AtY3VzdG9tJzpcblx0XHRcdHZhciBpbXBsID0gcGF0Y2guZGF0YTtcblx0XHRcdHJldHVybiBpbXBsLmFwcGx5UGF0Y2goZG9tTm9kZSwgaW1wbC5kYXRhKTtcblxuXHRcdGRlZmF1bHQ6XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1JhbiBpbnRvIGFuIHVua25vd24gcGF0Y2ghJyk7XG5cdH1cbn1cblxuXG5mdW5jdGlvbiBhcHBseVBhdGNoUmVkcmF3KGRvbU5vZGUsIHZOb2RlLCBldmVudE5vZGUpXG57XG5cdHZhciBwYXJlbnROb2RlID0gZG9tTm9kZS5wYXJlbnROb2RlO1xuXHR2YXIgbmV3Tm9kZSA9IHJlbmRlcih2Tm9kZSwgZXZlbnROb2RlKTtcblxuXHRpZiAodHlwZW9mIG5ld05vZGUuZWxtX2V2ZW50X25vZGVfcmVmID09PSAndW5kZWZpbmVkJylcblx0e1xuXHRcdG5ld05vZGUuZWxtX2V2ZW50X25vZGVfcmVmID0gZG9tTm9kZS5lbG1fZXZlbnRfbm9kZV9yZWY7XG5cdH1cblxuXHRpZiAocGFyZW50Tm9kZSAmJiBuZXdOb2RlICE9PSBkb21Ob2RlKVxuXHR7XG5cdFx0cGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3Tm9kZSwgZG9tTm9kZSk7XG5cdH1cblx0cmV0dXJuIG5ld05vZGU7XG59XG5cblxuZnVuY3Rpb24gYXBwbHlQYXRjaFJlb3JkZXIoZG9tTm9kZSwgcGF0Y2gpXG57XG5cdHZhciBkYXRhID0gcGF0Y2guZGF0YTtcblxuXHQvLyByZW1vdmUgZW5kIGluc2VydHNcblx0dmFyIGZyYWcgPSBhcHBseVBhdGNoUmVvcmRlckVuZEluc2VydHNIZWxwKGRhdGEuZW5kSW5zZXJ0cywgcGF0Y2gpO1xuXG5cdC8vIHJlbW92YWxzXG5cdGRvbU5vZGUgPSBhcHBseVBhdGNoZXNIZWxwKGRvbU5vZGUsIGRhdGEucGF0Y2hlcyk7XG5cblx0Ly8gaW5zZXJ0c1xuXHR2YXIgaW5zZXJ0cyA9IGRhdGEuaW5zZXJ0cztcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBpbnNlcnRzLmxlbmd0aDsgaSsrKVxuXHR7XG5cdFx0dmFyIGluc2VydCA9IGluc2VydHNbaV07XG5cdFx0dmFyIGVudHJ5ID0gaW5zZXJ0LmVudHJ5O1xuXHRcdHZhciBub2RlID0gZW50cnkudGFnID09PSAnbW92ZSdcblx0XHRcdD8gZW50cnkuZGF0YVxuXHRcdFx0OiByZW5kZXIoZW50cnkudm5vZGUsIHBhdGNoLmV2ZW50Tm9kZSk7XG5cdFx0ZG9tTm9kZS5pbnNlcnRCZWZvcmUobm9kZSwgZG9tTm9kZS5jaGlsZE5vZGVzW2luc2VydC5pbmRleF0pO1xuXHR9XG5cblx0Ly8gYWRkIGVuZCBpbnNlcnRzXG5cdGlmICh0eXBlb2YgZnJhZyAhPT0gJ3VuZGVmaW5lZCcpXG5cdHtcblx0XHRkb21Ob2RlLmFwcGVuZENoaWxkKGZyYWcpO1xuXHR9XG5cblx0cmV0dXJuIGRvbU5vZGU7XG59XG5cblxuZnVuY3Rpb24gYXBwbHlQYXRjaFJlb3JkZXJFbmRJbnNlcnRzSGVscChlbmRJbnNlcnRzLCBwYXRjaClcbntcblx0aWYgKHR5cGVvZiBlbmRJbnNlcnRzID09PSAndW5kZWZpbmVkJylcblx0e1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHZhciBmcmFnID0gbG9jYWxEb2MuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGVuZEluc2VydHMubGVuZ3RoOyBpKyspXG5cdHtcblx0XHR2YXIgaW5zZXJ0ID0gZW5kSW5zZXJ0c1tpXTtcblx0XHR2YXIgZW50cnkgPSBpbnNlcnQuZW50cnk7XG5cdFx0ZnJhZy5hcHBlbmRDaGlsZChlbnRyeS50YWcgPT09ICdtb3ZlJ1xuXHRcdFx0PyBlbnRyeS5kYXRhXG5cdFx0XHQ6IHJlbmRlcihlbnRyeS52bm9kZSwgcGF0Y2guZXZlbnROb2RlKVxuXHRcdCk7XG5cdH1cblx0cmV0dXJuIGZyYWc7XG59XG5cblxuLy8gUFJPR1JBTVNcblxudmFyIHByb2dyYW0gPSBtYWtlUHJvZ3JhbShjaGVja05vRmxhZ3MpO1xudmFyIHByb2dyYW1XaXRoRmxhZ3MgPSBtYWtlUHJvZ3JhbShjaGVja1llc0ZsYWdzKTtcblxuZnVuY3Rpb24gbWFrZVByb2dyYW0oZmxhZ0NoZWNrZXIpXG57XG5cdHJldHVybiBGMihmdW5jdGlvbihkZWJ1Z1dyYXAsIGltcGwpXG5cdHtcblx0XHRyZXR1cm4gZnVuY3Rpb24oZmxhZ0RlY29kZXIpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKG9iamVjdCwgbW9kdWxlTmFtZSwgZGVidWdNZXRhZGF0YSlcblx0XHRcdHtcblx0XHRcdFx0dmFyIGNoZWNrZXIgPSBmbGFnQ2hlY2tlcihmbGFnRGVjb2RlciwgbW9kdWxlTmFtZSk7XG5cdFx0XHRcdGlmICh0eXBlb2YgZGVidWdNZXRhZGF0YSA9PT0gJ3VuZGVmaW5lZCcpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRub3JtYWxTZXR1cChpbXBsLCBvYmplY3QsIG1vZHVsZU5hbWUsIGNoZWNrZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGRlYnVnU2V0dXAoQTIoZGVidWdXcmFwLCBkZWJ1Z01ldGFkYXRhLCBpbXBsKSwgb2JqZWN0LCBtb2R1bGVOYW1lLCBjaGVja2VyKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9O1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gc3RhdGljUHJvZ3JhbSh2Tm9kZSlcbntcblx0dmFyIG5vdGhpbmcgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMuVHVwbGUyKFxuXHRcdF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy5UdXBsZTAsXG5cdFx0X2VsbV9sYW5nJGNvcmUkUGxhdGZvcm1fQ21kJG5vbmVcblx0KTtcblx0cmV0dXJuIEEyKHByb2dyYW0sIF9lbG1fbGFuZyR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tX0RlYnVnJHdyYXAsIHtcblx0XHRpbml0OiBub3RoaW5nLFxuXHRcdHZpZXc6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdk5vZGU7IH0sXG5cdFx0dXBkYXRlOiBGMihmdW5jdGlvbigpIHsgcmV0dXJuIG5vdGhpbmc7IH0pLFxuXHRcdHN1YnNjcmlwdGlvbnM6IGZ1bmN0aW9uKCkgeyByZXR1cm4gX2VsbV9sYW5nJGNvcmUkUGxhdGZvcm1fU3ViJG5vbmU7IH1cblx0fSkoKTtcbn1cblxuXG4vLyBGTEFHIENIRUNLRVJTXG5cbmZ1bmN0aW9uIGNoZWNrTm9GbGFncyhmbGFnRGVjb2RlciwgbW9kdWxlTmFtZSlcbntcblx0cmV0dXJuIGZ1bmN0aW9uKGluaXQsIGZsYWdzLCBkb21Ob2RlKVxuXHR7XG5cdFx0aWYgKHR5cGVvZiBmbGFncyA9PT0gJ3VuZGVmaW5lZCcpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIGluaXQ7XG5cdFx0fVxuXG5cdFx0dmFyIGVycm9yTWVzc2FnZSA9XG5cdFx0XHQnVGhlIGAnICsgbW9kdWxlTmFtZSArICdgIG1vZHVsZSBkb2VzIG5vdCBuZWVkIGZsYWdzLlxcbidcblx0XHRcdCsgJ0luaXRpYWxpemUgaXQgd2l0aCBubyBhcmd1bWVudHMgYW5kIHlvdSBzaG91bGQgYmUgYWxsIHNldCEnO1xuXG5cdFx0Y3Jhc2goZXJyb3JNZXNzYWdlLCBkb21Ob2RlKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gY2hlY2tZZXNGbGFncyhmbGFnRGVjb2RlciwgbW9kdWxlTmFtZSlcbntcblx0cmV0dXJuIGZ1bmN0aW9uKGluaXQsIGZsYWdzLCBkb21Ob2RlKVxuXHR7XG5cdFx0aWYgKHR5cGVvZiBmbGFnRGVjb2RlciA9PT0gJ3VuZGVmaW5lZCcpXG5cdFx0e1xuXHRcdFx0dmFyIGVycm9yTWVzc2FnZSA9XG5cdFx0XHRcdCdBcmUgeW91IHRyeWluZyB0byBzbmVhayBhIE5ldmVyIHZhbHVlIGludG8gRWxtPyBUcmlja3N0ZXIhXFxuJ1xuXHRcdFx0XHQrICdJdCBsb29rcyBsaWtlICcgKyBtb2R1bGVOYW1lICsgJy5tYWluIGlzIGRlZmluZWQgd2l0aCBgcHJvZ3JhbVdpdGhGbGFnc2AgYnV0IGhhcyB0eXBlIGBQcm9ncmFtIE5ldmVyYC5cXG4nXG5cdFx0XHRcdCsgJ1VzZSBgcHJvZ3JhbWAgaW5zdGVhZCBpZiB5b3UgZG8gbm90IHdhbnQgZmxhZ3MuJ1xuXG5cdFx0XHRjcmFzaChlcnJvck1lc3NhZ2UsIGRvbU5vZGUpO1xuXHRcdH1cblxuXHRcdHZhciByZXN1bHQgPSBBMihfZWxtX2xhbmckY29yZSROYXRpdmVfSnNvbi5ydW4sIGZsYWdEZWNvZGVyLCBmbGFncyk7XG5cdFx0aWYgKHJlc3VsdC5jdG9yID09PSAnT2snKVxuXHRcdHtcblx0XHRcdHJldHVybiBpbml0KHJlc3VsdC5fMCk7XG5cdFx0fVxuXG5cdFx0dmFyIGVycm9yTWVzc2FnZSA9XG5cdFx0XHQnVHJ5aW5nIHRvIGluaXRpYWxpemUgdGhlIGAnICsgbW9kdWxlTmFtZSArICdgIG1vZHVsZSB3aXRoIGFuIHVuZXhwZWN0ZWQgZmxhZy5cXG4nXG5cdFx0XHQrICdJIHRyaWVkIHRvIGNvbnZlcnQgaXQgdG8gYW4gRWxtIHZhbHVlLCBidXQgcmFuIGludG8gdGhpcyBwcm9ibGVtOlxcblxcbidcblx0XHRcdCsgcmVzdWx0Ll8wO1xuXG5cdFx0Y3Jhc2goZXJyb3JNZXNzYWdlLCBkb21Ob2RlKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gY3Jhc2goZXJyb3JNZXNzYWdlLCBkb21Ob2RlKVxue1xuXHRpZiAoZG9tTm9kZSlcblx0e1xuXHRcdGRvbU5vZGUuaW5uZXJIVE1MID1cblx0XHRcdCc8ZGl2IHN0eWxlPVwicGFkZGluZy1sZWZ0OjFlbTtcIj4nXG5cdFx0XHQrICc8aDIgc3R5bGU9XCJmb250LXdlaWdodDpub3JtYWw7XCI+PGI+T29wcyE8L2I+IFNvbWV0aGluZyB3ZW50IHdyb25nIHdoZW4gc3RhcnRpbmcgeW91ciBFbG0gcHJvZ3JhbS48L2gyPidcblx0XHRcdCsgJzxwcmUgc3R5bGU9XCJwYWRkaW5nLWxlZnQ6MWVtO1wiPicgKyBlcnJvck1lc3NhZ2UgKyAnPC9wcmU+J1xuXHRcdFx0KyAnPC9kaXY+Jztcblx0fVxuXG5cdHRocm93IG5ldyBFcnJvcihlcnJvck1lc3NhZ2UpO1xufVxuXG5cbi8vICBOT1JNQUwgU0VUVVBcblxuZnVuY3Rpb24gbm9ybWFsU2V0dXAoaW1wbCwgb2JqZWN0LCBtb2R1bGVOYW1lLCBmbGFnQ2hlY2tlcilcbntcblx0b2JqZWN0WydlbWJlZCddID0gZnVuY3Rpb24gZW1iZWQobm9kZSwgZmxhZ3MpXG5cdHtcblx0XHR3aGlsZSAobm9kZS5sYXN0Q2hpbGQpXG5cdFx0e1xuXHRcdFx0bm9kZS5yZW1vdmVDaGlsZChub2RlLmxhc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9QbGF0Zm9ybS5pbml0aWFsaXplKFxuXHRcdFx0ZmxhZ0NoZWNrZXIoaW1wbC5pbml0LCBmbGFncywgbm9kZSksXG5cdFx0XHRpbXBsLnVwZGF0ZSxcblx0XHRcdGltcGwuc3Vic2NyaXB0aW9ucyxcblx0XHRcdG5vcm1hbFJlbmRlcmVyKG5vZGUsIGltcGwudmlldylcblx0XHQpO1xuXHR9O1xuXG5cdG9iamVjdFsnZnVsbHNjcmVlbiddID0gZnVuY3Rpb24gZnVsbHNjcmVlbihmbGFncylcblx0e1xuXHRcdHJldHVybiBfZWxtX2xhbmckY29yZSROYXRpdmVfUGxhdGZvcm0uaW5pdGlhbGl6ZShcblx0XHRcdGZsYWdDaGVja2VyKGltcGwuaW5pdCwgZmxhZ3MsIGRvY3VtZW50LmJvZHkpLFxuXHRcdFx0aW1wbC51cGRhdGUsXG5cdFx0XHRpbXBsLnN1YnNjcmlwdGlvbnMsXG5cdFx0XHRub3JtYWxSZW5kZXJlcihkb2N1bWVudC5ib2R5LCBpbXBsLnZpZXcpXG5cdFx0KTtcblx0fTtcbn1cblxuZnVuY3Rpb24gbm9ybWFsUmVuZGVyZXIocGFyZW50Tm9kZSwgdmlldylcbntcblx0cmV0dXJuIGZ1bmN0aW9uKHRhZ2dlciwgaW5pdGlhbE1vZGVsKVxuXHR7XG5cdFx0dmFyIGV2ZW50Tm9kZSA9IHsgdGFnZ2VyOiB0YWdnZXIsIHBhcmVudDogdW5kZWZpbmVkIH07XG5cdFx0dmFyIGluaXRpYWxWaXJ0dWFsTm9kZSA9IHZpZXcoaW5pdGlhbE1vZGVsKTtcblx0XHR2YXIgZG9tTm9kZSA9IHJlbmRlcihpbml0aWFsVmlydHVhbE5vZGUsIGV2ZW50Tm9kZSk7XG5cdFx0cGFyZW50Tm9kZS5hcHBlbmRDaGlsZChkb21Ob2RlKTtcblx0XHRyZXR1cm4gbWFrZVN0ZXBwZXIoZG9tTm9kZSwgdmlldywgaW5pdGlhbFZpcnR1YWxOb2RlLCBldmVudE5vZGUpO1xuXHR9O1xufVxuXG5cbi8vIFNURVBQRVJcblxudmFyIHJBRiA9XG5cdHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgIT09ICd1bmRlZmluZWQnXG5cdFx0PyByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcblx0XHQ6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7IHNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyA2MCk7IH07XG5cbmZ1bmN0aW9uIG1ha2VTdGVwcGVyKGRvbU5vZGUsIHZpZXcsIGluaXRpYWxWaXJ0dWFsTm9kZSwgZXZlbnROb2RlKVxue1xuXHR2YXIgc3RhdGUgPSAnTk9fUkVRVUVTVCc7XG5cdHZhciBjdXJyTm9kZSA9IGluaXRpYWxWaXJ0dWFsTm9kZTtcblx0dmFyIG5leHRNb2RlbDtcblxuXHRmdW5jdGlvbiB1cGRhdGVJZk5lZWRlZCgpXG5cdHtcblx0XHRzd2l0Y2ggKHN0YXRlKVxuXHRcdHtcblx0XHRcdGNhc2UgJ05PX1JFUVVFU1QnOlxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0J1VuZXhwZWN0ZWQgZHJhdyBjYWxsYmFjay5cXG4nICtcblx0XHRcdFx0XHQnUGxlYXNlIHJlcG9ydCB0aGlzIHRvIDxodHRwczovL2dpdGh1Yi5jb20vZWxtLWxhbmcvdmlydHVhbC1kb20vaXNzdWVzPi4nXG5cdFx0XHRcdCk7XG5cblx0XHRcdGNhc2UgJ1BFTkRJTkdfUkVRVUVTVCc6XG5cdFx0XHRcdHJBRih1cGRhdGVJZk5lZWRlZCk7XG5cdFx0XHRcdHN0YXRlID0gJ0VYVFJBX1JFUVVFU1QnO1xuXG5cdFx0XHRcdHZhciBuZXh0Tm9kZSA9IHZpZXcobmV4dE1vZGVsKTtcblx0XHRcdFx0dmFyIHBhdGNoZXMgPSBkaWZmKGN1cnJOb2RlLCBuZXh0Tm9kZSk7XG5cdFx0XHRcdGRvbU5vZGUgPSBhcHBseVBhdGNoZXMoZG9tTm9kZSwgY3Vyck5vZGUsIHBhdGNoZXMsIGV2ZW50Tm9kZSk7XG5cdFx0XHRcdGN1cnJOb2RlID0gbmV4dE5vZGU7XG5cblx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRjYXNlICdFWFRSQV9SRVFVRVNUJzpcblx0XHRcdFx0c3RhdGUgPSAnTk9fUkVRVUVTVCc7XG5cdFx0XHRcdHJldHVybjtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZnVuY3Rpb24gc3RlcHBlcihtb2RlbClcblx0e1xuXHRcdGlmIChzdGF0ZSA9PT0gJ05PX1JFUVVFU1QnKVxuXHRcdHtcblx0XHRcdHJBRih1cGRhdGVJZk5lZWRlZCk7XG5cdFx0fVxuXHRcdHN0YXRlID0gJ1BFTkRJTkdfUkVRVUVTVCc7XG5cdFx0bmV4dE1vZGVsID0gbW9kZWw7XG5cdH07XG59XG5cblxuLy8gREVCVUcgU0VUVVBcblxuZnVuY3Rpb24gZGVidWdTZXR1cChpbXBsLCBvYmplY3QsIG1vZHVsZU5hbWUsIGZsYWdDaGVja2VyKVxue1xuXHRvYmplY3RbJ2Z1bGxzY3JlZW4nXSA9IGZ1bmN0aW9uIGZ1bGxzY3JlZW4oZmxhZ3MpXG5cdHtcblx0XHR2YXIgcG9wb3V0UmVmID0geyBkb2M6IHVuZGVmaW5lZCB9O1xuXHRcdHJldHVybiBfZWxtX2xhbmckY29yZSROYXRpdmVfUGxhdGZvcm0uaW5pdGlhbGl6ZShcblx0XHRcdGZsYWdDaGVja2VyKGltcGwuaW5pdCwgZmxhZ3MsIGRvY3VtZW50LmJvZHkpLFxuXHRcdFx0aW1wbC51cGRhdGUoc2Nyb2xsVGFzayhwb3BvdXRSZWYpKSxcblx0XHRcdGltcGwuc3Vic2NyaXB0aW9ucyxcblx0XHRcdGRlYnVnUmVuZGVyZXIobW9kdWxlTmFtZSwgZG9jdW1lbnQuYm9keSwgcG9wb3V0UmVmLCBpbXBsLnZpZXcsIGltcGwudmlld0luLCBpbXBsLnZpZXdPdXQpXG5cdFx0KTtcblx0fTtcblxuXHRvYmplY3RbJ2VtYmVkJ10gPSBmdW5jdGlvbiBmdWxsc2NyZWVuKG5vZGUsIGZsYWdzKVxuXHR7XG5cdFx0dmFyIHBvcG91dFJlZiA9IHsgZG9jOiB1bmRlZmluZWQgfTtcblx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1BsYXRmb3JtLmluaXRpYWxpemUoXG5cdFx0XHRmbGFnQ2hlY2tlcihpbXBsLmluaXQsIGZsYWdzLCBub2RlKSxcblx0XHRcdGltcGwudXBkYXRlKHNjcm9sbFRhc2socG9wb3V0UmVmKSksXG5cdFx0XHRpbXBsLnN1YnNjcmlwdGlvbnMsXG5cdFx0XHRkZWJ1Z1JlbmRlcmVyKG1vZHVsZU5hbWUsIG5vZGUsIHBvcG91dFJlZiwgaW1wbC52aWV3LCBpbXBsLnZpZXdJbiwgaW1wbC52aWV3T3V0KVxuXHRcdCk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIHNjcm9sbFRhc2socG9wb3V0UmVmKVxue1xuXHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1NjaGVkdWxlci5uYXRpdmVCaW5kaW5nKGZ1bmN0aW9uKGNhbGxiYWNrKVxuXHR7XG5cdFx0dmFyIGRvYyA9IHBvcG91dFJlZi5kb2M7XG5cdFx0aWYgKGRvYylcblx0XHR7XG5cdFx0XHR2YXIgbXNncyA9IGRvYy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkZWJ1Z2dlci1zaWRlYmFyLW1lc3NhZ2VzJylbMF07XG5cdFx0XHRpZiAobXNncylcblx0XHRcdHtcblx0XHRcdFx0bXNncy5zY3JvbGxUb3AgPSBtc2dzLnNjcm9sbEhlaWdodDtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y2FsbGJhY2soX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1NjaGVkdWxlci5zdWNjZWVkKF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy5UdXBsZTApKTtcblx0fSk7XG59XG5cblxuZnVuY3Rpb24gZGVidWdSZW5kZXJlcihtb2R1bGVOYW1lLCBwYXJlbnROb2RlLCBwb3BvdXRSZWYsIHZpZXcsIHZpZXdJbiwgdmlld091dClcbntcblx0cmV0dXJuIGZ1bmN0aW9uKHRhZ2dlciwgaW5pdGlhbE1vZGVsKVxuXHR7XG5cdFx0dmFyIGFwcEV2ZW50Tm9kZSA9IHsgdGFnZ2VyOiB0YWdnZXIsIHBhcmVudDogdW5kZWZpbmVkIH07XG5cdFx0dmFyIGV2ZW50Tm9kZSA9IHsgdGFnZ2VyOiB0YWdnZXIsIHBhcmVudDogdW5kZWZpbmVkIH07XG5cblx0XHQvLyBtYWtlIG5vcm1hbCBzdGVwcGVyXG5cdFx0dmFyIGFwcFZpcnR1YWxOb2RlID0gdmlldyhpbml0aWFsTW9kZWwpO1xuXHRcdHZhciBhcHBOb2RlID0gcmVuZGVyKGFwcFZpcnR1YWxOb2RlLCBhcHBFdmVudE5vZGUpO1xuXHRcdHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoYXBwTm9kZSk7XG5cdFx0dmFyIGFwcFN0ZXBwZXIgPSBtYWtlU3RlcHBlcihhcHBOb2RlLCB2aWV3LCBhcHBWaXJ0dWFsTm9kZSwgYXBwRXZlbnROb2RlKTtcblxuXHRcdC8vIG1ha2Ugb3ZlcmxheSBzdGVwcGVyXG5cdFx0dmFyIG92ZXJWaXJ0dWFsTm9kZSA9IHZpZXdJbihpbml0aWFsTW9kZWwpLl8xO1xuXHRcdHZhciBvdmVyTm9kZSA9IHJlbmRlcihvdmVyVmlydHVhbE5vZGUsIGV2ZW50Tm9kZSk7XG5cdFx0cGFyZW50Tm9kZS5hcHBlbmRDaGlsZChvdmVyTm9kZSk7XG5cdFx0dmFyIHdyYXBwZWRWaWV3SW4gPSB3cmFwVmlld0luKGFwcEV2ZW50Tm9kZSwgb3Zlck5vZGUsIHZpZXdJbik7XG5cdFx0dmFyIG92ZXJTdGVwcGVyID0gbWFrZVN0ZXBwZXIob3Zlck5vZGUsIHdyYXBwZWRWaWV3SW4sIG92ZXJWaXJ0dWFsTm9kZSwgZXZlbnROb2RlKTtcblxuXHRcdC8vIG1ha2UgZGVidWdnZXIgc3RlcHBlclxuXHRcdHZhciBkZWJ1Z1N0ZXBwZXIgPSBtYWtlRGVidWdTdGVwcGVyKGluaXRpYWxNb2RlbCwgdmlld091dCwgZXZlbnROb2RlLCBwYXJlbnROb2RlLCBtb2R1bGVOYW1lLCBwb3BvdXRSZWYpO1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uIHN0ZXBwZXIobW9kZWwpXG5cdFx0e1xuXHRcdFx0YXBwU3RlcHBlcihtb2RlbCk7XG5cdFx0XHRvdmVyU3RlcHBlcihtb2RlbCk7XG5cdFx0XHRkZWJ1Z1N0ZXBwZXIobW9kZWwpO1xuXHRcdH1cblx0fTtcbn1cblxuZnVuY3Rpb24gbWFrZURlYnVnU3RlcHBlcihpbml0aWFsTW9kZWwsIHZpZXcsIGV2ZW50Tm9kZSwgcGFyZW50Tm9kZSwgbW9kdWxlTmFtZSwgcG9wb3V0UmVmKVxue1xuXHR2YXIgY3Vycjtcblx0dmFyIGRvbU5vZGU7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHN0ZXBwZXIobW9kZWwpXG5cdHtcblx0XHRpZiAoIW1vZGVsLmlzRGVidWdnZXJPcGVuKVxuXHRcdHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIXBvcG91dFJlZi5kb2MpXG5cdFx0e1xuXHRcdFx0Y3VyciA9IHZpZXcobW9kZWwpO1xuXHRcdFx0ZG9tTm9kZSA9IG9wZW5EZWJ1Z1dpbmRvdyhtb2R1bGVOYW1lLCBwb3BvdXRSZWYsIGN1cnIsIGV2ZW50Tm9kZSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gc3dpdGNoIHRvIGRvY3VtZW50IG9mIHBvcG91dFxuXHRcdGxvY2FsRG9jID0gcG9wb3V0UmVmLmRvYztcblxuXHRcdHZhciBuZXh0ID0gdmlldyhtb2RlbCk7XG5cdFx0dmFyIHBhdGNoZXMgPSBkaWZmKGN1cnIsIG5leHQpO1xuXHRcdGRvbU5vZGUgPSBhcHBseVBhdGNoZXMoZG9tTm9kZSwgY3VyciwgcGF0Y2hlcywgZXZlbnROb2RlKTtcblx0XHRjdXJyID0gbmV4dDtcblxuXHRcdC8vIHN3aXRjaCBiYWNrIHRvIG5vcm1hbCBkb2N1bWVudFxuXHRcdGxvY2FsRG9jID0gZG9jdW1lbnQ7XG5cdH07XG59XG5cbmZ1bmN0aW9uIG9wZW5EZWJ1Z1dpbmRvdyhtb2R1bGVOYW1lLCBwb3BvdXRSZWYsIHZpcnR1YWxOb2RlLCBldmVudE5vZGUpXG57XG5cdHZhciB3ID0gOTAwO1xuXHR2YXIgaCA9IDM2MDtcblx0dmFyIHggPSBzY3JlZW4ud2lkdGggLSB3O1xuXHR2YXIgeSA9IHNjcmVlbi5oZWlnaHQgLSBoO1xuXHR2YXIgZGVidWdXaW5kb3cgPSB3aW5kb3cub3BlbignJywgJycsICd3aWR0aD0nICsgdyArICcsaGVpZ2h0PScgKyBoICsgJyxsZWZ0PScgKyB4ICsgJyx0b3A9JyArIHkpO1xuXG5cdC8vIHN3aXRjaCB0byB3aW5kb3cgZG9jdW1lbnRcblx0bG9jYWxEb2MgPSBkZWJ1Z1dpbmRvdy5kb2N1bWVudDtcblxuXHRwb3BvdXRSZWYuZG9jID0gbG9jYWxEb2M7XG5cdGxvY2FsRG9jLnRpdGxlID0gJ0RlYnVnZ2VyIC0gJyArIG1vZHVsZU5hbWU7XG5cdGxvY2FsRG9jLmJvZHkuc3R5bGUubWFyZ2luID0gJzAnO1xuXHRsb2NhbERvYy5ib2R5LnN0eWxlLnBhZGRpbmcgPSAnMCc7XG5cdHZhciBkb21Ob2RlID0gcmVuZGVyKHZpcnR1YWxOb2RlLCBldmVudE5vZGUpO1xuXHRsb2NhbERvYy5ib2R5LmFwcGVuZENoaWxkKGRvbU5vZGUpO1xuXG5cdGxvY2FsRG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihldmVudCkge1xuXHRcdGlmIChldmVudC5tZXRhS2V5ICYmIGV2ZW50LndoaWNoID09PSA4Milcblx0XHR7XG5cdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0fVxuXHRcdGlmIChldmVudC53aGljaCA9PT0gMzgpXG5cdFx0e1xuXHRcdFx0ZXZlbnROb2RlLnRhZ2dlcih7IGN0b3I6ICdVcCcgfSk7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH1cblx0XHRpZiAoZXZlbnQud2hpY2ggPT09IDQwKVxuXHRcdHtcblx0XHRcdGV2ZW50Tm9kZS50YWdnZXIoeyBjdG9yOiAnRG93bicgfSk7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH1cblx0fSk7XG5cblx0ZnVuY3Rpb24gY2xvc2UoKVxuXHR7XG5cdFx0cG9wb3V0UmVmLmRvYyA9IHVuZGVmaW5lZDtcblx0XHRkZWJ1Z1dpbmRvdy5jbG9zZSgpO1xuXHR9XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd1bmxvYWQnLCBjbG9zZSk7XG5cdGRlYnVnV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3VubG9hZCcsIGZ1bmN0aW9uKCkge1xuXHRcdHBvcG91dFJlZi5kb2MgPSB1bmRlZmluZWQ7XG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3VubG9hZCcsIGNsb3NlKTtcblx0XHRldmVudE5vZGUudGFnZ2VyKHsgY3RvcjogJ0Nsb3NlJyB9KTtcblx0fSk7XG5cblx0Ly8gc3dpdGNoIGJhY2sgdG8gdGhlIG5vcm1hbCBkb2N1bWVudFxuXHRsb2NhbERvYyA9IGRvY3VtZW50O1xuXG5cdHJldHVybiBkb21Ob2RlO1xufVxuXG5cbi8vIEJMT0NLIEVWRU5UU1xuXG5mdW5jdGlvbiB3cmFwVmlld0luKGFwcEV2ZW50Tm9kZSwgb3ZlcmxheU5vZGUsIHZpZXdJbilcbntcblx0dmFyIGlnbm9yZXIgPSBtYWtlSWdub3JlcihvdmVybGF5Tm9kZSk7XG5cdHZhciBibG9ja2luZyA9ICdOb3JtYWwnO1xuXHR2YXIgb3ZlcmZsb3c7XG5cblx0dmFyIG5vcm1hbFRhZ2dlciA9IGFwcEV2ZW50Tm9kZS50YWdnZXI7XG5cdHZhciBibG9ja1RhZ2dlciA9IGZ1bmN0aW9uKCkge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKG1vZGVsKVxuXHR7XG5cdFx0dmFyIHR1cGxlID0gdmlld0luKG1vZGVsKTtcblx0XHR2YXIgbmV3QmxvY2tpbmcgPSB0dXBsZS5fMC5jdG9yO1xuXHRcdGFwcEV2ZW50Tm9kZS50YWdnZXIgPSBuZXdCbG9ja2luZyA9PT0gJ05vcm1hbCcgPyBub3JtYWxUYWdnZXIgOiBibG9ja1RhZ2dlcjtcblx0XHRpZiAoYmxvY2tpbmcgIT09IG5ld0Jsb2NraW5nKVxuXHRcdHtcblx0XHRcdHRyYXZlcnNlKCdyZW1vdmVFdmVudExpc3RlbmVyJywgaWdub3JlciwgYmxvY2tpbmcpO1xuXHRcdFx0dHJhdmVyc2UoJ2FkZEV2ZW50TGlzdGVuZXInLCBpZ25vcmVyLCBuZXdCbG9ja2luZyk7XG5cblx0XHRcdGlmIChibG9ja2luZyA9PT0gJ05vcm1hbCcpXG5cdFx0XHR7XG5cdFx0XHRcdG92ZXJmbG93ID0gZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdztcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAobmV3QmxvY2tpbmcgPT09ICdOb3JtYWwnKVxuXHRcdFx0e1xuXHRcdFx0XHRkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gb3ZlcmZsb3c7XG5cdFx0XHR9XG5cblx0XHRcdGJsb2NraW5nID0gbmV3QmxvY2tpbmc7XG5cdFx0fVxuXHRcdHJldHVybiB0dXBsZS5fMTtcblx0fVxufVxuXG5mdW5jdGlvbiB0cmF2ZXJzZSh2ZXJiRXZlbnRMaXN0ZW5lciwgaWdub3JlciwgYmxvY2tpbmcpXG57XG5cdHN3aXRjaChibG9ja2luZylcblx0e1xuXHRcdGNhc2UgJ05vcm1hbCc6XG5cdFx0XHRyZXR1cm47XG5cblx0XHRjYXNlICdQYXVzZSc6XG5cdFx0XHRyZXR1cm4gdHJhdmVyc2VIZWxwKHZlcmJFdmVudExpc3RlbmVyLCBpZ25vcmVyLCBtb3N0RXZlbnRzKTtcblxuXHRcdGNhc2UgJ01lc3NhZ2UnOlxuXHRcdFx0cmV0dXJuIHRyYXZlcnNlSGVscCh2ZXJiRXZlbnRMaXN0ZW5lciwgaWdub3JlciwgYWxsRXZlbnRzKTtcblx0fVxufVxuXG5mdW5jdGlvbiB0cmF2ZXJzZUhlbHAodmVyYkV2ZW50TGlzdGVuZXIsIGhhbmRsZXIsIGV2ZW50TmFtZXMpXG57XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnROYW1lcy5sZW5ndGg7IGkrKylcblx0e1xuXHRcdGRvY3VtZW50LmJvZHlbdmVyYkV2ZW50TGlzdGVuZXJdKGV2ZW50TmFtZXNbaV0sIGhhbmRsZXIsIHRydWUpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIG1ha2VJZ25vcmVyKG92ZXJsYXlOb2RlKVxue1xuXHRyZXR1cm4gZnVuY3Rpb24oZXZlbnQpXG5cdHtcblx0XHRpZiAoZXZlbnQudHlwZSA9PT0gJ2tleWRvd24nICYmIGV2ZW50Lm1ldGFLZXkgJiYgZXZlbnQud2hpY2ggPT09IDgyKVxuXHRcdHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgaXNTY3JvbGwgPSBldmVudC50eXBlID09PSAnc2Nyb2xsJyB8fCBldmVudC50eXBlID09PSAnd2hlZWwnO1xuXG5cdFx0dmFyIG5vZGUgPSBldmVudC50YXJnZXQ7XG5cdFx0d2hpbGUgKG5vZGUgIT09IG51bGwpXG5cdFx0e1xuXHRcdFx0aWYgKG5vZGUuY2xhc3NOYW1lID09PSAnZWxtLW92ZXJsYXktbWVzc2FnZS1kZXRhaWxzJyAmJiBpc1Njcm9sbClcblx0XHRcdHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAobm9kZSA9PT0gb3ZlcmxheU5vZGUgJiYgIWlzU2Nyb2xsKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuXHRcdH1cblxuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdH1cbn1cblxudmFyIG1vc3RFdmVudHMgPSBbXG5cdCdjbGljaycsICdkYmxjbGljaycsICdtb3VzZW1vdmUnLFxuXHQnbW91c2V1cCcsICdtb3VzZWRvd24nLCAnbW91c2VlbnRlcicsICdtb3VzZWxlYXZlJyxcblx0J3RvdWNoc3RhcnQnLCAndG91Y2hlbmQnLCAndG91Y2hjYW5jZWwnLCAndG91Y2htb3ZlJyxcblx0J3BvaW50ZXJkb3duJywgJ3BvaW50ZXJ1cCcsICdwb2ludGVyb3ZlcicsICdwb2ludGVyb3V0Jyxcblx0J3BvaW50ZXJlbnRlcicsICdwb2ludGVybGVhdmUnLCAncG9pbnRlcm1vdmUnLCAncG9pbnRlcmNhbmNlbCcsXG5cdCdkcmFnc3RhcnQnLCAnZHJhZycsICdkcmFnZW5kJywgJ2RyYWdlbnRlcicsICdkcmFnb3ZlcicsICdkcmFnbGVhdmUnLCAnZHJvcCcsXG5cdCdrZXl1cCcsICdrZXlkb3duJywgJ2tleXByZXNzJyxcblx0J2lucHV0JywgJ2NoYW5nZScsXG5cdCdmb2N1cycsICdibHVyJ1xuXTtcblxudmFyIGFsbEV2ZW50cyA9IG1vc3RFdmVudHMuY29uY2F0KCd3aGVlbCcsICdzY3JvbGwnKTtcblxuXG5yZXR1cm4ge1xuXHRub2RlOiBub2RlLFxuXHR0ZXh0OiB0ZXh0LFxuXHRjdXN0b206IGN1c3RvbSxcblx0bWFwOiBGMihtYXApLFxuXG5cdG9uOiBGMyhvbiksXG5cdHN0eWxlOiBzdHlsZSxcblx0cHJvcGVydHk6IEYyKHByb3BlcnR5KSxcblx0YXR0cmlidXRlOiBGMihhdHRyaWJ1dGUpLFxuXHRhdHRyaWJ1dGVOUzogRjMoYXR0cmlidXRlTlMpLFxuXHRtYXBQcm9wZXJ0eTogRjIobWFwUHJvcGVydHkpLFxuXG5cdGxhenk6IEYyKGxhenkpLFxuXHRsYXp5MjogRjMobGF6eTIpLFxuXHRsYXp5MzogRjQobGF6eTMpLFxuXHRrZXllZE5vZGU6IEYzKGtleWVkTm9kZSksXG5cblx0cHJvZ3JhbTogcHJvZ3JhbSxcblx0cHJvZ3JhbVdpdGhGbGFnczogcHJvZ3JhbVdpdGhGbGFncyxcblx0c3RhdGljUHJvZ3JhbTogc3RhdGljUHJvZ3JhbVxufTtcblxufSgpO1xuXG52YXIgX2VsbV9sYW5nJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kcHJvZ3JhbVdpdGhGbGFncyA9IGZ1bmN0aW9uIChpbXBsKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckdmlydHVhbF9kb20kTmF0aXZlX1ZpcnR1YWxEb20ucHJvZ3JhbVdpdGhGbGFncywgX2VsbV9sYW5nJHZpcnR1YWxfZG9tJFZpcnR1YWxEb21fRGVidWckd3JhcFdpdGhGbGFncywgaW1wbCk7XG59O1xudmFyIF9lbG1fbGFuZyR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJHByb2dyYW0gPSBmdW5jdGlvbiAoaW1wbCkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJHZpcnR1YWxfZG9tJE5hdGl2ZV9WaXJ0dWFsRG9tLnByb2dyYW0sIF9lbG1fbGFuZyR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tX0RlYnVnJHdyYXAsIGltcGwpO1xufTtcbnZhciBfZWxtX2xhbmckdmlydHVhbF9kb20kVmlydHVhbERvbSRrZXllZE5vZGUgPSBfZWxtX2xhbmckdmlydHVhbF9kb20kTmF0aXZlX1ZpcnR1YWxEb20ua2V5ZWROb2RlO1xudmFyIF9lbG1fbGFuZyR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJGxhenkzID0gX2VsbV9sYW5nJHZpcnR1YWxfZG9tJE5hdGl2ZV9WaXJ0dWFsRG9tLmxhenkzO1xudmFyIF9lbG1fbGFuZyR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJGxhenkyID0gX2VsbV9sYW5nJHZpcnR1YWxfZG9tJE5hdGl2ZV9WaXJ0dWFsRG9tLmxhenkyO1xudmFyIF9lbG1fbGFuZyR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJGxhenkgPSBfZWxtX2xhbmckdmlydHVhbF9kb20kTmF0aXZlX1ZpcnR1YWxEb20ubGF6eTtcbnZhciBfZWxtX2xhbmckdmlydHVhbF9kb20kVmlydHVhbERvbSRkZWZhdWx0T3B0aW9ucyA9IHtzdG9wUHJvcGFnYXRpb246IGZhbHNlLCBwcmV2ZW50RGVmYXVsdDogZmFsc2V9O1xudmFyIF9lbG1fbGFuZyR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJG9uV2l0aE9wdGlvbnMgPSBfZWxtX2xhbmckdmlydHVhbF9kb20kTmF0aXZlX1ZpcnR1YWxEb20ub247XG52YXIgX2VsbV9sYW5nJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kb24gPSBGMihcblx0ZnVuY3Rpb24gKGV2ZW50TmFtZSwgZGVjb2Rlcikge1xuXHRcdHJldHVybiBBMyhfZWxtX2xhbmckdmlydHVhbF9kb20kVmlydHVhbERvbSRvbldpdGhPcHRpb25zLCBldmVudE5hbWUsIF9lbG1fbGFuZyR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJGRlZmF1bHRPcHRpb25zLCBkZWNvZGVyKTtcblx0fSk7XG52YXIgX2VsbV9sYW5nJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kc3R5bGUgPSBfZWxtX2xhbmckdmlydHVhbF9kb20kTmF0aXZlX1ZpcnR1YWxEb20uc3R5bGU7XG52YXIgX2VsbV9sYW5nJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kbWFwUHJvcGVydHkgPSBfZWxtX2xhbmckdmlydHVhbF9kb20kTmF0aXZlX1ZpcnR1YWxEb20ubWFwUHJvcGVydHk7XG52YXIgX2VsbV9sYW5nJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kYXR0cmlidXRlTlMgPSBfZWxtX2xhbmckdmlydHVhbF9kb20kTmF0aXZlX1ZpcnR1YWxEb20uYXR0cmlidXRlTlM7XG52YXIgX2VsbV9sYW5nJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kYXR0cmlidXRlID0gX2VsbV9sYW5nJHZpcnR1YWxfZG9tJE5hdGl2ZV9WaXJ0dWFsRG9tLmF0dHJpYnV0ZTtcbnZhciBfZWxtX2xhbmckdmlydHVhbF9kb20kVmlydHVhbERvbSRwcm9wZXJ0eSA9IF9lbG1fbGFuZyR2aXJ0dWFsX2RvbSROYXRpdmVfVmlydHVhbERvbS5wcm9wZXJ0eTtcbnZhciBfZWxtX2xhbmckdmlydHVhbF9kb20kVmlydHVhbERvbSRtYXAgPSBfZWxtX2xhbmckdmlydHVhbF9kb20kTmF0aXZlX1ZpcnR1YWxEb20ubWFwO1xudmFyIF9lbG1fbGFuZyR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJHRleHQgPSBfZWxtX2xhbmckdmlydHVhbF9kb20kTmF0aXZlX1ZpcnR1YWxEb20udGV4dDtcbnZhciBfZWxtX2xhbmckdmlydHVhbF9kb20kVmlydHVhbERvbSRub2RlID0gX2VsbV9sYW5nJHZpcnR1YWxfZG9tJE5hdGl2ZV9WaXJ0dWFsRG9tLm5vZGU7XG52YXIgX2VsbV9sYW5nJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kT3B0aW9ucyA9IEYyKFxuXHRmdW5jdGlvbiAoYSwgYikge1xuXHRcdHJldHVybiB7c3RvcFByb3BhZ2F0aW9uOiBhLCBwcmV2ZW50RGVmYXVsdDogYn07XG5cdH0pO1xudmFyIF9lbG1fbGFuZyR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJE5vZGUgPSB7Y3RvcjogJ05vZGUnfTtcbnZhciBfZWxtX2xhbmckdmlydHVhbF9kb20kVmlydHVhbERvbSRQcm9wZXJ0eSA9IHtjdG9yOiAnUHJvcGVydHknfTtcblxudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkcHJvZ3JhbVdpdGhGbGFncyA9IF9lbG1fbGFuZyR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJHByb2dyYW1XaXRoRmxhZ3M7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRwcm9ncmFtID0gX2VsbV9sYW5nJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kcHJvZ3JhbTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJGJlZ2lubmVyUHJvZ3JhbSA9IGZ1bmN0aW9uIChfcDApIHtcblx0dmFyIF9wMSA9IF9wMDtcblx0cmV0dXJuIF9lbG1fbGFuZyRodG1sJEh0bWwkcHJvZ3JhbShcblx0XHR7XG5cdFx0XHRpbml0OiBBMihcblx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkUGxhdGZvcm1fQ21kX29wc1snISddLFxuXHRcdFx0XHRfcDEubW9kZWwsXG5cdFx0XHRcdHtjdG9yOiAnW10nfSksXG5cdFx0XHR1cGRhdGU6IEYyKFxuXHRcdFx0XHRmdW5jdGlvbiAobXNnLCBtb2RlbCkge1xuXHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJFBsYXRmb3JtX0NtZF9vcHNbJyEnXSxcblx0XHRcdFx0XHRcdEEyKF9wMS51cGRhdGUsIG1zZywgbW9kZWwpLFxuXHRcdFx0XHRcdFx0e2N0b3I6ICdbXSd9KTtcblx0XHRcdFx0fSksXG5cdFx0XHR2aWV3OiBfcDEudmlldyxcblx0XHRcdHN1YnNjcmlwdGlvbnM6IGZ1bmN0aW9uIChfcDIpIHtcblx0XHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJFBsYXRmb3JtX1N1YiRub25lO1xuXHRcdFx0fVxuXHRcdH0pO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJG1hcCA9IF9lbG1fbGFuZyR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJG1hcDtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJHRleHQgPSBfZWxtX2xhbmckdmlydHVhbF9kb20kVmlydHVhbERvbSR0ZXh0O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSA9IF9lbG1fbGFuZyR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJG5vZGU7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRib2R5ID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCdib2R5Jyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRzZWN0aW9uID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCdzZWN0aW9uJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRuYXYgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ25hdicpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkYXJ0aWNsZSA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgnYXJ0aWNsZScpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkYXNpZGUgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ2FzaWRlJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRoMSA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgnaDEnKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJGgyID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCdoMicpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkaDMgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ2gzJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRoNCA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgnaDQnKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJGg1ID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCdoNScpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkaDYgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ2g2Jyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRoZWFkZXIgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ2hlYWRlcicpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkZm9vdGVyID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCdmb290ZXInKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJGFkZHJlc3MgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ2FkZHJlc3MnKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJG1haW5fID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCdtYWluJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRwID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCdwJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRociA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgnaHInKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJHByZSA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgncHJlJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRibG9ja3F1b3RlID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCdibG9ja3F1b3RlJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRvbCA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgnb2wnKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJHVsID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCd1bCcpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkbGkgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ2xpJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRkbCA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgnZGwnKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJGR0ID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCdkdCcpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkZGQgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ2RkJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRmaWd1cmUgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ2ZpZ3VyZScpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkZmlnY2FwdGlvbiA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgnZmlnY2FwdGlvbicpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkZGl2ID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCdkaXYnKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJGEgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ2EnKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJGVtID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCdlbScpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkc3Ryb25nID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCdzdHJvbmcnKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJHNtYWxsID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCdzbWFsbCcpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkcyA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgncycpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkY2l0ZSA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgnY2l0ZScpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkcSA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgncScpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkZGZuID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCdkZm4nKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJGFiYnIgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ2FiYnInKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJHRpbWUgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ3RpbWUnKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJGNvZGUgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ2NvZGUnKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJHZhciA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgndmFyJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRzYW1wID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCdzYW1wJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRrYmQgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ2tiZCcpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkc3ViID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCdzdWInKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJHN1cCA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgnc3VwJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRpID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCdpJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRiID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCdiJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCR1ID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCd1Jyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRtYXJrID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCdtYXJrJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRydWJ5ID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCdydWJ5Jyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRydCA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgncnQnKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJHJwID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCdycCcpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkYmRpID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCdiZGknKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJGJkbyA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgnYmRvJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRzcGFuID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCdzcGFuJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRiciA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgnYnInKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJHdiciA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgnd2JyJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRpbnMgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ2lucycpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkZGVsID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCdkZWwnKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJGltZyA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgnaW1nJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRpZnJhbWUgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ2lmcmFtZScpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkZW1iZWQgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ2VtYmVkJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRvYmplY3QgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ29iamVjdCcpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkcGFyYW0gPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ3BhcmFtJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCR2aWRlbyA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgndmlkZW8nKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJGF1ZGlvID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCdhdWRpbycpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkc291cmNlID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCdzb3VyY2UnKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJHRyYWNrID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCd0cmFjaycpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkY2FudmFzID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCdjYW52YXMnKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJG1hdGggPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ21hdGgnKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJHRhYmxlID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCd0YWJsZScpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkY2FwdGlvbiA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgnY2FwdGlvbicpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkY29sZ3JvdXAgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ2NvbGdyb3VwJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRjb2wgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ2NvbCcpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkdGJvZHkgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ3Rib2R5Jyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCR0aGVhZCA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgndGhlYWQnKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJHRmb290ID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCd0Zm9vdCcpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkdHIgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ3RyJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCR0ZCA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgndGQnKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJHRoID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCd0aCcpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkZm9ybSA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgnZm9ybScpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkZmllbGRzZXQgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ2ZpZWxkc2V0Jyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRsZWdlbmQgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ2xlZ2VuZCcpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkbGFiZWwgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ2xhYmVsJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRpbnB1dCA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgnaW5wdXQnKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJGJ1dHRvbiA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgnYnV0dG9uJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRzZWxlY3QgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ3NlbGVjdCcpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkZGF0YWxpc3QgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ2RhdGFsaXN0Jyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRvcHRncm91cCA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgnb3B0Z3JvdXAnKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJG9wdGlvbiA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgnb3B0aW9uJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCR0ZXh0YXJlYSA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgndGV4dGFyZWEnKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJGtleWdlbiA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgna2V5Z2VuJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRvdXRwdXQgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ291dHB1dCcpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkcHJvZ3Jlc3MgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ3Byb2dyZXNzJyk7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbCRtZXRlciA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgnbWV0ZXInKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJGRldGFpbHMgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ2RldGFpbHMnKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJHN1bW1hcnkgPSBfZWxtX2xhbmckaHRtbCRIdG1sJG5vZGUoJ3N1bW1hcnknKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sJG1lbnVpdGVtID0gX2VsbV9sYW5nJGh0bWwkSHRtbCRub2RlKCdtZW51aXRlbScpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWwkbWVudSA9IF9lbG1fbGFuZyRodG1sJEh0bWwkbm9kZSgnbWVudScpO1xuXG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJG1hcCA9IF9lbG1fbGFuZyR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJG1hcFByb3BlcnR5O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRhdHRyaWJ1dGUgPSBfZWxtX2xhbmckdmlydHVhbF9kb20kVmlydHVhbERvbSRhdHRyaWJ1dGU7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGNvbnRleHRtZW51ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkYXR0cmlidXRlLCAnY29udGV4dG1lbnUnLCB2YWx1ZSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRkcmFnZ2FibGUgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRhdHRyaWJ1dGUsICdkcmFnZ2FibGUnLCB2YWx1ZSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRpdGVtcHJvcCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGF0dHJpYnV0ZSwgJ2l0ZW1wcm9wJywgdmFsdWUpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkdGFiaW5kZXggPSBmdW5jdGlvbiAobikge1xuXHRyZXR1cm4gQTIoXG5cdFx0X2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGF0dHJpYnV0ZSxcblx0XHQndGFiSW5kZXgnLFxuXHRcdF9lbG1fbGFuZyRjb3JlJEJhc2ljcyR0b1N0cmluZyhuKSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRjaGFyc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkYXR0cmlidXRlLCAnY2hhcnNldCcsIHZhbHVlKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGhlaWdodCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoXG5cdFx0X2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGF0dHJpYnV0ZSxcblx0XHQnaGVpZ2h0Jyxcblx0XHRfZWxtX2xhbmckY29yZSRCYXNpY3MkdG9TdHJpbmcodmFsdWUpKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHdpZHRoID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiBBMihcblx0XHRfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkYXR0cmlidXRlLFxuXHRcdCd3aWR0aCcsXG5cdFx0X2VsbV9sYW5nJGNvcmUkQmFzaWNzJHRvU3RyaW5nKHZhbHVlKSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRmb3JtYWN0aW9uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkYXR0cmlidXRlLCAnZm9ybUFjdGlvbicsIHZhbHVlKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGxpc3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRhdHRyaWJ1dGUsICdsaXN0JywgdmFsdWUpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkbWlubGVuZ3RoID0gZnVuY3Rpb24gKG4pIHtcblx0cmV0dXJuIEEyKFxuXHRcdF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRhdHRyaWJ1dGUsXG5cdFx0J21pbkxlbmd0aCcsXG5cdFx0X2VsbV9sYW5nJGNvcmUkQmFzaWNzJHRvU3RyaW5nKG4pKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJG1heGxlbmd0aCA9IGZ1bmN0aW9uIChuKSB7XG5cdHJldHVybiBBMihcblx0XHRfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkYXR0cmlidXRlLFxuXHRcdCdtYXhsZW5ndGgnLFxuXHRcdF9lbG1fbGFuZyRjb3JlJEJhc2ljcyR0b1N0cmluZyhuKSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzaXplID0gZnVuY3Rpb24gKG4pIHtcblx0cmV0dXJuIEEyKFxuXHRcdF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRhdHRyaWJ1dGUsXG5cdFx0J3NpemUnLFxuXHRcdF9lbG1fbGFuZyRjb3JlJEJhc2ljcyR0b1N0cmluZyhuKSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRmb3JtID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkYXR0cmlidXRlLCAnZm9ybScsIHZhbHVlKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGNvbHMgPSBmdW5jdGlvbiAobikge1xuXHRyZXR1cm4gQTIoXG5cdFx0X2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGF0dHJpYnV0ZSxcblx0XHQnY29scycsXG5cdFx0X2VsbV9sYW5nJGNvcmUkQmFzaWNzJHRvU3RyaW5nKG4pKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHJvd3MgPSBmdW5jdGlvbiAobikge1xuXHRyZXR1cm4gQTIoXG5cdFx0X2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGF0dHJpYnV0ZSxcblx0XHQncm93cycsXG5cdFx0X2VsbV9sYW5nJGNvcmUkQmFzaWNzJHRvU3RyaW5nKG4pKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGNoYWxsZW5nZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGF0dHJpYnV0ZSwgJ2NoYWxsZW5nZScsIHZhbHVlKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJG1lZGlhID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkYXR0cmlidXRlLCAnbWVkaWEnLCB2YWx1ZSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRyZWwgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRhdHRyaWJ1dGUsICdyZWwnLCB2YWx1ZSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRkYXRldGltZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGF0dHJpYnV0ZSwgJ2RhdGV0aW1lJywgdmFsdWUpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkcHViZGF0ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGF0dHJpYnV0ZSwgJ3B1YmRhdGUnLCB2YWx1ZSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRjb2xzcGFuID0gZnVuY3Rpb24gKG4pIHtcblx0cmV0dXJuIEEyKFxuXHRcdF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRhdHRyaWJ1dGUsXG5cdFx0J2NvbHNwYW4nLFxuXHRcdF9lbG1fbGFuZyRjb3JlJEJhc2ljcyR0b1N0cmluZyhuKSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRyb3dzcGFuID0gZnVuY3Rpb24gKG4pIHtcblx0cmV0dXJuIEEyKFxuXHRcdF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRhdHRyaWJ1dGUsXG5cdFx0J3Jvd3NwYW4nLFxuXHRcdF9lbG1fbGFuZyRjb3JlJEJhc2ljcyR0b1N0cmluZyhuKSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRtYW5pZmVzdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGF0dHJpYnV0ZSwgJ21hbmlmZXN0JywgdmFsdWUpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkcHJvcGVydHkgPSBfZWxtX2xhbmckdmlydHVhbF9kb20kVmlydHVhbERvbSRwcm9wZXJ0eTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkc3RyaW5nUHJvcGVydHkgPSBGMihcblx0ZnVuY3Rpb24gKG5hbWUsIHN0cmluZykge1xuXHRcdHJldHVybiBBMihcblx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRwcm9wZXJ0eSxcblx0XHRcdG5hbWUsXG5cdFx0XHRfZWxtX2xhbmckY29yZSRKc29uX0VuY29kZSRzdHJpbmcoc3RyaW5nKSk7XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRjbGFzcyA9IGZ1bmN0aW9uIChuYW1lKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkc3RyaW5nUHJvcGVydHksICdjbGFzc05hbWUnLCBuYW1lKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGlkID0gZnVuY3Rpb24gKG5hbWUpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSwgJ2lkJywgbmFtZSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyR0aXRsZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkc3RyaW5nUHJvcGVydHksICd0aXRsZScsIG5hbWUpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkYWNjZXNza2V5ID0gZnVuY3Rpb24gKCRjaGFyKSB7XG5cdHJldHVybiBBMihcblx0XHRfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkc3RyaW5nUHJvcGVydHksXG5cdFx0J2FjY2Vzc0tleScsXG5cdFx0X2VsbV9sYW5nJGNvcmUkU3RyaW5nJGZyb21DaGFyKCRjaGFyKSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRkaXIgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSwgJ2RpcicsIHZhbHVlKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGRyb3B6b25lID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkc3RyaW5nUHJvcGVydHksICdkcm9wem9uZScsIHZhbHVlKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGxhbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSwgJ2xhbmcnLCB2YWx1ZSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRjb250ZW50ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkc3RyaW5nUHJvcGVydHksICdjb250ZW50JywgdmFsdWUpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkaHR0cEVxdWl2ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkc3RyaW5nUHJvcGVydHksICdodHRwRXF1aXYnLCB2YWx1ZSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRsYW5ndWFnZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5LCAnbGFuZ3VhZ2UnLCB2YWx1ZSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzcmMgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSwgJ3NyYycsIHZhbHVlKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGFsdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5LCAnYWx0JywgdmFsdWUpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkcHJlbG9hZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5LCAncHJlbG9hZCcsIHZhbHVlKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHBvc3RlciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5LCAncG9zdGVyJywgdmFsdWUpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMka2luZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5LCAna2luZCcsIHZhbHVlKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHNyY2xhbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSwgJ3NyY2xhbmcnLCB2YWx1ZSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzYW5kYm94ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkc3RyaW5nUHJvcGVydHksICdzYW5kYm94JywgdmFsdWUpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkc3JjZG9jID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkc3RyaW5nUHJvcGVydHksICdzcmNkb2MnLCB2YWx1ZSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyR0eXBlXyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5LCAndHlwZScsIHZhbHVlKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkc3RyaW5nUHJvcGVydHksICd2YWx1ZScsIHZhbHVlKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGRlZmF1bHRWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5LCAnZGVmYXVsdFZhbHVlJywgdmFsdWUpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkcGxhY2Vob2xkZXIgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSwgJ3BsYWNlaG9sZGVyJywgdmFsdWUpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkYWNjZXB0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkc3RyaW5nUHJvcGVydHksICdhY2NlcHQnLCB2YWx1ZSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRhY2NlcHRDaGFyc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkc3RyaW5nUHJvcGVydHksICdhY2NlcHRDaGFyc2V0JywgdmFsdWUpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkYWN0aW9uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkc3RyaW5nUHJvcGVydHksICdhY3Rpb24nLCB2YWx1ZSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRhdXRvY29tcGxldGUgPSBmdW5jdGlvbiAoYm9vbCkge1xuXHRyZXR1cm4gQTIoXG5cdFx0X2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5LFxuXHRcdCdhdXRvY29tcGxldGUnLFxuXHRcdGJvb2wgPyAnb24nIDogJ29mZicpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkZW5jdHlwZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5LCAnZW5jdHlwZScsIHZhbHVlKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJG1ldGhvZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5LCAnbWV0aG9kJywgdmFsdWUpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkbmFtZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5LCAnbmFtZScsIHZhbHVlKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHBhdHRlcm4gPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSwgJ3BhdHRlcm4nLCB2YWx1ZSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRmb3IgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSwgJ2h0bWxGb3InLCB2YWx1ZSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRtYXggPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSwgJ21heCcsIHZhbHVlKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJG1pbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5LCAnbWluJywgdmFsdWUpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkc3RlcCA9IGZ1bmN0aW9uIChuKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkc3RyaW5nUHJvcGVydHksICdzdGVwJywgbik7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyR3cmFwID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkc3RyaW5nUHJvcGVydHksICd3cmFwJywgdmFsdWUpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkdXNlbWFwID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkc3RyaW5nUHJvcGVydHksICd1c2VNYXAnLCB2YWx1ZSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzaGFwZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5LCAnc2hhcGUnLCB2YWx1ZSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRjb29yZHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSwgJ2Nvb3JkcycsIHZhbHVlKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGtleXR5cGUgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSwgJ2tleXR5cGUnLCB2YWx1ZSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRhbGlnbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5LCAnYWxpZ24nLCB2YWx1ZSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRjaXRlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkc3RyaW5nUHJvcGVydHksICdjaXRlJywgdmFsdWUpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkaHJlZiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5LCAnaHJlZicsIHZhbHVlKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHRhcmdldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5LCAndGFyZ2V0JywgdmFsdWUpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkZG93bmxvYWRBcyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5LCAnZG93bmxvYWQnLCB2YWx1ZSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRocmVmbGFuZyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5LCAnaHJlZmxhbmcnLCB2YWx1ZSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRwaW5nID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkc3RyaW5nUHJvcGVydHksICdwaW5nJywgdmFsdWUpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkc3RhcnQgPSBmdW5jdGlvbiAobikge1xuXHRyZXR1cm4gQTIoXG5cdFx0X2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5LFxuXHRcdCdzdGFydCcsXG5cdFx0X2VsbV9sYW5nJGNvcmUkQmFzaWNzJHRvU3RyaW5nKG4pKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGhlYWRlcnMgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSwgJ2hlYWRlcnMnLCB2YWx1ZSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzY29wZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5LCAnc2NvcGUnLCB2YWx1ZSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRib29sUHJvcGVydHkgPSBGMihcblx0ZnVuY3Rpb24gKG5hbWUsIGJvb2wpIHtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkcHJvcGVydHksXG5cdFx0XHRuYW1lLFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkSnNvbl9FbmNvZGUkYm9vbChib29sKSk7XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRoaWRkZW4gPSBmdW5jdGlvbiAoYm9vbCkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGJvb2xQcm9wZXJ0eSwgJ2hpZGRlbicsIGJvb2wpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkY29udGVudGVkaXRhYmxlID0gZnVuY3Rpb24gKGJvb2wpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRib29sUHJvcGVydHksICdjb250ZW50RWRpdGFibGUnLCBib29sKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHNwZWxsY2hlY2sgPSBmdW5jdGlvbiAoYm9vbCkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGJvb2xQcm9wZXJ0eSwgJ3NwZWxsY2hlY2snLCBib29sKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGFzeW5jID0gZnVuY3Rpb24gKGJvb2wpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRib29sUHJvcGVydHksICdhc3luYycsIGJvb2wpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkZGVmZXIgPSBmdW5jdGlvbiAoYm9vbCkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGJvb2xQcm9wZXJ0eSwgJ2RlZmVyJywgYm9vbCk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRzY29wZWQgPSBmdW5jdGlvbiAoYm9vbCkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGJvb2xQcm9wZXJ0eSwgJ3Njb3BlZCcsIGJvb2wpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkYXV0b3BsYXkgPSBmdW5jdGlvbiAoYm9vbCkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGJvb2xQcm9wZXJ0eSwgJ2F1dG9wbGF5JywgYm9vbCk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRjb250cm9scyA9IGZ1bmN0aW9uIChib29sKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkYm9vbFByb3BlcnR5LCAnY29udHJvbHMnLCBib29sKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGxvb3AgPSBmdW5jdGlvbiAoYm9vbCkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGJvb2xQcm9wZXJ0eSwgJ2xvb3AnLCBib29sKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGRlZmF1bHQgPSBmdW5jdGlvbiAoYm9vbCkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGJvb2xQcm9wZXJ0eSwgJ2RlZmF1bHQnLCBib29sKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHNlYW1sZXNzID0gZnVuY3Rpb24gKGJvb2wpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRib29sUHJvcGVydHksICdzZWFtbGVzcycsIGJvb2wpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkY2hlY2tlZCA9IGZ1bmN0aW9uIChib29sKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkYm9vbFByb3BlcnR5LCAnY2hlY2tlZCcsIGJvb2wpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkc2VsZWN0ZWQgPSBmdW5jdGlvbiAoYm9vbCkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGJvb2xQcm9wZXJ0eSwgJ3NlbGVjdGVkJywgYm9vbCk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRhdXRvZm9jdXMgPSBmdW5jdGlvbiAoYm9vbCkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGJvb2xQcm9wZXJ0eSwgJ2F1dG9mb2N1cycsIGJvb2wpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkZGlzYWJsZWQgPSBmdW5jdGlvbiAoYm9vbCkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGJvb2xQcm9wZXJ0eSwgJ2Rpc2FibGVkJywgYm9vbCk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRtdWx0aXBsZSA9IGZ1bmN0aW9uIChib29sKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkYm9vbFByb3BlcnR5LCAnbXVsdGlwbGUnLCBib29sKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJG5vdmFsaWRhdGUgPSBmdW5jdGlvbiAoYm9vbCkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGJvb2xQcm9wZXJ0eSwgJ25vVmFsaWRhdGUnLCBib29sKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHJlYWRvbmx5ID0gZnVuY3Rpb24gKGJvb2wpIHtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRib29sUHJvcGVydHksICdyZWFkT25seScsIGJvb2wpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkcmVxdWlyZWQgPSBmdW5jdGlvbiAoYm9vbCkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGJvb2xQcm9wZXJ0eSwgJ3JlcXVpcmVkJywgYm9vbCk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRpc21hcCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGJvb2xQcm9wZXJ0eSwgJ2lzTWFwJywgdmFsdWUpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkZG93bmxvYWQgPSBmdW5jdGlvbiAoYm9vbCkge1xuXHRyZXR1cm4gQTIoX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGJvb2xQcm9wZXJ0eSwgJ2Rvd25sb2FkJywgYm9vbCk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRyZXZlcnNlZCA9IGZ1bmN0aW9uIChib29sKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkYm9vbFByb3BlcnR5LCAncmV2ZXJzZWQnLCBib29sKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGNsYXNzTGlzdCA9IGZ1bmN0aW9uIChsaXN0KSB7XG5cdHJldHVybiBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkY2xhc3MoXG5cdFx0QTIoXG5cdFx0XHRfZWxtX2xhbmckY29yZSRTdHJpbmckam9pbixcblx0XHRcdCcgJyxcblx0XHRcdEEyKFxuXHRcdFx0XHRfZWxtX2xhbmckY29yZSRMaXN0JG1hcCxcblx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkVHVwbGUkZmlyc3QsXG5cdFx0XHRcdEEyKF9lbG1fbGFuZyRjb3JlJExpc3QkZmlsdGVyLCBfZWxtX2xhbmckY29yZSRUdXBsZSRzZWNvbmQsIGxpc3QpKSkpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkc3R5bGUgPSBfZWxtX2xhbmckdmlydHVhbF9kb20kVmlydHVhbERvbSRzdHlsZTtcblxudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfRXZlbnRzJGtleUNvZGUgPSBBMihfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZSRmaWVsZCwgJ2tleUNvZGUnLCBfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZSRpbnQpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfRXZlbnRzJHRhcmdldENoZWNrZWQgPSBBMihcblx0X2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkYXQsXG5cdHtcblx0XHRjdG9yOiAnOjonLFxuXHRcdF8wOiAndGFyZ2V0Jyxcblx0XHRfMToge1xuXHRcdFx0Y3RvcjogJzo6Jyxcblx0XHRcdF8wOiAnY2hlY2tlZCcsXG5cdFx0XHRfMToge2N0b3I6ICdbXSd9XG5cdFx0fVxuXHR9LFxuXHRfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZSRib29sKTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0V2ZW50cyR0YXJnZXRWYWx1ZSA9IEEyKFxuXHRfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZSRhdCxcblx0e1xuXHRcdGN0b3I6ICc6OicsXG5cdFx0XzA6ICd0YXJnZXQnLFxuXHRcdF8xOiB7XG5cdFx0XHRjdG9yOiAnOjonLFxuXHRcdFx0XzA6ICd2YWx1ZScsXG5cdFx0XHRfMToge2N0b3I6ICdbXSd9XG5cdFx0fVxuXHR9LFxuXHRfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZSRzdHJpbmcpO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfRXZlbnRzJGRlZmF1bHRPcHRpb25zID0gX2VsbV9sYW5nJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kZGVmYXVsdE9wdGlvbnM7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9FdmVudHMkb25XaXRoT3B0aW9ucyA9IF9lbG1fbGFuZyR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJG9uV2l0aE9wdGlvbnM7XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9FdmVudHMkb24gPSBfZWxtX2xhbmckdmlydHVhbF9kb20kVmlydHVhbERvbSRvbjtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0V2ZW50cyRvbkZvY3VzID0gZnVuY3Rpb24gKG1zZykge1xuXHRyZXR1cm4gQTIoXG5cdFx0X2VsbV9sYW5nJGh0bWwkSHRtbF9FdmVudHMkb24sXG5cdFx0J2ZvY3VzJyxcblx0XHRfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZSRzdWNjZWVkKG1zZykpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0V2ZW50cyRvbkJsdXIgPSBmdW5jdGlvbiAobXNnKSB7XG5cdHJldHVybiBBMihcblx0XHRfZWxtX2xhbmckaHRtbCRIdG1sX0V2ZW50cyRvbixcblx0XHQnYmx1cicsXG5cdFx0X2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkc3VjY2VlZChtc2cpKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9FdmVudHMkb25TdWJtaXRPcHRpb25zID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLnVwZGF0ZShcblx0X2VsbV9sYW5nJGh0bWwkSHRtbF9FdmVudHMkZGVmYXVsdE9wdGlvbnMsXG5cdHtwcmV2ZW50RGVmYXVsdDogdHJ1ZX0pO1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfRXZlbnRzJG9uU3VibWl0ID0gZnVuY3Rpb24gKG1zZykge1xuXHRyZXR1cm4gQTMoXG5cdFx0X2VsbV9sYW5nJGh0bWwkSHRtbF9FdmVudHMkb25XaXRoT3B0aW9ucyxcblx0XHQnc3VibWl0Jyxcblx0XHRfZWxtX2xhbmckaHRtbCRIdG1sX0V2ZW50cyRvblN1Ym1pdE9wdGlvbnMsXG5cdFx0X2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkc3VjY2VlZChtc2cpKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9FdmVudHMkb25DaGVjayA9IGZ1bmN0aW9uICh0YWdnZXIpIHtcblx0cmV0dXJuIEEyKFxuXHRcdF9lbG1fbGFuZyRodG1sJEh0bWxfRXZlbnRzJG9uLFxuXHRcdCdjaGFuZ2UnLFxuXHRcdEEyKF9lbG1fbGFuZyRjb3JlJEpzb25fRGVjb2RlJG1hcCwgdGFnZ2VyLCBfZWxtX2xhbmckaHRtbCRIdG1sX0V2ZW50cyR0YXJnZXRDaGVja2VkKSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfRXZlbnRzJG9uSW5wdXQgPSBmdW5jdGlvbiAodGFnZ2VyKSB7XG5cdHJldHVybiBBMihcblx0XHRfZWxtX2xhbmckaHRtbCRIdG1sX0V2ZW50cyRvbixcblx0XHQnaW5wdXQnLFxuXHRcdEEyKF9lbG1fbGFuZyRjb3JlJEpzb25fRGVjb2RlJG1hcCwgdGFnZ2VyLCBfZWxtX2xhbmckaHRtbCRIdG1sX0V2ZW50cyR0YXJnZXRWYWx1ZSkpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0V2ZW50cyRvbk1vdXNlT3V0ID0gZnVuY3Rpb24gKG1zZykge1xuXHRyZXR1cm4gQTIoXG5cdFx0X2VsbV9sYW5nJGh0bWwkSHRtbF9FdmVudHMkb24sXG5cdFx0J21vdXNlb3V0Jyxcblx0XHRfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZSRzdWNjZWVkKG1zZykpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0V2ZW50cyRvbk1vdXNlT3ZlciA9IGZ1bmN0aW9uIChtc2cpIHtcblx0cmV0dXJuIEEyKFxuXHRcdF9lbG1fbGFuZyRodG1sJEh0bWxfRXZlbnRzJG9uLFxuXHRcdCdtb3VzZW92ZXInLFxuXHRcdF9lbG1fbGFuZyRjb3JlJEpzb25fRGVjb2RlJHN1Y2NlZWQobXNnKSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfRXZlbnRzJG9uTW91c2VMZWF2ZSA9IGZ1bmN0aW9uIChtc2cpIHtcblx0cmV0dXJuIEEyKFxuXHRcdF9lbG1fbGFuZyRodG1sJEh0bWxfRXZlbnRzJG9uLFxuXHRcdCdtb3VzZWxlYXZlJyxcblx0XHRfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZSRzdWNjZWVkKG1zZykpO1xufTtcbnZhciBfZWxtX2xhbmckaHRtbCRIdG1sX0V2ZW50cyRvbk1vdXNlRW50ZXIgPSBmdW5jdGlvbiAobXNnKSB7XG5cdHJldHVybiBBMihcblx0XHRfZWxtX2xhbmckaHRtbCRIdG1sX0V2ZW50cyRvbixcblx0XHQnbW91c2VlbnRlcicsXG5cdFx0X2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkc3VjY2VlZChtc2cpKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9FdmVudHMkb25Nb3VzZVVwID0gZnVuY3Rpb24gKG1zZykge1xuXHRyZXR1cm4gQTIoXG5cdFx0X2VsbV9sYW5nJGh0bWwkSHRtbF9FdmVudHMkb24sXG5cdFx0J21vdXNldXAnLFxuXHRcdF9lbG1fbGFuZyRjb3JlJEpzb25fRGVjb2RlJHN1Y2NlZWQobXNnKSk7XG59O1xudmFyIF9lbG1fbGFuZyRodG1sJEh0bWxfRXZlbnRzJG9uTW91c2VEb3duID0gZnVuY3Rpb24gKG1zZykge1xuXHRyZXR1cm4gQTIoXG5cdFx0X2VsbV9sYW5nJGh0bWwkSHRtbF9FdmVudHMkb24sXG5cdFx0J21vdXNlZG93bicsXG5cdFx0X2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkc3VjY2VlZChtc2cpKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9FdmVudHMkb25Eb3VibGVDbGljayA9IGZ1bmN0aW9uIChtc2cpIHtcblx0cmV0dXJuIEEyKFxuXHRcdF9lbG1fbGFuZyRodG1sJEh0bWxfRXZlbnRzJG9uLFxuXHRcdCdkYmxjbGljaycsXG5cdFx0X2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkc3VjY2VlZChtc2cpKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9FdmVudHMkb25DbGljayA9IGZ1bmN0aW9uIChtc2cpIHtcblx0cmV0dXJuIEEyKFxuXHRcdF9lbG1fbGFuZyRodG1sJEh0bWxfRXZlbnRzJG9uLFxuXHRcdCdjbGljaycsXG5cdFx0X2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkc3VjY2VlZChtc2cpKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0bWwkSHRtbF9FdmVudHMkT3B0aW9ucyA9IEYyKFxuXHRmdW5jdGlvbiAoYSwgYikge1xuXHRcdHJldHVybiB7c3RvcFByb3BhZ2F0aW9uOiBhLCBwcmV2ZW50RGVmYXVsdDogYn07XG5cdH0pO1xuXG52YXIgX2VsbV9sYW5nJGh0dHAkTmF0aXZlX0h0dHAgPSBmdW5jdGlvbigpIHtcblxuXG4vLyBFTkNPRElORyBBTkQgREVDT0RJTkdcblxuZnVuY3Rpb24gZW5jb2RlVXJpKHN0cmluZylcbntcblx0cmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmcpO1xufVxuXG5mdW5jdGlvbiBkZWNvZGVVcmkoc3RyaW5nKVxue1xuXHR0cnlcblx0e1xuXHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRNYXliZSRKdXN0KGRlY29kZVVSSUNvbXBvbmVudChzdHJpbmcpKTtcblx0fVxuXHRjYXRjaChlKVxuXHR7XG5cdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE1heWJlJE5vdGhpbmc7XG5cdH1cbn1cblxuXG4vLyBTRU5EIFJFUVVFU1RcblxuZnVuY3Rpb24gdG9UYXNrKHJlcXVlc3QsIG1heWJlUHJvZ3Jlc3MpXG57XG5cdHJldHVybiBfZWxtX2xhbmckY29yZSROYXRpdmVfU2NoZWR1bGVyLm5hdGl2ZUJpbmRpbmcoZnVuY3Rpb24oY2FsbGJhY2spXG5cdHtcblx0XHR2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cblx0XHRjb25maWd1cmVQcm9ncmVzcyh4aHIsIG1heWJlUHJvZ3Jlc3MpO1xuXG5cdFx0eGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRjYWxsYmFjayhfZWxtX2xhbmckY29yZSROYXRpdmVfU2NoZWR1bGVyLmZhaWwoeyBjdG9yOiAnTmV0d29ya0Vycm9yJyB9KSk7XG5cdFx0fSk7XG5cdFx0eGhyLmFkZEV2ZW50TGlzdGVuZXIoJ3RpbWVvdXQnLCBmdW5jdGlvbigpIHtcblx0XHRcdGNhbGxiYWNrKF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TY2hlZHVsZXIuZmFpbCh7IGN0b3I6ICdUaW1lb3V0JyB9KSk7XG5cdFx0fSk7XG5cdFx0eGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcblx0XHRcdGNhbGxiYWNrKGhhbmRsZVJlc3BvbnNlKHhociwgcmVxdWVzdC5leHBlY3QucmVzcG9uc2VUb1Jlc3VsdCkpO1xuXHRcdH0pO1xuXG5cdFx0dHJ5XG5cdFx0e1xuXHRcdFx0eGhyLm9wZW4ocmVxdWVzdC5tZXRob2QsIHJlcXVlc3QudXJsLCB0cnVlKTtcblx0XHR9XG5cdFx0Y2F0Y2ggKGUpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIGNhbGxiYWNrKF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TY2hlZHVsZXIuZmFpbCh7IGN0b3I6ICdCYWRVcmwnLCBfMDogcmVxdWVzdC51cmwgfSkpO1xuXHRcdH1cblxuXHRcdGNvbmZpZ3VyZVJlcXVlc3QoeGhyLCByZXF1ZXN0KTtcblx0XHRzZW5kKHhociwgcmVxdWVzdC5ib2R5KTtcblxuXHRcdHJldHVybiBmdW5jdGlvbigpIHsgeGhyLmFib3J0KCk7IH07XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBjb25maWd1cmVQcm9ncmVzcyh4aHIsIG1heWJlUHJvZ3Jlc3MpXG57XG5cdGlmIChtYXliZVByb2dyZXNzLmN0b3IgPT09ICdOb3RoaW5nJylcblx0e1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHhoci5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0aWYgKCFldmVudC5sZW5ndGhDb21wdXRhYmxlKVxuXHRcdHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0X2VsbV9sYW5nJGNvcmUkTmF0aXZlX1NjaGVkdWxlci5yYXdTcGF3bihtYXliZVByb2dyZXNzLl8wKHtcblx0XHRcdGJ5dGVzOiBldmVudC5sb2FkZWQsXG5cdFx0XHRieXRlc0V4cGVjdGVkOiBldmVudC50b3RhbFxuXHRcdH0pKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGNvbmZpZ3VyZVJlcXVlc3QoeGhyLCByZXF1ZXN0KVxue1xuXHRmdW5jdGlvbiBzZXRIZWFkZXIocGFpcilcblx0e1xuXHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKHBhaXIuXzAsIHBhaXIuXzEpO1xuXHR9XG5cblx0QTIoX2VsbV9sYW5nJGNvcmUkTGlzdCRtYXAsIHNldEhlYWRlciwgcmVxdWVzdC5oZWFkZXJzKTtcblx0eGhyLnJlc3BvbnNlVHlwZSA9IHJlcXVlc3QuZXhwZWN0LnJlc3BvbnNlVHlwZTtcblx0eGhyLndpdGhDcmVkZW50aWFscyA9IHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzO1xuXG5cdGlmIChyZXF1ZXN0LnRpbWVvdXQuY3RvciA9PT0gJ0p1c3QnKVxuXHR7XG5cdFx0eGhyLnRpbWVvdXQgPSByZXF1ZXN0LnRpbWVvdXQuXzA7XG5cdH1cbn1cblxuZnVuY3Rpb24gc2VuZCh4aHIsIGJvZHkpXG57XG5cdHN3aXRjaCAoYm9keS5jdG9yKVxuXHR7XG5cdFx0Y2FzZSAnRW1wdHlCb2R5Jzpcblx0XHRcdHhoci5zZW5kKCk7XG5cdFx0XHRyZXR1cm47XG5cblx0XHRjYXNlICdTdHJpbmdCb2R5Jzpcblx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCBib2R5Ll8wKTtcblx0XHRcdHhoci5zZW5kKGJvZHkuXzEpO1xuXHRcdFx0cmV0dXJuO1xuXG5cdFx0Y2FzZSAnRm9ybURhdGFCb2R5Jzpcblx0XHRcdHhoci5zZW5kKGJvZHkuXzApO1xuXHRcdFx0cmV0dXJuO1xuXHR9XG59XG5cblxuLy8gUkVTUE9OU0VTXG5cbmZ1bmN0aW9uIGhhbmRsZVJlc3BvbnNlKHhociwgcmVzcG9uc2VUb1Jlc3VsdClcbntcblx0dmFyIHJlc3BvbnNlID0gdG9SZXNwb25zZSh4aHIpO1xuXG5cdGlmICh4aHIuc3RhdHVzIDwgMjAwIHx8IDMwMCA8PSB4aHIuc3RhdHVzKVxuXHR7XG5cdFx0cmVzcG9uc2UuYm9keSA9IHhoci5yZXNwb25zZVRleHQ7XG5cdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TY2hlZHVsZXIuZmFpbCh7XG5cdFx0XHRjdG9yOiAnQmFkU3RhdHVzJyxcblx0XHRcdF8wOiByZXNwb25zZVxuXHRcdH0pO1xuXHR9XG5cblx0dmFyIHJlc3VsdCA9IHJlc3BvbnNlVG9SZXN1bHQocmVzcG9uc2UpO1xuXG5cdGlmIChyZXN1bHQuY3RvciA9PT0gJ09rJylcblx0e1xuXHRcdHJldHVybiBfZWxtX2xhbmckY29yZSROYXRpdmVfU2NoZWR1bGVyLnN1Y2NlZWQocmVzdWx0Ll8wKTtcblx0fVxuXHRlbHNlXG5cdHtcblx0XHRyZXNwb25zZS5ib2R5ID0geGhyLnJlc3BvbnNlVGV4dDtcblx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1NjaGVkdWxlci5mYWlsKHtcblx0XHRcdGN0b3I6ICdCYWRQYXlsb2FkJyxcblx0XHRcdF8wOiByZXN1bHQuXzAsXG5cdFx0XHRfMTogcmVzcG9uc2Vcblx0XHR9KTtcblx0fVxufVxuXG5mdW5jdGlvbiB0b1Jlc3BvbnNlKHhocilcbntcblx0cmV0dXJuIHtcblx0XHRzdGF0dXM6IHsgY29kZTogeGhyLnN0YXR1cywgbWVzc2FnZTogeGhyLnN0YXR1c1RleHQgfSxcblx0XHRoZWFkZXJzOiBwYXJzZUhlYWRlcnMoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSxcblx0XHR1cmw6IHhoci5yZXNwb25zZVVSTCxcblx0XHRib2R5OiB4aHIucmVzcG9uc2Vcblx0fTtcbn1cblxuZnVuY3Rpb24gcGFyc2VIZWFkZXJzKHJhd0hlYWRlcnMpXG57XG5cdHZhciBoZWFkZXJzID0gX2VsbV9sYW5nJGNvcmUkRGljdCRlbXB0eTtcblxuXHRpZiAoIXJhd0hlYWRlcnMpXG5cdHtcblx0XHRyZXR1cm4gaGVhZGVycztcblx0fVxuXG5cdHZhciBoZWFkZXJQYWlycyA9IHJhd0hlYWRlcnMuc3BsaXQoJ1xcdTAwMGRcXHUwMDBhJyk7XG5cdGZvciAodmFyIGkgPSBoZWFkZXJQYWlycy5sZW5ndGg7IGktLTsgKVxuXHR7XG5cdFx0dmFyIGhlYWRlclBhaXIgPSBoZWFkZXJQYWlyc1tpXTtcblx0XHR2YXIgaW5kZXggPSBoZWFkZXJQYWlyLmluZGV4T2YoJ1xcdTAwM2FcXHUwMDIwJyk7XG5cdFx0aWYgKGluZGV4ID4gMClcblx0XHR7XG5cdFx0XHR2YXIga2V5ID0gaGVhZGVyUGFpci5zdWJzdHJpbmcoMCwgaW5kZXgpO1xuXHRcdFx0dmFyIHZhbHVlID0gaGVhZGVyUGFpci5zdWJzdHJpbmcoaW5kZXggKyAyKTtcblxuXHRcdFx0aGVhZGVycyA9IEEzKF9lbG1fbGFuZyRjb3JlJERpY3QkdXBkYXRlLCBrZXksIGZ1bmN0aW9uKG9sZFZhbHVlKSB7XG5cdFx0XHRcdGlmIChvbGRWYWx1ZS5jdG9yID09PSAnSnVzdCcpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkTWF5YmUkSnVzdCh2YWx1ZSArICcsICcgKyBvbGRWYWx1ZS5fMCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE1heWJlJEp1c3QodmFsdWUpO1xuXHRcdFx0fSwgaGVhZGVycyk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGhlYWRlcnM7XG59XG5cblxuLy8gRVhQRUNUT1JTXG5cbmZ1bmN0aW9uIGV4cGVjdFN0cmluZ1Jlc3BvbnNlKHJlc3BvbnNlVG9SZXN1bHQpXG57XG5cdHJldHVybiB7XG5cdFx0cmVzcG9uc2VUeXBlOiAndGV4dCcsXG5cdFx0cmVzcG9uc2VUb1Jlc3VsdDogcmVzcG9uc2VUb1Jlc3VsdFxuXHR9O1xufVxuXG5mdW5jdGlvbiBtYXBFeHBlY3QoZnVuYywgZXhwZWN0KVxue1xuXHRyZXR1cm4ge1xuXHRcdHJlc3BvbnNlVHlwZTogZXhwZWN0LnJlc3BvbnNlVHlwZSxcblx0XHRyZXNwb25zZVRvUmVzdWx0OiBmdW5jdGlvbihyZXNwb25zZSkge1xuXHRcdFx0dmFyIGNvbnZlcnRlZFJlc3BvbnNlID0gZXhwZWN0LnJlc3BvbnNlVG9SZXN1bHQocmVzcG9uc2UpO1xuXHRcdFx0cmV0dXJuIEEyKF9lbG1fbGFuZyRjb3JlJFJlc3VsdCRtYXAsIGZ1bmMsIGNvbnZlcnRlZFJlc3BvbnNlKTtcblx0XHR9XG5cdH07XG59XG5cblxuLy8gQk9EWVxuXG5mdW5jdGlvbiBtdWx0aXBhcnQocGFydHMpXG57XG5cdHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG5cdHdoaWxlIChwYXJ0cy5jdG9yICE9PSAnW10nKVxuXHR7XG5cdFx0dmFyIHBhcnQgPSBwYXJ0cy5fMDtcblx0XHRmb3JtRGF0YS5hcHBlbmQocGFydC5fMCwgcGFydC5fMSk7XG5cdFx0cGFydHMgPSBwYXJ0cy5fMTtcblx0fVxuXG5cdHJldHVybiB7IGN0b3I6ICdGb3JtRGF0YUJvZHknLCBfMDogZm9ybURhdGEgfTtcbn1cblxucmV0dXJuIHtcblx0dG9UYXNrOiBGMih0b1Rhc2spLFxuXHRleHBlY3RTdHJpbmdSZXNwb25zZTogZXhwZWN0U3RyaW5nUmVzcG9uc2UsXG5cdG1hcEV4cGVjdDogRjIobWFwRXhwZWN0KSxcblx0bXVsdGlwYXJ0OiBtdWx0aXBhcnQsXG5cdGVuY29kZVVyaTogZW5jb2RlVXJpLFxuXHRkZWNvZGVVcmk6IGRlY29kZVVyaVxufTtcblxufSgpO1xuXG52YXIgX2VsbV9sYW5nJGh0dHAkSHR0cF9JbnRlcm5hbCRtYXAgPSBGMihcblx0ZnVuY3Rpb24gKGZ1bmMsIHJlcXVlc3QpIHtcblx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLnVwZGF0ZShcblx0XHRcdHJlcXVlc3QsXG5cdFx0XHR7XG5cdFx0XHRcdGV4cGVjdDogQTIoX2VsbV9sYW5nJGh0dHAkTmF0aXZlX0h0dHAubWFwRXhwZWN0LCBmdW5jLCByZXF1ZXN0LmV4cGVjdClcblx0XHRcdH0pO1xuXHR9KTtcbnZhciBfZWxtX2xhbmckaHR0cCRIdHRwX0ludGVybmFsJFJhd1JlcXVlc3QgPSBGNyhcblx0ZnVuY3Rpb24gKGEsIGIsIGMsIGQsIGUsIGYsIGcpIHtcblx0XHRyZXR1cm4ge21ldGhvZDogYSwgaGVhZGVyczogYiwgdXJsOiBjLCBib2R5OiBkLCBleHBlY3Q6IGUsIHRpbWVvdXQ6IGYsIHdpdGhDcmVkZW50aWFsczogZ307XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRodHRwJEh0dHBfSW50ZXJuYWwkUmVxdWVzdCA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7Y3RvcjogJ1JlcXVlc3QnLCBfMDogYX07XG59O1xudmFyIF9lbG1fbGFuZyRodHRwJEh0dHBfSW50ZXJuYWwkRXhwZWN0ID0ge2N0b3I6ICdFeHBlY3QnfTtcbnZhciBfZWxtX2xhbmckaHR0cCRIdHRwX0ludGVybmFsJEZvcm1EYXRhQm9keSA9IHtjdG9yOiAnRm9ybURhdGFCb2R5J307XG52YXIgX2VsbV9sYW5nJGh0dHAkSHR0cF9JbnRlcm5hbCRTdHJpbmdCb2R5ID0gRjIoXG5cdGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0cmV0dXJuIHtjdG9yOiAnU3RyaW5nQm9keScsIF8wOiBhLCBfMTogYn07XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRodHRwJEh0dHBfSW50ZXJuYWwkRW1wdHlCb2R5ID0ge2N0b3I6ICdFbXB0eUJvZHknfTtcbnZhciBfZWxtX2xhbmckaHR0cCRIdHRwX0ludGVybmFsJEhlYWRlciA9IEYyKFxuXHRmdW5jdGlvbiAoYSwgYikge1xuXHRcdHJldHVybiB7Y3RvcjogJ0hlYWRlcicsIF8wOiBhLCBfMTogYn07XG5cdH0pO1xuXG52YXIgX2VsbV9sYW5nJGh0dHAkSHR0cCRkZWNvZGVVcmkgPSBfZWxtX2xhbmckaHR0cCROYXRpdmVfSHR0cC5kZWNvZGVVcmk7XG52YXIgX2VsbV9sYW5nJGh0dHAkSHR0cCRlbmNvZGVVcmkgPSBfZWxtX2xhbmckaHR0cCROYXRpdmVfSHR0cC5lbmNvZGVVcmk7XG52YXIgX2VsbV9sYW5nJGh0dHAkSHR0cCRleHBlY3RTdHJpbmdSZXNwb25zZSA9IF9lbG1fbGFuZyRodHRwJE5hdGl2ZV9IdHRwLmV4cGVjdFN0cmluZ1Jlc3BvbnNlO1xudmFyIF9lbG1fbGFuZyRodHRwJEh0dHAkZXhwZWN0SnNvbiA9IGZ1bmN0aW9uIChkZWNvZGVyKSB7XG5cdHJldHVybiBfZWxtX2xhbmckaHR0cCRIdHRwJGV4cGVjdFN0cmluZ1Jlc3BvbnNlKFxuXHRcdGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0cmV0dXJuIEEyKF9lbG1fbGFuZyRjb3JlJEpzb25fRGVjb2RlJGRlY29kZVN0cmluZywgZGVjb2RlciwgcmVzcG9uc2UuYm9keSk7XG5cdFx0fSk7XG59O1xudmFyIF9lbG1fbGFuZyRodHRwJEh0dHAkZXhwZWN0U3RyaW5nID0gX2VsbV9sYW5nJGh0dHAkSHR0cCRleHBlY3RTdHJpbmdSZXNwb25zZShcblx0ZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJFJlc3VsdCRPayhyZXNwb25zZS5ib2R5KTtcblx0fSk7XG52YXIgX2VsbV9sYW5nJGh0dHAkSHR0cCRtdWx0aXBhcnRCb2R5ID0gX2VsbV9sYW5nJGh0dHAkTmF0aXZlX0h0dHAubXVsdGlwYXJ0O1xudmFyIF9lbG1fbGFuZyRodHRwJEh0dHAkc3RyaW5nQm9keSA9IF9lbG1fbGFuZyRodHRwJEh0dHBfSW50ZXJuYWwkU3RyaW5nQm9keTtcbnZhciBfZWxtX2xhbmckaHR0cCRIdHRwJGpzb25Cb2R5ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiBBMihcblx0XHRfZWxtX2xhbmckaHR0cCRIdHRwX0ludGVybmFsJFN0cmluZ0JvZHksXG5cdFx0J2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdEEyKF9lbG1fbGFuZyRjb3JlJEpzb25fRW5jb2RlJGVuY29kZSwgMCwgdmFsdWUpKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0dHAkSHR0cCRlbXB0eUJvZHkgPSBfZWxtX2xhbmckaHR0cCRIdHRwX0ludGVybmFsJEVtcHR5Qm9keTtcbnZhciBfZWxtX2xhbmckaHR0cCRIdHRwJGhlYWRlciA9IF9lbG1fbGFuZyRodHRwJEh0dHBfSW50ZXJuYWwkSGVhZGVyO1xudmFyIF9lbG1fbGFuZyRodHRwJEh0dHAkcmVxdWVzdCA9IF9lbG1fbGFuZyRodHRwJEh0dHBfSW50ZXJuYWwkUmVxdWVzdDtcbnZhciBfZWxtX2xhbmckaHR0cCRIdHRwJHBvc3QgPSBGMyhcblx0ZnVuY3Rpb24gKHVybCwgYm9keSwgZGVjb2Rlcikge1xuXHRcdHJldHVybiBfZWxtX2xhbmckaHR0cCRIdHRwJHJlcXVlc3QoXG5cdFx0XHR7XG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0XHRoZWFkZXJzOiB7Y3RvcjogJ1tdJ30sXG5cdFx0XHRcdHVybDogdXJsLFxuXHRcdFx0XHRib2R5OiBib2R5LFxuXHRcdFx0XHRleHBlY3Q6IF9lbG1fbGFuZyRodHRwJEh0dHAkZXhwZWN0SnNvbihkZWNvZGVyKSxcblx0XHRcdFx0dGltZW91dDogX2VsbV9sYW5nJGNvcmUkTWF5YmUkTm90aGluZyxcblx0XHRcdFx0d2l0aENyZWRlbnRpYWxzOiBmYWxzZVxuXHRcdFx0fSk7XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRodHRwJEh0dHAkZ2V0ID0gRjIoXG5cdGZ1bmN0aW9uICh1cmwsIGRlY29kZXIpIHtcblx0XHRyZXR1cm4gX2VsbV9sYW5nJGh0dHAkSHR0cCRyZXF1ZXN0KFxuXHRcdFx0e1xuXHRcdFx0XHRtZXRob2Q6ICdHRVQnLFxuXHRcdFx0XHRoZWFkZXJzOiB7Y3RvcjogJ1tdJ30sXG5cdFx0XHRcdHVybDogdXJsLFxuXHRcdFx0XHRib2R5OiBfZWxtX2xhbmckaHR0cCRIdHRwJGVtcHR5Qm9keSxcblx0XHRcdFx0ZXhwZWN0OiBfZWxtX2xhbmckaHR0cCRIdHRwJGV4cGVjdEpzb24oZGVjb2RlciksXG5cdFx0XHRcdHRpbWVvdXQ6IF9lbG1fbGFuZyRjb3JlJE1heWJlJE5vdGhpbmcsXG5cdFx0XHRcdHdpdGhDcmVkZW50aWFsczogZmFsc2Vcblx0XHRcdH0pO1xuXHR9KTtcbnZhciBfZWxtX2xhbmckaHR0cCRIdHRwJGdldFN0cmluZyA9IGZ1bmN0aW9uICh1cmwpIHtcblx0cmV0dXJuIF9lbG1fbGFuZyRodHRwJEh0dHAkcmVxdWVzdChcblx0XHR7XG5cdFx0XHRtZXRob2Q6ICdHRVQnLFxuXHRcdFx0aGVhZGVyczoge2N0b3I6ICdbXSd9LFxuXHRcdFx0dXJsOiB1cmwsXG5cdFx0XHRib2R5OiBfZWxtX2xhbmckaHR0cCRIdHRwJGVtcHR5Qm9keSxcblx0XHRcdGV4cGVjdDogX2VsbV9sYW5nJGh0dHAkSHR0cCRleHBlY3RTdHJpbmcsXG5cdFx0XHR0aW1lb3V0OiBfZWxtX2xhbmckY29yZSRNYXliZSROb3RoaW5nLFxuXHRcdFx0d2l0aENyZWRlbnRpYWxzOiBmYWxzZVxuXHRcdH0pO1xufTtcbnZhciBfZWxtX2xhbmckaHR0cCRIdHRwJHRvVGFzayA9IGZ1bmN0aW9uIChfcDApIHtcblx0dmFyIF9wMSA9IF9wMDtcblx0cmV0dXJuIEEyKF9lbG1fbGFuZyRodHRwJE5hdGl2ZV9IdHRwLnRvVGFzaywgX3AxLl8wLCBfZWxtX2xhbmckY29yZSRNYXliZSROb3RoaW5nKTtcbn07XG52YXIgX2VsbV9sYW5nJGh0dHAkSHR0cCRzZW5kID0gRjIoXG5cdGZ1bmN0aW9uIChyZXN1bHRUb01lc3NhZ2UsIHJlcXVlc3QpIHtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRfZWxtX2xhbmckY29yZSRUYXNrJGF0dGVtcHQsXG5cdFx0XHRyZXN1bHRUb01lc3NhZ2UsXG5cdFx0XHRfZWxtX2xhbmckaHR0cCRIdHRwJHRvVGFzayhyZXF1ZXN0KSk7XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRodHRwJEh0dHAkUmVzcG9uc2UgPSBGNChcblx0ZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHtcblx0XHRyZXR1cm4ge3VybDogYSwgc3RhdHVzOiBiLCBoZWFkZXJzOiBjLCBib2R5OiBkfTtcblx0fSk7XG52YXIgX2VsbV9sYW5nJGh0dHAkSHR0cCRCYWRQYXlsb2FkID0gRjIoXG5cdGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0cmV0dXJuIHtjdG9yOiAnQmFkUGF5bG9hZCcsIF8wOiBhLCBfMTogYn07XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRodHRwJEh0dHAkQmFkU3RhdHVzID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHtjdG9yOiAnQmFkU3RhdHVzJywgXzA6IGF9O1xufTtcbnZhciBfZWxtX2xhbmckaHR0cCRIdHRwJE5ldHdvcmtFcnJvciA9IHtjdG9yOiAnTmV0d29ya0Vycm9yJ307XG52YXIgX2VsbV9sYW5nJGh0dHAkSHR0cCRUaW1lb3V0ID0ge2N0b3I6ICdUaW1lb3V0J307XG52YXIgX2VsbV9sYW5nJGh0dHAkSHR0cCRCYWRVcmwgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4ge2N0b3I6ICdCYWRVcmwnLCBfMDogYX07XG59O1xudmFyIF9lbG1fbGFuZyRodHRwJEh0dHAkU3RyaW5nUGFydCA9IEYyKFxuXHRmdW5jdGlvbiAoYSwgYikge1xuXHRcdHJldHVybiB7Y3RvcjogJ1N0cmluZ1BhcnQnLCBfMDogYSwgXzE6IGJ9O1xuXHR9KTtcbnZhciBfZWxtX2xhbmckaHR0cCRIdHRwJHN0cmluZ1BhcnQgPSBfZWxtX2xhbmckaHR0cCRIdHRwJFN0cmluZ1BhcnQ7XG5cbnZhciBfZWxtX2xhbmckbmF2aWdhdGlvbiROYXRpdmVfTmF2aWdhdGlvbiA9IGZ1bmN0aW9uKCkge1xuXG5cbi8vIEZBS0UgTkFWSUdBVElPTlxuXG5mdW5jdGlvbiBnbyhuKVxue1xuXHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1NjaGVkdWxlci5uYXRpdmVCaW5kaW5nKGZ1bmN0aW9uKGNhbGxiYWNrKVxuXHR7XG5cdFx0aWYgKG4gIT09IDApXG5cdFx0e1xuXHRcdFx0aGlzdG9yeS5nbyhuKTtcblx0XHR9XG5cdFx0Y2FsbGJhY2soX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1NjaGVkdWxlci5zdWNjZWVkKF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy5UdXBsZTApKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIHB1c2hTdGF0ZSh1cmwpXG57XG5cdHJldHVybiBfZWxtX2xhbmckY29yZSROYXRpdmVfU2NoZWR1bGVyLm5hdGl2ZUJpbmRpbmcoZnVuY3Rpb24oY2FsbGJhY2spXG5cdHtcblx0XHRoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsIHVybCk7XG5cdFx0Y2FsbGJhY2soX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1NjaGVkdWxlci5zdWNjZWVkKGdldExvY2F0aW9uKCkpKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VTdGF0ZSh1cmwpXG57XG5cdHJldHVybiBfZWxtX2xhbmckY29yZSROYXRpdmVfU2NoZWR1bGVyLm5hdGl2ZUJpbmRpbmcoZnVuY3Rpb24oY2FsbGJhY2spXG5cdHtcblx0XHRoaXN0b3J5LnJlcGxhY2VTdGF0ZSh7fSwgJycsIHVybCk7XG5cdFx0Y2FsbGJhY2soX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1NjaGVkdWxlci5zdWNjZWVkKGdldExvY2F0aW9uKCkpKTtcblx0fSk7XG59XG5cblxuLy8gUkVBTCBOQVZJR0FUSU9OXG5cbmZ1bmN0aW9uIHJlbG9hZFBhZ2Uoc2tpcENhY2hlKVxue1xuXHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1NjaGVkdWxlci5uYXRpdmVCaW5kaW5nKGZ1bmN0aW9uKGNhbGxiYWNrKVxuXHR7XG5cdFx0ZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKHNraXBDYWNoZSk7XG5cdFx0Y2FsbGJhY2soX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1NjaGVkdWxlci5zdWNjZWVkKF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy5UdXBsZTApKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIHNldExvY2F0aW9uKHVybClcbntcblx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9TY2hlZHVsZXIubmF0aXZlQmluZGluZyhmdW5jdGlvbihjYWxsYmFjaylcblx0e1xuXHRcdHRyeVxuXHRcdHtcblx0XHRcdHdpbmRvdy5sb2NhdGlvbiA9IHVybDtcblx0XHR9XG5cdFx0Y2F0Y2goZXJyKVxuXHRcdHtcblx0XHRcdC8vIE9ubHkgRmlyZWZveCBjYW4gdGhyb3cgYSBOU19FUlJPUl9NQUxGT1JNRURfVVJJIGV4Y2VwdGlvbiBoZXJlLlxuXHRcdFx0Ly8gT3RoZXIgYnJvd3NlcnMgcmVsb2FkIHRoZSBwYWdlLCBzbyBsZXQncyBiZSBjb25zaXN0ZW50IGFib3V0IHRoYXQuXG5cdFx0XHRkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoZmFsc2UpO1xuXHRcdH1cblx0XHRjYWxsYmFjayhfZWxtX2xhbmckY29yZSROYXRpdmVfU2NoZWR1bGVyLnN1Y2NlZWQoX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLlR1cGxlMCkpO1xuXHR9KTtcbn1cblxuXG4vLyBHRVQgTE9DQVRJT05cblxuZnVuY3Rpb24gZ2V0TG9jYXRpb24oKVxue1xuXHR2YXIgbG9jYXRpb24gPSBkb2N1bWVudC5sb2NhdGlvbjtcblxuXHRyZXR1cm4ge1xuXHRcdGhyZWY6IGxvY2F0aW9uLmhyZWYsXG5cdFx0aG9zdDogbG9jYXRpb24uaG9zdCxcblx0XHRob3N0bmFtZTogbG9jYXRpb24uaG9zdG5hbWUsXG5cdFx0cHJvdG9jb2w6IGxvY2F0aW9uLnByb3RvY29sLFxuXHRcdG9yaWdpbjogbG9jYXRpb24ub3JpZ2luLFxuXHRcdHBvcnRfOiBsb2NhdGlvbi5wb3J0LFxuXHRcdHBhdGhuYW1lOiBsb2NhdGlvbi5wYXRobmFtZSxcblx0XHRzZWFyY2g6IGxvY2F0aW9uLnNlYXJjaCxcblx0XHRoYXNoOiBsb2NhdGlvbi5oYXNoLFxuXHRcdHVzZXJuYW1lOiBsb2NhdGlvbi51c2VybmFtZSxcblx0XHRwYXNzd29yZDogbG9jYXRpb24ucGFzc3dvcmRcblx0fTtcbn1cblxuXG4vLyBERVRFQ1QgSUUxMSBQUk9CTEVNU1xuXG5mdW5jdGlvbiBpc0ludGVybmV0RXhwbG9yZXIxMSgpXG57XG5cdHJldHVybiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdUcmlkZW50JykgIT09IC0xO1xufVxuXG5cbnJldHVybiB7XG5cdGdvOiBnbyxcblx0c2V0TG9jYXRpb246IHNldExvY2F0aW9uLFxuXHRyZWxvYWRQYWdlOiByZWxvYWRQYWdlLFxuXHRwdXNoU3RhdGU6IHB1c2hTdGF0ZSxcblx0cmVwbGFjZVN0YXRlOiByZXBsYWNlU3RhdGUsXG5cdGdldExvY2F0aW9uOiBnZXRMb2NhdGlvbixcblx0aXNJbnRlcm5ldEV4cGxvcmVyMTE6IGlzSW50ZXJuZXRFeHBsb3JlcjExXG59O1xuXG59KCk7XG5cbnZhciBfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJHJlcGxhY2VTdGF0ZSA9IF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdGl2ZV9OYXZpZ2F0aW9uLnJlcGxhY2VTdGF0ZTtcbnZhciBfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJHB1c2hTdGF0ZSA9IF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdGl2ZV9OYXZpZ2F0aW9uLnB1c2hTdGF0ZTtcbnZhciBfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJGdvID0gX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF0aXZlX05hdmlnYXRpb24uZ287XG52YXIgX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRyZWxvYWRQYWdlID0gX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF0aXZlX05hdmlnYXRpb24ucmVsb2FkUGFnZTtcbnZhciBfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJHNldExvY2F0aW9uID0gX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF0aXZlX05hdmlnYXRpb24uc2V0TG9jYXRpb247XG52YXIgX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbl9vcHMgPSBfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uX29wcyB8fCB7fTtcbl9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb25fb3BzWycmPiddID0gRjIoXG5cdGZ1bmN0aW9uICh0YXNrMSwgdGFzazIpIHtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRfZWxtX2xhbmckY29yZSRUYXNrJGFuZFRoZW4sXG5cdFx0XHRmdW5jdGlvbiAoX3AwKSB7XG5cdFx0XHRcdHJldHVybiB0YXNrMjtcblx0XHRcdH0sXG5cdFx0XHR0YXNrMSk7XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kbm90aWZ5ID0gRjMoXG5cdGZ1bmN0aW9uIChyb3V0ZXIsIHN1YnMsIGxvY2F0aW9uKSB7XG5cdFx0dmFyIHNlbmQgPSBmdW5jdGlvbiAoX3AxKSB7XG5cdFx0XHR2YXIgX3AyID0gX3AxO1xuXHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRfZWxtX2xhbmckY29yZSRQbGF0Zm9ybSRzZW5kVG9BcHAsXG5cdFx0XHRcdHJvdXRlcixcblx0XHRcdFx0X3AyLl8wKGxvY2F0aW9uKSk7XG5cdFx0fTtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uX29wc1snJj4nXSxcblx0XHRcdF9lbG1fbGFuZyRjb3JlJFRhc2skc2VxdWVuY2UoXG5cdFx0XHRcdEEyKF9lbG1fbGFuZyRjb3JlJExpc3QkbWFwLCBzZW5kLCBzdWJzKSksXG5cdFx0XHRfZWxtX2xhbmckY29yZSRUYXNrJHN1Y2NlZWQoXG5cdFx0XHRcdHtjdG9yOiAnX1R1cGxlMCd9KSk7XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kY21kSGVscCA9IEYzKFxuXHRmdW5jdGlvbiAocm91dGVyLCBzdWJzLCBjbWQpIHtcblx0XHR2YXIgX3AzID0gY21kO1xuXHRcdHN3aXRjaCAoX3AzLmN0b3IpIHtcblx0XHRcdGNhc2UgJ0p1bXAnOlxuXHRcdFx0XHRyZXR1cm4gX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRnbyhfcDMuXzApO1xuXHRcdFx0Y2FzZSAnTmV3Jzpcblx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJFRhc2skYW5kVGhlbixcblx0XHRcdFx0XHRBMihfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJG5vdGlmeSwgcm91dGVyLCBzdWJzKSxcblx0XHRcdFx0XHRfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJHB1c2hTdGF0ZShfcDMuXzApKTtcblx0XHRcdGNhc2UgJ01vZGlmeSc6XG5cdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSRUYXNrJGFuZFRoZW4sXG5cdFx0XHRcdFx0QTIoX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRub3RpZnksIHJvdXRlciwgc3VicyksXG5cdFx0XHRcdFx0X2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRyZXBsYWNlU3RhdGUoX3AzLl8wKSk7XG5cdFx0XHRjYXNlICdWaXNpdCc6XG5cdFx0XHRcdHJldHVybiBfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJHNldExvY2F0aW9uKF9wMy5fMCk7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRyZWxvYWRQYWdlKF9wMy5fMCk7XG5cdFx0fVxuXHR9KTtcbnZhciBfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJGtpbGxQb3BXYXRjaGVyID0gZnVuY3Rpb24gKHBvcFdhdGNoZXIpIHtcblx0dmFyIF9wNCA9IHBvcFdhdGNoZXI7XG5cdGlmIChfcDQuY3RvciA9PT0gJ05vcm1hbCcpIHtcblx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkUHJvY2VzcyRraWxsKF9wNC5fMCk7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0X2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbl9vcHNbJyY+J10sXG5cdFx0XHRfZWxtX2xhbmckY29yZSRQcm9jZXNzJGtpbGwoX3A0Ll8wKSxcblx0XHRcdF9lbG1fbGFuZyRjb3JlJFByb2Nlc3Mka2lsbChfcDQuXzEpKTtcblx0fVxufTtcbnZhciBfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJG9uU2VsZk1zZyA9IEYzKFxuXHRmdW5jdGlvbiAocm91dGVyLCBsb2NhdGlvbiwgc3RhdGUpIHtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uX29wc1snJj4nXSxcblx0XHRcdEEzKF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kbm90aWZ5LCByb3V0ZXIsIHN0YXRlLnN1YnMsIGxvY2F0aW9uKSxcblx0XHRcdF9lbG1fbGFuZyRjb3JlJFRhc2skc3VjY2VlZChzdGF0ZSkpO1xuXHR9KTtcbnZhciBfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJHN1YnNjcmlwdGlvbiA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9QbGF0Zm9ybS5sZWFmKCdOYXZpZ2F0aW9uJyk7XG52YXIgX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRjb21tYW5kID0gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1BsYXRmb3JtLmxlYWYoJ05hdmlnYXRpb24nKTtcbnZhciBfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJExvY2F0aW9uID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChiKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChjKSB7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChmKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24gKGcpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChoKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24gKGopIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChrKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHtocmVmOiBhLCBob3N0OiBiLCBob3N0bmFtZTogYywgcHJvdG9jb2w6IGQsIG9yaWdpbjogZSwgcG9ydF86IGYsIHBhdGhuYW1lOiBnLCBzZWFyY2g6IGgsIGhhc2g6IGksIHVzZXJuYW1lOiBqLCBwYXNzd29yZDoga307XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH07XG5cdFx0XHR9O1xuXHRcdH07XG5cdH07XG59O1xudmFyIF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kU3RhdGUgPSBGMihcblx0ZnVuY3Rpb24gKGEsIGIpIHtcblx0XHRyZXR1cm4ge3N1YnM6IGEsIHBvcFdhdGNoZXI6IGJ9O1xuXHR9KTtcbnZhciBfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJGluaXQgPSBfZWxtX2xhbmckY29yZSRUYXNrJHN1Y2NlZWQoXG5cdEEyKFxuXHRcdF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kU3RhdGUsXG5cdFx0e2N0b3I6ICdbXSd9LFxuXHRcdF9lbG1fbGFuZyRjb3JlJE1heWJlJE5vdGhpbmcpKTtcbnZhciBfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJFJlbG9hZCA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7Y3RvcjogJ1JlbG9hZCcsIF8wOiBhfTtcbn07XG52YXIgX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRyZWxvYWQgPSBfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJGNvbW1hbmQoXG5cdF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kUmVsb2FkKGZhbHNlKSk7XG52YXIgX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRyZWxvYWRBbmRTa2lwQ2FjaGUgPSBfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJGNvbW1hbmQoXG5cdF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kUmVsb2FkKHRydWUpKTtcbnZhciBfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJFZpc2l0ID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHtjdG9yOiAnVmlzaXQnLCBfMDogYX07XG59O1xudmFyIF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kbG9hZCA9IGZ1bmN0aW9uICh1cmwpIHtcblx0cmV0dXJuIF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kY29tbWFuZChcblx0XHRfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJFZpc2l0KHVybCkpO1xufTtcbnZhciBfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJE1vZGlmeSA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7Y3RvcjogJ01vZGlmeScsIF8wOiBhfTtcbn07XG52YXIgX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRtb2RpZnlVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG5cdHJldHVybiBfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJGNvbW1hbmQoXG5cdFx0X2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRNb2RpZnkodXJsKSk7XG59O1xudmFyIF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kTmV3ID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHtjdG9yOiAnTmV3JywgXzA6IGF9O1xufTtcbnZhciBfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJG5ld1VybCA9IGZ1bmN0aW9uICh1cmwpIHtcblx0cmV0dXJuIF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kY29tbWFuZChcblx0XHRfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJE5ldyh1cmwpKTtcbn07XG52YXIgX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRKdW1wID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHtjdG9yOiAnSnVtcCcsIF8wOiBhfTtcbn07XG52YXIgX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRiYWNrID0gZnVuY3Rpb24gKG4pIHtcblx0cmV0dXJuIF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kY29tbWFuZChcblx0XHRfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJEp1bXAoMCAtIG4pKTtcbn07XG52YXIgX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRmb3J3YXJkID0gZnVuY3Rpb24gKG4pIHtcblx0cmV0dXJuIF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kY29tbWFuZChcblx0XHRfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJEp1bXAobikpO1xufTtcbnZhciBfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJGNtZE1hcCA9IEYyKFxuXHRmdW5jdGlvbiAoX3A1LCBteUNtZCkge1xuXHRcdHZhciBfcDYgPSBteUNtZDtcblx0XHRzd2l0Y2ggKF9wNi5jdG9yKSB7XG5cdFx0XHRjYXNlICdKdW1wJzpcblx0XHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kSnVtcChfcDYuXzApO1xuXHRcdFx0Y2FzZSAnTmV3Jzpcblx0XHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kTmV3KF9wNi5fMCk7XG5cdFx0XHRjYXNlICdNb2RpZnknOlxuXHRcdFx0XHRyZXR1cm4gX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRNb2RpZnkoX3A2Ll8wKTtcblx0XHRcdGNhc2UgJ1Zpc2l0Jzpcblx0XHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kVmlzaXQoX3A2Ll8wKTtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJFJlbG9hZChfcDYuXzApO1xuXHRcdH1cblx0fSk7XG52YXIgX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRNb25pdG9yID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHtjdG9yOiAnTW9uaXRvcicsIF8wOiBhfTtcbn07XG52YXIgX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRwcm9ncmFtID0gRjIoXG5cdGZ1bmN0aW9uIChsb2NhdGlvblRvTWVzc2FnZSwgc3R1ZmYpIHtcblx0XHR2YXIgaW5pdCA9IHN0dWZmLmluaXQoXG5cdFx0XHRfZWxtX2xhbmckbmF2aWdhdGlvbiROYXRpdmVfTmF2aWdhdGlvbi5nZXRMb2NhdGlvbihcblx0XHRcdFx0e2N0b3I6ICdfVHVwbGUwJ30pKTtcblx0XHR2YXIgc3VicyA9IGZ1bmN0aW9uIChtb2RlbCkge1xuXHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJFBsYXRmb3JtX1N1YiRiYXRjaChcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGN0b3I6ICc6OicsXG5cdFx0XHRcdFx0XzA6IF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kc3Vic2NyaXB0aW9uKFxuXHRcdFx0XHRcdFx0X2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRNb25pdG9yKGxvY2F0aW9uVG9NZXNzYWdlKSksXG5cdFx0XHRcdFx0XzE6IHtcblx0XHRcdFx0XHRcdGN0b3I6ICc6OicsXG5cdFx0XHRcdFx0XHRfMDogc3R1ZmYuc3Vic2NyaXB0aW9ucyhtb2RlbCksXG5cdFx0XHRcdFx0XHRfMToge2N0b3I6ICdbXSd9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHR9O1xuXHRcdHJldHVybiBfZWxtX2xhbmckaHRtbCRIdG1sJHByb2dyYW0oXG5cdFx0XHR7aW5pdDogaW5pdCwgdmlldzogc3R1ZmYudmlldywgdXBkYXRlOiBzdHVmZi51cGRhdGUsIHN1YnNjcmlwdGlvbnM6IHN1YnN9KTtcblx0fSk7XG52YXIgX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRwcm9ncmFtV2l0aEZsYWdzID0gRjIoXG5cdGZ1bmN0aW9uIChsb2NhdGlvblRvTWVzc2FnZSwgc3R1ZmYpIHtcblx0XHR2YXIgaW5pdCA9IGZ1bmN0aW9uIChmbGFncykge1xuXHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRzdHVmZi5pbml0LFxuXHRcdFx0XHRmbGFncyxcblx0XHRcdFx0X2VsbV9sYW5nJG5hdmlnYXRpb24kTmF0aXZlX05hdmlnYXRpb24uZ2V0TG9jYXRpb24oXG5cdFx0XHRcdFx0e2N0b3I6ICdfVHVwbGUwJ30pKTtcblx0XHR9O1xuXHRcdHZhciBzdWJzID0gZnVuY3Rpb24gKG1vZGVsKSB7XG5cdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkUGxhdGZvcm1fU3ViJGJhdGNoKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Y3RvcjogJzo6Jyxcblx0XHRcdFx0XHRfMDogX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRzdWJzY3JpcHRpb24oXG5cdFx0XHRcdFx0XHRfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJE1vbml0b3IobG9jYXRpb25Ub01lc3NhZ2UpKSxcblx0XHRcdFx0XHRfMToge1xuXHRcdFx0XHRcdFx0Y3RvcjogJzo6Jyxcblx0XHRcdFx0XHRcdF8wOiBzdHVmZi5zdWJzY3JpcHRpb25zKG1vZGVsKSxcblx0XHRcdFx0XHRcdF8xOiB7Y3RvcjogJ1tdJ31cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdH07XG5cdFx0cmV0dXJuIF9lbG1fbGFuZyRodG1sJEh0bWwkcHJvZ3JhbVdpdGhGbGFncyhcblx0XHRcdHtpbml0OiBpbml0LCB2aWV3OiBzdHVmZi52aWV3LCB1cGRhdGU6IHN0dWZmLnVwZGF0ZSwgc3Vic2NyaXB0aW9uczogc3Vic30pO1xuXHR9KTtcbnZhciBfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJHN1Yk1hcCA9IEYyKFxuXHRmdW5jdGlvbiAoZnVuYywgX3A3KSB7XG5cdFx0dmFyIF9wOCA9IF9wNztcblx0XHRyZXR1cm4gX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRNb25pdG9yKFxuXHRcdFx0ZnVuY3Rpb24gKF9wOSkge1xuXHRcdFx0XHRyZXR1cm4gZnVuYyhcblx0XHRcdFx0XHRfcDguXzAoX3A5KSk7XG5cdFx0XHR9KTtcblx0fSk7XG52YXIgX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRJbnRlcm5ldEV4cGxvcmVyID0gRjIoXG5cdGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0cmV0dXJuIHtjdG9yOiAnSW50ZXJuZXRFeHBsb3JlcicsIF8wOiBhLCBfMTogYn07XG5cdH0pO1xudmFyIF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kTm9ybWFsID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHtjdG9yOiAnTm9ybWFsJywgXzA6IGF9O1xufTtcbnZhciBfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJHNwYXduUG9wV2F0Y2hlciA9IGZ1bmN0aW9uIChyb3V0ZXIpIHtcblx0dmFyIHJlcG9ydExvY2F0aW9uID0gZnVuY3Rpb24gKF9wMTApIHtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRfZWxtX2xhbmckY29yZSRQbGF0Zm9ybSRzZW5kVG9TZWxmLFxuXHRcdFx0cm91dGVyLFxuXHRcdFx0X2VsbV9sYW5nJG5hdmlnYXRpb24kTmF0aXZlX05hdmlnYXRpb24uZ2V0TG9jYXRpb24oXG5cdFx0XHRcdHtjdG9yOiAnX1R1cGxlMCd9KSk7XG5cdH07XG5cdHJldHVybiBfZWxtX2xhbmckbmF2aWdhdGlvbiROYXRpdmVfTmF2aWdhdGlvbi5pc0ludGVybmV0RXhwbG9yZXIxMShcblx0XHR7Y3RvcjogJ19UdXBsZTAnfSkgPyBBMyhcblx0XHRfZWxtX2xhbmckY29yZSRUYXNrJG1hcDIsXG5cdFx0X2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRJbnRlcm5ldEV4cGxvcmVyLFxuXHRcdF9lbG1fbGFuZyRjb3JlJFByb2Nlc3Mkc3Bhd24oXG5cdFx0XHRBMyhfZWxtX2xhbmckZG9tJERvbV9Mb3dMZXZlbCRvbldpbmRvdywgJ3BvcHN0YXRlJywgX2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkdmFsdWUsIHJlcG9ydExvY2F0aW9uKSksXG5cdFx0X2VsbV9sYW5nJGNvcmUkUHJvY2VzcyRzcGF3bihcblx0XHRcdEEzKF9lbG1fbGFuZyRkb20kRG9tX0xvd0xldmVsJG9uV2luZG93LCAnaGFzaGNoYW5nZScsIF9lbG1fbGFuZyRjb3JlJEpzb25fRGVjb2RlJHZhbHVlLCByZXBvcnRMb2NhdGlvbikpKSA6IEEyKFxuXHRcdF9lbG1fbGFuZyRjb3JlJFRhc2skbWFwLFxuXHRcdF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kTm9ybWFsLFxuXHRcdF9lbG1fbGFuZyRjb3JlJFByb2Nlc3Mkc3Bhd24oXG5cdFx0XHRBMyhfZWxtX2xhbmckZG9tJERvbV9Mb3dMZXZlbCRvbldpbmRvdywgJ3BvcHN0YXRlJywgX2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkdmFsdWUsIHJlcG9ydExvY2F0aW9uKSkpO1xufTtcbnZhciBfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJG9uRWZmZWN0cyA9IEY0KFxuXHRmdW5jdGlvbiAocm91dGVyLCBjbWRzLCBzdWJzLCBfcDExKSB7XG5cdFx0dmFyIF9wMTIgPSBfcDExO1xuXHRcdHZhciBfcDE1ID0gX3AxMi5wb3BXYXRjaGVyO1xuXHRcdHZhciBzdGVwU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgX3AxMyA9IHtjdG9yOiAnX1R1cGxlMicsIF8wOiBzdWJzLCBfMTogX3AxNX07XG5cdFx0XHRfdjZfMjpcblx0XHRcdGRvIHtcblx0XHRcdFx0aWYgKF9wMTMuXzAuY3RvciA9PT0gJ1tdJykge1xuXHRcdFx0XHRcdGlmIChfcDEzLl8xLmN0b3IgPT09ICdKdXN0Jykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uX29wc1snJj4nXSxcblx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRraWxsUG9wV2F0Y2hlcihfcDEzLl8xLl8wKSxcblx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkVGFzayRzdWNjZWVkKFxuXHRcdFx0XHRcdFx0XHRcdEEyKF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kU3RhdGUsIHN1YnMsIF9lbG1fbGFuZyRjb3JlJE1heWJlJE5vdGhpbmcpKSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGJyZWFrIF92Nl8yO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpZiAoX3AxMy5fMS5jdG9yID09PSAnTm90aGluZycpIHtcblx0XHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkVGFzayRtYXAsXG5cdFx0XHRcdFx0XHRcdGZ1bmN0aW9uIChfcDE0KSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRTdGF0ZSxcblx0XHRcdFx0XHRcdFx0XHRcdHN1YnMsXG5cdFx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSRNYXliZSRKdXN0KF9wMTQpKTtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRzcGF3blBvcFdhdGNoZXIocm91dGVyKSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGJyZWFrIF92Nl8yO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSB3aGlsZShmYWxzZSk7XG5cdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkVGFzayRzdWNjZWVkKFxuXHRcdFx0XHRBMihfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJFN0YXRlLCBzdWJzLCBfcDE1KSk7XG5cdFx0fSgpO1xuXHRcdHJldHVybiBBMihcblx0XHRcdF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb25fb3BzWycmPiddLFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkVGFzayRzZXF1ZW5jZShcblx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTGlzdCRtYXAsXG5cdFx0XHRcdFx0QTIoX2VsbV9sYW5nJG5hdmlnYXRpb24kTmF2aWdhdGlvbiRjbWRIZWxwLCByb3V0ZXIsIHN1YnMpLFxuXHRcdFx0XHRcdGNtZHMpKSxcblx0XHRcdHN0ZXBTdGF0ZSk7XG5cdH0pO1xuX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1BsYXRmb3JtLmVmZmVjdE1hbmFnZXJzWydOYXZpZ2F0aW9uJ10gPSB7cGtnOiAnZWxtLWxhbmcvbmF2aWdhdGlvbicsIGluaXQ6IF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kaW5pdCwgb25FZmZlY3RzOiBfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJG9uRWZmZWN0cywgb25TZWxmTXNnOiBfZWxtX2xhbmckbmF2aWdhdGlvbiROYXZpZ2F0aW9uJG9uU2VsZk1zZywgdGFnOiAnZngnLCBjbWRNYXA6IF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kY21kTWFwLCBzdWJNYXA6IF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kc3ViTWFwfTtcblxudmFyIF9ldmFuY3okdXJsX3BhcnNlciRVcmxQYXJzZXIkdG9LZXlWYWx1ZVBhaXIgPSBmdW5jdGlvbiAoc2VnbWVudCkge1xuXHR2YXIgX3AwID0gQTIoX2VsbV9sYW5nJGNvcmUkU3RyaW5nJHNwbGl0LCAnPScsIHNlZ21lbnQpO1xuXHRpZiAoKChfcDAuY3RvciA9PT0gJzo6JykgJiYgKF9wMC5fMS5jdG9yID09PSAnOjonKSkgJiYgKF9wMC5fMS5fMS5jdG9yID09PSAnW10nKSkge1xuXHRcdHJldHVybiBBMyhcblx0XHRcdF9lbG1fbGFuZyRjb3JlJE1heWJlJG1hcDIsXG5cdFx0XHRGMihcblx0XHRcdFx0ZnVuY3Rpb24gKHYwLCB2MSkge1xuXHRcdFx0XHRcdHJldHVybiB7Y3RvcjogJ19UdXBsZTInLCBfMDogdjAsIF8xOiB2MX07XG5cdFx0XHRcdH0pLFxuXHRcdFx0X2VsbV9sYW5nJGh0dHAkSHR0cCRkZWNvZGVVcmkoX3AwLl8wKSxcblx0XHRcdF9lbG1fbGFuZyRodHRwJEh0dHAkZGVjb2RlVXJpKF9wMC5fMS5fMCkpO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRNYXliZSROb3RoaW5nO1xuXHR9XG59O1xudmFyIF9ldmFuY3okdXJsX3BhcnNlciRVcmxQYXJzZXIkcGFyc2VQYXJhbXMgPSBmdW5jdGlvbiAocXVlcnlTdHJpbmcpIHtcblx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJERpY3QkZnJvbUxpc3QoXG5cdFx0QTIoXG5cdFx0XHRfZWxtX2xhbmckY29yZSRMaXN0JGZpbHRlck1hcCxcblx0XHRcdF9ldmFuY3okdXJsX3BhcnNlciRVcmxQYXJzZXIkdG9LZXlWYWx1ZVBhaXIsXG5cdFx0XHRBMihcblx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkU3RyaW5nJHNwbGl0LFxuXHRcdFx0XHQnJicsXG5cdFx0XHRcdEEyKF9lbG1fbGFuZyRjb3JlJFN0cmluZyRkcm9wTGVmdCwgMSwgcXVlcnlTdHJpbmcpKSkpO1xufTtcbnZhciBfZXZhbmN6JHVybF9wYXJzZXIkVXJsUGFyc2VyJHNwbGl0VXJsID0gZnVuY3Rpb24gKHVybCkge1xuXHR2YXIgX3AxID0gQTIoX2VsbV9sYW5nJGNvcmUkU3RyaW5nJHNwbGl0LCAnLycsIHVybCk7XG5cdGlmICgoX3AxLmN0b3IgPT09ICc6OicpICYmIChfcDEuXzAgPT09ICcnKSkge1xuXHRcdHJldHVybiBfcDEuXzE7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIF9wMTtcblx0fVxufTtcbnZhciBfZXZhbmN6JHVybF9wYXJzZXIkVXJsUGFyc2VyJHBhcnNlSGVscCA9IGZ1bmN0aW9uIChzdGF0ZXMpIHtcblx0cGFyc2VIZWxwOlxuXHR3aGlsZSAodHJ1ZSkge1xuXHRcdHZhciBfcDIgPSBzdGF0ZXM7XG5cdFx0aWYgKF9wMi5jdG9yID09PSAnW10nKSB7XG5cdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkTWF5YmUkTm90aGluZztcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIF9wNCA9IF9wMi5fMDtcblx0XHRcdHZhciBfcDMgPSBfcDQudW52aXNpdGVkO1xuXHRcdFx0aWYgKF9wMy5jdG9yID09PSAnW10nKSB7XG5cdFx0XHRcdHJldHVybiBfZWxtX2xhbmckY29yZSRNYXliZSRKdXN0KF9wNC52YWx1ZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoKF9wMy5fMCA9PT0gJycpICYmIChfcDMuXzEuY3RvciA9PT0gJ1tdJykpIHtcblx0XHRcdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkTWF5YmUkSnVzdChfcDQudmFsdWUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZhciBfdjQgPSBfcDIuXzE7XG5cdFx0XHRcdFx0c3RhdGVzID0gX3Y0O1xuXHRcdFx0XHRcdGNvbnRpbnVlIHBhcnNlSGVscDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcbnZhciBfZXZhbmN6JHVybF9wYXJzZXIkVXJsUGFyc2VyJHBhcnNlID0gRjMoXG5cdGZ1bmN0aW9uIChfcDUsIHVybCwgcGFyYW1zKSB7XG5cdFx0dmFyIF9wNiA9IF9wNTtcblx0XHRyZXR1cm4gX2V2YW5jeiR1cmxfcGFyc2VyJFVybFBhcnNlciRwYXJzZUhlbHAoXG5cdFx0XHRfcDYuXzAoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2aXNpdGVkOiB7Y3RvcjogJ1tdJ30sXG5cdFx0XHRcdFx0dW52aXNpdGVkOiBfZXZhbmN6JHVybF9wYXJzZXIkVXJsUGFyc2VyJHNwbGl0VXJsKHVybCksXG5cdFx0XHRcdFx0cGFyYW1zOiBwYXJhbXMsXG5cdFx0XHRcdFx0dmFsdWU6IF9lbG1fbGFuZyRjb3JlJEJhc2ljcyRpZGVudGl0eVxuXHRcdFx0XHR9KSk7XG5cdH0pO1xudmFyIF9ldmFuY3okdXJsX3BhcnNlciRVcmxQYXJzZXIkcGFyc2VIYXNoID0gRjIoXG5cdGZ1bmN0aW9uIChwYXJzZXIsIGxvY2F0aW9uKSB7XG5cdFx0cmV0dXJuIEEzKFxuXHRcdFx0X2V2YW5jeiR1cmxfcGFyc2VyJFVybFBhcnNlciRwYXJzZSxcblx0XHRcdHBhcnNlcixcblx0XHRcdEEyKF9lbG1fbGFuZyRjb3JlJFN0cmluZyRkcm9wTGVmdCwgMSwgbG9jYXRpb24uaGFzaCksXG5cdFx0XHRfZXZhbmN6JHVybF9wYXJzZXIkVXJsUGFyc2VyJHBhcnNlUGFyYW1zKGxvY2F0aW9uLnNlYXJjaCkpO1xuXHR9KTtcbnZhciBfZXZhbmN6JHVybF9wYXJzZXIkVXJsUGFyc2VyJHBhcnNlUGF0aCA9IEYyKFxuXHRmdW5jdGlvbiAocGFyc2VyLCBsb2NhdGlvbikge1xuXHRcdHJldHVybiBBMyhcblx0XHRcdF9ldmFuY3okdXJsX3BhcnNlciRVcmxQYXJzZXIkcGFyc2UsXG5cdFx0XHRwYXJzZXIsXG5cdFx0XHRsb2NhdGlvbi5wYXRobmFtZSxcblx0XHRcdF9ldmFuY3okdXJsX3BhcnNlciRVcmxQYXJzZXIkcGFyc2VQYXJhbXMobG9jYXRpb24uc2VhcmNoKSk7XG5cdH0pO1xudmFyIF9ldmFuY3okdXJsX3BhcnNlciRVcmxQYXJzZXIkaW50UGFyYW1IZWxwID0gZnVuY3Rpb24gKG1heWJlVmFsdWUpIHtcblx0dmFyIF9wNyA9IG1heWJlVmFsdWU7XG5cdGlmIChfcDcuY3RvciA9PT0gJ05vdGhpbmcnKSB7XG5cdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE1heWJlJE5vdGhpbmc7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJFJlc3VsdCR0b01heWJlKFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkU3RyaW5nJHRvSW50KF9wNy5fMCkpO1xuXHR9XG59O1xudmFyIF9ldmFuY3okdXJsX3BhcnNlciRVcmxQYXJzZXIkbWFwSGVscCA9IEYyKFxuXHRmdW5jdGlvbiAoZnVuYywgX3A4KSB7XG5cdFx0dmFyIF9wOSA9IF9wODtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dmlzaXRlZDogX3A5LnZpc2l0ZWQsXG5cdFx0XHR1bnZpc2l0ZWQ6IF9wOS51bnZpc2l0ZWQsXG5cdFx0XHRwYXJhbXM6IF9wOS5wYXJhbXMsXG5cdFx0XHR2YWx1ZTogZnVuYyhfcDkudmFsdWUpXG5cdFx0fTtcblx0fSk7XG52YXIgX2V2YW5jeiR1cmxfcGFyc2VyJFVybFBhcnNlciRTdGF0ZSA9IEY0KFxuXHRmdW5jdGlvbiAoYSwgYiwgYywgZCkge1xuXHRcdHJldHVybiB7dmlzaXRlZDogYSwgdW52aXNpdGVkOiBiLCBwYXJhbXM6IGMsIHZhbHVlOiBkfTtcblx0fSk7XG52YXIgX2V2YW5jeiR1cmxfcGFyc2VyJFVybFBhcnNlciRQYXJzZXIgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4ge2N0b3I6ICdQYXJzZXInLCBfMDogYX07XG59O1xudmFyIF9ldmFuY3okdXJsX3BhcnNlciRVcmxQYXJzZXIkcyA9IGZ1bmN0aW9uIChzdHIpIHtcblx0cmV0dXJuIF9ldmFuY3okdXJsX3BhcnNlciRVcmxQYXJzZXIkUGFyc2VyKFxuXHRcdGZ1bmN0aW9uIChfcDEwKSB7XG5cdFx0XHR2YXIgX3AxMSA9IF9wMTA7XG5cdFx0XHR2YXIgX3AxMiA9IF9wMTEudW52aXNpdGVkO1xuXHRcdFx0aWYgKF9wMTIuY3RvciA9PT0gJ1tdJykge1xuXHRcdFx0XHRyZXR1cm4ge2N0b3I6ICdbXSd9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIF9wMTMgPSBfcDEyLl8wO1xuXHRcdFx0XHRyZXR1cm4gX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLmVxKF9wMTMsIHN0cikgPyB7XG5cdFx0XHRcdFx0Y3RvcjogJzo6Jyxcblx0XHRcdFx0XHRfMDogQTQoXG5cdFx0XHRcdFx0XHRfZXZhbmN6JHVybF9wYXJzZXIkVXJsUGFyc2VyJFN0YXRlLFxuXHRcdFx0XHRcdFx0e2N0b3I6ICc6OicsIF8wOiBfcDEzLCBfMTogX3AxMS52aXNpdGVkfSxcblx0XHRcdFx0XHRcdF9wMTIuXzEsXG5cdFx0XHRcdFx0XHRfcDExLnBhcmFtcyxcblx0XHRcdFx0XHRcdF9wMTEudmFsdWUpLFxuXHRcdFx0XHRcdF8xOiB7Y3RvcjogJ1tdJ31cblx0XHRcdFx0fSA6IHtjdG9yOiAnW10nfTtcblx0XHRcdH1cblx0XHR9KTtcbn07XG52YXIgX2V2YW5jeiR1cmxfcGFyc2VyJFVybFBhcnNlciRjdXN0b20gPSBGMihcblx0ZnVuY3Rpb24gKHRpcGUsIHN0cmluZ1RvU29tZXRoaW5nKSB7XG5cdFx0cmV0dXJuIF9ldmFuY3okdXJsX3BhcnNlciRVcmxQYXJzZXIkUGFyc2VyKFxuXHRcdFx0ZnVuY3Rpb24gKF9wMTQpIHtcblx0XHRcdFx0dmFyIF9wMTUgPSBfcDE0O1xuXHRcdFx0XHR2YXIgX3AxNiA9IF9wMTUudW52aXNpdGVkO1xuXHRcdFx0XHRpZiAoX3AxNi5jdG9yID09PSAnW10nKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHtjdG9yOiAnW10nfTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YXIgX3AxOCA9IF9wMTYuXzA7XG5cdFx0XHRcdFx0dmFyIF9wMTcgPSBzdHJpbmdUb1NvbWV0aGluZyhfcDE4KTtcblx0XHRcdFx0XHRpZiAoX3AxNy5jdG9yID09PSAnT2snKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHRjdG9yOiAnOjonLFxuXHRcdFx0XHRcdFx0XHRfMDogQTQoXG5cdFx0XHRcdFx0XHRcdFx0X2V2YW5jeiR1cmxfcGFyc2VyJFVybFBhcnNlciRTdGF0ZSxcblx0XHRcdFx0XHRcdFx0XHR7Y3RvcjogJzo6JywgXzA6IF9wMTgsIF8xOiBfcDE1LnZpc2l0ZWR9LFxuXHRcdFx0XHRcdFx0XHRcdF9wMTYuXzEsXG5cdFx0XHRcdFx0XHRcdFx0X3AxNS5wYXJhbXMsXG5cdFx0XHRcdFx0XHRcdFx0X3AxNS52YWx1ZShfcDE3Ll8wKSksXG5cdFx0XHRcdFx0XHRcdF8xOiB7Y3RvcjogJ1tdJ31cblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiB7Y3RvcjogJ1tdJ307XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0fSk7XG52YXIgX2V2YW5jeiR1cmxfcGFyc2VyJFVybFBhcnNlciRzdHJpbmcgPSBBMihfZXZhbmN6JHVybF9wYXJzZXIkVXJsUGFyc2VyJGN1c3RvbSwgJ1NUUklORycsIF9lbG1fbGFuZyRjb3JlJFJlc3VsdCRPayk7XG52YXIgX2V2YW5jeiR1cmxfcGFyc2VyJFVybFBhcnNlciRpbnQgPSBBMihfZXZhbmN6JHVybF9wYXJzZXIkVXJsUGFyc2VyJGN1c3RvbSwgJ05VTUJFUicsIF9lbG1fbGFuZyRjb3JlJFN0cmluZyR0b0ludCk7XG52YXIgX2V2YW5jeiR1cmxfcGFyc2VyJFVybFBhcnNlcl9vcHMgPSBfZXZhbmN6JHVybF9wYXJzZXIkVXJsUGFyc2VyX29wcyB8fCB7fTtcbl9ldmFuY3okdXJsX3BhcnNlciRVcmxQYXJzZXJfb3BzWyc8Lz4nXSA9IEYyKFxuXHRmdW5jdGlvbiAoX3AyMCwgX3AxOSkge1xuXHRcdHZhciBfcDIxID0gX3AyMDtcblx0XHR2YXIgX3AyMiA9IF9wMTk7XG5cdFx0cmV0dXJuIF9ldmFuY3okdXJsX3BhcnNlciRVcmxQYXJzZXIkUGFyc2VyKFxuXHRcdFx0ZnVuY3Rpb24gKHN0YXRlKSB7XG5cdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSRMaXN0JGNvbmNhdE1hcCxcblx0XHRcdFx0XHRfcDIyLl8wLFxuXHRcdFx0XHRcdF9wMjEuXzAoc3RhdGUpKTtcblx0XHRcdH0pO1xuXHR9KTtcbnZhciBfZXZhbmN6JHVybF9wYXJzZXIkVXJsUGFyc2VyJG1hcCA9IEYyKFxuXHRmdW5jdGlvbiAoc3ViVmFsdWUsIF9wMjMpIHtcblx0XHR2YXIgX3AyNCA9IF9wMjM7XG5cdFx0cmV0dXJuIF9ldmFuY3okdXJsX3BhcnNlciRVcmxQYXJzZXIkUGFyc2VyKFxuXHRcdFx0ZnVuY3Rpb24gKF9wMjUpIHtcblx0XHRcdFx0dmFyIF9wMjYgPSBfcDI1O1xuXHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTGlzdCRtYXAsXG5cdFx0XHRcdFx0X2V2YW5jeiR1cmxfcGFyc2VyJFVybFBhcnNlciRtYXBIZWxwKF9wMjYudmFsdWUpLFxuXHRcdFx0XHRcdF9wMjQuXzAoXG5cdFx0XHRcdFx0XHR7dmlzaXRlZDogX3AyNi52aXNpdGVkLCB1bnZpc2l0ZWQ6IF9wMjYudW52aXNpdGVkLCBwYXJhbXM6IF9wMjYucGFyYW1zLCB2YWx1ZTogc3ViVmFsdWV9KSk7XG5cdFx0XHR9KTtcblx0fSk7XG52YXIgX2V2YW5jeiR1cmxfcGFyc2VyJFVybFBhcnNlciRvbmVPZiA9IGZ1bmN0aW9uIChwYXJzZXJzKSB7XG5cdHJldHVybiBfZXZhbmN6JHVybF9wYXJzZXIkVXJsUGFyc2VyJFBhcnNlcihcblx0XHRmdW5jdGlvbiAoc3RhdGUpIHtcblx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTGlzdCRjb25jYXRNYXAsXG5cdFx0XHRcdGZ1bmN0aW9uIChfcDI3KSB7XG5cdFx0XHRcdFx0dmFyIF9wMjggPSBfcDI3O1xuXHRcdFx0XHRcdHJldHVybiBfcDI4Ll8wKHN0YXRlKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0cGFyc2Vycyk7XG5cdFx0fSk7XG59O1xudmFyIF9ldmFuY3okdXJsX3BhcnNlciRVcmxQYXJzZXIkdG9wID0gX2V2YW5jeiR1cmxfcGFyc2VyJFVybFBhcnNlciRQYXJzZXIoXG5cdGZ1bmN0aW9uIChzdGF0ZSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjdG9yOiAnOjonLFxuXHRcdFx0XzA6IHN0YXRlLFxuXHRcdFx0XzE6IHtjdG9yOiAnW10nfVxuXHRcdH07XG5cdH0pO1xudmFyIF9ldmFuY3okdXJsX3BhcnNlciRVcmxQYXJzZXJfb3BzID0gX2V2YW5jeiR1cmxfcGFyc2VyJFVybFBhcnNlcl9vcHMgfHwge307XG5fZXZhbmN6JHVybF9wYXJzZXIkVXJsUGFyc2VyX29wc1snPD8+J10gPSBGMihcblx0ZnVuY3Rpb24gKF9wMzAsIF9wMjkpIHtcblx0XHR2YXIgX3AzMSA9IF9wMzA7XG5cdFx0dmFyIF9wMzIgPSBfcDI5O1xuXHRcdHJldHVybiBfZXZhbmN6JHVybF9wYXJzZXIkVXJsUGFyc2VyJFBhcnNlcihcblx0XHRcdGZ1bmN0aW9uIChzdGF0ZSkge1xuXHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTGlzdCRjb25jYXRNYXAsXG5cdFx0XHRcdFx0X3AzMi5fMCxcblx0XHRcdFx0XHRfcDMxLl8wKHN0YXRlKSk7XG5cdFx0XHR9KTtcblx0fSk7XG52YXIgX2V2YW5jeiR1cmxfcGFyc2VyJFVybFBhcnNlciRRdWVyeVBhcnNlciA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7Y3RvcjogJ1F1ZXJ5UGFyc2VyJywgXzA6IGF9O1xufTtcbnZhciBfZXZhbmN6JHVybF9wYXJzZXIkVXJsUGFyc2VyJGN1c3RvbVBhcmFtID0gRjIoXG5cdGZ1bmN0aW9uIChrZXksIGZ1bmMpIHtcblx0XHRyZXR1cm4gX2V2YW5jeiR1cmxfcGFyc2VyJFVybFBhcnNlciRRdWVyeVBhcnNlcihcblx0XHRcdGZ1bmN0aW9uIChfcDMzKSB7XG5cdFx0XHRcdHZhciBfcDM0ID0gX3AzMztcblx0XHRcdFx0dmFyIF9wMzUgPSBfcDM0LnBhcmFtcztcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRjdG9yOiAnOjonLFxuXHRcdFx0XHRcdF8wOiBBNChcblx0XHRcdFx0XHRcdF9ldmFuY3okdXJsX3BhcnNlciRVcmxQYXJzZXIkU3RhdGUsXG5cdFx0XHRcdFx0XHRfcDM0LnZpc2l0ZWQsXG5cdFx0XHRcdFx0XHRfcDM0LnVudmlzaXRlZCxcblx0XHRcdFx0XHRcdF9wMzUsXG5cdFx0XHRcdFx0XHRfcDM0LnZhbHVlKFxuXHRcdFx0XHRcdFx0XHRmdW5jKFxuXHRcdFx0XHRcdFx0XHRcdEEyKF9lbG1fbGFuZyRjb3JlJERpY3QkZ2V0LCBrZXksIF9wMzUpKSkpLFxuXHRcdFx0XHRcdF8xOiB7Y3RvcjogJ1tdJ31cblx0XHRcdFx0fTtcblx0XHRcdH0pO1xuXHR9KTtcbnZhciBfZXZhbmN6JHVybF9wYXJzZXIkVXJsUGFyc2VyJHN0cmluZ1BhcmFtID0gZnVuY3Rpb24gKG5hbWUpIHtcblx0cmV0dXJuIEEyKF9ldmFuY3okdXJsX3BhcnNlciRVcmxQYXJzZXIkY3VzdG9tUGFyYW0sIG5hbWUsIF9lbG1fbGFuZyRjb3JlJEJhc2ljcyRpZGVudGl0eSk7XG59O1xudmFyIF9ldmFuY3okdXJsX3BhcnNlciRVcmxQYXJzZXIkaW50UGFyYW0gPSBmdW5jdGlvbiAobmFtZSkge1xuXHRyZXR1cm4gQTIoX2V2YW5jeiR1cmxfcGFyc2VyJFVybFBhcnNlciRjdXN0b21QYXJhbSwgbmFtZSwgX2V2YW5jeiR1cmxfcGFyc2VyJFVybFBhcnNlciRpbnRQYXJhbUhlbHApO1xufTtcblxudmFyIF91c2VyJHByb2plY3QkVHJpcHNfTW9kZWwkaW5pdE1vZGVsID0gZnVuY3Rpb24gKHJvdXRlKSB7XG5cdHJldHVybiB7XG5cdFx0dHJpcHM6IHtjdG9yOiAnW10nfSxcblx0XHR0cmlwTmFtZTogJycsXG5cdFx0cGxhY2VzOiB7Y3RvcjogJ1tdJ30sXG5cdFx0cGxhY2VOYW1lOiAnJyxcblx0XHRyb3V0ZTogcm91dGVcblx0fTtcbn07XG52YXIgX3VzZXIkcHJvamVjdCRUcmlwc19Nb2RlbCRNb2RlbCA9IEY1KFxuXHRmdW5jdGlvbiAoYSwgYiwgYywgZCwgZSkge1xuXHRcdHJldHVybiB7dHJpcHM6IGEsIHRyaXBOYW1lOiBiLCBwbGFjZXM6IGMsIHBsYWNlTmFtZTogZCwgcm91dGU6IGV9O1xuXHR9KTtcbnZhciBfdXNlciRwcm9qZWN0JFRyaXBzX01vZGVsJFBsYWNlID0gRjMoXG5cdGZ1bmN0aW9uIChhLCBiLCBjKSB7XG5cdFx0cmV0dXJuIHtuYW1lOiBhLCBpZDogYiwgdHJpcElkOiBjfTtcblx0fSk7XG52YXIgX3VzZXIkcHJvamVjdCRUcmlwc19Nb2RlbCRUcmlwID0gRjIoXG5cdGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0cmV0dXJuIHtuYW1lOiBhLCBpZDogYn07XG5cdH0pO1xudmFyIF91c2VyJHByb2plY3QkVHJpcHNfTW9kZWwkTm90Rm91bmRSb3V0ZSA9IHtjdG9yOiAnTm90Rm91bmRSb3V0ZSd9O1xudmFyIF91c2VyJHByb2plY3QkVHJpcHNfTW9kZWwkVHJpcFJvdXRlID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHtjdG9yOiAnVHJpcFJvdXRlJywgXzA6IGF9O1xufTtcbnZhciBfdXNlciRwcm9qZWN0JFRyaXBzX01vZGVsJFRyaXBzUm91dGUgPSB7Y3RvcjogJ1RyaXBzUm91dGUnfTtcblxudmFyIF91c2VyJHByb2plY3QkVHJpcHNfTWVzc2FnZXMkT25SZW1vdmVUcmlwID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHtjdG9yOiAnT25SZW1vdmVUcmlwJywgXzA6IGF9O1xufTtcbnZhciBfdXNlciRwcm9qZWN0JFRyaXBzX01lc3NhZ2VzJE9uRmV0Y2hBbGxUcmlwcyA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7Y3RvcjogJ09uRmV0Y2hBbGxUcmlwcycsIF8wOiBhfTtcbn07XG52YXIgX3VzZXIkcHJvamVjdCRUcmlwc19NZXNzYWdlcyRPbkluc2VydFRyaXAgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4ge2N0b3I6ICdPbkluc2VydFRyaXAnLCBfMDogYX07XG59O1xudmFyIF91c2VyJHByb2plY3QkVHJpcHNfTWVzc2FnZXMkT25Mb2NhdGlvbkNoYW5nZSA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7Y3RvcjogJ09uTG9jYXRpb25DaGFuZ2UnLCBfMDogYX07XG59O1xudmFyIF91c2VyJHByb2plY3QkVHJpcHNfTWVzc2FnZXMkQ2hhbmdlUGxhY2VOYW1lID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHtjdG9yOiAnQ2hhbmdlUGxhY2VOYW1lJywgXzA6IGF9O1xufTtcbnZhciBfdXNlciRwcm9qZWN0JFRyaXBzX01lc3NhZ2VzJENoYW5nZVRyaXBOYW1lID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHtjdG9yOiAnQ2hhbmdlVHJpcE5hbWUnLCBfMDogYX07XG59O1xudmFyIF91c2VyJHByb2plY3QkVHJpcHNfTWVzc2FnZXMkT25JbnNlcnRQbGFjZSA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7Y3RvcjogJ09uSW5zZXJ0UGxhY2UnLCBfMDogYX07XG59O1xudmFyIF91c2VyJHByb2plY3QkVHJpcHNfTWVzc2FnZXMkQWRkUGxhY2UgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4ge2N0b3I6ICdBZGRQbGFjZScsIF8wOiBhfTtcbn07XG52YXIgX3VzZXIkcHJvamVjdCRUcmlwc19NZXNzYWdlcyRSZW1vdmVUcmlwID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHtjdG9yOiAnUmVtb3ZlVHJpcCcsIF8wOiBhfTtcbn07XG52YXIgX3VzZXIkcHJvamVjdCRUcmlwc19NZXNzYWdlcyRBZGRUcmlwID0ge2N0b3I6ICdBZGRUcmlwJ307XG52YXIgX3VzZXIkcHJvamVjdCRUcmlwc19NZXNzYWdlcyROb09wID0ge2N0b3I6ICdOb09wJ307XG5cbnZhciBfdXNlciRwcm9qZWN0JFRyaXBzX0NvbW1hbmRzJG1lbWJlckRlY29kZXIgPSBBMyhcblx0X2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkbWFwMixcblx0X3VzZXIkcHJvamVjdCRUcmlwc19Nb2RlbCRUcmlwLFxuXHRBMihfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZSRmaWVsZCwgJ25hbWUnLCBfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZSRzdHJpbmcpLFxuXHRBMihfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZSRmaWVsZCwgJ2lkJywgX2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkc3RyaW5nKSk7XG52YXIgX3VzZXIkcHJvamVjdCRUcmlwc19Db21tYW5kcyRwb3N0U3VjY2Vzc0RlY29kZXIgPSBBMyhcblx0X2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkbWFwMixcblx0X3VzZXIkcHJvamVjdCRUcmlwc19Nb2RlbCRUcmlwLFxuXHRBMihfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZSRmaWVsZCwgJ25hbWUnLCBfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZSRzdHJpbmcpLFxuXHRBMihfZWxtX2xhbmckY29yZSRKc29uX0RlY29kZSRmaWVsZCwgJ2lkJywgX2VsbV9sYW5nJGNvcmUkSnNvbl9EZWNvZGUkc3RyaW5nKSk7XG52YXIgX3VzZXIkcHJvamVjdCRUcmlwc19Db21tYW5kcyRjb2xsZWN0aW9uRGVjb2RlciA9IF9lbG1fbGFuZyRjb3JlJEpzb25fRGVjb2RlJGxpc3QoX3VzZXIkcHJvamVjdCRUcmlwc19Db21tYW5kcyRtZW1iZXJEZWNvZGVyKTtcbnZhciBfdXNlciRwcm9qZWN0JFRyaXBzX0NvbW1hbmRzJGRlbGV0ZVRyaXBVcmwgPSBmdW5jdGlvbiAodHJpcElkKSB7XG5cdHJldHVybiBBMihfZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzWycrKyddLCAnL2FwaS90cmlwcy8nLCB0cmlwSWQpO1xufTtcbnZhciBfdXNlciRwcm9qZWN0JFRyaXBzX0NvbW1hbmRzJGRlbGV0ZVRyaXAgPSBmdW5jdGlvbiAodHJpcElkKSB7XG5cdHJldHVybiBBMihcblx0XHRfZWxtX2xhbmckaHR0cCRIdHRwJHNlbmQsXG5cdFx0X3VzZXIkcHJvamVjdCRUcmlwc19NZXNzYWdlcyRPblJlbW92ZVRyaXAsXG5cdFx0X2VsbV9sYW5nJGh0dHAkSHR0cCRyZXF1ZXN0KFxuXHRcdFx0e1xuXHRcdFx0XHRtZXRob2Q6ICdERUxFVEUnLFxuXHRcdFx0XHRoZWFkZXJzOiB7Y3RvcjogJ1tdJ30sXG5cdFx0XHRcdHVybDogX3VzZXIkcHJvamVjdCRUcmlwc19Db21tYW5kcyRkZWxldGVUcmlwVXJsKHRyaXBJZCksXG5cdFx0XHRcdGJvZHk6IF9lbG1fbGFuZyRodHRwJEh0dHAkZW1wdHlCb2R5LFxuXHRcdFx0XHRleHBlY3Q6IF9lbG1fbGFuZyRodHRwJEh0dHAkZXhwZWN0U3RyaW5nLFxuXHRcdFx0XHR0aW1lb3V0OiBfZWxtX2xhbmckY29yZSRNYXliZSROb3RoaW5nLFxuXHRcdFx0XHR3aXRoQ3JlZGVudGlhbHM6IGZhbHNlXG5cdFx0XHR9KSk7XG59O1xudmFyIF91c2VyJHByb2plY3QkVHJpcHNfQ29tbWFuZHMkZmV0Y2hBbGxVcmwgPSAnL2FwaS90cmlwcyc7XG52YXIgX3VzZXIkcHJvamVjdCRUcmlwc19Db21tYW5kcyRmZXRjaEFsbCA9IEEyKFxuXHRfZWxtX2xhbmckaHR0cCRIdHRwJHNlbmQsXG5cdF91c2VyJHByb2plY3QkVHJpcHNfTWVzc2FnZXMkT25GZXRjaEFsbFRyaXBzLFxuXHRBMihfZWxtX2xhbmckaHR0cCRIdHRwJGdldCwgX3VzZXIkcHJvamVjdCRUcmlwc19Db21tYW5kcyRmZXRjaEFsbFVybCwgX3VzZXIkcHJvamVjdCRUcmlwc19Db21tYW5kcyRjb2xsZWN0aW9uRGVjb2RlcikpO1xudmFyIF91c2VyJHByb2plY3QkVHJpcHNfQ29tbWFuZHMkcG9zdFBsYWNlVXJsID0gJy9hcGkvdHJpcHMnO1xudmFyIF91c2VyJHByb2plY3QkVHJpcHNfQ29tbWFuZHMkcG9zdFBsYWNlID0gZnVuY3Rpb24gKG5ld1BsYWNlKSB7XG5cdHZhciBwYXlsb2FkID0gQTIoXG5cdFx0X2VsbV9sYW5nJGh0dHAkSHR0cCRzdHJpbmdCb2R5LFxuXHRcdCdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHRBMihcblx0XHRcdF9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHNbJysrJ10sXG5cdFx0XHQneyBcXFwibmFtZVxcXCI6IFxcXCInLFxuXHRcdFx0QTIoXG5cdFx0XHRcdF9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHNbJysrJ10sXG5cdFx0XHRcdG5ld1BsYWNlLm5hbWUsXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHNbJysrJ10sXG5cdFx0XHRcdFx0J1xcXCIsIFxcXCJpZFxcXCI6ICcsXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzWycrKyddLFxuXHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkQmFzaWNzJHRvU3RyaW5nKG5ld1BsYWNlLmlkKSxcblx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzWycrKyddLFxuXHRcdFx0XHRcdFx0XHQnLCBcXFwidHJpcElkXFxcIjogJyxcblx0XHRcdFx0XHRcdFx0QTIoX2VsbV9sYW5nJGNvcmUkQmFzaWNzX29wc1snKysnXSwgbmV3UGxhY2UudHJpcElkLCAnfScpKSkpKSkpO1xuXHRyZXR1cm4gQTIoXG5cdFx0X2VsbV9sYW5nJGh0dHAkSHR0cCRzZW5kLFxuXHRcdF91c2VyJHByb2plY3QkVHJpcHNfTWVzc2FnZXMkT25JbnNlcnRQbGFjZSxcblx0XHRBMyhfZWxtX2xhbmckaHR0cCRIdHRwJHBvc3QsIF91c2VyJHByb2plY3QkVHJpcHNfQ29tbWFuZHMkcG9zdFBsYWNlVXJsLCBwYXlsb2FkLCBfdXNlciRwcm9qZWN0JFRyaXBzX0NvbW1hbmRzJHBvc3RTdWNjZXNzRGVjb2RlcikpO1xufTtcbnZhciBfdXNlciRwcm9qZWN0JFRyaXBzX0NvbW1hbmRzJHBvc3RUcmlwVXJsID0gJy9hcGkvdHJpcHMnO1xudmFyIF91c2VyJHByb2plY3QkVHJpcHNfQ29tbWFuZHMkcG9zdFRyaXAgPSBmdW5jdGlvbiAobmV3VHJpcCkge1xuXHR2YXIgcGF5bG9hZCA9IEEyKFxuXHRcdF9lbG1fbGFuZyRodHRwJEh0dHAkc3RyaW5nQm9keSxcblx0XHQnYXBwbGljYXRpb24vanNvbicsXG5cdFx0QTIoXG5cdFx0XHRfZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzWycrKyddLFxuXHRcdFx0J3sgXFxcIm5hbWVcXFwiOiBcXFwiJyxcblx0XHRcdEEyKFxuXHRcdFx0XHRfZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzWycrKyddLFxuXHRcdFx0XHRuZXdUcmlwLm5hbWUsXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJEJhc2ljc19vcHNbJysrJ10sXG5cdFx0XHRcdFx0J1xcXCIsIFxcXCJpZFxcXCI6ICcsXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzWycrKyddLFxuXHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkQmFzaWNzJHRvU3RyaW5nKG5ld1RyaXAuaWQpLFxuXHRcdFx0XHRcdFx0J30nKSkpKSk7XG5cdHJldHVybiBBMihcblx0XHRfZWxtX2xhbmckaHR0cCRIdHRwJHNlbmQsXG5cdFx0X3VzZXIkcHJvamVjdCRUcmlwc19NZXNzYWdlcyRPbkluc2VydFRyaXAsXG5cdFx0QTMoX2VsbV9sYW5nJGh0dHAkSHR0cCRwb3N0LCBfdXNlciRwcm9qZWN0JFRyaXBzX0NvbW1hbmRzJHBvc3RUcmlwVXJsLCBwYXlsb2FkLCBfdXNlciRwcm9qZWN0JFRyaXBzX0NvbW1hbmRzJHBvc3RTdWNjZXNzRGVjb2RlcikpO1xufTtcblxudmFyIF91c2VyJHByb2plY3QkVHJpcHNfUm91dGluZyRtYXRjaGVycyA9IF9ldmFuY3okdXJsX3BhcnNlciRVcmxQYXJzZXIkb25lT2YoXG5cdHtcblx0XHRjdG9yOiAnOjonLFxuXHRcdF8wOiBBMihfZXZhbmN6JHVybF9wYXJzZXIkVXJsUGFyc2VyJG1hcCwgX3VzZXIkcHJvamVjdCRUcmlwc19Nb2RlbCRUcmlwc1JvdXRlLCBfZXZhbmN6JHVybF9wYXJzZXIkVXJsUGFyc2VyJHRvcCksXG5cdFx0XzE6IHtcblx0XHRcdGN0b3I6ICc6OicsXG5cdFx0XHRfMDogQTIoXG5cdFx0XHRcdF9ldmFuY3okdXJsX3BhcnNlciRVcmxQYXJzZXIkbWFwLFxuXHRcdFx0XHRfdXNlciRwcm9qZWN0JFRyaXBzX01vZGVsJFRyaXBSb3V0ZSxcblx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0X2V2YW5jeiR1cmxfcGFyc2VyJFVybFBhcnNlcl9vcHNbJzwvPiddLFxuXHRcdFx0XHRcdF9ldmFuY3okdXJsX3BhcnNlciRVcmxQYXJzZXIkcygndHJpcHMnKSxcblx0XHRcdFx0XHRfZXZhbmN6JHVybF9wYXJzZXIkVXJsUGFyc2VyJGludCkpLFxuXHRcdFx0XzE6IHtcblx0XHRcdFx0Y3RvcjogJzo6Jyxcblx0XHRcdFx0XzA6IEEyKFxuXHRcdFx0XHRcdF9ldmFuY3okdXJsX3BhcnNlciRVcmxQYXJzZXIkbWFwLFxuXHRcdFx0XHRcdF91c2VyJHByb2plY3QkVHJpcHNfTW9kZWwkVHJpcHNSb3V0ZSxcblx0XHRcdFx0XHRfZXZhbmN6JHVybF9wYXJzZXIkVXJsUGFyc2VyJHMoJ3RyaXBzJykpLFxuXHRcdFx0XHRfMToge2N0b3I6ICdbXSd9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciBfdXNlciRwcm9qZWN0JFRyaXBzX1JvdXRpbmckcGFyc2VMb2NhdGlvbiA9IGZ1bmN0aW9uIChsb2NhdGlvbikge1xuXHR2YXIgX3AwID0gQTIoX2V2YW5jeiR1cmxfcGFyc2VyJFVybFBhcnNlciRwYXJzZUhhc2gsIF91c2VyJHByb2plY3QkVHJpcHNfUm91dGluZyRtYXRjaGVycywgbG9jYXRpb24pO1xuXHRpZiAoX3AwLmN0b3IgPT09ICdKdXN0Jykge1xuXHRcdHJldHVybiBfcDAuXzA7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIF91c2VyJHByb2plY3QkVHJpcHNfTW9kZWwkTm90Rm91bmRSb3V0ZTtcblx0fVxufTtcblxudmFyIF91c2VyJHByb2plY3QkVHJpcHNfUGFnZXNfVHJpcHMkdHJpcHNQYWdlID0gZnVuY3Rpb24gKG1vZGVsKSB7XG5cdHJldHVybiBBMihcblx0XHRfZWxtX2xhbmckaHRtbCRIdG1sJGRpdixcblx0XHR7XG5cdFx0XHRjdG9yOiAnOjonLFxuXHRcdFx0XzA6IF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRjbGFzcygndHJpcHMnKSxcblx0XHRcdF8xOiB7Y3RvcjogJ1tdJ31cblx0XHR9LFxuXHRcdHtcblx0XHRcdGN0b3I6ICc6OicsXG5cdFx0XHRfMDogQTIoXG5cdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWwkdWwsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRjdG9yOiAnOjonLFxuXHRcdFx0XHRcdF8wOiBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkY2xhc3MoJ3RyaXBzX19saXN0JyksXG5cdFx0XHRcdFx0XzE6IHtjdG9yOiAnW10nfVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRBMihcblx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSRMaXN0JG1hcCxcblx0XHRcdFx0XHRmdW5jdGlvbiAobCkge1xuXHRcdFx0XHRcdFx0dmFyIHRyaXBVcmwgPSBBMihfZWxtX2xhbmckY29yZSRCYXNpY3Nfb3BzWycrKyddLCAnIy90cmlwcy8nLCBsLmlkKTtcblx0XHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGh0bWwkSHRtbCRsaSxcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGN0b3I6ICc6OicsXG5cdFx0XHRcdFx0XHRcdFx0XzA6IF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRjbGFzcygndHJpcHNfX2xpc3QtaXRlbScpLFxuXHRcdFx0XHRcdFx0XHRcdF8xOiB7Y3RvcjogJ1tdJ31cblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGN0b3I6ICc6OicsXG5cdFx0XHRcdFx0XHRcdFx0XzA6IEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGh0bWwkSHRtbCRhLFxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdG9yOiAnOjonLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRfMDogX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGNsYXNzKCd0cmlwc19fbGlzdC1pdGVtLW5hbWUnKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XzE6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjdG9yOiAnOjonLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdF8wOiBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkaHJlZih0cmlwVXJsKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfMToge2N0b3I6ICdbXSd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGN0b3I6ICc6OicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF8wOiBfZWxtX2xhbmckaHRtbCRIdG1sJHRleHQobC5uYW1lKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XzE6IHtjdG9yOiAnW10nfVxuXHRcdFx0XHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHRcdFx0XzE6IHtcblx0XHRcdFx0XHRcdFx0XHRcdGN0b3I6ICc6OicsXG5cdFx0XHRcdFx0XHRcdFx0XHRfMDogQTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWwkYSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGN0b3I6ICc6OicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XzA6IF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRjbGFzcygndHJpcHNfX2xpc3QtaXRlbS1kZWxldGUnKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfMToge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y3RvcjogJzo6Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF8wOiBfZWxtX2xhbmckaHRtbCRIdG1sX0V2ZW50cyRvbkNsaWNrKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfdXNlciRwcm9qZWN0JFRyaXBzX01lc3NhZ2VzJFJlbW92ZVRyaXAobC5pZCkpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XzE6IHtjdG9yOiAnW10nfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGN0b3I6ICc6OicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XzA6IF9lbG1fbGFuZyRodG1sJEh0bWwkdGV4dCgnRGVsZXRlJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XzE6IHtjdG9yOiAnW10nfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdFx0XHRcdF8xOiB7Y3RvcjogJ1tdJ31cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0bW9kZWwudHJpcHMpKSxcblx0XHRcdF8xOiB7XG5cdFx0XHRcdGN0b3I6ICc6OicsXG5cdFx0XHRcdF8wOiBBMihcblx0XHRcdFx0XHRfZWxtX2xhbmckaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRjdG9yOiAnOjonLFxuXHRcdFx0XHRcdFx0XzA6IF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRjbGFzcygndHJpcHNfX2FkZGVyJyksXG5cdFx0XHRcdFx0XHRfMToge2N0b3I6ICdbXSd9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRjdG9yOiAnOjonLFxuXHRcdFx0XHRcdFx0XzA6IEEyKFxuXHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckaHRtbCRIdG1sJGlucHV0LFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0Y3RvcjogJzo6Jyxcblx0XHRcdFx0XHRcdFx0XHRfMDogX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGNsYXNzKCd0cmlwc19fbmFtZScpLFxuXHRcdFx0XHRcdFx0XHRcdF8xOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjdG9yOiAnOjonLFxuXHRcdFx0XHRcdFx0XHRcdFx0XzA6IF9lbG1fbGFuZyRodG1sJEh0bWxfRXZlbnRzJG9uSW5wdXQoX3VzZXIkcHJvamVjdCRUcmlwc19NZXNzYWdlcyRDaGFuZ2VUcmlwTmFtZSksXG5cdFx0XHRcdFx0XHRcdFx0XHRfMToge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdG9yOiAnOjonLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRfMDogX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJHZhbHVlKG1vZGVsLnRyaXBOYW1lKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XzE6IHtjdG9yOiAnW10nfVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0e2N0b3I6ICdbXSd9KSxcblx0XHRcdFx0XHRcdF8xOiB7XG5cdFx0XHRcdFx0XHRcdGN0b3I6ICc6OicsXG5cdFx0XHRcdFx0XHRcdF8wOiBBMihcblx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRjdG9yOiAnOjonLFxuXHRcdFx0XHRcdFx0XHRcdFx0XzA6IF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRjbGFzcygndHJpcHNfX2FjdGlvbnMnKSxcblx0XHRcdFx0XHRcdFx0XHRcdF8xOiB7Y3RvcjogJ1tdJ31cblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdGN0b3I6ICc6OicsXG5cdFx0XHRcdFx0XHRcdFx0XHRfMDogQTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWwkYnV0dG9uLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y3RvcjogJzo6Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfMDogX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGNsYXNzKCd0cmlwc19fYWRkJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XzE6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGN0b3I6ICc6OicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfMDogX2VsbV9sYW5nJGh0bWwkSHRtbF9FdmVudHMkb25DbGljayhfdXNlciRwcm9qZWN0JFRyaXBzX01lc3NhZ2VzJEFkZFRyaXApLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XzE6IHtjdG9yOiAnW10nfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGN0b3I6ICc6OicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XzA6IF9lbG1fbGFuZyRodG1sJEh0bWwkdGV4dCgnQWRkIHRyaXAnKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfMToge2N0b3I6ICdbXSd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0XHRcdFx0XzE6IHtjdG9yOiAnW10nfVxuXHRcdFx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0XHRfMToge2N0b3I6ICdbXSd9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdF8xOiB7Y3RvcjogJ1tdJ31cblx0XHRcdH1cblx0XHR9KTtcbn07XG5cbnZhciBfdXNlciRwcm9qZWN0JFRyaXBzX1BhZ2VzX1RyaXAkdHJpcFBhZ2UgPSBGMihcblx0ZnVuY3Rpb24gKG1vZGVsLCB0cmlwSWQpIHtcblx0XHR2YXIgdHJpcCA9IEEyKFxuXHRcdFx0X2VsbV9sYW5nJGNvcmUkQXJyYXkkZ2V0LFxuXHRcdFx0dHJpcElkIC0gMSxcblx0XHRcdF9lbG1fbGFuZyRjb3JlJEFycmF5JGZyb21MaXN0KG1vZGVsLnRyaXBzKSk7XG5cdFx0dmFyIF9wMCA9IHRyaXA7XG5cdFx0aWYgKF9wMC5jdG9yID09PSAnSnVzdCcpIHtcblx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0X2VsbV9sYW5nJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRjdG9yOiAnOjonLFxuXHRcdFx0XHRcdF8wOiBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkY2xhc3MoJ3RyaXAnKSxcblx0XHRcdFx0XHRfMToge2N0b3I6ICdbXSd9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRjdG9yOiAnOjonLFxuXHRcdFx0XHRcdF8wOiBBMihcblx0XHRcdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWwkaDEsXG5cdFx0XHRcdFx0XHR7Y3RvcjogJ1tdJ30sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGN0b3I6ICc6OicsXG5cdFx0XHRcdFx0XHRcdF8wOiBfZWxtX2xhbmckaHRtbCRIdG1sJHRleHQoX3AwLl8wLm5hbWUpLFxuXHRcdFx0XHRcdFx0XHRfMToge2N0b3I6ICdbXSd9XG5cdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRfMToge1xuXHRcdFx0XHRcdFx0Y3RvcjogJzo6Jyxcblx0XHRcdFx0XHRcdF8wOiBBMihcblx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRjdG9yOiAnOjonLFxuXHRcdFx0XHRcdFx0XHRcdF8wOiBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkY2xhc3MoJ3RyaXBfX3BsYW4nKSxcblx0XHRcdFx0XHRcdFx0XHRfMToge2N0b3I6ICdbXSd9XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRjdG9yOiAnOjonLFxuXHRcdFx0XHRcdFx0XHRcdF8wOiBBMihcblx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWwkZGl2LFxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdG9yOiAnOjonLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRfMDogX2VsbV9sYW5nJGh0bWwkSHRtbF9BdHRyaWJ1dGVzJGNsYXNzKCd0cmlwX19wbGFjZXMnKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XzE6IHtjdG9yOiAnW10nfVxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3RvcjogJzo6Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XzA6IEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWwkdWwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y3RvcjogJzo6Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF8wOiBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkY2xhc3MoJ3RyaXBzX19wbGFjZS1saXN0JyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfMToge2N0b3I6ICdbXSd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJExpc3QkbWFwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZnVuY3Rpb24gKGwpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWwkbGksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y3RvcjogJzo6Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF8wOiBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkY2xhc3MoJ3RyaXBzX19wbGFjZS1pdGVtJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfMToge2N0b3I6ICdbXSd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjdG9yOiAnOjonLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XzA6IF9lbG1fbGFuZyRodG1sJEh0bWwkdGV4dChsLm5hbWUpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XzE6IHtjdG9yOiAnW10nfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZGVsLnBsYWNlcykpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRfMToge2N0b3I6ICdbXSd9XG5cdFx0XHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdFx0XHRfMToge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y3RvcjogJzo6Jyxcblx0XHRcdFx0XHRcdFx0XHRcdF8wOiBBMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGh0bWwkSHRtbCRpbnB1dCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGN0b3I6ICc6OicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XzA6IF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRjbGFzcygndHJpcF9fbG9jYXRpb24nKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfMToge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y3RvcjogJzo6Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF8wOiBfZWxtX2xhbmckaHRtbCRIdG1sX0V2ZW50cyRvbklucHV0KF91c2VyJHByb2plY3QkVHJpcHNfTWVzc2FnZXMkQ2hhbmdlUGxhY2VOYW1lKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF8xOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGN0b3I6ICc6OicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF8wOiBfZWxtX2xhbmckaHRtbCRIdG1sX0F0dHJpYnV0ZXMkdmFsdWUobW9kZWwucGxhY2VOYW1lKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XzE6IHtjdG9yOiAnW10nfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0e2N0b3I6ICdbXSd9KSxcblx0XHRcdFx0XHRcdFx0XHRcdF8xOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGN0b3I6ICc6OicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF8wOiBBMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckaHRtbCRIdG1sJGJ1dHRvbixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjdG9yOiAnOjonLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XzA6IF9lbG1fbGFuZyRodG1sJEh0bWxfQXR0cmlidXRlcyRjbGFzcygndHJpcF9fYWRkLWxvY2F0aW9uJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfMToge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjdG9yOiAnOjonLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfMDogX2VsbV9sYW5nJGh0bWwkSHRtbF9FdmVudHMkb25DbGljayhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfdXNlciRwcm9qZWN0JFRyaXBzX01lc3NhZ2VzJEFkZFBsYWNlKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkQmFzaWNzJHRvU3RyaW5nKHRyaXBJZCkpKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XzE6IHtjdG9yOiAnW10nfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y3RvcjogJzo6Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF8wOiBfZWxtX2xhbmckaHRtbCRIdG1sJHRleHQoJ0FkZCBQb2ludCcpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XzE6IHtjdG9yOiAnW10nfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRfMToge2N0b3I6ICdbXSd9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdF8xOiB7Y3RvcjogJ1tdJ31cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdF9lbG1fbGFuZyRodG1sJEh0bWwkZGl2LFxuXHRcdFx0XHR7Y3RvcjogJ1tdJ30sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRjdG9yOiAnOjonLFxuXHRcdFx0XHRcdF8wOiBfZWxtX2xhbmckaHRtbCRIdG1sJHRleHQoJ05vIHRyaXAgZm91bmQnKSxcblx0XHRcdFx0XHRfMToge2N0b3I6ICdbXSd9XG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG5cbnZhciBfdXNlciRwcm9qZWN0JFRyaXBzX1ZpZXckbm90Rm91bmRWaWV3ID0gQTIoXG5cdF9lbG1fbGFuZyRodG1sJEh0bWwkZGl2LFxuXHR7Y3RvcjogJ1tdJ30sXG5cdHtcblx0XHRjdG9yOiAnOjonLFxuXHRcdF8wOiBfZWxtX2xhbmckaHRtbCRIdG1sJHRleHQoJ05vdCBmb3VuZCcpLFxuXHRcdF8xOiB7Y3RvcjogJ1tdJ31cblx0fSk7XG52YXIgX3VzZXIkcHJvamVjdCRUcmlwc19WaWV3JHBhZ2UgPSBmdW5jdGlvbiAobW9kZWwpIHtcblx0dmFyIF9wMCA9IG1vZGVsLnJvdXRlO1xuXHRzd2l0Y2ggKF9wMC5jdG9yKSB7XG5cdFx0Y2FzZSAnVHJpcHNSb3V0ZSc6XG5cdFx0XHRyZXR1cm4gX3VzZXIkcHJvamVjdCRUcmlwc19QYWdlc19UcmlwcyR0cmlwc1BhZ2UobW9kZWwpO1xuXHRcdGNhc2UgJ1RyaXBSb3V0ZSc6XG5cdFx0XHRyZXR1cm4gQTIoX3VzZXIkcHJvamVjdCRUcmlwc19QYWdlc19UcmlwJHRyaXBQYWdlLCBtb2RlbCwgX3AwLl8wKTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIF91c2VyJHByb2plY3QkVHJpcHNfVmlldyRub3RGb3VuZFZpZXc7XG5cdH1cbn07XG52YXIgX3VzZXIkcHJvamVjdCRUcmlwc19WaWV3JHZpZXcgPSBmdW5jdGlvbiAobW9kZWwpIHtcblx0cmV0dXJuIEEyKFxuXHRcdF9lbG1fbGFuZyRodG1sJEh0bWwkZGl2LFxuXHRcdHtjdG9yOiAnW10nfSxcblx0XHR7XG5cdFx0XHRjdG9yOiAnOjonLFxuXHRcdFx0XzA6IF91c2VyJHByb2plY3QkVHJpcHNfVmlldyRwYWdlKG1vZGVsKSxcblx0XHRcdF8xOiB7Y3RvcjogJ1tdJ31cblx0XHR9KTtcbn07XG5cbnZhciBfdXNlciRwcm9qZWN0JFRyaXBzX1BvcnRzJGFkZFRyaXAgPSBfZWxtX2xhbmckY29yZSROYXRpdmVfUGxhdGZvcm0ub3V0Z29pbmdQb3J0KFxuXHQnYWRkVHJpcCcsXG5cdGZ1bmN0aW9uICh2KSB7XG5cdFx0cmV0dXJuIHtuYW1lOiB2Lm5hbWUsIGlkOiB2LmlkfTtcblx0fSk7XG52YXIgX3VzZXIkcHJvamVjdCRUcmlwc19Qb3J0cyRhZGRQbGFjZSA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9QbGF0Zm9ybS5vdXRnb2luZ1BvcnQoXG5cdCdhZGRQbGFjZScsXG5cdGZ1bmN0aW9uICh2KSB7XG5cdFx0cmV0dXJuIHtuYW1lOiB2Lm5hbWUsIGlkOiB2LmlkLCB0cmlwSWQ6IHYudHJpcElkfTtcblx0fSk7XG52YXIgX3VzZXIkcHJvamVjdCRUcmlwc19Qb3J0cyRvcGVuVHJpcCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9QbGF0Zm9ybS5vdXRnb2luZ1BvcnQoXG5cdCdvcGVuVHJpcCcsXG5cdGZ1bmN0aW9uICh2KSB7XG5cdFx0cmV0dXJuIHtocmVmOiB2LmhyZWYsIGhvc3Q6IHYuaG9zdCwgaG9zdG5hbWU6IHYuaG9zdG5hbWUsIHByb3RvY29sOiB2LnByb3RvY29sLCBvcmlnaW46IHYub3JpZ2luLCBwb3J0Xzogdi5wb3J0XywgcGF0aG5hbWU6IHYucGF0aG5hbWUsIHNlYXJjaDogdi5zZWFyY2gsIGhhc2g6IHYuaGFzaCwgdXNlcm5hbWU6IHYudXNlcm5hbWUsIHBhc3N3b3JkOiB2LnBhc3N3b3JkfTtcblx0fSk7XG52YXIgX3VzZXIkcHJvamVjdCRUcmlwc19Qb3J0cyRsb2FkaW5nVHJpcCA9IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9QbGF0Zm9ybS5vdXRnb2luZ1BvcnQoXG5cdCdsb2FkaW5nVHJpcCcsXG5cdGZ1bmN0aW9uICh2KSB7XG5cdFx0cmV0dXJuIHY7XG5cdH0pO1xuXG52YXIgX3VzZXIkcHJvamVjdCRUcmlwc19NYWluJHN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiAobW9kZWwpIHtcblx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJFBsYXRmb3JtX1N1YiRub25lO1xufTtcbnZhciBfdXNlciRwcm9qZWN0JFRyaXBzX01haW4kdXBkYXRlID0gRjIoXG5cdGZ1bmN0aW9uIChtc2csIG1vZGVsKSB7XG5cdFx0dmFyIF9wMCA9IG1zZztcblx0XHRzd2l0Y2ggKF9wMC5jdG9yKSB7XG5cdFx0XHRjYXNlICdPbkxvY2F0aW9uQ2hhbmdlJzpcblx0XHRcdFx0dmFyIF9wMSA9IF9wMC5fMDtcblx0XHRcdFx0dmFyIG5ld1JvdXRlID0gX3VzZXIkcHJvamVjdCRUcmlwc19Sb3V0aW5nJHBhcnNlTG9jYXRpb24oX3AxKTtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRjdG9yOiAnX1R1cGxlMicsXG5cdFx0XHRcdFx0XzA6IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy51cGRhdGUoXG5cdFx0XHRcdFx0XHRtb2RlbCxcblx0XHRcdFx0XHRcdHtyb3V0ZTogbmV3Um91dGV9KSxcblx0XHRcdFx0XHRfMTogX3VzZXIkcHJvamVjdCRUcmlwc19Qb3J0cyRvcGVuVHJpcChfcDEpXG5cdFx0XHRcdH07XG5cdFx0XHRjYXNlICdDaGFuZ2VUcmlwTmFtZSc6XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0Y3RvcjogJ19UdXBsZTInLFxuXHRcdFx0XHRcdF8wOiBfZWxtX2xhbmckY29yZSROYXRpdmVfVXRpbHMudXBkYXRlKFxuXHRcdFx0XHRcdFx0bW9kZWwsXG5cdFx0XHRcdFx0XHR7dHJpcE5hbWU6IF9wMC5fMH0pLFxuXHRcdFx0XHRcdF8xOiBfZWxtX2xhbmckY29yZSRQbGF0Zm9ybV9DbWQkbm9uZVxuXHRcdFx0XHR9O1xuXHRcdFx0Y2FzZSAnQ2hhbmdlUGxhY2VOYW1lJzpcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRjdG9yOiAnX1R1cGxlMicsXG5cdFx0XHRcdFx0XzA6IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy51cGRhdGUoXG5cdFx0XHRcdFx0XHRtb2RlbCxcblx0XHRcdFx0XHRcdHtwbGFjZU5hbWU6IF9wMC5fMH0pLFxuXHRcdFx0XHRcdF8xOiBfZWxtX2xhbmckY29yZSRQbGF0Zm9ybV9DbWQkbm9uZVxuXHRcdFx0XHR9O1xuXHRcdFx0Y2FzZSAnQWRkVHJpcCc6XG5cdFx0XHRcdHZhciB0cmlwSWQgPSBfZWxtX2xhbmckY29yZSRCYXNpY3MkdG9TdHJpbmcoXG5cdFx0XHRcdFx0X2VsbV9sYW5nJGNvcmUkTGlzdCRsZW5ndGgobW9kZWwudHJpcHMpICsgMSk7XG5cdFx0XHRcdHZhciBuZXdUcmlwID0ge25hbWU6IG1vZGVsLnRyaXBOYW1lLCBpZDogdHJpcElkfTtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRjdG9yOiAnX1R1cGxlMicsXG5cdFx0XHRcdFx0XzA6IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy51cGRhdGUoXG5cdFx0XHRcdFx0XHRtb2RlbCxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dHJpcHM6IEEyKFxuXHRcdFx0XHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJExpc3QkYXBwZW5kLFxuXHRcdFx0XHRcdFx0XHRcdG1vZGVsLnRyaXBzLFxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdGN0b3I6ICc6OicsXG5cdFx0XHRcdFx0XHRcdFx0XHRfMDogbmV3VHJpcCxcblx0XHRcdFx0XHRcdFx0XHRcdF8xOiB7Y3RvcjogJ1tdJ31cblx0XHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdFx0dHJpcE5hbWU6ICcnXG5cdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRfMTogX3VzZXIkcHJvamVjdCRUcmlwc19Db21tYW5kcyRwb3N0VHJpcChuZXdUcmlwKVxuXHRcdFx0XHR9O1xuXHRcdFx0Y2FzZSAnUmVtb3ZlVHJpcCc6XG5cdFx0XHRcdHZhciBfcDIgPSBfcDAuXzA7XG5cdFx0XHRcdHZhciB1cGRhdGVkVHJpcHMgPSBBMihcblx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSRMaXN0JGZpbHRlcixcblx0XHRcdFx0XHRmdW5jdGlvbiAodCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy5lcSh0LmlkLCBfcDIpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0bW9kZWwudHJpcHMpO1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGN0b3I6ICdfVHVwbGUyJyxcblx0XHRcdFx0XHRfMDogX2VsbV9sYW5nJGNvcmUkTmF0aXZlX1V0aWxzLnVwZGF0ZShcblx0XHRcdFx0XHRcdG1vZGVsLFxuXHRcdFx0XHRcdFx0e3RyaXBzOiB1cGRhdGVkVHJpcHN9KSxcblx0XHRcdFx0XHRfMTogX3VzZXIkcHJvamVjdCRUcmlwc19Db21tYW5kcyRkZWxldGVUcmlwKF9wMilcblx0XHRcdFx0fTtcblx0XHRcdGNhc2UgJ09uSW5zZXJ0VHJpcCc6XG5cdFx0XHRcdGlmIChfcDAuXzAuY3RvciA9PT0gJ09rJykge1xuXHRcdFx0XHRcdHJldHVybiB7Y3RvcjogJ19UdXBsZTInLCBfMDogbW9kZWwsIF8xOiBfZWxtX2xhbmckY29yZSRQbGF0Zm9ybV9DbWQkbm9uZX07XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIHtjdG9yOiAnX1R1cGxlMicsIF8wOiBtb2RlbCwgXzE6IF9lbG1fbGFuZyRjb3JlJFBsYXRmb3JtX0NtZCRub25lfTtcblx0XHRcdFx0fVxuXHRcdFx0Y2FzZSAnT25SZW1vdmVUcmlwJzpcblx0XHRcdFx0aWYgKF9wMC5fMC5jdG9yID09PSAnT2snKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHtjdG9yOiAnX1R1cGxlMicsIF8wOiBtb2RlbCwgXzE6IF9lbG1fbGFuZyRjb3JlJFBsYXRmb3JtX0NtZCRub25lfTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4ge2N0b3I6ICdfVHVwbGUyJywgXzA6IG1vZGVsLCBfMTogX2VsbV9sYW5nJGNvcmUkUGxhdGZvcm1fQ21kJG5vbmV9O1xuXHRcdFx0XHR9XG5cdFx0XHRjYXNlICdPbkZldGNoQWxsVHJpcHMnOlxuXHRcdFx0XHRpZiAoX3AwLl8wLmN0b3IgPT09ICdPaycpIHtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0Y3RvcjogJ19UdXBsZTInLFxuXHRcdFx0XHRcdFx0XzA6IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy51cGRhdGUoXG5cdFx0XHRcdFx0XHRcdG1vZGVsLFxuXHRcdFx0XHRcdFx0XHR7dHJpcHM6IF9wMC5fMC5fMH0pLFxuXHRcdFx0XHRcdFx0XzE6IF9lbG1fbGFuZyRjb3JlJFBsYXRmb3JtX0NtZCRub25lXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4ge2N0b3I6ICdfVHVwbGUyJywgXzA6IG1vZGVsLCBfMTogX2VsbV9sYW5nJGNvcmUkUGxhdGZvcm1fQ21kJG5vbmV9O1xuXHRcdFx0XHR9XG5cdFx0XHRjYXNlICdBZGRQbGFjZSc6XG5cdFx0XHRcdHZhciBwbGFjZUlkID0gX2VsbV9sYW5nJGNvcmUkQmFzaWNzJHRvU3RyaW5nKFxuXHRcdFx0XHRcdF9lbG1fbGFuZyRjb3JlJExpc3QkbGVuZ3RoKG1vZGVsLnBsYWNlcykgKyAxKTtcblx0XHRcdFx0dmFyIG5ld1BsYWNlID0ge25hbWU6IG1vZGVsLnBsYWNlTmFtZSwgaWQ6IHBsYWNlSWQsIHRyaXBJZDogX3AwLl8wfTtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRjdG9yOiAnX1R1cGxlMicsXG5cdFx0XHRcdFx0XzA6IF9lbG1fbGFuZyRjb3JlJE5hdGl2ZV9VdGlscy51cGRhdGUoXG5cdFx0XHRcdFx0XHRtb2RlbCxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0cGxhY2VzOiBBMihcblx0XHRcdFx0XHRcdFx0XHRfZWxtX2xhbmckY29yZSRMaXN0JGFwcGVuZCxcblx0XHRcdFx0XHRcdFx0XHRtb2RlbC5wbGFjZXMsXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0Y3RvcjogJzo6Jyxcblx0XHRcdFx0XHRcdFx0XHRcdF8wOiBuZXdQbGFjZSxcblx0XHRcdFx0XHRcdFx0XHRcdF8xOiB7Y3RvcjogJ1tdJ31cblx0XHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdFx0cGxhY2VOYW1lOiAnJ1xuXHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XzE6IF91c2VyJHByb2plY3QkVHJpcHNfQ29tbWFuZHMkcG9zdFBsYWNlKG5ld1BsYWNlKVxuXHRcdFx0XHR9O1xuXHRcdFx0Y2FzZSAnT25JbnNlcnRQbGFjZSc6XG5cdFx0XHRcdGlmIChfcDAuXzAuY3RvciA9PT0gJ09rJykge1xuXHRcdFx0XHRcdHJldHVybiB7Y3RvcjogJ19UdXBsZTInLCBfMDogbW9kZWwsIF8xOiBfZWxtX2xhbmckY29yZSRQbGF0Zm9ybV9DbWQkbm9uZX07XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIHtjdG9yOiAnX1R1cGxlMicsIF8wOiBtb2RlbCwgXzE6IF9lbG1fbGFuZyRjb3JlJFBsYXRmb3JtX0NtZCRub25lfTtcblx0XHRcdFx0fVxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIHtjdG9yOiAnX1R1cGxlMicsIF8wOiBtb2RlbCwgXzE6IF9lbG1fbGFuZyRjb3JlJFBsYXRmb3JtX0NtZCRub25lfTtcblx0XHR9XG5cdH0pO1xudmFyIF91c2VyJHByb2plY3QkVHJpcHNfTWFpbiRpbml0ID0gZnVuY3Rpb24gKGxvY2F0aW9uKSB7XG5cdHZhciBjdXJyZW50Um91dGUgPSBfdXNlciRwcm9qZWN0JFRyaXBzX1JvdXRpbmckcGFyc2VMb2NhdGlvbihsb2NhdGlvbik7XG5cdHJldHVybiB7XG5cdFx0Y3RvcjogJ19UdXBsZTInLFxuXHRcdF8wOiBfdXNlciRwcm9qZWN0JFRyaXBzX01vZGVsJGluaXRNb2RlbChjdXJyZW50Um91dGUpLFxuXHRcdF8xOiBfdXNlciRwcm9qZWN0JFRyaXBzX0NvbW1hbmRzJGZldGNoQWxsXG5cdH07XG59O1xudmFyIF91c2VyJHByb2plY3QkVHJpcHNfTWFpbiRtYWluID0gQTIoXG5cdF9lbG1fbGFuZyRuYXZpZ2F0aW9uJE5hdmlnYXRpb24kcHJvZ3JhbSxcblx0X3VzZXIkcHJvamVjdCRUcmlwc19NZXNzYWdlcyRPbkxvY2F0aW9uQ2hhbmdlLFxuXHR7aW5pdDogX3VzZXIkcHJvamVjdCRUcmlwc19NYWluJGluaXQsIHZpZXc6IF91c2VyJHByb2plY3QkVHJpcHNfVmlldyR2aWV3LCB1cGRhdGU6IF91c2VyJHByb2plY3QkVHJpcHNfTWFpbiR1cGRhdGUsIHN1YnNjcmlwdGlvbnM6IF91c2VyJHByb2plY3QkVHJpcHNfTWFpbiRzdWJzY3JpcHRpb25zfSkoKTtcblxudmFyIEVsbSA9IHt9O1xuRWxtWydUcmlwcyddID0gRWxtWydUcmlwcyddIHx8IHt9O1xuRWxtWydUcmlwcyddWydNYWluJ10gPSBFbG1bJ1RyaXBzJ11bJ01haW4nXSB8fCB7fTtcbmlmICh0eXBlb2YgX3VzZXIkcHJvamVjdCRUcmlwc19NYWluJG1haW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgX3VzZXIkcHJvamVjdCRUcmlwc19NYWluJG1haW4oRWxtWydUcmlwcyddWydNYWluJ10sICdUcmlwcy5NYWluJywgdW5kZWZpbmVkKTtcbn1cblxuaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmVbJ2FtZCddKVxue1xuICBkZWZpbmUoW10sIGZ1bmN0aW9uKCkgeyByZXR1cm4gRWxtOyB9KTtcbiAgcmV0dXJuO1xufVxuXG5pZiAodHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIilcbntcbiAgbW9kdWxlWydleHBvcnRzJ10gPSBFbG07XG4gIHJldHVybjtcbn1cblxudmFyIGdsb2JhbEVsbSA9IHRoaXNbJ0VsbSddO1xuaWYgKHR5cGVvZiBnbG9iYWxFbG0gPT09IFwidW5kZWZpbmVkXCIpXG57XG4gIHRoaXNbJ0VsbSddID0gRWxtO1xuICByZXR1cm47XG59XG5cbmZvciAodmFyIHB1YmxpY01vZHVsZSBpbiBFbG0pXG57XG4gIGlmIChwdWJsaWNNb2R1bGUgaW4gZ2xvYmFsRWxtKVxuICB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUaGVyZSBhcmUgdHdvIEVsbSBtb2R1bGVzIGNhbGxlZCBgJyArIHB1YmxpY01vZHVsZSArICdgIG9uIHRoaXMgcGFnZSEgUmVuYW1lIG9uZSBvZiB0aGVtLicpO1xuICB9XG4gIGdsb2JhbEVsbVtwdWJsaWNNb2R1bGVdID0gRWxtW3B1YmxpY01vZHVsZV07XG59XG5cbn0pLmNhbGwodGhpcyk7XG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vVHJpcHMvTWFpbi5lbG1cbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Ucmlwcy9NYWluLmVsbVxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9