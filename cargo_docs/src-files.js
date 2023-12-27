var srcIndex = JSON.parse('{\
"api_server":["",[["request",[],["actions.rs","balloon.rs","boot_source.rs","cpu_configuration.rs","drive.rs","entropy.rs","instance_info.rs","logger.rs","machine_configuration.rs","metrics.rs","mmds.rs","mod.rs","net.rs","snapshot.rs","version.rs","vsock.rs"]]],["lib.rs","parsed_request.rs"]],\
"clippy_tracing":["",[],["main.rs"]],\
"cpu_template_helper":["",[["fingerprint",[],["compare.rs","dump.rs","mod.rs"]],["template",[["dump",[],["aarch64.rs","mod.rs"]],["strip",[],["aarch64.rs","mod.rs"]],["verify",[],["aarch64.rs","mod.rs"]]],["mod.rs"]],["utils",[],["aarch64.rs","mod.rs"]]],["main.rs"]],\
"firecracker":["",[],["api_server_adapter.rs","main.rs","metrics.rs","seccomp.rs"]],\
"jailer":["",[],["cgroup.rs","chroot.rs","env.rs","main.rs","resource_limits.rs"]],\
"log_instrument":["",[],["lib.rs"]],\
"log_instrument_macros":["",[],["lib.rs"]],\
"rebase_snap":["",[],["main.rs"]],\
"seccompiler":["",[["syscall_table",[],["aarch64.rs","mod.rs","x86_64.rs"]]],["backend.rs","common.rs","compiler.rs","lib.rs"]],\
"seccompiler_bin":["",[["syscall_table",[],["aarch64.rs","mod.rs","x86_64.rs"]]],["backend.rs","common.rs","compiler.rs","seccompiler_bin.rs"]],\
"snapshot":["",[],["lib.rs","persist.rs"]],\
"snapshot_editor":["",[],["edit_memory.rs","edit_vmstate.rs","info.rs","main.rs","utils.rs"]],\
"utils":["",[["net",[],["ipv4addr.rs","mac.rs","mod.rs"]]],["arg_parser.rs","byte_order.rs","kernel_version.rs","lib.rs","signal.rs","sm.rs","time.rs","validators.rs"]],\
"vmm":["",[["arch",[["aarch64",[["gic",[["gicv2",[["regs",[],["dist_regs.rs","icc_regs.rs","mod.rs"]]],["mod.rs"]],["gicv3",[["regs",[],["dist_regs.rs","icc_regs.rs","mod.rs","redist_regs.rs"]]],["mod.rs"]]],["mod.rs","regs.rs"]]],["cache_info.rs","fdt.rs","layout.rs","mod.rs","regs.rs","vcpu.rs"]]],["mod.rs"]],["arch_gen",[],["mod.rs"]],["cpu_config",[["aarch64",[["static_cpu_templates",[],["mod.rs","v1n1.rs"]]],["custom_cpu_template.rs","mod.rs","test_utils.rs"]]],["mod.rs","templates.rs","templates_serde.rs"]],["device_manager",[],["mmio.rs","mod.rs","persist.rs"]],["devices",[["legacy",[],["i8042.rs","mod.rs","rtc_pl031.rs","serial.rs"]],["pseudo",[],["boot_timer.rs","mod.rs"]],["virtio",[["balloon",[],["device.rs","event_handler.rs","metrics.rs","mod.rs","persist.rs","test_utils.rs","util.rs"]],["gen",[],["mod.rs","virtio_blk.rs","virtio_net.rs","virtio_ring.rs","virtio_rng.rs"]],["net",[["gen",[],["if_tun.rs","iff.rs","mod.rs","sockios.rs"]]],["device.rs","event_handler.rs","metrics.rs","mod.rs","persist.rs","tap.rs","test_utils.rs"]],["rng",[],["device.rs","event_handler.rs","metrics.rs","mod.rs","persist.rs"]],["vhost_user_block",[],["device.rs","event_handler.rs","mod.rs","persist.rs"]],["virtio_block",[["io",[],["async_io.rs","mod.rs","sync_io.rs"]]],["device.rs","event_handler.rs","metrics.rs","mod.rs","persist.rs","request.rs","test_utils.rs"]],["vsock",[["csm",[],["connection.rs","mod.rs","txbuf.rs"]],["unix",[],["mod.rs","muxer.rs","muxer_killq.rs","muxer_rxq.rs"]]],["device.rs","event_handler.rs","metrics.rs","mod.rs","packet.rs","persist.rs"]]],["block_common.rs","device.rs","iovec.rs","mmio.rs","mod.rs","persist.rs","queue.rs","test_utils.rs","vhost_user.rs","vhost_user_metrics.rs"]]],["bus.rs","mod.rs"]],["dumbo",[["pdu",[],["arp.rs","bytes.rs","ethernet.rs","ipv4.rs","mod.rs","tcp.rs","udp.rs"]],["tcp",[],["connection.rs","endpoint.rs","handler.rs","mod.rs"]]],["mod.rs"]],["io_uring",[["operation",[],["cqe.rs","mod.rs","sqe.rs"]],["queue",[],["completion.rs","mmap.rs","mod.rs","submission.rs"]]],["bindings.rs","mod.rs","probe.rs","restriction.rs"]],["logger",[],["logging.rs","metrics.rs","mod.rs"]],["mmds",[],["data_store.rs","mod.rs","ns.rs","persist.rs","token.rs","token_headers.rs"]],["rate_limiter",[],["mod.rs","persist.rs"]],["utilities",[["mock_devices",[],["mod.rs"]],["mock_resources",[],["mod.rs"]],["test_utils",[],["mod.rs"]]],["mod.rs"]],["vmm_config",[],["balloon.rs","boot_source.rs","drive.rs","entropy.rs","instance_info.rs","machine_config.rs","metrics.rs","mmds.rs","mod.rs","net.rs","snapshot.rs","vsock.rs"]],["vstate",[["vcpu",[],["aarch64.rs","mod.rs"]]],["memory.rs","mod.rs","vm.rs"]]],["builder.rs","lib.rs","persist.rs","resources.rs","rpc_interface.rs","seccomp_filters.rs","signal_handler.rs","version_map.rs"]]\
}');
createSrcSidebar();
