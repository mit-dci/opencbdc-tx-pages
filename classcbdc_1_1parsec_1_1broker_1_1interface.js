var classcbdc_1_1parsec_1_1broker_1_1interface =
[
    [ "begin_callback_type", "classcbdc_1_1parsec_1_1broker_1_1interface.html#a7536947f4311eb24e6587489fada13a5", null ],
    [ "commit_callback_type", "classcbdc_1_1parsec_1_1broker_1_1interface.html#acdedf60278a9f8a0764c292135996bbf", null ],
    [ "commit_return_type", "classcbdc_1_1parsec_1_1broker_1_1interface.html#a84a4667edd4b6feaf9f16227ac3714c0", null ],
    [ "finish_callback_type", "classcbdc_1_1parsec_1_1broker_1_1interface.html#aa505fbadea0928d03ee298d2cba0b825", null ],
    [ "finish_return_type", "classcbdc_1_1parsec_1_1broker_1_1interface.html#a8fcd3747273d7841f304d061c3abd475", null ],
    [ "recover_callback_type", "classcbdc_1_1parsec_1_1broker_1_1interface.html#a3e7edac861f5477134b7454e7335854c", null ],
    [ "recover_return_type", "classcbdc_1_1parsec_1_1broker_1_1interface.html#ad528e2451e32b5e5feba20f385fc7599", null ],
    [ "rollback_callback_type", "classcbdc_1_1parsec_1_1broker_1_1interface.html#a6a7bdee8a9bac86dabe7d1d26b81ad2e", null ],
    [ "rollback_return_type", "classcbdc_1_1parsec_1_1broker_1_1interface.html#af8c5164208dd11fb67513f1d5f098997", null ],
    [ "ticketnum_or_errcode_type", "classcbdc_1_1parsec_1_1broker_1_1interface.html#ae8aae36c6d735c1e1534aec4dc164f88", null ],
    [ "try_lock_callback_type", "classcbdc_1_1parsec_1_1broker_1_1interface.html#af68b3e8c226eaff996bd53c131f0f93f", null ],
    [ "try_lock_return_type", "classcbdc_1_1parsec_1_1broker_1_1interface.html#a7ad81d8ee6b0c0df7f8d2070b7e0d6f5", null ],
    [ "error_code", "classcbdc_1_1parsec_1_1broker_1_1interface.html#aa376a0f5760fd2cba521620a7af84901", [
      [ "ticket_number_assignment", "classcbdc_1_1parsec_1_1broker_1_1interface.html#aa376a0f5760fd2cba521620a7af84901abdcde4946e39a81053128e5420cf35e7", null ],
      [ "unknown_ticket", "classcbdc_1_1parsec_1_1broker_1_1interface.html#aa376a0f5760fd2cba521620a7af84901afaa441dd61144c55daa9d8af1a233db4", null ],
      [ "prepared", "classcbdc_1_1parsec_1_1broker_1_1interface.html#aa376a0f5760fd2cba521620a7af84901a91a51175128716cb88eb83b38017c377", null ],
      [ "shard_unreachable", "classcbdc_1_1parsec_1_1broker_1_1interface.html#aa376a0f5760fd2cba521620a7af84901a9142d2ed5428fcee0402a50e717052db", null ],
      [ "ticket_machine_unreachable", "classcbdc_1_1parsec_1_1broker_1_1interface.html#aa376a0f5760fd2cba521620a7af84901ade097496acb20f43f14a8dbf9c8cb7ef", null ],
      [ "committed", "classcbdc_1_1parsec_1_1broker_1_1interface.html#aa376a0f5760fd2cba521620a7af84901afebbaa1b242d391642fb9eddfb06ff83", null ],
      [ "not_prepared", "classcbdc_1_1parsec_1_1broker_1_1interface.html#aa376a0f5760fd2cba521620a7af84901ae4e252069247b24439c82292f71fac8c", null ],
      [ "begun", "classcbdc_1_1parsec_1_1broker_1_1interface.html#aa376a0f5760fd2cba521620a7af84901ad1fe449335c473c1ada95f16633d2f25", null ],
      [ "aborted", "classcbdc_1_1parsec_1_1broker_1_1interface.html#aa376a0f5760fd2cba521620a7af84901adfb7069bfc6e0064a6c667626eca07b4", null ],
      [ "directory_unreachable", "classcbdc_1_1parsec_1_1broker_1_1interface.html#aa376a0f5760fd2cba521620a7af84901a3924b36e4c808a0ad96ece8436cbe22d", null ],
      [ "invalid_shard_state", "classcbdc_1_1parsec_1_1broker_1_1interface.html#aa376a0f5760fd2cba521620a7af84901ac9f6682f2f60819927045f508ffab576", null ],
      [ "waiting_for_locks", "classcbdc_1_1parsec_1_1broker_1_1interface.html#aa376a0f5760fd2cba521620a7af84901ab86cc6026ca1425ada3a0f1c74924856", null ],
      [ "commit_error", "classcbdc_1_1parsec_1_1broker_1_1interface.html#aa376a0f5760fd2cba521620a7af84901a20218462c307088a7a32e5fdd0a21a6e", null ],
      [ "rollback_error", "classcbdc_1_1parsec_1_1broker_1_1interface.html#aa376a0f5760fd2cba521620a7af84901a191558407cb376be65cb1a3f6d5b4cb2", null ],
      [ "prepare_error", "classcbdc_1_1parsec_1_1broker_1_1interface.html#aa376a0f5760fd2cba521620a7af84901a560d68a2e4c23a6ecee148d7615a1a10", null ],
      [ "finish_error", "classcbdc_1_1parsec_1_1broker_1_1interface.html#aa376a0f5760fd2cba521620a7af84901a78f6c648aeaae9472c4f07d9149a3196", null ],
      [ "get_tickets_error", "classcbdc_1_1parsec_1_1broker_1_1interface.html#aa376a0f5760fd2cba521620a7af84901a47727f86ca4cd299085d133ebfe83fa5", null ],
      [ "commit_hazard", "classcbdc_1_1parsec_1_1broker_1_1interface.html#aa376a0f5760fd2cba521620a7af84901a9f2df66369b873e0dcb5355cb09f9b80", null ]
    ] ],
    [ "~interface", "classcbdc_1_1parsec_1_1broker_1_1interface.html#a75ff0e8d551a07d203e938036f53c537", null ],
    [ "interface", "classcbdc_1_1parsec_1_1broker_1_1interface.html#a2088e3f034bc94019b7794596d163875", null ],
    [ "interface", "classcbdc_1_1parsec_1_1broker_1_1interface.html#a3498215708618d940bb784756447cb81", null ],
    [ "interface", "classcbdc_1_1parsec_1_1broker_1_1interface.html#a8601f990460d432e6562cd7a33c7d2c5", null ],
    [ "begin", "classcbdc_1_1parsec_1_1broker_1_1interface.html#a951f66f3b63dcb7c71da3e2f66d71ad3", null ],
    [ "commit", "classcbdc_1_1parsec_1_1broker_1_1interface.html#ad9fdc700062968c1d07729f9029ccbe5", null ],
    [ "finish", "classcbdc_1_1parsec_1_1broker_1_1interface.html#a7235904aac4bdd596ec42c87e0dccead", null ],
    [ "highest_ticket", "classcbdc_1_1parsec_1_1broker_1_1interface.html#ab30610c08412d82856541a41e83e3d1b", null ],
    [ "operator=", "classcbdc_1_1parsec_1_1broker_1_1interface.html#a5f7eb0fd9d850f6a2665626cd5db4eed", null ],
    [ "operator=", "classcbdc_1_1parsec_1_1broker_1_1interface.html#ab824019d341f7d9006517e6774b8c29d", null ],
    [ "recover", "classcbdc_1_1parsec_1_1broker_1_1interface.html#a48ee1b5e2e173ad82cebdadfaaadce4f", null ],
    [ "rollback", "classcbdc_1_1parsec_1_1broker_1_1interface.html#a65cdf9ba8463b6a57db1a8c5ddf9f5fe", null ],
    [ "try_lock", "classcbdc_1_1parsec_1_1broker_1_1interface.html#a259a57d7fd65340a14e153a55b9530ea", null ]
];