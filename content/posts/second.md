---
title: "GopherCon 2020"
date: 2021-01-29T16:10:51-05:00
draft: no
toc: false
images:
tags:
  - go
  - gophercon
  - con
  - conference
---

Last year, I had the privilege of attending GopherCon 2020. Recently, the GopherCon team
published the [presentation recordings](https://www.youtube.com/playlist?list=PL2ntRZ1ySWBfUint2hCE1JRxRWChloasB)
 on YouTube. In this post I'd like to take the opportunity to share my favorites!

#### [Go is Boring... And That's Fantastic!](https://www.youtube.com/watch?v=4hxKEbWO5u0)

One of my favorite summaries of Go and the motivation behind its simplicity!

Coming to Go from a language like Python, you might be surprised to see the lack of
inheritance, classes, etc. Where Go lacks in features, it easily makes up for it with its
speed and readability. The features it does have are proven, traditional features adapted
to the modern world.

I rate this **Beginner**, requires minimal technial knowledge.

#### [How to Write a Go Compiler from Scratch](https://www.youtube.com/watch?v=1-gDvv54ojM)

Ready to feel inspired? This guy learned to program by writing a C compiler from scratch,
and decided to take it a step further by doing the same thing in Go.

This is a really honest look at a programmer's journey, testing their ability to persevere
in learning how to code. Most importantly, he admits that it's not easy. This guy's patience
is admirable!

I rate this **Beginner**, more of a story than a technical deep-dive.

#### [The Quest for the Fastest Deployment Time](https://www.youtube.com/watch?v=WgliN_9j91g)

Get ready to have your mind blown with a super packed 45 minutes of tricks to reduce
your time to build/deploy!

This is primarily Docker/Kubernetes-focused, but features a lot of tricks specific to Go.
[Tilt](https://tilt.dev/) is also an amazing tool, definitely worth installing and messing
around with.

I rate this **Intermediate**, requires K8S/Docker/Shell knowledge.

#### [Debugging Code Generation in Go](https://www.youtube.com/watch?v=qPIB3STWXVk)

A very comprehensive deep-dive into all kinds of crazy tricks with the Go compiler.

I rate this **Intermediate**, can be a bit hard to follow because of the sheer depth of
the deep-dive. Pay attention :smile:!

#### [Tracing Go Programs with eBPF!](https://www.youtube.com/watch?v=OxLmd7szevI)

Covers a really interesting feature of the Linux kernel called eBPF. Learn how to write
basic eBPF programs and how to compile, run, and interact with them in Go! In short, eBPF is a
virtual machine running in the kernel that allows you to inspect and probe all kinds of
interesting aspects of a process.

I rate this **Advanced**, requires understanding of Linux (kernel space vs. user space),
stack frames, Go programming, etc.
